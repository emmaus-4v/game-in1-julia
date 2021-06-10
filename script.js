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

var nikiX = 0;   // x-positie van vijand
var nikiY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten

var speed = 5;

/* ********************************************* */
/*            variabelen voor gameplay           */
/* ********************************************* */

var playerName = ("INSERT NAME HERE")

var characterNames = ["Niki Nihachu”,“Karl Jacobs”, “Tommy Innit”, “Wilbur Soot”, “Quackity”, “Tubbo”, “Technoblade”, “J. Schlatt",]


//dialoog arrays
var dialogScene1Part1 = [
    "Ah, I see you've finally awoken.", 
    "Who the hell are you!", 
    "Now, now. No reason to threaten me, I'm just trying to help you.", 
    "Follow me darling. I can take care of you once we reach the city."
];

var dialogScene1Part2 = [
    "Here we are the beautiful entrance to my city!",
    " But cities cant be underground?",
    " Of course they can silly! I built this city all by myself! I spent a lot of time excavating all that stone." ,
    "Why is it so hidden? Are you hiding from someone?" ,
    "My city is a haven for those who are lost, scared or still searching."
];

var dialogScene1Part3 = [
    "Isn't it beautiful? Wouldn't you want to stay here forever?", 
    "No! Are you insane lady?", 
    "Oh, I just thought it would have been nice for you to stay a while...", 
    "Oh, no thank you ma'am, I still have so much of the world left to explore!", 
    "That's alright, just know the city will always be available in case you need a place to stay!"
];

/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill('red');
  rect(20, 20, width - 2 * 20, height - 2 * 20);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenNiki = function(x, y) {
    fill ("pink");
    ellipse (x, y, 100, 100);

};



/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill("white");
  ellipse(x, y, 100, 100);
} ;



/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */

var beweegNiki = function() {
    
};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
    
    if (keyIsDown(65) && spelerX > 20) {
        spelerX = spelerX - 20;
    }
    if (keyIsDown(68) && spelerX < 1260) {
        spelerX = spelerX + 20;
    }
};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    return false;
}


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};



/** function startUp(){
    beweegVijand();
    beweegSpeler();
      

    tekenVeld();
    tekenVijand(vijandX, vijandY);
    tekenSpeler(spelerX, spelerY);

}
**/

/**function levelOneGamePlay(){
    if (spelerX === 25)
        print (dialogScene1Part1 [1])
    if (spelerX === 50)
        print (dialogScene1Part1 [2])
    if (spelerX === 75)
        print (dialogScene1Part1 [3])
    if (spelerX === 100)
        print (dialogScene1Part1 [4])

   
}
**/

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
 //rect(30, 20, 55, 55);
}



/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {

    case INTRO:
    background('white');
    textSize(30);
    text('Use the A and D keys to move', 420, 300, 500, 400)
    text('Hit enter to start', 500, 500, 500, 500)

    if (keyIsDown(13)) {
        spelStatus = SPELEN_LVL1
    };

    break;

    case SPELEN_LVL1:
      background(20, 10, 20);
      tekenVeld();
      beweegNiki();

      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        spelStatus = GAMEOVER;
      }

      
      tekenNiki(nikiX, nikiY);
      tekenSpeler(spelerX, spelerY);
      
      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;

      case GAMEOVER:
        background('white')
        text('GAMEOVER', 200, 200, 200, 200);
        text('Hit escape to restart', 500, 200, 200, 200);
      break;

      if (keyIsDown(27)) {
          spelStatus = INTRO
      };
  }
}
