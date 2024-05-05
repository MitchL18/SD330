
/* This is a js file for the parking app. */

let lotId = 0;

async function loadLots() {
    let htmlString = "<p>";
    const response = await fetch("https://mitchl18.github.io/SD330//parking.json");
    const data = await response.json();

    for (let i = 0; i < data['parkingLot'].length; i++) {
        let lot = data['parkingLot'][i];
        htmlString += "<hr><p>Lot Name: " + "<a href='spaces.html?lot=" + encodeURIComponent(lot['name']) + "'>" + lot['name'] + "</a> ";
        htmlString += "<p>Number of Spaces: " + lot['numOfSpaces'];
        htmlString += "<p>Number of Open Spaces: " + lot['numOfOpenSpaces'];
        htmlString += "<p>Comments: " + lot['comments'];
    }
    document.getElementById('info').innerHTML += htmlString;
}

async function clicked() {
    let url = document.URL;
    let x = "success";
    let y = "failure";

    if (url.includes("Foy")) {
        lotId = 0;
    }
    else if (url.includes("Donnelly")) {
        lotId = 1;
    }
    else if (url.includes("McCann")) {
        lotId = 2;
    }
    else if (url.includes("Riverview")) {
        lotId = 3;
    }
    else if (url.includes("Fontaine")) {
        lotId = 4;
    }
    else if (url.includes("Dyson")) {
        lotId = 5;
    }
}

async function loadSpaces() {
    let htmlString = "<p>";
    const response = await fetch("https://mitchl18.github.io/SD330//parking.json");
    const data = await response.json();

    htmlString += "<p>Map Picture: <br> <img src=" + data['parkingLot'][lotId]['map'] + ">";

    for (let i = 0; i < data['parkingLot'][lotId]['space'].length; i++) {
        let space = data['parkingLot'][lotId]['space'][i];
        htmlString += "<hr><p>Space Number: " + space['number'];
        htmlString += "<p>Type: " + space['Type'];
        htmlString += "<p>HandiCap: " + space['Handicap'];
        htmlString += "<p>Status: " + space['Status'];
        htmlString += "<p>Filled Time: " + space['Filled Time'];
        htmlString += "<p>Reserved Time " + space['Reserved Time'];

    }
    document.getElementById('info').innerHTML += htmlString;
}

