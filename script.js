//Header

function darkOrange() {
    let heading = document.getElementById("heading");
    heading.style = "color: darkorange;";
}

function darkSlateGrey() {
    let heading = document.getElementById("heading");
    heading.style = "color: darkslategrey;";
}

// validataion and calculations

 function feedback(event) {
    event.preventDefault();
    let form = event.target;
 }

function validateAnswer(form) {
  let serviceRating = form.serviceRating.value.toLowerCase();
  let feedback = document.getElementById("serviceRatingFeedback");
  feedback.style = "color: red";

let cost = parseFloat(form.billTotal.value);
let tip = 0;

let totalWithTip = cost + tip;
let displayCost = document.getElementById("totalWithTip");

let numOfPpl = parseFloat(form.numPaying.value);
let costPerPerson = totalWithTip / numOfPpl;

let perPerson = document.getElementById("perPerson");


if (serviceRating == "poor") {
    tip = cost * 0;
    feedback.innerText = ""
    totalWithTip = cost + tip;
    displayCost.innerText = totalWithTip.toFixed(2);
    costPerPerson = totalWithTip / numOfPpl;
    perPerson.innerText = costPerPerson.toFixed(2);
} else if (serviceRating == "good") {
    tip = cost * 0.1;
    feedback.innerText = ""
    totalWithTip = cost + tip;
    displayCost.innerText = totalWithTip.toFixed(2);
    costPerPerson = totalWithTip / numOfPpl;
    perPerson.innerText = costPerPerson.toFixed(2);
} else if (serviceRating == "excellent") {
    tip = cost * 0.2;
    feedback.innerText = ""
    totalWithTip = cost + tip;
    displayCost.innerText = totalWithTip.toFixed(2);
    costPerPerson = totalWithTip / numOfPpl;
    perPerson.innerText = costPerPerson.toFixed(2);
} else {
    feedback.innerText = "Invalid response. Please only enter (poor, good, or excellent)";
    displayCost.innerText = "";
    perPerson.innerText = "";
    return false;
  }
}

//Special effects

function moveRight() {
    let tipulator_wrapper = document.getElementById("tipulator-wrapper");
    tipulator_wrapper.style = "left: 500px;";
}

function moveLeft() {
    let tipulator_wrapper = document.getElementById("tipulator-wrapper");
    tipulator_wrapper.style = "right: 0px;";
}

function displayMsg() {
   document.write("<h1>thank you for using Tipulator<h1/>");

 }
