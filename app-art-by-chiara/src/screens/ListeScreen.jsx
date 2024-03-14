import React, { useState, useEffect } from "react";
import "../css/style.css";
import PanierScreen from "./PanierScreen";
import { CartProvider, useCart } from "react-use-cart";

export default function getAllProducts() {
  const { addItem } = useCart();
  const [loading, setLoading] = useState(true);
  const [produits, setProduits] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [tri, setTri] = useState("Croissant");

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

  const trierValue = (e) => {
    setTri(e.target.value);
  };

  const sortedProduits = produits.sort((a, b) => {
    if (tri === "Croissant") {
      return a.id.localeCompare(b.id);
    } else {
      if (tri === "NameAlphabetique") {
        return a.title.localeCompare(b.title);
      } else {
        return b.id.localeCompare(a.id);
      }
    }
  });

  return (
    <div>
      {loading ? (
        <div>
          <p>Chargement...</p>
        </div>
      ) : (
        <CartProvider>
          <div className="product-list-container" align="center">
            <h1>Liste des Œuvres</h1>
            <div className="flex-container">
              <input
                type="text"
                placeholder="Rechercher par Titre"
                onChange={(e) => setRecherche(e.target.value)}
                className="input-text"
              />
              <select value={tri} onChange={trierValue}>
                <option value="Croissant">Par prix (croissant)</option>
                <option value="Décroissant">Par prix (décroissant)</option>
                <option value="NameAlphabetique">
                  Par ordre alphabétique des noms
                </option>
              </select>
            </div>
            <div className="product-list">
              {sortedProduits.map((produit) => (
                <div key={produit.id} className="product-item">
                  {recherche == "" ||
                  produit.title
                    .toLowerCase()
                    .includes(recherche.toLowerCase()) ? (
                    <>
                      <h2>{produit.title}</h2>
                      <img src={produit.image} alt={produit.title} />
                      <p className="price">Prix : {produit.price} €</p>
                      <div className="two-column">
                        <a href={"/one-produit/" + produit.id}>
                          <span>
                            <i className="fas fa-eye"></i> Voir le produit
                          </span>
                        </a>
                        <a onClick={() => addItem(produit)}>
                          <span>
                            <i className="fas fa-shopping-cart"></i> Ajouter au
                            panier
                          </span>
                        </a>
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
