let compteur = localStorage.getItem("compteurPanier") || 0;

function afficherPanier() {
    let panier = document.getElementById("panier");
    if (panier) {
        panier.innerText = "🛒 Panier : " + compteur;
    }
}

function ajouterPanier() {
    compteur++;
    localStorage.setItem("compteurPanier", compteur);
    afficherPanier();
}

afficherPanier();

function darkMode() {
    document.body.classList.toggle("dark");
}

function ajouterFavori() {
    alert("Produit ajouté aux favoris ❤️");
}
function viderPanier() {
    compteur = 0;
    localStorage.setItem("compteurPanier", compteur);
    afficherPanier();
}
function ouvrirPanier() {
    window.location.href = "cart.html";
}