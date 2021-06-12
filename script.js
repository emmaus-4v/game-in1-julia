/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const INTRO = 0;               // Spelinstructies
const SPELEN_LVL1_1 = 11;       // Zie level 1 beschrijving in README
const SPELEN_LVL1_2 = 12;       // Zie level 1 beschrijving in README
const SPELEN_LVL2 = 20;         // Zie level 2 beschrijving in README
const SPELEN_LVL3 = 30;         // Zie level 3 beschrijving in README
const GAMEOVER = 100;          // Gameover scherm
const CREDITS = 200;           // Laat alle credits zien
var spelStatus = SPELEN_LVL1_1;  // DIT MOET NOG VERANDERD WORDEN NAAR INTRO, MAAR PAS DOEN ALS ALLES WERKT

var spelerX = 0;             // x-positie van speler
var spelerY = 150;             // y-positie van speler

var nikiX = 1050;                 // x-positie van Niki Nihachu
var nikiY = 300;                 // y-positie van Niki Nihachu

var karlX = 0;                 // x-positie van Karl Jacobs
var karlY = 0;                 // y-positie van Karl Jacobs

var score = 0;                 // aantal behaalde punten

var choiceNumber = 0;

var bg1;
var playerimg;

var row1 = 475;
var row2 = 515;
var row3 = 555;
var row4 = 595;
var col1 = 425;
var col2 = 450;

/* ********************************************* */
/*            variabelen voor gameplay           */
/* ********************************************* */

var playerName = ("INSERT NAME HERE")

var characterNames = ["Niki Nihachu”,“Karl Jacobs”, “Tommy Innit”, “Wilbur Soot”, “Quackity”, “Tubbo”, “Technoblade”, “J. Schlatt",]

var youTxt = function(){
    textSize (30);
    fill('#ede6ea');
    text ("You:",col1 ,row1 ,500,500);
}

var ladyTxt = function(){
    textSize (30);
    fill('#f7add7');
    text ("Strange Lady:",col1,row1,500,500);
}

//dialoog arrays
var dialogScene1Part1 = [
    "Ah, I see you've finally awoken.", 
    "Who the hell are you!", 
    "Now, now. No reason to threaten me, I'm just trying to help you.", 
    "Follow me darling. I can take care of you once we reach the city."
];

var dialogScene1Part2 = [
    //question 1
    "Here we are the beautiful entrance to my city!",
    //answer 1 + response
    "1. But cities cant be underground?",
    "Of course they can silly! I built this city all by myself! I spent a lot of time excavating all that stone." ,
    //answer 2 + response
    "2. Why is it so hidden? Are you hiding from someone?" ,
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
    playerimg = loadImage('Pictures/frisk.png')
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
  image(playerimg, spelerX, spelerY, 250, 207);
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

function getChoice (){
    if (keyIsDown (49)){ //"1" ingedrukt
        spelerX = 360;
        choiceNumber = 1;}
    if (keyIsDown (50)){ //"2" ingedrukt
        spelerX = 360;
        choiceNumber = 2;
    }
}


function levelOnePartOneGamePlay(){
    if (spelerX >= 50 && spelerX <= 300) {
        ladyTxt()
        text (dialogScene1Part1[0],col1, row2,500,500);
    }
    if (spelerX > 300 && spelerX <= 550) {
        youTxt();
        text (dialogScene1Part1[1],col1, row2,500,500);
    }
    if (spelerX > 550 && spelerX <=800 ){
        ladyTxt();
        text (dialogScene1Part1[2],col1, row2,500,500);
    }
    if (spelerX > 800 && spelerX <= 1050){ 
        ladyTxt();
        text (dialogScene1Part1[3],col1, row2,500,500);
    }
    if (spelerX >= 1020){
        nikiX = spelerX + 30;
    }
    if (spelerX == 1250){ 
        //Initialiseren varibelen lvl 1.2
        spelerX = 0;
        nikiX = 150;
        spelStatus = SPELEN_LVL1_2;
    }
}

function levelOnePartTwoGamePlay(){
    if (spelerX >= 50 && spelerX <= 250){
        ladyTxt();
        text(dialogScene1Part2[0],col1, row2, 500, 500)
    }
    if (spelerX > 250 && spelerX <=350){
        youTxt();
        text(dialogScene1Part2[1],col2,row2,500,500)
        text(dialogScene1Part2[3],col2,row3,500,500)
    }
    getChoice();
    if (spelerX == 360 && choiceNumber == 1){
        ladyTxt();
        text(dialogScene1Part2[2],col1, row2,500,500)
    }
    if (spelerX == 360 && choiceNumber == 2){
        ladyTxt();
        text(dialogScene1Part2[4],col1, row2,500,500)
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
                spelStatus = SPELEN_LVL1_1
            }

        break;

        case SPELEN_LVL1_1:
            background(20, 10, 20);
            tekenVeld();
            image(bg1, 0, 0, width, height);
            beweegNiki();

            beweegSpeler();
            

            tekenNiki(nikiX, nikiY);
            tekenSpeler(spelerX, spelerY);
            
            levelOnePartOneGamePlay();
        break;

        case SPELEN_LVL1_2:
            background(20, 10, 20);
            tekenVeld();
            image(bg1, 0, 0, width, height);
            beweegNiki();

            beweegSpeler();
            

            tekenNiki(nikiX, nikiY);
            tekenSpeler(spelerX, spelerY);
        
            levelOnePartTwoGamePlay();
        break;

        case GAMEOVER:
            background('white')
            text('GAMEOVER', 200, 200, 200, 200);
            text('Hit escape to restart', 500, 200, 200, 200);
        break;
  }
}
