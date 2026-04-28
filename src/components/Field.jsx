// export default function Field() {
//   const NUM_HOLES = 9;
//   const newField = Array(NUM_HOLES).fill(false);

//   // Pick a random index for the mole
//   let mole = Math.floor(Math.random() * NUM_HOLES);
//   newField[mole] = true;

//   return (
//     <ul className="field">
//       {newField.map((hasMole, i) => (
//         <li key={i} className={`hole${hasMole ? " mole" : ""}`}></li>
//       ))}
//     </ul>
//   );
// }
import Hole from "./Hole";
import { useGame } from "../context/GameContext";

export default function Field() {
  const { holes } = useGame();

  return (
    <ul className="field" aria-label="Whack-a-Mole field">
      {holes.map((hasMole, index) => (
        <Hole key={index} hasMole={hasMole} index={index} />
      ))}
    </ul>
  );
}
