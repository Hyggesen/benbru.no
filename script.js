
var bytteKnapp = document.querySelector(".bytteKnapp p");
var bodyText =document.querySelector(".body-text p");
var reach = document.querySelector (".reach");
var flagg = document.querySelector (".flagg");


function changeLanguage () {
    document.querySelector (".body-text p").innerHTML = "Jeg er en Front-End-utvikler student med en bakgrunn fra Digital Markedsføring. Jeg har en lidenskap for å skape ting. Drømmen min er å jobbe fulltid med å lage moderne, responsiv og brukervennlige nettsider og applikasjoner. Jeg vil lære alt";
    document.querySelector (".bytteKnapp p").innerHTML = "Change to English";
    document.getElementById("flagg") .src="united-kingdom.png";
    document.querySelector (".reach").innerHTML = "Du kan kontakte meg på:";
}

bytteKnapp.onclick = changeLanguage;

