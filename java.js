function afficherChiffre() {
    var chiffre = Math.floor(Math.random() * 6) + 1;
    document.getElementById("resultat").innerHTML = chiffre;
}