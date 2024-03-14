import React, { useState, useEffect } from "react";
import GetOneProduit from "./api.jsx";

function OneProduitPage({ navigation, idProduit }) {
  const [oneProduit, setOneProduit] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetOneProduit(idProduit).then((rep) => {
      setOneProduit(rep);
      setLoading(true);
    });
  }, []);
  console.log(oneProduit);

  return (
    <div className="container">
      {loading == false ? (
        <div>
          <p>Chargement...</p>
        </div>
      ) : (
        <div className="one-product-container">
          <div className="image-container">
            <img src={oneProduit.image} alt={oneProduit.title} />
          </div>

          <div className="info-container">
            <h1>{oneProduit.title}</h1>
            <p>{oneProduit.description}</p>
            <p>Prix : {oneProduit.price} €</p>
            <p>Taille : {oneProduit.size}</p>
            <p>Collection : {oneProduit.collection}</p>

            <div>
              <button className="button">Ajouter à mon panier</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OneProduitPage;
