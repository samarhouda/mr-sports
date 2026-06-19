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

function ajouterFavori(nomProduit) {

let favoris =
JSON.parse(localStorage.getItem("favoris")) || [];

favoris.push(nomProduit);

localStorage.setItem(
"favoris",
JSON.stringify(favoris)
);

alert("Ajouté aux favoris ❤️");

}
function viderPanier() {
    localStorage.removeItem("panier");

    panier = [];

    let panierBtn = document.getElementById("panier");
    if (panierBtn) {
        panierBtn.innerHTML = "🛒 Panier : 0";
    }

    let liste = document.getElementById("liste-panier");
    if (liste) {
        liste.innerHTML = "";
    }

    let total = document.getElementById("total");
    if (total) {
        total.innerHTML = "Total : 0 DH";
    }

    alert("Panier vidé ✅");
}
function ouvrirPanier() {
    window.location.href = "cart.html";
}
function rechercherProduit() {

let mot = document.getElementById("recherche").value.toLowerCase();

let produits = document.querySelectorAll(".product");

produits.forEach(function(produit){

if(produit.innerText.toLowerCase().includes(mot)){

produit.style.display = "block";

}else{

produit.style.display = "none";

}

});

}
let panier = [];

function ajouterPanier(nom, prix){

    panier.push({
        nom: nom,
        prix: prix
    });

    document.getElementById("panier").innerHTML =
    "🛒 Panier : " + panier.length;

    localStorage.setItem(
        "panier",
        JSON.stringify(panier)
    );

    alert(nom + " ajouté au panier ✅");
}

window.onload = function(){

    let sauvegarde =
    localStorage.getItem("panier");

    if(sauvegarde){

        panier = JSON.parse(sauvegarde);

        document.getElementById("panier").innerHTML =
        "🛒 Panier : " + panier.length;
    }
}
function afficherProduitsPanier(){

    let liste = document.getElementById("liste-panier");
    let totalElement = document.getElementById("total");

    if(!liste) return;

    let panierSauvegarde =
    JSON.parse(localStorage.getItem("panier")) || [];

    let total = 0;
    liste.innerHTML = "";

    panierSauvegarde.forEach(function(produit){
        liste.innerHTML += `<p>${produit.nom} - ${produit.prix} DH</p>`;
        total += produit.prix;
    });

    totalElement.innerHTML = "Total : " + total + " DH";
}

afficherProduitsPanier();
function ajouterFavori(nomProduit){

    let favoris =
    JSON.parse(localStorage.getItem("favoris")) || [];

    favoris.push(nomProduit);

    localStorage.setItem(
        "favoris",
        JSON.stringify(favoris)
    );

    alert(nomProduit + " ajouté aux favoris ❤️");
}
function afficherFavoris(){

    let liste =
    document.getElementById("liste-favoris");

    if(!liste) return;

    let favoris =
    JSON.parse(localStorage.getItem("favoris")) || [];

    liste.innerHTML = "";

    favoris.forEach(function(item){

        liste.innerHTML +=
        `<p>❤️ ${item}</p>`;

    });

}

function viderFavoris(){

    localStorage.removeItem("favoris");

    afficherFavoris();

    alert("Favoris supprimés ✅");

}

afficherFavoris();
function chargerProfil(){

    let favoris = JSON.parse(localStorage.getItem("favoris")) || [];
    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    let fav = document.getElementById("nbrFavoris");
    let pan = document.getElementById("nbrPanier");

    if(fav){
        fav.innerHTML = favoris.length;
    }

    if(pan){
        pan.innerHTML = panier.length;
    }
}
// ===== ADMIN : ajouter / afficher / supprimer produits =====

function ajouterProduitAdmin(){

    let nom = document.getElementById("nomProduit").value;
    let image = document.getElementById("imageProduit").value;
    let prix = document.getElementById("prixProduit").value;

    if(nom === "" || image === "" || prix === ""){
        alert("Remplis tous les champs");
        return;
    }

    let produitsAdmin =
    JSON.parse(localStorage.getItem("produitsAdmin")) || [];

    produitsAdmin.push({
        nom: nom,
        image: image,
        prix: prix
    });

    localStorage.setItem("produitsAdmin", JSON.stringify(produitsAdmin));

    document.getElementById("nomProduit").value = "";
    document.getElementById("imageProduit").value = "";
    document.getElementById("prixProduit").value = "";

    afficherProduitsAdmin();

    alert("Produit ajouté ✅");
}

