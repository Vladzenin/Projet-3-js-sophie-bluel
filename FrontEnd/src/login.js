// Utiliser l'API pour vérifier les identifiants de l'utilisateur //
async function seConnecter(email, password) {
    console.log("Début de la fonction seConnecter");
    try {
        const response = await fetch('http://localhost:5678/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const login = await response.json();
            if (login.userId && login.token) {
                localStorage.setItem('token', login.token);
                return true;
            }
        } else {
            console.log("Échec de la connexion: ", response.status);
        }
    } catch (error) {
        // Erreur
        console.error("Une erreur est survenue lors de la connexion: ", error);
    }
    return false;
}

document.addEventListener('DOMContentLoaded', (event) => {
    //Redirection Accueil en cliquant sur le logo
    document.getElementById('logo-header').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
document.querySelector('form').addEventListener('submit', async (event) => {
    //console.log("Début de l'événement submit");
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    try {
        const loginSuccessful = await seConnecter(email, password);
        if (loginSuccessful) {
            console.log("Connexion réussie");
            window.location.href = 'index.html';
        } else {
            document.getElementById('login-error').style.display = 'flex';
        }
    } catch (error) {
        console.error("Erreur lors de la soumission du formulaire: ", error);
        // Afficher un message d'erreur ou un feedback à l'utilisateur ici
    }
});

});



