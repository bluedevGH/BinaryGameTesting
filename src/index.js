import React from 'react';
import ReactDOM from 'react-dom';
import FaultyTerminal from './App';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position:'relative'}}>
  <FaultyTerminal
    scale={0.5}
    digitSize={2.7}
    scanlineIntensity={0.4}
    glitchAmount={2.5}
    flickerAmount={1.6}
    noiseAmp={0.3}
    chromaticAberration={0.05}
    dither={0}
    curvature={0.55}
    tint="#3e62ff"
    mouseReact
    mouseStrength={0.2}
    brightness={1}
    >
    

      
      
      </FaultyTerminal>                              
</div>
  </React.StrictMode>,
  document.getElementById('root')
);

const playButton = document.createElement("Button")
playButton.parentElement = document.getElementsByClassName("menu-container")
playButton.id = "play";
playButton.onclick = window.location.assign("game.html");
playButton.innerHTML = "PLAY;"

const hostButton = document.createElement("Button")
hostButton.parentElement = document.getElementsByClassName("menu-container")
hostButton.id = "host";
hostButton.onclick = window.location.assign("host.html");
hostButton.innerHTML = "PLAY";

const statsButton = document.createElement("Button")
statsButton.parentElement = document.getElementsByClassName("menu-container")
statsButton.id = "stats";
statsButton.onclick = window.location.assign("stats.html")
statsButton.innerHTML = "HOST";

const howtoButton = document.createElement("Button")
howtoButton.parentElement = document.getElementsByClassName("menu-container")
howtoButton.id = "howtoplay";
howtoButton.onclick = window.location.assign("howtoplay.html");
howtoButton.innerHTML = "HOW TO PLAY";

const loginButton = document.createElement("button")
loginButton.parentElement = document.getElementsByClassName("menu-container")
loginButton.id = "logio";
loginButton.onclick = window.location.assign("login.html")
loginButton.innerHTML = "LOGIN";
