import React, { useState, useEffect } from "react";
import "../css/style.css";
import PanierScreen from "./PanierScreen";
import { CartProvider, useCart } from "react-use-cart";

export default function getAllProducts() {
  const { addItem } = useCart();
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
      {loading ? (
        <div>
          <p>Chargement...</p>
        </div>
      ) : (
        <CartProvider>
          <div className="product-list-container" align="center">
            <input
              type="text"
              placeholder="Rechercher par Titre"
              onChange={(e) => setRecherche(e.target.value)}
              className="input-text"
            />
            <h1>Liste des Œuvres</h1>
            <div className="product-list">
              {produits.map((produit) => (
                <div key={produit.id} className="product-item">
                  {recherche == "" ||
                  produit.title
                    .toLowerCase()
                    .includes(recherche.toLowerCase()) ? (
                    <>
                      <h2>{produit.title}</h2>
                      <img src={produit.image} alt={produit.title} />
                      <p className="price">Prix : {produit.price} €</p>
                      <p>Taille : {produit.size}</p>
                      <p>Collection : {produit.collection}</p>
                      <div className="two-column">
                        <a
                          className="aToSee"
                          href={"/one-produit/" + produit.id}
                        >
                          <i className="fas fa-eye"></i> Voir le produit
                        </a>
                        <button
                          className="btn-add-to-cart"
                          onClick={() => addItem(produit)}
                        >
                          <i class="fas fa-shopping-cart"></i> Ajouter au panier
                        </button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>{" "}
          </div>
        </CartProvider>
      )}
    </div>
  );
}
