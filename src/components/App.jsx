"use client";
import React from "react";
import "./App.css";
import Logo from "./Logo.jsx";
import Title from "./Title.jsx";
import AudioPlayer from "./AudioPlayer.jsx";
import NowPlaying from "./NowPlaying.jsx";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Card">
          <Logo />
          <Title />
          <h3>On Air:</h3>
          <NowPlaying />                    
          <AudioPlayer />
        </div>
      </header>
    </div>
  );
};

export default App;
