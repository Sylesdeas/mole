import { createContext, useContext, useState } from "react";

const NUM_HOLES = 9;

const GameContext = createContext(null);

function getRandomHole() {
  return Math.floor(Math.random() * NUM_HOLES);
}

function buildHoles(activeHole) {
  return Array.from({ length: NUM_HOLES }, (_, index) => index === activeHole);
}

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [activeHole, setActiveHole] = useState(getRandomHole);
  const [holes, setHoles] = useState(() => buildHoles(activeHole));

  function moveMole() {
    const nextHole = getRandomHole();
    setActiveHole(nextHole);
    setHoles(buildHoles(nextHole));
  }

  function startGame() {
    const nextHole = getRandomHole();
    setScore(0);
    setIsPlaying(true);
    setActiveHole(nextHole);
    setHoles(buildHoles(nextHole));
  }

  function whackMole(clickedHole) {
    if (clickedHole !== activeHole) {
      return;
    }

    setScore((currentScore) => currentScore + 1);
    moveMole();
  }

  function restartGame() {
    setIsPlaying(false);
  }

  return (
    <GameContext.Provider
      value={{
        holes,
        isPlaying,
        restartGame,
        score,
        startGame,
        whackMole,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }

  return context;
}
