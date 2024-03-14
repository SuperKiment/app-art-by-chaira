export default function GetOneProduit(idProduit) {
  console.log(idProduit);
  const url =
    "https://65b907e2b71048505a8a06c0.mockapi.io/api/prints/" + idProduit;

  console.log("url : ", url);
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
