// String object methods
const teamName = "New York Yankees";
const numPlayers = "25";
const stadiumName = "Yankee Stadium";
const city = "New York";
const sport = "baseball";

// Example 1: toUpperCase()
const upperCaseTeamName = teamName.toUpperCase();
document.write(`Example 1: toUpperCase() - ${upperCaseTeamName} <br>`);

// Example 2: concat()
const teamLocation = city.concat(" ", stadiumName);
document.write(`Example 2: concat() - ${teamLocation} <br>`);

// Example 3: slice()
const slicedTeamName = teamName.slice(4, 9);
document.write(`Example 3: slice() - ${slicedTeamName} <br>`);

// Example 4: replace()
const replacedTeamName = teamName.replace("Yankees", "Mets");
document.write(`Example 4: replace() - ${replacedTeamName} <br>`);

// Example 5: trim()
const extraSpace = "   extra   ";
const trimmedSpace = extraSpace.trim();
document.write(`Example 5: trim() - ${trimmedSpace} <br>`);

// JavaScript patterns
// Character: \d - matches any digit
const jerseyNumberPattern = /^\d{1,2}$/;
const player1Jersey = "23";
const player2Jersey = "007";

// Example 1: test() method
document.write(`<br> Example 1: test() - ${jerseyNumberPattern.test(player1Jersey)} <br>`);
document.write(`Example 1: test() - ${jerseyNumberPattern.test(player2Jersey)} <br>`);

// Character: \s - matches any whitespace character
const teamNamePattern = /^\s*[a-zA-Z\s]+\s*$/;
const validTeamName = "New York Yankees";
const invalidTeamName = "New York Yankees!";

// Example 2: test() method
document.write(`<br> Example 2: test() - ${teamNamePattern.test(validTeamName)} <br>`);
document.write(`Example 2: test() - ${teamNamePattern.test(invalidTeamName)} <br>`);

// Character: \w - matches any word character (letter, digit, underscore)
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const validEmail = "john.doe@example.com";
const invalidEmail = "john.doe@com";

// Example 3: test() method
document.write(`<br> Example 3: test() - ${emailPattern.test(validEmail)} <br>`);
document.write(`Example 3: test() - ${emailPattern.test(invalidEmail)} <br>`);
