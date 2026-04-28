import { useGame } from "../context/GameContext";

export default function Hole({ hasMole, index }) {
  const { whackMole } = useGame();

  return (
    <li className="hole-wrap">
      <button
        type="button"
        className={`hole${hasMole ? " mole" : ""}`}
        onClick={() => hasMole && whackMole(index)}
        aria-label={
          hasMole ? `Mole in hole ${index + 1}` : `Empty hole ${index + 1}`
        }
      />
    </li>
  );
}
