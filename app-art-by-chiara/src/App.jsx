/*
function App() {
  const [count, setCount] = useState(0);
  const [oneProduit, setOneProduit] = useState();

  useEffect(() => {
    GetOneProduit("123456").then((rep) => {
      setOneProduit(rep);
    });
  }, []);

  console.log(oneProduit);
}
*/

import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomeScreen from "./screens/HomeScreen";
import DetailProduitScreen from "./screens/DetailProduitScreen";
import PanierScreen from "./screens/PanierScreen";
import OneProduitScreen from "./screens/OneProduitScreen";
import ListeScreen from "./screens/ListeScreen";
import { AnimatePresence } from "framer-motion";
import TransitionPage from "./components/TransitionPage";

const Main = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route
          path="/"
          element={
            <TransitionPage>
              <HomeScreen />
            </TransitionPage>
          }
        ></Route>
        <Route
          path="/panier"
          element={
            <TransitionPage>
              <PanierScreen />
            </TransitionPage>
          }
        ></Route>
        <Route
          path="/detail-produit"
          element={
            <TransitionPage>
              <DetailProduitScreen />
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
      <Navigation />
      <Main></Main>
    </>
  );
}
