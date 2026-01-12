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
      <div class="menu-container">
            <button type="button" onclick="window.location.href='game.html'" id="play">PLAY</button>
            <button type="button" onclick="window.location.href='host3.html'" id="host">HOST</button>
            <button type="button" onclick="window.location.href='stats.html'" id="stats">STATS</button>
            <button type="button" onclick="window.location.href='howtoplay.html'" id="howtoplay">HOW TO PLAY</button>
            <button type="button" onclick="window.location.href='login.html'" id="logio">LOGIN</button>
        </div>
      </FaultyTerminal>                              
</div>
  </React.StrictMode>,
  document.getElementById('root')
);

