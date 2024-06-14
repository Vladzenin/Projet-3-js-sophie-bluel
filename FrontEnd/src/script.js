//SI USER CONNECTE

document.addEventListener('DOMContentLoaded', (event) => {
    // Récupère le token depuis le localStorage
    const token = localStorage.getItem('token');
    console.log("Stored token:", localStorage.getItem('token'));

    if (token) {
        // L'utilisateur est connecté
        // Changement onglet login
        const connected = document.getElementById('connected');
        if (connected) {
            connected.textContent = 'logout';
        }
        // Affichage mode edition
        const editMode = document.getElementById('edit-mode-header');
        if (editMode) {
            editMode.style.display = "flex";
        }
        // Affichage bouton mode edition
        const editButton = document.querySelector('.edit-mode-button');
        if (editButton) {
            editButton.style.display = "block";
        }
        //Masquer Filter Bar
        const filterBar = document.querySelector('.filter-bar');
        if (filterBar) {
            filterBar.style.display = 'none';
        }
    }
});

//USER SE DECONNECTE
document.getElementById('connected').addEventListener('click', function() {
    // Supprimer le token du localStorage
    localStorage.removeItem('token');
    // Recharger la page sans token afin de pouvoir se reconnecter
    window.location.href = 'index.html';
});