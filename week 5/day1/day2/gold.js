// 🌟 Exercise 1: Giphy API #2
// Objectif : récupérer un GIF aléatoire et l'afficher dans la page

async function fetchRandomGif() {
  const url = "https://api.giphy.com/v1/gifs/search?q=funny&limit=25&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

  try {
    const response = await fetch(url);

    // Vérifier si la requête est correcte
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    // Convertir en JSON
    const data = await response.json();

    // Choisir un GIF aléatoire parmi ceux reçus
    const gifs = data.data;
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const randomGif = gifs[randomIndex];

    // Récupérer l’URL du GIF (format standard)
    const gifUrl = randomGif.images.original.url;

    // Créer un élément image et l’ajouter à la page
    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = randomGif.title || "Random GIF";
    img.style.width = "300px";
    img.style.borderRadius = "10px";
    img.style.display = "block";
    img.style.margin = "20px auto";

    document.body.appendChild(img);
    console.log("GIF ajouté à la page :", gifUrl);

  } catch (error) {
    console.error("Erreur lors de la récupération du GIF :", error);
  }
}

// Appeler la fonction
fetchRandomGif();

// 🌟 Exercise 2 : Analyze #2
// Analyse du comportement séquentiel avec async/await

let resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

let sequentialStart = async function () {
  console.log("==SEQUENTIAL START==");
  const slow = await resolveAfter2Seconds();  // attend 2s avant de continuer
  console.log(slow);
  const fast = await resolveAfter1Second();   // attend encore 1s
  console.log(fast);
};

sequentialStart();

// ---- Résultat console ----
// ==SEQUENTIAL START==
// starting slow promise
// slow promise is done
// slow
// starting fast promise
// fast promise is done
// fast
// (→ exécution séquentielle : total ~3 secondes)


// 🌟 Exercise 3 : Analyze #3
// Analyse du comportement concurrentiel avec async/await

let concurrentStart = async function () {
  console.log("==CONCURRENT START with await==");
  const slow = resolveAfter2Seconds();  // démarre immédiatement
  const fast = resolveAfter1Second();   // démarre en parallèle
  console.log(await slow);              // attend que le plus lent finisse
  console.log(await fast);              // attend le rapide (déjà terminé)
};

setTimeout(concurrentStart, 4000);

// ---- Résultat console ----
// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise
// fast promise is done
// slow promise is done
// slow
// fast
// (→ exécution concurrente : total ~2 secondes)


// 🌟 Exercise 4 : Modify fetch with Async/Await
// Objectif : supprimer les .then() et ajouter try/catch pour gérer les erreurs

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function () {
  try {
    // utilisation de async/await à la place de .then()
    const responses = await Promise.all(urls.map(async url => {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error(`HTTP Error ${resp.status}`);
      return await resp.json();
    }));

    const [users, posts, albums] = responses;

    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);

  } catch (error) {
    console.log("ooooooops", error.message);
  }
};

getData();

// ---- Résultat attendu ----
// users [...] (tableau d'utilisateurs)
// posts [...] (tableau de posts)
// albums [...] (tableau d'albums)
//
// Si l’une des URLs est fausse → "ooooooops" + message d’erreur
