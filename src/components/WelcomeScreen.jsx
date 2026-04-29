import { useGame } from "../context/GameContext";

export default function WelcomeScreen() {
  const { startGame } = useGame();

  return (
    <section className="panel welcome-screen">
      <p className="intro">
        Click the mole to score a point. Every hit sends it to a new random
        hole.
      </p>
      <p className="intro">
        Press restart anytime to head back here and play again.
      </p>
      <button type="button" className="action-button" onClick={startGame}>
        Play
      </button>
    </section>
  );
}
