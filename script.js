const choix =["papier", "cailloux", "ciseaux"];
const affichageJoueur = document.querySelector("#affichageJoueur");
const affichageOrdi = document.querySelector("#affichageOrdi");
const affichageResultats = document.querySelector("#resultats");

function Jouer (choixDuJoueur) {

    const  choixOrdi = choix[Math.floor(Math.random()*3)];
    let resultat=""

    if (choixDuJoueur === choixOrdi){
        resultat="ÉGALITÉ";

    }
    else if (choixDuJoueur === "cailloux" && choixOrdi === "ciseaux" || 
        choixDuJoueur === "papier" && choixOrdi === "cailloux" || 
        choixDuJoueur === "ciseaux" && choixOrdi === "papier" ) 
        {
        resultat="VOUS AVEZ GAGNÉ";
    }

    else {
        resultat="VOUS AVEZ PERDU";
    }
    affichageJoueur.innerHTML=`JOUEUR </br> ${choixDuJoueur}`
    affichageOrdi.innerHTML=`ORDINATEUR </br> ${choixOrdi}`
    affichageResultats.innerHTML=resultat;
}