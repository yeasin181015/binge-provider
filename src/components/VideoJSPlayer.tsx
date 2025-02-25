"use client";
import Image from "./Image";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import MuteButton from "./VolumeButton";
import Player from "video.js/dist/types/player";
import { GetCookiesValue } from "../utils/cookie";
import React, { LegacyRef, useEffect, useRef, useState } from "react";

function checkLiveOrStage() {
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

const checkValidSource = async (src: string): Promise<boolean> => {
  if (!src) {
    console.log("Source URL is invalid or missing.");
    return false;
  }
  try {
    const res = await fetch(src, { method: "HEAD" });
    console.log(res, "fetch response");
    return res.ok;
  } catch (error) {
    console.error("Error checking source", error);
    return false;
  }
};

const VideoJSPlayer = ({
  videoId,
  _hlsStreamUrl,
  isActive,
  redirectPath,
  initialTime,
  onTimeUpdate,
  path,
}: {
  initialTime: number;
  onTimeUpdate: (time: any) => void;
  videoId: number;
  _hlsStreamUrl: string;
  isActive: boolean;
  redirectPath: string;
  path: string;
}) => {
  const playerRef = useRef<Player | null>(null);

  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    console.log(_hlsStreamUrl, "streamUrl");
    const fetchValidSource = async () => {
      const valid = await checkValidSource(_hlsStreamUrl);
      setIsValid(valid); // Update state with the result
    };

    fetchValidSource();
  }, [_hlsStreamUrl]);

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

  useEffect(() => {
    if (playerRef.current && initialTime > 0) {
      playerRef.current.currentTime(initialTime);
    }
  }, [initialTime]);

  const VideoPlayer = (props: {
    options: any;
    onReady: any;
    isValid: boolean;
  }) => {
    const videoRef = useRef<HTMLElement | null>(null);
    const playerRef = useRef<Player | null>(null);
    const [playbackRate, setPlaybackRate] = useState(1);
    const { options, onReady } = props;
    // const [isValidSource, setIsValidSource] = useState<boolean | null>(null);

    const bingeToken = GetCookiesValue("annonJwtToken", false);

    useEffect(() => {
      if (!isValid || typeof window === "undefined") return;

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
        player.on("loadstart", function (_e: any) {
          drmCall(bingeToken);
        });
        player.on("error", function () {
          console.warn("Video.js encountered an error but will retry.");
          setTimeout(() => player.src(options.sources), 3000); // Retry after 3s
        });
      } else {
        const player = playerRef.current;

        (playerRef.current as Player).autoplay(options.autoplay);
        player.src(options.sources);
      }
    }, [options, videoRef, isValid]);

    useEffect(() => {
      if (typeof window !== "undefined") {
        if (playerRef.current) {
          playerRef?.current?.playbackRate(playbackRate);
        }
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
      <>
        {isValid ? (
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div data-vjs-player style={{ width: "100%", height: "100%" }}>
              <div ref={videoRef as LegacyRef<HTMLDivElement> | undefined} />
            </div>{" "}
            <MuteButton playerRef={playerRef} />
          </div>
        ) : (
          <div>
            <Image
              path={path}
              sx={{
                borderRadius: "16px",
                width: "100%",
                aspectRatio: "16/9",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </div>
        )}
      </>
    );
  };

  return (
    <div>
      <VideoPlayer
        options={videoJsOptions}
        onReady={handlePlayerReady}
        isValid={isValid}
      />
    </div>
  );
};

export default VideoJSPlayer;
