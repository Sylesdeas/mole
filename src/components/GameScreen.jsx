import Field from "./Field";
import ScoreBoard from "./ScoreBoard";
import RestartButton from "./RestartButton";

export default function GameScreen() {
  return (
    <section className="panel">
      <div className="game-toolbar">
        <ScoreBoard />
        <RestartButton />
      </div>
      <Field />
    </section>
  );
}
