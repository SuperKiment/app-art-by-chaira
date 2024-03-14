import { useEffect, useState } from "react";
import TransitionPage from "../components/TransitionPage";
import { CartProvider, useCart } from "react-use-cart";


export default function PanierScreen(){
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  console.log(items)

  if (isEmpty) return (
    <div className="product-list-container">
      <h1>Votre panier est vide</h1>
      </div>);


  return (
    <CartProvider>
      <div className="product-list-container">
        <h1 >Panier :  ({totalUniqueItems}) articles. </h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.quantity} x {item.title} &mdash;
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                +
              </button>
              <button onClick={() => removeItem(item.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
      </CartProvider>
  );
}
