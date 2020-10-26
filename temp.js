"use strict";

//function to convert fahrenheit to celsius
function convertToC() {
    //takes user input of the fTempValue and uses parseFloat to make sure it returns a floating pt number 
    var fTempVal = parseFloat(document.getElementById("fTemp").value);  
    //takes the ftemp number and performs the calculation to get the celsius temp
    var cTempVal = (fTempVal - 32) * (5 / 9);
    //returns the value of cTemp
    document.getElementById("cTemp").value = cTempVal;
}


//function to convert from celsius to fahrenheit 
function convertToF() {
    //takes user input of the ctempvalue and uses parseFloat to make sure it returns a floating pt number 
    var cTempVal = parseFloat(document.getElementById("cTemp").value);
    //takes the ctemp number and performs the calculation to get the fahrenheit temp
    var fTempVal = (cTempVal * (9 / 5)) + 32;
    //returns the value of fTemp
    document.getElementById("fTemp").value = fTempVal;
}


//function to convert from human years to dog years
//*this is not scientific ;) 
function convertToDogYears () {
    var hYearsVal = document.getElementById("hYears").value;
    var dYearsVal = hYearsVal * 7;
    document.getElementById("dYears").value = dYearsVal;
}

//function to convert from dog years to human years 
function convertToHumanYears () {
    var dYearsVal = document.getElementById("dYears").value;
    var hYearsVal = dYearsVal / 7;
    document.getElementById("hYears").value = hYearsVal;
}

//function to convert from earth weight in lbs to moon weight in lbs 
function moonWeight () {
    var weightOnEarthNum = document.getElementById("weightOnEarth").value
    //formula according to https://sciencing.com/calculate-weight-moon-7812905.html
    var weightOnMoonNum = weightOnEarthNum * 0.165;
    document.getElementById("weightOnMoon").value = weightOnMoonNum;
}

//function to convert from moon weight in lbs to earth weight in lbs 
function earthWeight () {
    var weightOnMoonNum = document.getElementById("weightOnMoon").value;
    var weightOnEarthNum = weightOnMoonNum / 0.165;
    document.getElementById("weightOnEarth").value = weightOnEarthNum;
}
















