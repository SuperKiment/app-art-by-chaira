import { useEffect, useState } from "react";
import TransitionPage from "../components/TransitionPage";

export default () => {
  const [result, setResult] = useState("");

  return (
    <TransitionPage>
      <div>
        <h1>Detail !</h1>
        <p>Coucouuuu c'est la maison</p>
      </div>
    </TransitionPage>
  );
};
