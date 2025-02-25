"use client"
import React, { useState, useEffect } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Player from "video.js/dist/types/player";

interface MuteButtonProps {
  playerRef: React.RefObject<Player | null>;
}

const MuteButton = ({ playerRef }: MuteButtonProps) => {
  const [isMuted, setIsMuted] = useState<boolean>(true); // Make sure the state is always boolean

  // Update the mute state when the player is ready
  useEffect(() => {
    if (playerRef.current) {
      setIsMuted(playerRef.current.muted() || false); // Ensure isMuted is always a boolean
    }
  }, [playerRef]);

  // Toggle the mute state when the button is clicked
  const toggleMute = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (playerRef.current) {
      const newMuteState = !playerRef.current.muted();
      playerRef.current.muted(newMuteState);
      setIsMuted(newMuteState); // Ensure the mute state is a boolean
    }
  };

  const getVolumeIcon = () => {
    return isMuted ? <VolumeOffIcon sx={{ color: "white" }} /> : <VolumeUpIcon sx={{ color: "white" }} />;
  };

  return (
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
      {getVolumeIcon()}
    </button>
  );
};

export default MuteButton;
