import { Box } from "@mui/material";
import React, { LegacyRef, useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Player from "video.js/dist/types/player";
import { GetCookiesValue } from "../utils/cookie";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

function checkLiveOrStage() {
  // const env =
  //   window.location.hostname === "pre.binge.buzz" ||
  //   window.location.hostname.includes("localhost")
  //     ? "staging"
  //     : "production";
  // return env;
  return "staging";
}

function drmCall(bingeToken: string) {
  //@ts-ignore
  videojs.Vhs.xhr.beforeRequest = (options) => {
    const modifiedOptions = { ...options };
    if (modifiedOptions.uri.startsWith("https://ss.binge.buzz/binge-drm")) {
      const search = new URL(options.uri);
      const searchParam = search.searchParams.get("r");
      if (checkLiveOrStage() === "staging") {
        modifiedOptions.uri = `https://ss-staging.binge.buzz/binge-drm/secured?r=${searchParam}&drmtoken=${bingeToken}`;
      }
      modifiedOptions.headers = modifiedOptions.headers || {};
      modifiedOptions.headers.Authorization = `Bearer ${bingeToken}`;
      videojs.xhr(
        {
          uri: modifiedOptions.uri,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${bingeToken}`,
          },
        },
        (err, resp) => {
          if (resp.statusCode === 429) {
            // handleCloseContentError();
          } else if (resp.statusCode === 401) {
            // handleUnauthorizedError();
          } else if (resp.statusCode !== 200) {
            // fireError();
          }
        }
      );
    }
    return modifiedOptions;
  };
}

const VideoJSPlayer = ({
  videoId,
  _hlsStreamUrl,
  isActive,
  redirectPath,
}: {
  videoId: number;
  _hlsStreamUrl: string;
  isActive: boolean;
  redirectPath: string;
}) => {
  const playerRef = useRef<Player | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayerReady = (player: Player | null) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player?.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player?.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  const toggleMute = () => {
    if (playerRef.current) {
      const newMuteState = !playerRef.current.muted();
      playerRef.current.muted(newMuteState);
      setIsMuted(newMuteState);
    }
  };

  const videoJsOptions = {
    autoplay: isActive,
    // muted: isActive,
    controls: false,
    responsive: true,
    fluid: true,
    experimentalSvgIcons: true,
    // playbackRates: [0.5, 1, 1.5, 2],
    // controlBar: {
    //   skipButtons: {
    //     forward: 10,
    //     backward: 10,
    //   },
    // },
    sources: [
      {
        src: _hlsStreamUrl,
        type: _hlsStreamUrl?.endsWith(".mpd")
          ? "application/dash+xml"
          : "application/x-mpegURL",
      },
    ],
  };

  const VideoPlayer = (props: { options: any; onReady: any }) => {
    const videoRef = useRef<HTMLElement | null>(null);
    const playerRef = useRef<Player | null>(null);
    const [playbackRate, setPlaybackRate] = useState(1);
    const { options, onReady } = props;

    const bingeToken = GetCookiesValue("annonJwtToken", false);

    useEffect(() => {
      if (!playerRef.current) {
        const videoElement = document.createElement("video-js");
        videoElement.setAttribute("crossorigin", "anonymous");

        videoElement.classList.add("vjs-big-play-centered");
        videoRef.current!.appendChild(videoElement);

        const player = ((playerRef.current as any) = videojs(
          videoElement,
          options,
          () => {
            videojs.log("player is ready");
            onReady && onReady(player);
            player.muted(true);
          }
        ));

        player.on("loadeddata", () => {
          console.log("Video.js has successfully loaded the video.");
        });

        player.on("loadstart", function (_e: any) {
          console.log("Video.js has started loading.");
          drmCall(bingeToken);
        });

        player.on("error", function (error: any) {
          console.error("Video js error", error);
          console.warn("Video.js encountered an error but will retry.");
          setTimeout(() => player.src(options.sources), 3000); // Retry after 3s
        });
      } else {
        const player = playerRef.current;

        (playerRef.current as Player).autoplay(options.autoplay);
        player.src(options.sources);
      }
    }, [options, videoRef]);

    useEffect(() => {
      if (playerRef.current) {
        playerRef?.current?.playbackRate(playbackRate);
      }
    }, [playbackRate]);

    useEffect(() => {
      const player = playerRef.current;

      return () => {
        if (player && !player.isDisposed()) {
          player.dispose();
          playerRef.current = null;
        }
      };
    }, [playerRef]);

    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div data-vjs-player style={{ width: "100%", height: "100%" }}>
          <div
            style={{ borderRadius: "16px" }}
            ref={videoRef as LegacyRef<HTMLDivElement> | undefined}
          />
        </div>

        {/* Custom Mute Button */}
        <button
          onClick={toggleMute}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            background: "rgba(0, 0, 0, 0.6)",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </button>
      </div>
    );
  };
  return (
    <div>
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
};

export default VideoJSPlayer;
