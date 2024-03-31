/* This is a js file for the fridge interface. */

var powerVar = document.getElementById("powerBut")
var googVar = document.getElementById("googleBut");
var tvVar = document.getElementById("tvBut");
var musicVar = document.getElementById("musicBut");


function power() {
    if (powerVar.value == "TURN OFF") {
        powerVar.value = "TURN ON";
        document.getElementById('fridgePic').src = "https://images.samsung.com/is/image/samsung/mx-french-door-rf27t5501sg-rf27t5501sg-em-frontblack-thumb-299315752";
        googleBut.style.display = 'none';
        tvBut.style.display = 'none';
        musicBut.style.display = 'none';

    }
    else {
        powerVar.value = "TURN OFF";
        document.getElementById('fridgePic').src = "https://www.digitaltrends.com/wp-content/uploads/2016/01/Samsung-4-Door-Flex-Refrigerator-with-Family-Hub-.jpg?fit=859%2C572&p=1";
        googleBut.style.display = 'inline';
        tvBut.style.display = 'inline';
        musicBut.style.display = 'inline';
        googVar.value = "GOOGLE";
        tvVar.value = "TV";
        musicVar.value = "MUSIC";
    }
}

function door() {
    var door = document.getElementById("door");
    if (door.value == "OPEN FRIDGE") {
        door.value = "CLOSE FRIDGE";
        document.getElementById('fridgePic').src = "https://img.us.news.samsung.com/us/wp-content/uploads/2016/05/14185110/RF22K9581SG_005_Front-Open-With-Food_Black_Steel-e1462383844634.jpg";
        googleBut.style.display = 'none';
        tvBut.style.display = 'none';
        musicBut.style.display = 'none';
        powerBut.style.display = 'none';
    }
    else if (powerVar.value == "TURN ON") {
        door.value = "OPEN FRIDGE";
        document.getElementById('fridgePic').src = "https://images.samsung.com/is/image/samsung/mx-french-door-rf27t5501sg-rf27t5501sg-em-frontblack-thumb-299315752";
        powerBut.style.display = 'inline';
        googVar.value = "GOOGLE";
        tvVar.value = "TV";
        musicVar.value = "MUSIC";
    }
    else if (powerVar.value == "TURN OFF") {
        door.value = "OPEN FRIDGE";
        document.getElementById('fridgePic').src = "https://www.digitaltrends.com/wp-content/uploads/2016/01/Samsung-4-Door-Flex-Refrigerator-with-Family-Hub-.jpg?fit=859%2C572&p=1";
        googleBut.style.display = 'inline';
        tvBut.style.display = 'inline';
        musicBut.style.display = 'inline';
        powerBut.style.display = 'inline';
        googVar.value = "GOOGLE";
        tvVar.value = "TV";
        musicVar.value = "MUSIC";
    }
}

function google() {
    if (googVar.value == "GOOGLE") {
        googVar.value = "CLOSE GOOGLE";
        document.getElementById('fridgePic').src = "https://i.insider.com/5d1f79762516e9632116e99c?width=700";
        tvBut.style.display = 'none';
        musicBut.style.display = 'none';
    }
    else {
        googVar.value = "GOOGLE";
        document.getElementById('fridgePic').src = "https://www.digitaltrends.com/wp-content/uploads/2016/01/Samsung-4-Door-Flex-Refrigerator-with-Family-Hub-.jpg?fit=859%2C572&p=1";
        tvBut.style.display = 'inline';
        musicBut.style.display = 'inline';
    }
}

function tv() {
    if (tvVar.value == "TV") {
        tvVar.value = "CLOSE TV";
        document.getElementById('fridgePic').src = "https://www.the-sun.com/wp-content/uploads/sites/6/2022/03/carson-daly-craig-melvin-savannah-571590361.jpg";
        googleBut.style.display = 'none';
        musicBut.style.display = 'none';
    }
    else {
        tvVar.value = "TV";
        document.getElementById('fridgePic').src = "https://www.digitaltrends.com/wp-content/uploads/2016/01/Samsung-4-Door-Flex-Refrigerator-with-Family-Hub-.jpg?fit=859%2C572&p=1";
        googleBut.style.display = 'inline';
        musicBut.style.display = 'inline';
    }
}

function music() {
    if (musicVar.value == "MUSIC") {
        musicVar.value = "CLOSE MUSIC";
        document.getElementById('fridgePic').src = "https://i.redd.it/5ubfd5ghgksa1.jpg";
        googleBut.style.display = 'none';
        tvBut.style.display = 'none';
    }
    else {
        musicVar.value = "MUSIC";
        document.getElementById('fridgePic').src = "https://www.digitaltrends.com/wp-content/uploads/2016/01/Samsung-4-Door-Flex-Refrigerator-with-Family-Hub-.jpg?fit=859%2C572&p=1";
        googleBut.style.display = 'inline';
        tvBut.style.display = 'inline';
    }
}

function doStartClock() {
    setInterval(doClockTick, 1000);
}

function doClockTick() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var mins = currentDate.getMinutes();
    var secs = currentDate.getSeconds();
    var timeString = hours + ":" + mins + ":" + secs;

    var outputElement = document.getElementById("timePar");
    outputElement.textContent = timeString;
}