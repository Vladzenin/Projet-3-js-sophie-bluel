// Fonction pour récupérer les catégories depuis l'API
async function getCategories() {
    try {
        const response = await fetch('http://localhost:5678/api/categories');
        if (!response.ok) {
            throw new Error("La réponse du réseau n'était pas correcte.");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        // Erreur
        console.error("Une erreur est survenue lors de la récupération des catégories:", error);
        return [];
    }
}

//Création des boutons de la filter bar
async function renderFilterBar() {
    // Récupérez les catégories depuis l'API
    const categories = await getCategories();
    // Sélectionnez le conteneur des boutons de filtrage
    const filterBar = document.querySelector('.filter-bar');
    // Créez un bouton "Tous" et ajoutez-le à la barre de filtre
    const allButton = document.createElement('button');
    allButton.className = 'filter-button';
    allButton.textContent = 'Tous';
    allButton.value = '0';
    allButton.addEventListener('click', filterWorks);
    filterBar.appendChild(allButton);

    // Créez un bouton pour chaque catégorie
    categories.forEach((category) => {
        const button = document.createElement('button');
        button.className = 'filter-button';
        button.textContent = category.name;
        button.value = category.id;
        // Ajoutez un écouteur d'événements pour le filtrage des travaux
        button.addEventListener('click', filterWorks);
        // Ajoutez le bouton au conteneur
        filterBar.appendChild(button);
    });
}

// Appellez la fonction pour créer les boutons de filtrage
renderFilterBar();

// Filtrer les travaux en fonction de la catégorie
function filterWorks(event) {
    const categoryId = event.target.value;
    const works = document.querySelectorAll('figure:not(.introduction-header-image)');
    // Parcourir tous les éléments de la galerie pour les afficher ou les masquer
    works.forEach((work) => {
        const workCategoryId = work.getAttribute('category-id');
        if (categoryId === '0' || workCategoryId === categoryId) {
            work.style.display = 'block';
        } else {
            work.style.display = 'none';
        }
    });
}

// Ajoutez les écouteurs d'événements pour les boutons de filtrage
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach((button) => {
    button.addEventListener('click', filterWorks);
});
