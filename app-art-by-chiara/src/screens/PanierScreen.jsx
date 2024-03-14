import { useEffect, useState } from "react";
import TransitionPage from "../components/TransitionPage";
import { CartProvider, useCart } from "react-use-cart";
import "../css/style.css"; // Importer le fichier CSS pour les styles

export default function PanierScreen() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  const { cartTotal } = useCart();

  // Si le panier est vide, afficher un message
  if (isEmpty) {
    return (
      <div className="product-list-container empty-cart">
        <h1>Votre panier est vide</h1>
      </div>
    );
  }

  return (
    <CartProvider>
      <div className="product-list-container">
        <h1>Panier : {totalUniqueItems} {totalUniqueItems == 1 ? "article." : "articles."} <br></br>Vous en avez pour {cartTotal} €</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-details">
                <span className="cart-item-title">{item.title}</span>
                <br></br>
                <img className="cart-item-image" src={item.image}></img>
              </div>
              <div className="cart-item-actions">
              <span className="cart-item-quantity">
                  Quantité : {item.quantity}
                </span>
                <button
                  className="cart-btn"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  className="cart-btn"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="cart-btn cart-btn-remove"
                  onClick={() => removeItem(item.id)}
                >
                  <i className="fas fa-trash-alt"></i> Retirer
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CartProvider>
  );
}
