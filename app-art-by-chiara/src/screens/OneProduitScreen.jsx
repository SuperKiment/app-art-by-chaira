import React, { useState, useEffect } from "react";
import GetOneProduit from "../components/api.jsx";
import { useParams } from "react-router";

function OneProduitPage({ navigation, idProduit }) {
  const { id } = useParams();
  const [oneProduit, setOneProduit] = useState();

  useEffect(() => {
    GetOneProduit(id).then((rep) => {
      setOneProduit(rep);
    });
  }, []);
  console.log("produit :", oneProduit);

  return (
    <>
      <div className="container">
        {!oneProduit ? (
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
                <a className="button">Ajouter à mon panier</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default OneProduitPage;
