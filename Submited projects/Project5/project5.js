//Arithmetic 
var a = 5 + 3; // adding 5 and 3 and storing the result in the variable 'a'
document.write(a + "<br>");
var b = a * 2; // multiplying the value of 'a' by 2 and storing the result in the variable 'b'
document.write(b + "<br>");

//Assignment
var e = 10;
e += 5;
document.write(e + "<br>"); 
var f = 20;
f *= 1000;
document.write(f + "<br>"); 

//Comparison
let u = 5;
let i = 4;
if (u > i) {
    document.write("u is greater than i" + "<br>"); // if the value of 'u' is greater than the value of 'i', this message will be displayed on the webpage.
}
let g = 3;
let h = 6;    
if (g <= h) {
    document.write("g is less than or equal to h" + "<br>"); // if the value of 'g' is less than or equal to the value of 'h', this message will be displayed on the webpage.
}

//Logical & Bitwise 
let t = 20;
let k = 10;
let l = 0;
let m = 0;
if (t > k || l === m) {
    document.write("t is greater than k or l is equal to m"); // if 't' is greater than 'k' OR 'l' is equal to 'm', this message will be displayed on the webpage, also including the use of the bitwise opertator '||' to include l&m.
}



// Special
var z = typeof x; // using the 'typeof' operator to get the data type of 'x' and storing the result in 'z'
