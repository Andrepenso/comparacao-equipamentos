import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li>
          <NavLink to="/" style={styles.link}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/equipamentos" style={styles.link}>Equipamentos</NavLink>
        </li>
        <li>
          <NavLink to="/comparacao" style={styles.link}>Comparação</NavLink>
        </li>
        <li>
          <NavLink to="/calculo" style={styles.link}>Cálculo de Custo</NavLink> 
        </li>
      </ul>
    </nav>
  );
};

// Estilos inline para o menu
const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px",
    textAlign: "center",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  }
};

export default Navbar;
