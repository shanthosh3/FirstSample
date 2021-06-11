/* global document, window, localStorage*/

// changing image when clicking on it

var pastaImage = document.querySelector('img');

pastaImage.onclick = function() {
    var myImages = pastaImage.getAttribute('src');
    if (myImages === 'images/Food/Pasta-Chicken.jpg') {
        pastaImage.setAttribute('src', 'images/Food/Chicken-Biriyani-Curry.jpg');
    } else if (myImages === 'images/Food/Chicken-Biriyani-Curry.jpg') {
        pastaImage.setAttribute('src', 'images/Food/Steak-Mushroom.jpg');
    } else {
        pastaImage.setAttribute('src', 'images/Food/Pasta-Chicken.jpg');
    }
}

// personalized welcome message

var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    'use strict';
    var myName = window.prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ' Welcome To Kutty Puli Cusine';
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ' Welcome To Kutty Puli Cusine';
}
nameButton.onclick = function() {
    'use strict';
    setUserName();
};