"use client";
import React from "react";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  return (
    <audio controls className="App-audio">
      <source
        src="https://radiorama-lbnet2.radioca.st/rama?type=http&amp;nocache=91"
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
