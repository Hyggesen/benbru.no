const intro = document.querySelector(".intro");
const intro2 = document.querySelector (".intro2");
const feHeader = document.querySelector (".frontend-text");
const dmHeader = document.querySelector (".dm-space");
const flagg = document.querySelector (".flagg");
const norwegianIntro = "Jeg er en Front-End-utvikler student med bakgrunn fra Digital Markedsføring. Jeg har en lidenskap for å skape ting. Drømmen min er å jobbe fulltid med å lage moderne, responsiv og brukervennlige nettsider og applikasjoner. Jeg vil lære alt";
const norwegianIntro2 = "Du kan kontakte meg på:"
const norwegianFeHeader = "Front-End-Utvikler studiene";
const norwegianDmHeader = "Digital Markedsføring studiene";


const languageButton = document.querySelector(".language-button");
const englishIntro = intro.innerText;
const englishIntro2 = intro2.innerText;
const englishFeHeader = feHeader.innerText;
const englishDmHeader = dmHeader.innerText;
let languageVariable = "English";

languageButton.addEventListener("click", function(){
  if(languageVariable === "English"){
    
    intro.innerHTML = norwegianIntro;
    intro2.innerHTML = norwegianIntro2;
    feHeader.innerHTML = norwegianFeHeader;
    dmHeader.innerHTML = norwegianDmHeader;
    languageButton.innerText = "Change to English";
    languageVariable = "Norwegian";

  }
  else {
        intro.innerHTML = englishIntro;
        intro2.innerHTML = englishIntro2;
        feHeader.innerHTML = englishFeHeader;
        dmHeader.innerHTML = englishDmHeader;
        
      languageButton.innerText = "Bytt til Norsk";
      languageVariable = "English";
  }
})