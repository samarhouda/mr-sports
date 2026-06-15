let compteur = 0;

function ajouterPanier() {
    compteur++;
    document.getElementById("panier").innerText =
    "🛒 Panier : " + compteur;
}
function darkMode(){
    document.body.classList.toggle("dark");
}