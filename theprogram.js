/*console.log("Hallo aus the program.js");

let playersString = "Dominik,Jürgen,Doreen,Stefan";



console.log(playersString);

let playersArray = playersString.split(",");
console.log(playersArray);

console.log(playersArray[2]);

console.log(playersArray.length);

console.log("erste Schleife");
for (let playersIndex = 0; playersIndex < playersArray.length; playersIndex++) {
    console.log(playersArray[playersIndex]);
}


console.log("coole  Schleife mit i");
for (let i in playersArray) {
    console.log(playersArray[i]);
}

console.log("Der Spieler nach Doreen ist:");
for (let i in playersArray) {
    if (playersArray[i] === "Doreen") {
        let indexOfPlayerAfterDoreen = i + 1;
        console.log(playersArray[indexOfPlayerAfterDoreen]);
    }

}

//JS | Data Types in JavaScript - Arrays

console.log("add player at the end with push");
playersArray.push("Heiko");
console.log(playersArray);

console.log("add player at the beginning with unshift");
playersArray.unshift("Yvonne");
console.log(playersArray);

console.log("remove players at a defined position");
playersArray.splice(2, 2);
console.log(playersArray);

console.log("remove a player at the end with pop");
playersArray.pop();
console.log(playersArray);

console.log("remove the first player with shift");
playersArray.shift();
console.log(playersArray);

console.log("even cooler loop than with i");
playersArray.forEach(
    function (player) {
        console.log(player);
    }
)

//console.log("same as before with arrow function syntax");
playersArray.forEach(player => console.log(player));

//console.log("if we need the index");
playersArray.forEach( (player,playerIndex) => console.log(`Index: ${playerIndex} Spieler:${player}`));


console.log("now we want to get data from the server: callback functions")
//here comes different callback function syntax

function generateHTMLFromData(){
    let data = "pretend this data came from the server";
    console.log("this data comes from the server: "+data);
    window.document.getElementById("ersteSpalte").innerText=data;
}

//askServerForData(generateHTMLFromData(data));

setTimeout(generateHTMLFromData,2000);

console.log("We can generate the rest of the page, while waiting for the server reponse");
window.document.getElementById("gameTitle").innerText="Eisenhack Drachen Spiel";



console.log("if we use this function only one time, we don't need to give it a name");

// ES5
const timeoutId3 = setTimeout(
    function () { console.log("Best!"); },
    3000
);





//const idOfResponseTimeout = 


const timeoutId = setTimeout(
    () => { console.log("could live with that"); },
    4000
);

const timeoutId1 = setTimeout(() => {
    console.log("don't like this");
}, 5000);

const timeoutId2 = setTimeout(
    () => {
        console.log("better");
    },
    6000
);


let anzahlAufrufe = 1;
const intervalId = setInterval(
    function () {
        console.log(anzahlAufrufe);
        anzahlAufrufe++;
        if (anzahlAufrufe > 10) {
            clearInterval(intervalId);
        }
    },
    500
);

let anzahlAufrufe1 = 1;
const intervalId1 = setInterval(
    ()=> {
        console.log(anzahlAufrufe1);
        anzahlAufrufe1++;
        if (anzahlAufrufe1 > 10) {
            clearInterval(intervalId1);
        }
    },
    500
);

//htmlGenerierenExpression();

let htmlGenerierenExpression = function(){
    console.log("this is a function expression")
}

htmlGenerierenExpression();
htmlGenerierenDeclaration();

function htmlGenerierenDeclaration(){
    console.log("this come from a function declaration");
}

*/