import React, { useState, useEffect } from "react";
import GetOneProduit from "../api.jsx";
import { useParams } from "react-router";

function OneProduitPage({ navigation, idProduit }) {
  const {id} = useParams()
  const [oneProduit, setOneProduit] = useState();

  useEffect(() => {
    GetOneProduit(id).then((rep) => {
      setOneProduit(rep);
    });
  }, []);
  console.log(oneProduit);

  return (
    <>
      <h1>{oneProduit != undefined ? oneProduit.title : "Loading"}</h1>
    </>
  );
}

export default OneProduitPage;
