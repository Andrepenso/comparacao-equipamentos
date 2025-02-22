import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Importando o Navbar
import Home from "./pages/Home";
import Equipamentos from "./pages/Equipamentos";
import Comparacao from "./pages/Comparacao";
import CalculoCusto from "./pages/CalculoCusto"; // Importando a nova página

function App() {
  return (
    <Router>
      <Navbar /> {/* O Navbar fica aqui antes do Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipamentos" element={<Equipamentos />} />
        <Route path="/comparacao" element={<Comparacao />} />
        <Route path="/calculo" element={<CalculoCusto />} /> {/* Rota do cálculo */}
      </Routes>
    </Router>
  );
}

export default App;
