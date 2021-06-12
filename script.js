/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

//Het level bijhouden
const INTRO = 0;                // Openingsscherm
const SPELEN_LVL1_1 = 11;       // Zie level 1 beschrijving in README
const SPELEN_LVL1_2 = 12;       // Zie level 1 beschrijving in README
const SPELEN_LVL1_3 = 13;       // Zie level 1 beschrijving in README
const SPELEN_LVL2 = 20;         // Zie level 2 beschrijving in README
const SPELEN_LVL3 = 30;         // Zie level 3 beschrijving in README
const GAMEOVER = 100;           // Gameover scherm
const CREDITS = 200;            // Laat alle credits zien
var spelStatus = SPELEN_LVL1_1; // DIT MOET NOG VERANDERD WORDEN NAAR INTRO, MAAR PAS DOEN ALS ALLES WERKT

var spelerX = 0;                // x-positie van speler
var spelerY = 150;              // y-positie van speler

var nikiX = 1050;               // x-positie van Niki Nihachu
var nikiY = 150;                // y-positie van Niki Nihachu

var karlX = 0;                  // x-positie van Karl Jacobs
var karlY = 0;                  // y-positie van Karl Jacobs

var score = 0;                  // aantal behaalde punten

var choiceNumber = 0;           // houdt de keuze bij die gemaakt is

// plaatjes
var bg1;
var bg2;
var bg3;
var playerimg;
var nikiImg;
var karlImg;

// de X & Y coordinaten van alle text
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

var youTxt = function(){ // als de speler praat
    textSize (30);
    fill('#ede6ea');
    text ("You:",col1 ,row1 ,500,500);
}

var ladyTxt = function(){ // als Niki (nu nog onbekend) praat
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
    //question 2
    "Isn't it beautiful? Wouldn't you want to stay here forever?", 
    //answer 1 + response
    "1. No! Are you insane lady?", 
    "Oh, I just thought it would have been nice for you to stay a while...", 
    //answer 2 + response
    "2. Oh, no thank you ma'am, I still have so much of the world left to explore!", 
    "That's alright, just know the city will always be available in case you need a place to stay!"
];

/* ********************************************* */
/*                 basisfuncties                 */
/* ********************************************* */

function draw() {
    if (keyIsDown(27)) {
          spelStatus = INTRO
    }

    switch (spelStatus) {

        case INTRO:
            textSize(30);
            text('Use the A and D keys to move', col1, row1, 500, 400)
            text('Hit enter to start', col1, row2, 500, 500)
            text('Hit alt for the credits', col1, row3, 500, 500)
            //ADD ANY TYPE OF BACKGROUND PICTURE
            if (keyIsDown(13)) {
                spelStatus = SPELEN_LVL1_1
            }
            if (keyIsDown(18)) {
                spelStatus = CREDITS
            }
        break;

        case SPELEN_LVL1_1:
            background(20, 10, 20);
            tekenVeld1();
            checkGameOver();

            beweegNiki();
            beweegSpeler();
            

            tekenNiki();
            tekenSpeler();
            
            levelOnePartOneGamePlay();
        break;

        case SPELEN_LVL1_2:
            background(20, 10, 20);
            tekenVeld2();
            checkGameOver();

            beweegNiki();
            beweegSpeler();
            

            tekenNiki();
            tekenSpeler();
        
            levelOnePartTwoGamePlay();
        break;

case SPELEN_LVL1_3:
            background(20, 10, 20);
            tekenVeld3();
            checkGameOver();

            beweegNiki();
            beweegSpeler();
            

            tekenNiki();
            tekenSpeler();
        
            levelOnePartThreeGamePlay();
        break;

        case GAMEOVER:
            textSize (40);
            background('white')
            text('Thanks for playing', 200, 200, 200, 200);
            text('Hit escape to restart', 500, 200, 200, 200);
            text('Press alt for the credits',600,200,200,200 )
        break;

        case CREDITS:

        break;
  }
}

function preload(){
    // @ts-ignore
    bg1 = loadImage('Pictures/bg1.png');
    // @ts-ignore
    bg2 = loadImage('Pictures/bg2.jpg')
    // @ts-ignore
    bg3 = loadImage('Pictures/bg3.png')
    // @ts-ignore
    playerimg = loadImage('Pictures/mc.png')
    // @ts-ignore
    nikiImg = loadImage('Pictures/niki.png')
    // @ts-ignore
    karlImg = loadImage('Pictures/karl.png')
}


var tekenVeld1 = function () {
    //laad het achtegrond plaatje
    image(bg1, 0, 0, width, height);
};

var tekenVeld2 = function () {
    //laad het achtegrond plaatje
    image(bg2, 0, 0, width, height);
};

var tekenVeld3 = function () {
    //laad het achtegrond plaatje
    image(bg3, 0, 0, width, height);
};

/**
 * Tekent Niki Nihachu
 */
var tekenNiki = function() {
    image(nikiImg, nikiX, nikiY, 250, 207);
}


/**
 * Tekent de speler
 */
var tekenSpeler = function() {
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
    if (keyIsDown(17)){
        spelStatus = GAMEOVER
    }
    else{
        return false;
    }
}



function getChoice (){
    if (keyIsDown (49)){ //"1" ingedrukt
        spelerX = 360;
        choiceNumber = 1;}
    if (keyIsDown (50)){ //"2" ingedrukt
        spelerX = 360;
        choiceNumber = 2;
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

/* ********************************************* */
/*               gameplay functies               */
/* ********************************************* */

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
        nikiX = 500;
        spelStatus = SPELEN_LVL1_2;
    }
}

function levelOnePartTwoGamePlay(){
    if (spelerX >= 50 && spelerX <= 250){
        ladyTxt();
        text(dialogScene1Part2[0],col1, row2, 500, 500)
        choiceNumber = 0; //reset de keuze
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
    if (spelerX == 400){
        //Initialiseren variabelen lvl1.3
        spelerX = 250;
        spelerY = 125
        nikiX = 600;
        nikiY = 170;
        spelStatus = SPELEN_LVL1_3;
    }
}

function levelOnePartThreeGamePlay(){
    if (spelerX <= 275){
        ladyTxt();
        text(dialogScene1Part3[0],col1,row2,500,500)
        choiceNumber = 0;
    }
    if (spelerX>275 && spelerX <= 330 ){
        youTxt();
        text(dialogScene1Part3[1],col2,row2,500,500)
        text(dialogScene1Part3[3],col2,row3,500,500)
    }
    getChoice();
    if (spelerX >= 360 && spelerX < 400 && choiceNumber == 1){
        ladyTxt();
        text(dialogScene1Part3[2],col1, row2,500,500)
    }
    if (spelerX == 360 && spelerX < 400 && choiceNumber == 2){
        ladyTxt();
        text(dialogScene1Part3[4],col1, row2,500,500)
    }
}