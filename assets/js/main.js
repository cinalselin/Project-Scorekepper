// JS Datei eingebunden 
console.log('it works');

/* Variablen deklarien 
z.B let xy = 0;

Funktionen definieren 
z.B function addOne(){
   hier kommt die anweisung rein
}
Textinhalte mit .innerText bzw. .innerHTML verändern
z.B xy.innerHTML  = homescore;

*/

// ======= GRUENES TEAM ======

let homescore = 0;
let awayscore = 0;
console.log(homescore);
console.log(awayscore);


let teamscore = document.querySelector('#homescore')
function addOne(){
    homescore += 1;
    teamscore.innerHTML  = homescore;
}


let teamscore2 = document.querySelector('#homescore')

function addTwo(){
    homescore += 2;
    teamscore2.innerHTML  = homescore;
}

let teamscore3 = document.querySelector('#homescore')

function addThree(){
    homescore += 3;
    teamscore3.innerHTML  = homescore;
}


// ======= Blaues TEAM ======

let teamscoreblue1 = document.querySelector('#awayscore')

function addOneright(){
    awayscore += 1;
    teamscoreblue1.innerHTML  = awayscore;
}

let teamscoreblue2 = document.querySelector('#awayscore')

function addTworight(){
    awayscore += 2;
    teamscoreblue1.innerHTML  = awayscore;
}

let teamscoreblue3 = document.querySelector('#awayscore')

function addThreeright(){
    awayscore += 3;
    teamscoreblue3.innerHTML  = awayscore;
}


// ====== RESET BUTTON ====== 
let homescore0 = document.querySelector('#awayscore')
let awayscore0 = document.querySelector('#homescore')


function reset() {
    homescore = 0;
    awayscore = 0;
    homescore0.innerHTML = homescore;
    awayscore0.innerHTML = awayscore;
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