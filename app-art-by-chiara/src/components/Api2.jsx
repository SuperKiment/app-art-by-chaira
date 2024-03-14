export default function getAllProducts() {
  const url = "https://65b907e2b71048505a8a06c0.mockapi.io/api/prints/";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Tri des données par ID dans l'ordre croissant
      data.sort((a, b) => a.id - b.id);

      // Utilisation des données triées
      console.log(data);
    })
    .catch((error) => console.error(error));
}
