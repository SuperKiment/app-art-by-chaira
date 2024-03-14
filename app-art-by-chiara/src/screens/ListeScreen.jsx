import React, { useState, useEffect } from "react";
import "../css/style.css";
import { CartProvider, useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function getAllProducts() {
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

  const addToCart = (produit) => {
    addItem(produit);
    toast.success(<p className="popup">Le produit a bien été ajouté au panier.</p>);
  };

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
                      <div className="two-column">
                        <a href={"/one-produit/" + produit.id}>
                          <span>
                            <i className="fas fa-eye"></i> Voir le produit
                          </span>
                        </a>
                        <a onClick={() => addToCart(produit)}>
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

export default getAllProducts;
