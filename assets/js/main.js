// Schauen, ob die JS Datei eingebunden ist
console.log('it works');

/* Variablen deklarien 
z.B let xy = 0;

Funktionen definieren 
z.B function addOne(){
    xy anweisungen
}
Textinhalte mit .innerText bzw. .innerHTML verändern
z.B xy.innerHTML  = homescore;

=================== */

// ======= GRUENES TEAM Plus 1 ======

let homescore = 0;
let awayscore = 0;
console.log(homescore);
console.log(awayscore);


let teamscore = document.querySelector('#homescore')
function addOne(){
    homescore += 1;
    teamscore.innerHTML  = homescore;
}

// ======= Plus 2 ======

let teamscore2 = document.querySelector('#homescore')

function addTwo(){
    homescore += 2;
    teamscore2.innerHTML  = homescore;
}

// ======= Plus 3 ======

let teamscore3 = document.querySelector('#homescore')

function addThree(){
    homescore += 3;
    teamscore3.innerHTML  = homescore;
}


// ======= Blaues TEAM Plus 1 ======

let teamscoreblue1 = document.querySelector('#awayscore')

function addOneright(){
    awayscore += 1;
    teamscoreblue1.innerHTML  = awayscore;
}
// ======= Plus 2 ======

let teamscoreblue2 = document.querySelector('#awayscore')

function addTworight(){
    awayscore += 2;
    teamscoreblue1.innerHTML  = awayscore;
}

// ======= Plus 3 ======

let teamscoreblue3 = document.querySelector('#awayscore')

function addThreeright(){
    awayscore += 3;
    teamscoreblue3.innerHTML  = awayscore;
}


// ====== RESET BUTTON ====== 

function reset() {
    let homescore = 0;
    let awayscore = 0;
    document.getElementById("homescore").innerHTML = homescore;
    document.getElementById("awayscore").innerHTML = awayscore;
  }


// Alter Reset-Button Code (nur ein team setzt sich auf 0)
/*

let resetbutton = document.querySelector('#homescore','#awayscore')

function reset(){
    let homescore = 0;
    let awayscore = 0;
    resetbutton.innerHTML = homescore;
    resetbutton.innerHTML = awayscore;
}
*/

