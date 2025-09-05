import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0.5);

  const playSound = (id, name) => {
    const sound = document.getElementById(id);
    if (!sound) return;
    sound.currentTime = 0;
    sound.volume = volume; // apply volume
    sound.play();
    setDisplay(name || id);
  };

  useEffect(() => {
    const sounds = {
      Q: "Heater-1",
      W: "Heater-2",
      E: "Heater-3",
      A: "Heater-4",
      S: "Clap",
      D: "Open-HH",
      Z: "Kick-n'-Hat",
      X: "Kick",
      C: "Closed-HH",
    };

    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
      if (sounds[key]) {
        playSound(key, sounds[key]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [volume]);

  return (
    <main id="drum-machine">
      <p>Drum Machine</p>
      <div id="content-wrapper">
        <section id="pad-wrapper">
          <aside className="pad-row">
            <button
              id="Heater-1"
              className="drum-pad"
              onClick={(e) => playSound("Q", e.currentTarget.id)}
            >
              Q
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
                className="clip"
                id="Q"
              />
            </button>
            <button
              id="Heater-2"
              className="drum-pad"
              onClick={(e) => playSound("W", e.currentTarget.id)}
            >
              W
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
                className="clip"
                id="W"
              />
            </button>
            <button
              id="Heater-3"
              className="drum-pad"
              onClick={(e) => playSound("E", e.currentTarget.id)}
            >
              E
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
                className="clip"
                id="E"
              />
            </button>
          </aside>
          <aside className="pad-row">
            <button
              id="Heater-4"
              className="drum-pad"
              onClick={(e) => playSound("A", e.currentTarget.id)}
            >
              A
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
                className="clip"
                id="A"
              />
            </button>
            <button
              id="Clap"
              className="drum-pad"
              onClick={(e) => playSound("S", e.currentTarget.id)}
            >
              S
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
                className="clip"
                id="S"
              />
            </button>
            <button
              id="Open-HH"
              className="drum-pad"
              onClick={(e) => playSound("D", e.currentTarget.id)}
            >
              D
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
                className="clip"
                id="D"
              />
            </button>
          </aside>
          <aside className="pad-row">
            {" "}
            <button
              id="Kick-n'-Hat"
              className="drum-pad"
              onClick={(e) => playSound("Z", e.currentTarget.id)}
            >
              Z
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
                className="clip"
                id="Z"
              />
            </button>
            <button
              id="Kick"
              className="drum-pad"
              onClick={(e) => playSound("X", e.currentTarget.id)}
            >
              X
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
                className="clip"
                id="X"
              />
            </button>
            <button
              id="Closed-HH"
              className="drum-pad"
              onClick={(e) => playSound("C", e.currentTarget.id)}
            >
              C
              <audio
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
                className="clip"
                id="C"
              />
            </button>
          </aside>
        </section>
        <section id="display">
          <p>{display}</p>
          <aside id="controls">
            <input
              id="volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => {
                setVolume(Number(e.target.value));
                setDisplay(`Volume: ${Math.round(e.target.value * 100)}`);
              }}
            />
          </aside>
        </section>
      </div>
    </main>
  );
}

export default App;
