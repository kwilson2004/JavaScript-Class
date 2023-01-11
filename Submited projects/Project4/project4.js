//Game of the day variable to change .
var gOD = "New World";
// This holds the value for the gameCost funtion.
var postedCost = "0";

//This function calls on the global variable and changes it every time the page is loaded or refreshed.
function update() {
    var newGames = ["Call of Duty", "WoW", "Snowrunner", "Runescape"];
    var updatedGames = Math.floor(Math.random() * newGames.length);
    gOD = newGames[updatedGames];
}
update(); //calls the function.


// This function is calling the new set global variables to then have a ever rotating cost of games.
function gameCost() {
    var updateCost = ["20","40","50","60"];
    var newCost = Math.floor(Math.random() * updateCost.length);
    postedCost = updateCost[newCost];
 
}
gameCost(); // calls the funtion gameCost;

//This writes the ever changing game and cost to the page.
document.write(gOD + `\n` + postedCost);


document.body.style.backgroundColor = '#ADD8E6';