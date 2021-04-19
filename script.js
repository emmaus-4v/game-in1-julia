/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const INTRO = 0;
const SPELEN_LVL1 = 1;
const SPELEN_LVL2 = 2;
const SPELEN_LVL3 = 3;
const GAMEOVER = 100;
const CREDITS = 200;

var spelStatus = SPELEN_LVL1;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;




/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */

/** Letters ingedrukt */
window.addEventListener("keyDown", onkeydown, false);
window.addEventListener("keyUp", onKeyUp, false);
function onKeyDown(event){
    var keycode = event.keyCode;
    switch (keyCode) {
        case 68 : //d
            keyD = true;
            break;
        case 83: //s
            keyS = true;
            break;
        case 65: //a
            keyA = true;
            break;
        case 87: //w
            keyW = true;
            break;
    }
}

function onKeyUp(event) {
    var keyCode = event.keyCode;
    switch (keyCode) {
        case 87: //w
            keyW = false;
            break;
        case 65: //a
            keyA = false;
            break;
        case 83: //s
            keyS = false;
            break;
        case 68: //d
            keyD = false;
            break;
    }
}

/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill(blue);
  rect(20, 20, width - 2 * 20, height - 2 * 20);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    

};

/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill("white");
  ellipse(x, y, 100, 100);
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};



/**
 * Kijkt wat de toetsen/muis etc zijn.
 */
var beweegSpeler = function() {
    if(keyD = true){
        spelerX = spelerX + 20;
    }
    if (keyA =true){
        spelerX = spelerX + 20;
    }
    if (spelerX < 20  ){
        spelerX = 20
    }
    // Input linker rand max
    if (spelerX > 0 ){
        spelerX = 0
    }
}



/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(blue);
}

function startUp(){
    beweegVijand();
    beweegSpeler();
      

    tekenVeld();
    tekenVijand(vijandX, vijandY);
    tekenSpeler(spelerX, spelerY);

}

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case INTRO:

    break;

    case SPELEN_LVL1:
        startUp();

      
    break;

    case SPELEN_LVL2:
        startUp();

      
    break;
    case CREDITS:

    break;
  }
}
