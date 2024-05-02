const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let motUtilisateur = prompt("Entrez le mot: " + listeMots[0])

if (motUtilisateur === listeMots[0]) {
    score++
}

console.log(score);