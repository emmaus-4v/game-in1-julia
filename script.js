/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const INTRO = 0;               // Spelinstructies
const SPELEN_LVL1 = 1;         // Zie level 1 beschrijving in README
const SPELEN_LVL2 = 2;         // Zie level 2 beschrijving in README
const SPELEN_LVL3 = 3;         // Zie level 3 beschrijving in README
const GAMEOVER = 100;          // Gameover scherm
const CREDITS = 200;           // Laat alle credits zien
var spelStatus = INTRO;  // DIT MOET NOG VERANDERD WORDEN NAAR INTRO, MAAR PAS DOEN ALS ALLES WERKT

var spelerX = 20;             // x-positie van speler
var spelerY = 300;             // y-positie van speler

var nikiX = 300;                 // x-positie van Niki Nihachu
var nikiY = 300;                 // y-positie van Niki Nihachu

var karlX = 0;                 // x-positie van Karl Jacobs
var karlY = 0;                 // y-positie van Karl Jacobs

var score = 0;                 // aantal behaalde punten

var speed = 5; //IS DIT ECHT NODIG?

var bg1;

/* ********************************************* */
/*            variabelen voor gameplay           */
/* ********************************************* */

var playerName = ("INSERT NAME HERE")

var characterNames = ["Niki Nihachu”,“Karl Jacobs”, “Tommy Innit”, “Wilbur Soot”, “Quackity”, “Tubbo”, “Technoblade”, “J. Schlatt",]

var youTxt = function(){
    fill('#ede6ea');
    text ("You: ",425, 475,500,500);
}

var ladyTxt = function(){
    fill('#f7add7');
    text ("Strange Lady: ",425, 475,500,500);
}

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

function preload(){
    bg1 = loadImage('Pictures/bg1.png');
}


//Tekent het speelveld
var tekenVeld = function () {
    // background('blue');
    // Achtergrond plaatje
    image(bg1, 0, 0, width, height);

};


/**
 * Tekent Niki Nihachu
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenNiki = function(x, y) {
    fill ("pink");
    ellipse (x, y, 100, 100);
}


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill("white");
  ellipse(x, y, 100, 100);
}


/**
 * Updatet globale variabelen met positie van Niki Nihachu
 */

var beweegNiki = function() {
    //DOES NIKI EVEN MOVE?
}


/**
 * Zorg ervoor dat A en D de beweegknoppen zijn
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
    if (keyIsDown(65) && spelerX > 20) {
        spelerX = spelerX - 5;
    }
    if (keyIsDown(68) && spelerX < 1260) {
        spelerX = spelerX + 5;
    }
}


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
  return false;
}


/** function startUp(){
    beweegVijand();
    beweegSpeler();
      

    tekenVeld();
    tekenVijand(vijandX, vijandY);
    tekenSpeler(spelerX, spelerY);

}
**/


function levelOneGamePlay(){
    textSize (30);
    if (spelerX >= 50 && spelerX <= 150) {
        ladyTxt()
        text (dialogScene1Part1[1],425, 550,500,500);
    }
    if (spelerX > 150 && spelerX <= 250) {
        youTxt();
        text ("Who the hell are you!",425, 550,500,500);
    }
    if (spelerX > 250 && spelerX <=350 ){
        ladyTxt();
        text ("Now, now. No reason to threaten me, I'm just trying to help you.",375, 525,500,500);
    }
    if (spelerX > 350 && spelerX <= 450){ 
        ladyTxt();
        text ('Follow me darling, I can take care of you once we reach the city',350, 525,500,500);
    }
}


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
    createCanvas(1280, 720);  //Maakt het canvas
    background('blue');       // Maakt de achtergrond blauw
 //rect(30, 20, 55, 55);    //REMOVE THIS WHEN DONE
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
    if (keyIsDown(27)) {
          spelStatus = INTRO
    }

    switch (spelStatus) {

        case INTRO:
            textSize(30);
            text('Use the A and D keys to move', 420, 300, 500, 400)
            text('Hit enter to start', 500, 500, 500, 500)
            /**var img1   
            img1 = image('Pictures\background1.png', 100, 100);**/

            if (keyIsDown(13)) {
                spelStatus = SPELEN_LVL1
            }

        break;

        case SPELEN_LVL1:
            background(20, 10, 20);
            tekenVeld();
            image(bg1, 0, 0, width, height);
            beweegNiki();

            beweegSpeler();
            

            tekenNiki(nikiX, nikiY);
            tekenSpeler(spelerX, spelerY);
            
            levelOneGamePlay();
        break;

        case GAMEOVER:
            background('white')
            text('GAMEOVER', 200, 200, 200, 200);
            text('Hit escape to restart', 500, 200, 200, 200);
        break;
  }
}
