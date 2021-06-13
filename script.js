/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

//Het level bijhouden
const INTRO = 0;                // Openingsscherm
const INTROLVL = 1;             // Het eerste level, laat zien hoe je moet bewegen, exitten en hoe je keuzes moet maken
const SPELEN_LVL1_0 = 10;       // Openingsscherm voor level 1
const SPELEN_LVL1_1 = 11;       // Zie level 1 beschrijving in het document
const SPELEN_LVL1_2 = 12;       // Zie level 1 beschrijving in het document
const SPELEN_LVL1_3 = 13;       // Zie level 1 beschrijving in het document
const SPELEN_LVL2_0 = 20;       // Openingsscherm voor level 2
const SPELEN_LVL2_1 = 21;       // Zie level 2 beschrijving in het document
const SPELEN_LVL2_2 = 22;       // Zie level 2 beschrijving in het document
const SPELEN_LVL2_3 = 23        // Openingsscherm geheim level
const SPELEN_LVL2_4 = 24;       // Zie level 2.5 beschrijving in het document
const SPELEN_LVL3_0 = 30;       // Openingsscherm level 3
const SPELEN_LVL3_1 = 31;       // Zie level 3 beschrijving in het document
const SPELEN_LVL3_2 = 32;       // Zie level 3 beschrijving in het document
const GAMEOVER = 100;           // Gameover scherm
const CREDITS = 200;            // Laat alle credits zien
var spelStatus = INTRO;         // Laat het spel beginnen op het openingsscherm

var spelerX = 0;                // x-positie van speler
var spelerY = 150;              // y-positie van speler
var nikiX = 1050;               // x-positie van Niki Nihachu
var nikiY = 150;                // y-positie van Niki Nihachu
var karlX = 1000;               // x-positie van Karl Jacobs
var karlY = 150;                // y-positie van Karl Jacobs
var tomX = 1000;                // x-positie van Tommy Innit
var tomY = 150;                 // y-positie van Tommy Innit

var teller = 0;

var choiceNumber = 0;           // houdt de keuze bij die gemaakt is
var startRegel1 = 720;
var volgendeRegel = 0;

// plaatjes
var startbg;
var bg0;
var bg1;
var bg2;
var bg3;
var bg4;
var bg5;
var bg6;
var playerimg;
var nikiImg;
var karlImg;
var tomImg;

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

var compTxt = function(){ // als de computer praat in het intro level
    textSize (30);
    fill("white");
}

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

var mushTxt = function(){ //mushroom boy dialogue
    textSize (30);
    fill('#ab1a00');
    text("Mushroom man: ", col1, row1, 500, 500)
}

var karlTxt = function(){ //Karl dialogue
    textSize (30);
    fill('#ab1a00');
    text("King Karl Jacobs: ", col1, row1, 500, 500)
}

var bookTxt = function(){ //Book dialogue
    textSize (30);
    fill('#d6c483');
    text("Old books:", col1, row1, 500, 500)
}

var boyTxt = function(){ //boy dialogue
    textSize (30);
    fill('#d61111');
    text("Loud Boy: ", col1, row1, 500, 500)
}

//dialoog arrays
var genericTxt = [
    'Hit enter to start',
    'Press "c" for credits',
    'Hit escape to restart',
    'Thanks for playing',
    'Quackity',
    'Tubbo',
    'Technoblade',
    'J. Schlatt'
];

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

var dialogScene2Part1 = [
    //answer 1 + response
    "1. That woman was really weird",
    "I'm really glad I got out of there",
    //answer 2 + response
    "2. She never even told me her name",
    "Oh well, I'm sure we'll meet again",
    //More monologueing
    "I'll just go into another direction",
    "I'll just see where I end up",
]

var dialogScene2Part2 = [
    //question 3
    "Who are you? What business do you have here?",
    //answer 1 + response
    "1. Here? Dude I don't even know where I am!",
    "You’re in Kinoko Kingdom, and I am the king",
    //answer 2 + response
    "2. I have business with your mom",
    "Okay, that was kind of funny, I’ll give you that",
    //The rest of Karl's monologue
    "You’re really not from around here, are you?",
    "Stranger, turn around and leave Kinoko Kingdom at once",
    "As it is a matter of national security declared by king Karl",
    "Oh, and stranger",
    "Stay clear of the nation over the hills",
    "Stranger, turn around and go away",
]

