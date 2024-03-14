import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GetAllProducts from './liste_produits' // Renommer le composant à utiliser PascalCase

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GetAllProducts /> {/* Utiliser PascalCase pour le nom du composant */}
    </>
  )
}

export default App
