import React, { useState, useEffect } from "react";
import GetOneProduit from "./api.jsx";

function OneProduitPage({ navigation, idProduit }) {
  const [oneProduit, setOneProduit] = useState();

  useEffect(() => {
    GetOneProduit(idProduit).then((rep) => {
      setOneProduit(rep);
    });
  }, []);
  console.log(oneProduit);

  return (
    <>
      <h1>Coucoucou</h1>
    </>
  );
}

export default OneProduitPage;