var dialogScene2Part5 = [
    //the stories that the books tell
    "The first of the kingdoms was started by a group of friends",
    "Others flocked to the kingdom, but soon were upset with the rules",
    "They moved away, starting a new nation",
    "High walls protected the seperatists and the other citizens",
    "For some time the nations lived in peace",
    "Until the original kingdom attacked the seperatists",
    "The war went on a long time, both sides made sacrifices",
    "Now, the seperatists are having an election",
    "A newcomer, an outsider has won,he kicked out the old leaders",
    "Things are going wrong",
    "I must leave to keep the library safe"
]

var dialogScene3Part1 = [
    "Hello! Why are you? What are you doing here?",
    "1. Wow, you are talkative and energetic",
    "Thanks! I guess it’s in my nature",
    "2. That is none of your business",
    "Oh damm, rude much, i understand though",
    "Do you want to walk with me?",
    "Please, Wilbur doesn’t go on walks with me anymore",
    "1. I am, not surprised",
    "Excuse you? I am great company i'll have you know",
    "2. Who is Wilbur?",
    "Wilbur is my amazing older brother, don't tell him i said that",
    "Would you like to visit our place?",
    "Too late, I’m dragging you along!"
]

var dialogScene3Part2 = [
    "Here we are! The entrance to the great Pogtopia!",
    "Oh, but before we go in, I need to tell you something",
    "You see, Wilbur usually doesn’t do well with outsiders",
    "And lately he’s been a bit, irritable",
    "Please, just try to stay on his good side",
    "1. I'll try my best!",
    "Thank you so much, he’s not that bad, i promise",
    "2. I make no promises",
    "I didn’t expect anything less"
]

/* ********************************************* */
/*                 basisfuncties                 */
/* ********************************************* */

