import WelcomeScreen from "./components/WelcomeScreen";
import GameScreen from "./components/GameScreen";
import { GameProvider, useGame } from "./context/GameContext";

function AppContent() {
  const { isPlaying } = useGame();

  return (
    <main className="app">
      <div className="app-shell">
        <h1>Whack-a-Mole</h1>
        {isPlaying ? <GameScreen /> : <WelcomeScreen />}
      </div>
    </main>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}
