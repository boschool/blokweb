/* Javascript Document */

let hamburgerButton = document.querySelector('nav > button')
console.log(hamburgerButton)
let closeButton = document.querySelector('ul button')

var clicked = true;

function openHamburger() {

    if (clicked) {
        hamburgerButton.innerHTML = "x"
        clicked = false;
    } else {
        hamburgerButton.innerHTML = "="
        clicked = true;
    }
    document.body.classList.toggle('openMenu')

}

hamburgerButton.addEventListener('click', openHamburger)
closeButton.addEventListener('click', openHamburger)