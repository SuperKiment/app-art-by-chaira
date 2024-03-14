import React, { useState, useEffect } from "react";
import "../css/style.css";

export default function getAllProducts() {
  const [loading, setLoading] = useState(true);
  const [produits, setProduits] = useState([]);
  const [recherche, setRecherche] = useState("");

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
      <input
        type="text"
        placeholder="Rechercher par Titre"
        onChange={(e) => setRecherche(e.target.value)}
        style={{ color: "black" }}
      />
      {loading ? (
        <div>
          <p>Chargement...</p>
        </div>
      ) : (
        <div className="product-list-container">
          <h1>Liste des produits</h1>
          {produits.map((produit) => (
            <div key={produit.id}>
              {recherche == "" || produit.title.includes(recherche) ? (
                <div className="product-item">
                  <h2>{produit.title}</h2>
                  <img src={produit.image} alt={produit.title} />
                  <p className="description">{produit.description}</p>
                  <p className="price">Prix : {produit.price} €</p>
                  <p>Taille : {produit.size}</p>
                  <p>Collection : {produit.collection}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
