console.log("Dynamic HTML generation");

let headHTML = "<th>Spieler</th><th>E-Mail</th><th>Lebenslauf</th>";
let bodyHTML = "<tr><td>Patrick</td><td>p@mail.com</td><td>a,b,c</td></tr>";
/*
const playersDataArray = [
    ["Spieler", "E-Mail", "Lebenslauf"],
    ["Patrick", "patrick.sbrzesny@saw-office.net", "3 Jahre Daimler, 10 Jahre Selbständig, 7 Jahre Schwarz auf Weiss AG"],
    ["Marco", "marco@marco.com", "Engineer"]
]

let headHTML = "";
playersDataArray[0].forEach(
    (headerArray) => {
        headHTML += `<th>${headerArray}</th>`;
    })

console.log(headHTML);

let bodyHTML = "";
let playersDataArrayWithoutLabels = Array.from(playersDataArray);

playersDataArrayWithoutLabels.shift();

playersDataArrayWithoutLabels.forEach(
    (dataArray) => {
        bodyHTML += `<tr>`;
        dataArray.forEach(
            (tableCellData) => {
                bodyHTML += `<td>${tableCellData}</td>`;
            }
        )
    }
)
*/

document.getElementById("playersTableHead").innerHTML = headHTML;

document.getElementById("playersTableBody").innerHTML = bodyHTML;
