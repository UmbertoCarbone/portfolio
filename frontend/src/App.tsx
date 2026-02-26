import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import Profilo from "./pages/Profilo"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/Profilo" element={<Profilo/>} />
          {/* Aggiungi altre rotte qui */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
