"use client";

import React, { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import Hls from "hls.js";
import "plyr/dist/plyr.css";
import Image from "../Image";
import { GetCookiesValue } from "../../utils/cookie";

function checkLiveOrStage() {
  return "staging";
}

function modifyDrmUrl(url: string, bingeToken: string) {
  const search = new URL(url);
  const searchParam = search.searchParams.get("r");
  if (checkLiveOrStage() === "staging") {
    return `https://ss-staging.binge.buzz/binge-drm/secured?r=${searchParam}&drmtoken=${bingeToken}`;
  }
  return url;
}

async function drmCall(bingeToken: string, url: string) {
  const modifiedUrl = modifyDrmUrl(url, bingeToken);
  try {
    const response = await fetch(modifiedUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bingeToken}`,
      },
    });
    if (!response.ok) {
      console.error("DRM authentication failed", response.status);
    }
  } catch (error) {
    console.error("DRM request error", error);
  }
}

const checkValidSource = async (src: string): Promise<boolean> => {
  if (!src) {
    return false;
  }
  try {
    const res = await fetch(src, { method: "HEAD" });
    return res.ok;
  } catch (error) {
    return false;
  }
};

interface VideoPlayerProps {
  videoId: number;
  _hlsStreamUrl: string;
  isActive: boolean;
  redirectPath: string;
  initialTime: number;
  onTimeUpdate: (time: number) => void;
  path: string;
}

const VideoJSPlayer = ({
  videoId,
  _hlsStreamUrl,
  isActive,
  redirectPath,
  initialTime,
  onTimeUpdate,
  path,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Plyr | null>(null);

  const [isValid, setIsValid] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const bingeToken = GetCookiesValue("annonJwtToken", false);

  useEffect(() => {
    const fetchValidSource = async () => {
      const valid = await checkValidSource(_hlsStreamUrl);
      setTimeout(() => {
        setIsValid(valid);
      }, 1000);
    };
    fetchValidSource();
  }, [_hlsStreamUrl]);

  useEffect(() => {
    if (!isValid || !videoRef.current) return;

    const video = videoRef.current;
    const player = new Plyr(video, {
      autoplay: isActive,
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "fullscreen",
      ],
    });
    playerRef.current = player;

    if (Hls.isSupported()) {
      const hls = new Hls({
        xhrSetup: (xhr, url) => {
          if (url.includes("binge-drm")) {
            xhr.open("GET", modifyDrmUrl(url, bingeToken), true);
          }
          xhr.setRequestHeader("Authorization", `Bearer ${bingeToken}`);
        },
      });

      hls.loadSource(_hlsStreamUrl);
      hls.attachMedia(video);

      // video.oncanplay = () => {
      //   console.log("Video is ready to play! Setting isVideoReady = true");
      //   setIsReady(true);
      // };

      hls.on(Hls.Events.MANIFEST_PARSED, async () => {
        if (initialTime > 0) {
          player.currentTime = initialTime;
        }
        if (isActive) {
          try {
            await player.play();
            console.log("Autoplay started!");
          } catch (error) {
            console.warn("Autoplay blocked by browser", error);
          }
        }
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
          console.warn("HLS network error, retrying...");
          setTimeout(() => hls.loadSource(_hlsStreamUrl), 3000);
        }
      });
    }

    return () => {
      player.destroy();
    };
  }, [isValid, _hlsStreamUrl]);

  useEffect(() => {
    if (isActive && playerRef.current) {
      const playPromise = playerRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay blocked on hover", error);
        });
      }
    }
  }, [isActive]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {isValid ? (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <video
            ref={videoRef}
            crossOrigin="anonymous"
            className="plyr"
            muted
            style={{ width: "100%", minHeight: "280px", objectFit: "cover" }}
          />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default VideoJSPlayer;
