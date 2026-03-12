import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import Profilo from "./pages/Profilo";
import Error404 from "./pages/Error404";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/Profilo" element={<Profilo />} />
        </Route>
        {/* Rotta 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
