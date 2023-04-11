document.addEventListener('DOMContentLoaded', () => {

// 1. Using at least 5 different properties of the window object
// -----------------------------------------------------------

// Get the window innerWidth
const innerWidth = window.innerWidth;
const innerWidthMessage = `Window innerWidth: ${innerWidth}px`;

// Get the window innerHeight
const innerHeight = window.innerHeight;
const innerHeightMessage = `Window innerHeight: ${innerHeight}px`;

// Get the window screenX
const screenX = window.screenX;
const screenXMessage = `Window screenX: ${screenX}px`;

// Get the window screenY
const screenY = window.screenY;
const screenYMessage = `Window screenY: ${screenY}px`;

// Get the window location (URL)
const location = window.location.href;
const locationMessage = `Window location: ${location}`;

// 2. Using at least 5 different methods of the window object (excluding addEventListener, alert, open, and close)
// ----------------------------------------------------------------------------------------------------------------

// setTimeout method
const timeoutMessage = "This message was displayed after a 3-second delay using the setTimeout method.";
const displayTimeoutMessage = () => {
  const timeoutElem = document.createElement('p');
  timeoutElem.textContent = timeoutMessage;
  document.body.appendChild(timeoutElem);
};
window.setTimeout(displayTimeoutMessage, 3000);

// setInterval method
let counter = 0;
const intervalMessage = "This message was updated using the setInterval method. Counter: ";
const displayIntervalMessage = () => {
  counter++;
  const intervalElem = document.getElementById('interval-message');
  intervalElem.textContent = intervalMessage + counter;
};
window.setInterval(displayIntervalMessage, 1000);

// clearTimeout method
const clearTimeoutMessage = "This message was removed using the clearTimeout method after a 5-second delay.";
let clearTimeoutElem;
const removeClearTimeoutMessage = () => {
  clearTimeoutElem.remove();
};
const displayClearTimeoutMessage = () => {
  clearTimeoutElem = document.createElement('p');
  clearTimeoutElem.textContent = clearTimeoutMessage;
  document.body.appendChild(clearTimeoutElem);
  window.setTimeout(removeClearTimeoutMessage, 5000);
};
window.setTimeout(displayClearTimeoutMessage, 3000);

// clearInterval method
const stopIntervalButton = document.createElement('button');
stopIntervalButton.textContent = "Stop updating the counter";
stopIntervalButton.onclick = () => {
  window.clearInterval(displayIntervalMessage);
};
document.body.appendChild(stopIntervalButton);

// scrollTo method
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = "Scroll to the top";
scrollToTopButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
document.body.appendChild(scrollToTopButton);

// 3. Display the results and/or demonstrate each of these items in the HTML file
// ------------------------------------------------------------------------------

const displayMessage = (message) => {
  const messageElem = document.createElement('p');
  messageElem.textContent = message;
  document.body.appendChild(messageElem);
};

displayMessage(innerWidthMessage);
displayMessage(innerHeightMessage);
displayMessage(screenXMessage);
displayMessage(screenYMessage);
displayMessage(locationMessage);

const intervalElem = document.createElement('p');
intervalElem.id = 'interval-message';
document.body.appendChild(intervalElem);
});
