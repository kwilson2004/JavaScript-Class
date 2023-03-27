// Wait for the page to load before attaching event listeners
window.onload = function() {
    // Attach a click event listener to the "Calculate Easter Date" button
    document.getElementById('calculate-easter').addEventListener('click', displayEasterDate);
    // Attach a click event listener to the "Calculate Math Values" button
    document.getElementById('calculate-math').addEventListener('click', displayMathResults);
};

// Function to display the calculated Easter date
function displayEasterDate() {
    // Get the year entered by the user
    const year = parseInt(document.getElementById('year-input').value);
    // Calculate the date of Easter for the given year
    const easterDate = calculateEaster(year);
    // Display the calculated Easter date in the "easter-date" paragraph
    document.getElementById('easter-date').innerHTML = `Easter in ${year} will be on ${easterDate.toDateString()}`;
}

// Function to calculate the date of Easter for a given year
function calculateEaster(year) {
    const a = year % 19;
    const b = Math.trunc(year / 100);
    const c = year % 100;
    const d = Math.trunc(b / 4);
    const e = b % 4;
    const f = Math.trunc((b + 8) / 25);
    const g = Math.trunc((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.trunc(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.trunc((a + 11 * h + 22 * l) / 451);
    const n = Math.trunc((h + l - 7 * m + 114) / 31);
    const p = (h + l - 7 * m + 114) % 31;
    const easterDate = new Date(year, n - 1, p + 1);
    return easterDate;
}

// Function to display the calculated math results
function displayMathResults() {
    // Get the number entered by the user
    const number = parseFloat(document.getElementById('number-input').value);
    // Calculate the square root of the number
    const sqrt = Math.sqrt(number);
    // Calculate the sine of the number
    const sine = Math.sin(number);
    // Display the calculated math results in the "math-results" paragraph
    document.getElementById('math-results').innerHTML = `Square root: ${sqrt.toFixed(2)}, Sine: ${sine.toFixed(2)}`;
}