function afficherProduitsAdmin(){

    let liste = document.getElementById("listeProduitsAdmin");

    if(!liste) return;

    let produitsAdmin =
    JSON.parse(localStorage.getItem("produitsAdmin")) || [];

    liste.innerHTML = "";

    produitsAdmin.forEach(function(produit, index){

        liste.innerHTML += `
            <p>
                ✅ ${produit.nom} - ${produit.prix} DH - ${produit.image}
                <button onclick="supprimerProduitAdmin(${index})">
                    Supprimer
                </button>
            </p>
        `;
    });
}

function supprimerProduitAdmin(index){

    let produitsAdmin =
    JSON.parse(localStorage.getItem("produitsAdmin")) || [];

    produitsAdmin.splice(index, 1);

    localStorage.setItem("produitsAdmin", JSON.stringify(produitsAdmin));

    afficherProduitsAdmin();
}

// ===== Afficher produits Admin dans Accueil =====

function ajouterProduitAdmin(){
    let nom = document.getElementById("nomProduit").value;
    let image = document.getElementById("imageProduit").value;
    let prix = document.getElementById("prixProduit").value;

    if(nom == "" || image == "" || prix == ""){
        alert("Remplis tous les champs");
        return;
    }

    let produitsAdmin = JSON.parse(localStorage.getItem("produitsAdmin")) || [];

    produitsAdmin.push({
        nom: nom,
        image: image,
        prix: prix
    });

    localStorage.setItem("produitsAdmin", JSON.stringify(produitsAdmin));

    alert("Produit ajouté ✅");

    afficherProduitsAdmin();
}

function afficherProduitsAdmin(){
    let liste = document.getElementById("listeProduitsAdmin");
    if(!liste) return;

    let produitsAdmin = JSON.parse(localStorage.getItem("produitsAdmin")) || [];

    liste.innerHTML = "";

    produitsAdmin.forEach(function(produit, index){
        liste.innerHTML += `
            <p>
                ✅ ${produit.nom} - ${produit.prix} DH - ${produit.image}
                <button onclick="supprimerProduitAdmin(${index})">Supprimer</button>
            </p>
        `;
    });
}

function supprimerProduitAdmin(index){
    let produitsAdmin = JSON.parse(localStorage.getItem("produitsAdmin")) || [];

    produitsAdmin.splice(index, 1);

    localStorage.setItem("produitsAdmin", JSON.stringify(produitsAdmin));

    afficherProduitsAdmin();
}

function afficherProduitsAdminAccueil(){
    let container = document.querySelector(".product-container");
    if(!container) return;

    let produitsAdmin = JSON.parse(localStorage.getItem("produitsAdmin")) || [];

    produitsAdmin.forEach(function(produit){
        container.innerHTML += `
            <div class="product">
                <img src="images/${produit.image}">
                <h3>${produit.nom}</h3>
                <p>${produit.prix} DH</p>
                <button onclick="ajouterPanier('${produit.nom}', ${produit.prix})">Acheter</button>
                <button onclick="ajouterFavori('${produit.nom}')">❤️ Favori</button>
            </div>
        `;
    });
}

afficherProduitsAdmin();
afficherProduitsAdminAccueil();
function validerCommande(){

    let nom = document.getElementById("clientNom").value;
    let tel = document.getElementById("clientTel").value;
    let ville = document.getElementById("clientVille").value;

    if(nom === "" || tel === "" || ville === ""){
        alert("Remplis tous les champs");
        return;
    }

    let commandes = JSON.parse(localStorage.getItem("commandes")) || [];

    commandes.push({
        nom: nom,
        tel: tel,
        ville: ville,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("commandes", JSON.stringify(commandes));

    alert("Commande envoyée avec succès ✅");
}
function afficherCommandes(){

    let liste = document.getElementById("listeCommandes");

    if(!liste) return;

    let commandes =
    JSON.parse(localStorage.getItem("commandes")) || [];

    liste.innerHTML = "";

    commandes.forEach(function(cmd, index){

        liste.innerHTML += `
        <div style="
            border:1px solid #ccc;
            padding:10px;
            margin:10px;
            border-radius:10px;
        ">

            <h3>Commande ${index + 1}</h3>

            <p><b>Nom :</b> ${cmd.nom}</p>

            <p><b>Téléphone :</b> ${cmd.tel}</p>

            <p><b>Ville :</b> ${cmd.ville}</p>

            <p><b>Date :</b> ${cmd.date}</p>

            <button onclick="supprimerCommande(${index})">
                Supprimer
            </button>

        </div>
        `;

    });
}
function supprimerCommande(index){

    let commandes =
    JSON.parse(localStorage.getItem("commandes")) || [];

    commandes.splice(index,1);

    localStorage.setItem(
        "commandes",
        JSON.stringify(commandes)
    );

    afficherCommandes();
}
afficherCommandes();