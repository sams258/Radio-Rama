"use client";

import React, { useEffect, useState } from "react";
import "./NowPlaying.css";

const NowPlaying = () => {
  const [songTitle, setSongTitle] = useState("Loading...");

  useEffect(() => {
    const fetchStreamData = async () => {
      try {
        // Fetch from our new internal API route
        const response = await fetch("/api/stream-info");
        const result = await response.json();

        // Centova Cast usually puts the song in data.data[0].song
        if (result.data && result.data[0] && result.data[0].song) {
          setSongTitle(result.data[0].song);
        } else {
          // Fallback if data structure is different
          console.log("Unexpected data structure:", result);
          setSongTitle("Live Radio");
        }
      } catch (error) {
        console.error("Error loading stream info:", error);
        setSongTitle("Live Radio");
      }
    };

    // Initial fetch
    fetchStreamData();

    // Refresh every 10 seconds
    const interval = setInterval(fetchStreamData, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="cc_streaminfo" data-type="song" data-username="radiorama">
      {songTitle}
    </span>
  );
};

export default NowPlaying;
