// 🌟 Exercise 1: Giphy API

// URL de l'API Giphy avec les paramètres requis
const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Fonction principale pour récupérer et afficher les données
fetch(url)
  .then(response => {
    // Vérifie si la requête a réussi
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    // Convertit la réponse en JSON
    return response.json();
  })
  .then(data => {
    // Affiche l'objet complet dans la console
    console.log("Résultat de la requête Giphy :", data);
  })
  .catch(error => {
    // Gère les erreurs éventuelles
    console.error("Erreur lors de la récupération des données Giphy :", error);
  });
// 🌟 Exercise 2: Giphy API

// URL avec les bons paramètres :
// q = "sun" → recherche "sun"
// limit = 10 → retourne 10 GIFs
// offset = 2 → commence à la position 2
// rating = "g" → filtre les GIFs de niveau approprié
// api_key = clé publique fournie
const url = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Requête avec Fetch API
fetch(url)
  .then(response => {
    // Vérifie que la réponse est correcte
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    // Convertit la réponse en JSON
    return response.json();
  })
  .then(data => {
    // Affiche l'objet complet dans la console
    console.log("Résultat de la recherche 'sun' :", data);
  })
  .catch(error => {
    // Capture et affiche toute erreur
    console.error("Erreur lors de la récupération des GIFs :", error);
  });
// 🌟 Exercise 3: Async function — Fetch Star Wars API data without .then()

async function getStarship() {
  const url = "https://www.swapi.tech/api/starships/9/";

  try {
    // envoi de la requête
    const response = await fetch(url);

    // vérification du statut de la réponse
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // conversion du corps de la réponse en JSON
    const data = await response.json();

    // affichage du résultat dans la console
    console.log(data.result);

  } catch (error) {
    // gestion d'erreurs réseau ou HTTP
    console.error("Error fetching Star Wars data:", error);
  }
}

// appel de la fonction asynchrone
getStarship();




//exrcice 4
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
