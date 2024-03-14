import { useEffect, useState } from "react";
import TransitionPage from "../components/TransitionPage";

export default () => {
  const [result, setResult] = useState("");

  return (
    <div>
      <h1>Home !</h1>
      <p>Coucouuuu c'est la maison</p>
      <a href="/one-produit/123456">Lien vers un produit "123456"</a>
    </div>
  );
};
