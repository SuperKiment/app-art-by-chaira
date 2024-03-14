import React, { useState, useEffect } from "react";
import "../css/style.css";

export default function getAllProducts() {
  const [loading, setLoading] = useState(true);
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const url = "https://65b907e2b71048505a8a06c0.mockapi.io/api/prints/";

    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduits(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <p>Chargement...</p>
        </div>
      ) : (
        <div className="product-list-container">
          <h1>Liste des Œuvres</h1>
          <div className="product-list">
          {produits.map((produit) => (
            <div key={produit.id} className="product-item">
              <h2>{produit.title}</h2>
              <img src={produit.image} alt={produit.title} />
              <p className="price">Prix : {produit.price} €</p>
              <a className="aToSee" href={"/one-produit/"+produit.id}>Voir le produit</a>
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
}
