const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

for(let i =0; i < listeMots.length; i++) {
    let motUtilisateur = prompt("Entrez le mot: " + listeMots[i])
if (motUtilisateur === listeMots[i]) {
    score++
}
}


console.log("Votre score est de " + score + "sur " + listeMots.length);