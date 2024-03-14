import { useEffect, useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import "../css/style.css"; // Importer le fichier CSS pour les styles

export default function PanierScreen() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

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
        <h1>
          Panier : {totalUniqueItems}{" "}
          {totalUniqueItems === 1 ? "article." : "articles."} <br></br>Vous en
          avez pour {cartTotal} €
        </h1>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.title}
              />

              <div className="cart-item-actions">
                <p className="cart-item-title">{item.title}</p>
              </div>
              <div className="cart-item-details">
                <span className="cart-item-quantity">
                  Quantité : {item.quantity}
                </span>
                <p className="cart-item-price">{item.price} €</p>

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
