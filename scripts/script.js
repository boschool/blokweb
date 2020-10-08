/* Javascript Document */

var fotos = ['foto00.png','foto01.png', 'foto02.png', 'foto03.png', 'foto04.png', 'foto05.png'];

var fotoImg = document.querySelector('#foto');

var huidigFotoNr = 0; // initieel op 0

// settings voor automatisch vooruit bladeren, maar alleen als de gebruiker niet zelf bladert
var bladerSnelheid = 300; // aantal milliseconden wachten
var autoBladerTimer = null; // globale variabele wordt in updfatefuntie gebruikt

toonHuidigeFoto();



var diamantKnop = document.querySelector('#diamantKnop')

function diamantToggle(){
	console.log('Toggle diamant'+ diamantKnop.checked)
	if  (diamantKnop.checked===true) {
		fotoImg.classList.toggle('onzichtbaar')
	}
	else {
		fotoImg.classList.toggle('onzichtbaar')
		}
	}

//update de foto lijst
function toonHuidigeFoto() {
    //console.log('bladeren ' + huidigFotoNr);

	if ( huidigFotoNr > fotos.length -1 ) { // voorbij het einde 
		huidigFotoNr = 1; // terug naar begin
	}

	fotoImg.src = 'images/' + fotos[huidigFotoNr];
    autoBladerTimer = setTimeout( bladerVooruit , bladerSnelheid ) 
}

// eventHandlers: animatie functie bladert in foto's vooruit
// juiste benaming

function bladerVooruit() {
	huidigFotoNr = huidigFotoNr + 1 ;
	toonHuidigeFoto();	
}


diamantKnop.addEventListener('change', diamantToggle);

//wacht tot er iets gebeurt