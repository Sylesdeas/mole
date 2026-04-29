import { useGame } from "../context/GameContext";

export default function ScoreBoard() {
  const { score } = useGame();

  return <p className="score">Score: {score}</p>;
}
