// This an example of a text/string variable.
var stext = "this is a short text description of a string variable.";
//This is a example of a number variable.
var milk = 10;
var tax = .5;
//this is a string variable that ads a break in the html file to seperate the first string form the total.
var linebr = "<br>";
//This line uses template literals to divide the milk and tax variable.
let total = `Total: ${(milk / tax)}`;

//This displays all the code to the html file.
document.write(stext + linebr +  total);

//This changes the background color to red.
document.body.style.backgroundColor = '#ADD8E6';
