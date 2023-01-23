// Define fillCount variable and set it to 1 for custom non-refillable cup
let fillCount = 1;

// Loop to check for cup and fillCount
while (true) {
    // Prompt the user for input for cup type
    let cup = window.prompt("What type of cup would you like to use? (custom refillable / custom non-refillable)").toLowerCase()
    // Check if cup is not placed on the tray
    if (!cup) {
        // Display message if cup is not placed on the tray
        window.alert("Please place your cup on the tray.");
    } else if (cup === "custom refillable") {
        // Display message for custom refillable cup
        window.alert("Custom Refillable cup: Please make your selection.");
        // Exit the loop
        break;
    } else if (cup === "custom non-refillable" && fillCount > 0) {
        // Display message for custom non-refillable cup with fills remaining
        window.alert("Custom Non-Refillable cup: You have " + fillCount + " fills remaining; Please make your selection.");
        // Decrement fillCount by 1
        fillCount--;
        // Exit the loop
        break;
    } else if (cup === "custom non-refillable" && fillCount === 0) {
        // Display message for custom non-refillable cup with no fills remaining
        window.alert("Custom Non-Refillable cup: You have zero fills remaining; Please leave.");
        // Exit the loop
        break;
    } else {
        // Display message for invalid cup
        window.alert("This is an invalid cup; Please leave.");
        // Exit the loop
        break;
    }
}