function draw() {
    if (keyIsDown(27)) {
          spelStatus = INTRO
    }

    switch (spelStatus) {

        case INTRO:
            tekenVeldST();
            textSize(50);
            fill('#1f4217')
            text(genericTxt[0], col1, row1, 500, 500)
            text(genericTxt[1], col1, row3, 500, 500)
            if (keyIsDown(13)) {
                //intitialiseren variabelen
                spelerX = 20
                spelStatus = INTROLVL
            }
            if (keyIsDown(67)) {
                spelStatus = CREDITS
            }
        break;

        case INTROLVL:
            tekenVeld0();
            checkGameOver();

            beweegSpeler();

            tekenSpeler();
            
            level0GamePlay();
        
        break;

        case SPELEN_LVL1_0:
            tekenVeldST();
            textSize(50);
            fill('#1f4217')
            text('Level 1: The beginning', col1, row1, 500, 500)
            text(genericTxt[0], col1, row4, 500, 500)
            if (keyIsDown(13)) {
                //intitialiseren variabelen
                spelerX = 20
                spelStatus = SPELEN_LVL1_1
            }
        break;

        case SPELEN_LVL1_1:
            tekenVeld1();
            checkGameOver();

            beweegSpeler();
            

            tekenNiki();
            tekenSpeler();
            
            lvl1part1GamePlay();
        break;

        case SPELEN_LVL1_2:
            tekenVeld2();
            checkGameOver();

            beweegSpeler();
            

            tekenNiki();
            tekenSpeler();
            
            lvl1part2GamePlay();
        break;

        case SPELEN_LVL1_3:
            tekenVeld3();
            checkGameOver();

            beweegSpeler();
            

            tekenNiki();
            tekenSpeler();
        
            lvl1part3GamePlay();
        break;

        case SPELEN_LVL2_0:
            tekenVeldST();
            textSize(50);
            fill('#1f4217')
            text('Level 2: Kinoko Kingdom', col1, row1, 500, 500)
            text(genericTxt[0], col1, row4, 500, 500)
            if (keyIsDown(13)) {
                //intitialiseren variabelen
                spelerX = 1200
                spelStatus = SPELEN_LVL2_1
            }
        break;

        case SPELEN_LVL2_1:
            tekenVeld1();
            checkGameOver();

            beweegSpeler();
            

            tekenSpeler();
        
            lvl2part1GamePlay();
        break;

        case SPELEN_LVL2_2:
            tekenVeld4();
            checkGameOver();

            beweegSpeler();
            
            tekenKarl();
            tekenSpeler();
        
            level2Part2GamePlay();
        break;

        case SPELEN_LVL2_3:
            tekenVeldST();
            textSize(50);
            fill('#1f4217')
            text('Level ?: The Library', col1, row1, 500, 500)
            text(genericTxt[0], col1, row3, 500, 500)
            if (keyIsDown(13)) {
                //intitialiseren variabelen
                spelerX = 20
                spelStatus = SPELEN_LVL2_4
            }
        break;

        case SPELEN_LVL2_4:
            tekenVeld5();
            checkGameOver();

            beweegSpeler();
            
            tekenSpeler();
        
            level2Part4GamePlay();
        break;

        case SPELEN_LVL3_0:
            tekenVeldST();
            textSize(50);
            fill('#1f4217')
            text('Level 3: Journey with a child', col1, row1, 500, 500)
            text(genericTxt[0], col1, row4, 500, 500)
            if (keyIsDown(13)) {
                //intitialiseren variabelen
                spelerX = 20
                spelStatus = SPELEN_LVL3_1
            }
        break;

        case SPELEN_LVL3_1:
            tekenVeld1();
            checkGameOver();

            beweegSpeler();
            
            tekenTom();
            tekenSpeler();
        
            level3Part1GamePlay();
        break;

        case GAMEOVER:
            tekenVeldST();
            textSize (50);
            fill('#1f4217')
            text(genericTxt[3], 200, 200, 200, 200);
            text(genericTxt[2], 500, 200, 200, 200);
            text(genericTxt[1],600,200,200,200 )
            if (keyIsDown(67)) {
                spelStatus = CREDITS
            }
        break;

        case CREDITS:
            tekenVeldST();
            textSize(40);
            teller = teller - 1;
            if (teller == -1340){
                teller = 0;
            }
            fill('#1f4217')
            text('- Concept by : Julia Suijker',200, startRegel1 + teller,1000,1000)
            volgendeRegel = volgendeRegel + 40;
            text('- Coded by: Julia Suijker', 200, startRegel1 + volgendeRegel + teller,1000,1000)
            volgendeRegel = volgendeRegel + 40;
            text('- Guided by: Sander van Geest and Arno Suijker', 200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('- Inspired by: The Dream Smp; created by: Dream,', 200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('  Georgenotfound, Sapnap, Callahan and Awesamdude', 200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('- Inspired by: Undertale, undertale.com',200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('- Game template van het Emmauscollege Rotterdam:', 200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('  github.com/emmauscollege/4HV-game-template', 200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('- manifest.json: codelabs.developers.google', 200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('  .com/codelabs/your-first-pwapp/#3', 200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('- Forest background: www.shutterstock.com/', 200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('- Nikis mountain background and the starting',200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('  background: Fez Escalante at www.behance.net',200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('- Nikis underground city background: Jungle house', 200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('  from the game terraria.org', 200, startRegel1 + volgendeRegel + teller, 1000, 1000)
            volgendeRegel = volgendeRegel + 40;
            text('- Base of all the characters: frisk from undertale.com', 200, startRegel1 + volgendeRegel + teller, 1000, 1000)   
            volgendeRegel = 0;       
  }
}

function preload(){
    // @ts-ignore
    startbg = loadImage('Pictures/stbg.jpg')
    // @ts-ignore
    bg0 = loadImage('Pictures/bg0.png')
    // @ts-ignore
    bg1 = loadImage('Pictures/bg1.png');
    // @ts-ignore
    bg2 = loadImage('Pictures/bg2.jpg')
    // @ts-ignore
    bg3 = loadImage('Pictures/bg3.png')
    // @ts-ignore
    bg4 = loadImage('Pictures/bg4.png')
    // @ts-ignore
    bg5 = loadImage('Pictures/bg5.png')
    // @ts-ignore
    bg6 = loadImage('Pictures/bg6.png')
    // @ts-ignore
    playerimg = loadImage('Pictures/mc.png')
    // @ts-ignore
    nikiImg = loadImage('Pictures/niki.png')
    // @ts-ignore
    karlImg = loadImage('Pictures/karl.png')
    // @ts-ignore
    tomImg = loadImage('Pictures/tommy.png')
}

var tekenVeldST = function () {
    //laad het achtegrond plaatje
    image(startbg, 0, 0, width, height);
};

var tekenVeld0 = function () {
    //laad het achtegrond plaatje
    image(bg0, 0, 0, width, height);
};

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

var tekenVeld4 = function () {
    //laad het achtegrond plaatje
    image(bg4, 0, 0, width, height);
};

var tekenVeld5 = function () {
    //laad het achtegrond plaatje
    image(bg5, 0, 0, width, height);
};

var tekenVeld6 = function () {
    //laad het achtegrond plaatje
    image(bg6, 0, 0, width, height);
};

/**
 * Tekent Niki Nihachu
 */
var tekenNiki = function() {
    image(nikiImg, nikiX, nikiY, 250, 207);
}

/**
 * Tekent Karl Jacobs
 */
var tekenKarl = function() {
    image(karlImg, karlX, karlY, 250, 207);
}

/**
 * Tekent Tommy Innit
 */
var tekenTom = function() {
    image(tomImg, tomX, tomY, 250, 207);
}

/**
 * Tekent de speler
 */
var tekenSpeler = function() {
  image(playerimg, spelerX, spelerY, 250, 207);
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
    if (keyIsDown(17)){ //cntrl
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

function level0GamePlay(){
    if (spelerX >= 20 && spelerX <= 100 ){
        compTxt();
        text("Hello, welcome to 'Under the Smp", col1, row1, 500, 500)
        text("Use the 'a' and 'd' keys to move", col1, row2, 500, 500)
        text("Use the escape key to return to the home screen at any time", col1, row3, 500, 500)
    }
    if (spelerX > 100 && spelerX <= 250 ){
        compTxt();
        text("Use the control key to end the game instantly", col1, row1, 500, 500)
        text("Use the '1' and '2' keys to make dialog choices", col1, row3, 500, 500)
    }
    if (spelerX > 250 && spelerX <= 350){
        compTxt();
        text("1. You'll get choices that look like this", col1, row1, 500, 500)
        text("2. Or like this", col1, row3, 500, 500)
    }
    getChoice();
    if (choiceNumber == 1 && spelerX >= 360 && spelerX < 430){
        compTxt();
        text("Good job! You're getting the hang of it", col1, row1, 500, 500)
    }
    if (choiceNumber == 2 && spelerX >= 360 && spelerX < 430){
        compTxt();
        text("Good job! You're getting the hang of it", col1, row1, 500, 500)
    }
    if (spelerX > 430 && spelerX <= 550){
        compTxt();
        text("You're ready to wake up now", col1, row1, 500, 500)
        text("Press 'g' to go'", col1, row2, 500, 500)
    }
    if (keyIsDown(71)) {
        //intitialiseren variabelen lvl1.1
        spelerX = 20
        spelStatus = SPELEN_LVL1_0
    }
}

function lvl1part1GamePlay(){
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

function lvl1part2GamePlay(){
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

function lvl1part3GamePlay(){
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
    if (spelerX == 370){
        //initialiseren variabelen lvl2.1
        spelerX = 1200;
        spelerY = 150;
        spelStatus = SPELEN_LVL2_0
    }
}

function lvl2part1GamePlay(){
    if (spelerX <= 1200 && spelerX >= 1050){
        youTxt();
        text(dialogScene2Part1[0], col1, row2, 500, 500);
        text(dialogScene2Part1[2], col1, row3, 500, 500)
        choiceNumber = 0;
    }
    if (keyIsDown (49)){ //"1" ingedrukt
        spelerX = 1000;
        choiceNumber = 1;}
    if (keyIsDown (50)){ //"2" ingedrukt
        spelerX = 1000;
        choiceNumber = 2;
    }
    if(spelerX >= 850 && spelerX <= 1000 && choiceNumber == 1){
        youTxt();
        text(dialogScene2Part1[1], col1, row2, 500, 500);
    }
    if(spelerX >= 850 && spelerX <= 1000 && choiceNumber == 2){
        youTxt();
        text(dialogScene2Part1[3], col1, row2, 500, 500);
    }
    if(spelerX >= 600 && spelerX <850){
        youTxt();
        text(dialogScene2Part1[4], col1, row2, 500, 500);
        text(dialogScene2Part1[5], col1, row3, 500, 500);
    }
    if (spelerX == 100){
        //initialiseren variabelen lvl2.2
        spelerX = 150
        spelStatus = SPELEN_LVL2_2
    }
}

function level2Part2GamePlay() {
    if (spelerX >= 150 && spelerX <= 250){
        mushTxt();
        text(dialogScene2Part2[0], col1, row2, 500, 500);
        choiceNumber = 0;
    }
    if (spelerX > 250 && spelerX<= 350){
        youTxt();
        text(dialogScene2Part2[1], col1, row2, 500, 500)
        text(dialogScene2Part2[3], col1, row4, 500, 500)
    }
    getChoice();
    if (spelerX >= 360 && spelerX <= 450 && choiceNumber == 1){
        mushTxt();
        text(dialogScene2Part2[2], col1, row2, 500, 500)
    }
    if (spelerX >= 360 && spelerX <= 450 && choiceNumber == 2){
        mushTxt();
        text(dialogScene2Part2[4], col1, row2, 500, 500)
    }
    if (spelerX > 450 && spelerX <= 550){
        mushTxt();
        text(dialogScene2Part2[5], col1, row2, 500, 500);
    }
    if (spelerX > 550 && spelerX <= 650){
        karlTxt();
        text(dialogScene2Part2[6], col1, row2, 500, 500);
        text(dialogScene2Part2[7], col1, row4, 500, 500);
    }
    if (spelerX > 650 && spelerX <= 750){
        karlTxt();
        text(dialogScene2Part2[8], col1, row2, 500, 500);
        text(dialogScene2Part2[9], col1, row3, 500, 500);
    }
    if (spelerX > 750 && spelerX <= 850){
        karlTxt();
        text(dialogScene2Part2[10], col1, row2, 500, 500);
    }
    if (spelerX == 1200 ){
        // Initialiseren variabelen lvl2.5
        spelerX = 1200;
        spelStatus = SPELEN_LVL2_3;
    }
    if (spelerX == 20 ){
        // Initialiseren variabelen lvl2.5
        spelerX = 20;
        spelStatus = SPELEN_LVL3_0;
    }
}
//fix het begin van het nieuwe lvl
function level2Part4GamePlay(){
    if (spelerX >= 50 && spelerX <= 100 ){
        bookTxt();
        text(dialogScene2Part5[0], col1, row2, 500, 500)
    }
    if (spelerX > 100 && spelerX <= 200 ){
        bookTxt();
        text(dialogScene2Part5[1], col1, row2, 500, 500)
        text(dialogScene2Part5[2], col1, row4, 500, 500)
    }
    if (spelerX > 200 && spelerX <= 300 ){
        bookTxt();
        text(dialogScene2Part5[3], col1, row2, 500, 500)
        text(dialogScene2Part5[4], col1, row4, 500, 500)
    }
    if (spelerX > 300 && spelerX <= 400 ){
        bookTxt();
        text(dialogScene2Part5[5], col1, row2, 500, 500)
        text(dialogScene2Part5[6], col1, row4, 500, 500)
    }
    if (spelerX > 400 && spelerX <= 500 ){
        bookTxt();
        text(dialogScene2Part5[7], col1, row2, 500, 500)
    }
    if (spelerX > 500 && spelerX <= 600 ){
        bookTxt();
        text(dialogScene2Part5[8], col1, row2, 500, 500)
        text(dialogScene2Part5[9], col1, row4, 500, 500)
    }
    if (spelerX > 600 && spelerX <= 700 ){
        bookTxt();
        text(dialogScene2Part5[10], col1, row2, 500, 500)
    }
    if (spelerX == 1000){
        //initaliseren variabelen lvl2.2
        spelerX = 20;
        spelStatus = SPELEN_LVL2_2;
    }
}

function level3Part1GamePlay(){
    if (spelerX <= 20 && spelerX >= 120 ){
        boyTxt();
         
    }
}