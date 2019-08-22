
const playersSampleDataArray = [
    ["Spieler", "E-Mail", "Lebenslauf"],
    ["Patrick", "patrick.sbrzesny@saw-office.net", "3 Jahre Daimler, 10 Jahre Selbständig, 7 Jahre Schwarz auf Weiss AG"],
    ["Marco", "marco@marco.com", "Engineer"]
]

let someObject = {
    key1: "value",
    key2: "another value",
    key3: "some more value"
  }

console.log(someObject);

console.log(someObject.key1);



let playerDennis = new Object();

playerDennis.name = "Dennis";
playerDennis.adresse = "Ingolstadt";

console.log(playerDennis);

/*
//In a variable name the character "-" is not allowed,
//In a variable name the character " " is not allowed,
const playerMarco = {
    SpielerName: "Marco",
    E-Mail:"marco@marco.com",
    Lebenslauf:"Engineer",
    Das Lieblingsbuch:"Das Buch"
}
*/


const playerMarco = {
    SpielerName: "Marco",
    "E-Mail":"marco@marco.com",
    Lebenslauf:"Engineer"
}

console.log(playerMarco);
console.log(playerMarco.SpielerName);
console.log(playerMarco["E-Mail"]);

let playerMarcoKeys = Object.keys(playerMarco);

console.log(playerMarcoKeys);


for (let key in playerMarco){
    console.log(key)
}

let playerMarcoValues = Object.values(playerMarco);

console.log(playerMarcoValues);
/*
playerMarco={
    SpielerName: "Marco",
    "E-Mail":"marco@marco.com",
    Lebenslauf:"Ingenieur"
}
*/

playerMarco.Lebenslauf="Ingenieur";
console.log(playerMarco);

playerMarco["Airplane"]="Boeing 747";
console.log(playerMarco);

const playerObjectsInArray= [
    { SpielerName:"Marco", "E-Mail":"marco@marco", Lebenslauf:"Ingenieur"},
    { SpielerName:"Ilies", "E-Mail":"ilies.bourib@googlemail.com", Lebenslauf:"5 Jahre Bachelor of Science (Wirtschaftsinformatik) IT Support Supply Chain, Sales Document and Cashregistersupport"},
    { SpielerName:"Heiko", "E-Mail":"englertheiko@googlemail.com", Lebenslauf:"Ausbildung zum Bankkaufmann, 1 Jahr Weiterbildung zum Webmaster, 18 Jahre bei Media-Saturn, Bereich Rolloutmanagenment/ Deployment Koordination."}  
]

const veryComplexObject = {
    Pe0001:{
        "e-mail":"patrick.sbrzesny@saw-office.net",
        Name:"Patrick",
        "favorite books":["Per Anhalter durch die Galaxis","Wendekreis der Nacht","Weaving the Web"],
        "Language History":["Basic","C","C++",{Name:"Typescript",Inventor:"Microsoft",BaseLanguage:"Javascript"}]
    },
    Pe0002:{
        Name:"Stefan",
        Adress:"Ingolstadt"
    }
}

console.log(veryComplexObject.Pe0001["Language History"][3].Name);
console.log(veryComplexObject.Pe0002.Adress);