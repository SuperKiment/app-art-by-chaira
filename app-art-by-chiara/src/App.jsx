
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
import OneProduitPage from "./screens/OneProduitScreen";
// import { AnimatePresence } from "framer-motion";

const Main = () => {
  const location = useLocation();
  return (
    //<AnimatePresence mode="wait">
    <Routes location={location} key={location.key}>
      <Route path="/" element={<HomeScreen />}></Route>
      <Route path="/panier" element={<PanierScreen />}></Route>
      <Route path="/detail-produit" element={<DetailProduitScreen />}></Route>
      <Route path="/one-produit/:id" element={<OneProduitPage idProduit={"123456"} />}></Route>
    </Routes>
    //</AnimatePresence>
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
