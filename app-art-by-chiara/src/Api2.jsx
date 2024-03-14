import React from "react";

export default function getAllProducts() {

  const url =
    "https://65b907e2b71048505a8a06c0.mockapi.io/api/prints/";

  const produits = fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
    //console.log(produits.PromiseResult)
}   