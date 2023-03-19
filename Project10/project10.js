// Get the buttons and vacation info element from the DOM
const beachBtn = document.getElementById("beachBtn");
const sightseeingBtn = document.getElementById("sightseeingBtn");
const foodBtn = document.getElementById("foodBtn");
const shoppingBtn = document.getElementById("shoppingBtn");
const spaBtn = document.getElementById("spaBtn");
const vacationInfo = document.getElementById("vacationInfo");

// Add event listeners for each button
beachBtn.addEventListener("mouseenter", function() {
  vacationInfo.innerHTML = "Pack your sunscreen and swimsuit!";
});
//changes text as soon as you click down on the mouse
sightseeingBtn.addEventListener("mousedown", function() {
  vacationInfo.innerHTML = "Get your camera ready and explore the city!";
});
//changes text when mouse is released
foodBtn.addEventListener("mouseup", function() {
  vacationInfo.innerHTML = "Taste the local flavors and indulge in new cuisine!";
});
//changes text when the mouse moves over the button
shoppingBtn.addEventListener("mousemove", function() {
  vacationInfo.innerHTML = "Find souvenirs and unique items to bring back home!";
});

spaBtn.addEventListener("touchstart", function() {
  vacationInfo.innerHTML = "Relax and rejuvenate with a spa treatment!";
});