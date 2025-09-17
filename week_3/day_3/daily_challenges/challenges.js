// ====== Daily Challenge 1
// 1. Définir les planètes et leurs lunes
const allPlanets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "yellow", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "orange", moons: 79 },
  { name: "Saturn", color: "goldenrod", moons: 82 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 }
];

// 2. Sélectionner la section
const section = document.querySelector(".listPlanets");

// 3. Créer les planètes
allPlanets.forEach(planet => {
  // Création du div planète
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

  // 4. Créer les lunes
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");
    // positionner les lunes autour
    moon.style.left = `${120 + i * 35}px`;
    moon.style.top = `${Math.random() * 80}px`;
    planetDiv.appendChild(moon);
  }

  // 5. Ajouter la planète à la section
  section.appendChild(planetDiv);
});

// ====== Daily Challenge 2

// ====== Daily Challenge 3
