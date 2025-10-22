import { StartGame } from "./Components/StartGame";
import { Routes, Route, Navigate } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { HistoryBoard } from "./Components/HistoryBoard";
import { EasyMode } from "./Components/ModesMemorama/EasyMode";
import { MediumMode } from "./Components/ModesMemorama/MediumMode";
import { HardMode } from "./Components/ModesMemorama/HardMode";

function App() {
  const [storage, setStorage] = useLocalStorage("history", []);

  return (
    <Routes>
      <Route path="/" element={<StartGame />} />
      <Route path="*" element={<Navigate to="/" />} />

      <Route path="/historial" element={<HistoryBoard storage={storage} />} />

      <Route path="/easy" element={<EasyMode setStorage={setStorage} />} />
      <Route path="/medium" element={<MediumMode setStorage={setStorage} />} />
      <Route path="/hard" element={<HardMode setStorage={setStorage} />} />
    </Routes>
  );
}

export default App;
