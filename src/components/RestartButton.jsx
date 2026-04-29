import { useGame } from "../context/GameContext";

export default function RestartButton() {
  const { restartGame } = useGame();

  return (
    <button
      type="button"
      className="action-button secondary"
      onClick={restartGame}
    >
      Restart
    </button>
  );
}
