/* Javascript Document */

var body = document.querySelector('#body')
var hamburger = document.querySelector('#hamburger')

function hamburgerToggle(){
	console.log('Toggle hamburger'+ hamburger.checked)
		body.classList.toggle('hamburgerNav')
	}

hamburger.addEventListener('change', hamburgerToggle);