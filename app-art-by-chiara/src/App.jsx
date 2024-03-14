import "@fortawesome/fontawesome-free/css/all.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import PanierScreen from "./screens/PanierScreen";
import OneProduitScreen from "./screens/OneProduitScreen";
import ListeScreen from "./screens/ListeScreen";
import { AnimatePresence } from "framer-motion";
import TransitionPage from "./components/TransitionPage";
import { CartProvider } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
// import { AnimatePresence } from "framer-motion";

const Main = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route
          path="/panier"
          element={
            <TransitionPage>
              <PanierScreen />
            </TransitionPage>
          }
        ></Route>
        <Route
          path="/liste"
          element={
            <TransitionPage>
              <ListeScreen />
            </TransitionPage>
          }
        ></Route>
        <Route
          path="/one-produit/:id"
          element={<OneProduitScreen idProduit={"123456"} />}
        ></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <>
    <CartProvider>
      <Navigation />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <ToastContainer />
      <Main>

      </Main>
      </CartProvider>
    </>
  );
}
