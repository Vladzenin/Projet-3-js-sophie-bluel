// Récupérer les travaux depuis l'API
async function getWorks() {
  const response = await fetch('http://localhost:5678/api/works');
  const data = await response.json();
  return data;
}

// Afficher les travaux dynamiquement
async function renderWorks() {
  // Récupérer les données depuis l'API
  const works = await getWorks();

  // Sélectionner le conteneur où seront affichés les travaux
  const container = document.querySelector('.gallery');

  // Boucle à travers les travaux pour créer les éléments HTML
  works.forEach((work) => {
    const workElement = document.createElement('figure');
    // Ajoutez l'attribut category-id correspondant à la catégorie du travail
    workElement.setAttribute('category-id', work.categoryId);

    // Créez des éléments HTML pour afficher les détails du travail
    const imageElement = document.createElement('img');
    imageElement.src = work.imageUrl;
    
    const titleElement = document.createElement('figcaption');
    titleElement.textContent = work.title;

    // Ajoutez les éléments au conteneur
    workElement.appendChild(imageElement);
    workElement.appendChild(titleElement);
    container.appendChild(workElement);
  });
}

// Appelez la fonction pour afficher les travaux dynamiquement
renderWorks();
