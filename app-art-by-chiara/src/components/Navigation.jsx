import { NavLink } from "react-router-dom";
import "../css/style.css";

const Navbar = () => {
  const pages = [
    {
      path: "/",
      name: "Arts By Chiara",
      special: true, // Ajouter un indicateur pour l'élément spécial
    },
    {
      path: "/",
      name: "Home",
    },
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
