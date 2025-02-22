import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Equipamentos from "./pages/Equipamentos";
import Comparacao from "./pages/Comparacao";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/equipamentos">Equipamentos</Link> | 
        <Link to="/comparacao">Comparação</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipamentos" element={<Equipamentos />} />
        <Route path="/comparacao" element={<Comparacao />} />
      </Routes>
    </Router>
  );
}

export default App;
