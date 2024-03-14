import { NavLink } from "react-router-dom";
import "../css/style.css";

const Navbar = () => {
  const pages = [
    {
      path: "/liste",
      name: "Liste",
    },
    {
      path: "/panier",
      name: "Panier",
    },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <h1 style={{ fontSize: "40px", margin: "0" }}>Art By Chiara</h1>
        </li>
        {pages.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={link.special ? "special-link" : "lien"} // Appliquer une classe spéciale si l'élément est spécial
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
