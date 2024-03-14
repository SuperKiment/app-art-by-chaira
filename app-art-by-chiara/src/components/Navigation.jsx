import { NavLink } from "react-router-dom";

export default () => {
  const pages = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/panier",
      name: "Panier",
    },
    {
      path: "/detail-produit",
      name: "Detail Produit",
    },
  ];

  return (
    <nav>
      <ul>
        {pages.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={
                "link" +
                (location.pathname == link.path ? " " + "link-page" : "")
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
