import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductList from './liste_produits.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* Pour afficher la liste des produits */}
    <ProductList />
  </React.StrictMode>,
)
