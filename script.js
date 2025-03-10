document.addEventListener('DOMContentLoaded', async () => {
  const descriptionInput = document.getElementById('description');
  const generateBtn = document.getElementById('generate-btn');
  const brandNameEl = document.getElementById('brandName');
  const sloganEl = document.getElementById('slogan');

  // Tableaux par défaut
  let adjectives = ["Nova", "Tech", "Prime", "Ultra", "Neo", "Eco", "Bright", "Smart"];
  let nouns = ["Solutions", "Systems", "Innovations", "Concepts", "Dynamics", "Creations", "Works", "Labs"];
  let slogans = [
    "Révolutionnez votre monde.",
    "L'innovation à portée de main.",
    "Votre futur commence ici.",
    "Transformez vos idées en réalité.",
    "Simplicité, efficacité, excellence.",
    "Créez, innovez, inspirez."
  ];

  /**
   * Fonction pour charger un dictionnaire externe depuis un fichier JSON.
   * @param {string} url - L'URL du fichier JSON.
   * @returns {Promise<Array|null>} - Retourne le tableau chargé ou null en cas d'erreur.
   */
  async function loadDictionary(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erreur lors du chargement du dictionnaire : ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur de chargement:", error);
      return null;
    }
  }

  // Charger les dictionnaires externes si disponibles
  const loadedAdjectives = await loadDictionary('Dictionary/adjectives.json');
  const loadedNouns = await loadDictionary('Dictionary/nouns.json');
  const loadedSlogans = await loadDictionary('Dictionary/slogans.json');

  if (loadedAdjectives) {
    adjectives = loadedAdjectives;
  }
  if (loadedNouns) {
    nouns = loadedNouns;
  }
  if (loadedSlogans) {
    slogans = loadedSlogans;
  }

  generateBtn.addEventListener('click', () => {
    const description = descriptionInput.value.trim();
    if (!description) {
      alert("Veuillez entrer une description.");
      return;
    }

    // Ici, on ne s'appuie pas directement sur la description,
    // mais vous pouvez étendre la logique pour analyser le texte fourni.
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const brandName = randomAdjective + randomNoun;

    const randomSlogan = slogans[Math.floor(Math.random() * slogans.length)];

    // Affichage du résultat
    brandNameEl.textContent = brandName;
    sloganEl.textContent = randomSlogan;
  });
});
