import { Route, Routes } from "react-router-dom";
import Dummy from "./pages/Dummy";

function App() {
  return (
    <Routes>
      <Route path="/dummy" element={<Dummy />} />
    </Routes>
  );
}

export default App;
