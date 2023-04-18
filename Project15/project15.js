// This JavaScript code demonstrates form validation, new form-related elements, input types, and attributes
// related to a summer theme.

const form = document.getElementById('summerForm');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const date = document.getElementById('date').value;
  const location = document.getElementById('location').value;
  const email = document.getElementById('email').value;
  const guests = document.getElementById('guests').value;
  const activities = document.getElementById('activities').value;

  message.innerHTML = `
    Action performed: Form submitted <br>
    New form-related element used: &lt;datalist&gt; for activities <br>
    New input types used: &lt;input type="date"&gt;, &lt;input type="email"&gt;, &lt;input type="number"&gt; <br>
    New attributes used: pattern, min, max <br><br>
    Results: <br>
    Date: ${date} <br>
    Location: ${location} <br>
    Email: ${email} <br>
    Number of Guests: ${guests} <br>
    Activities: ${activities}
  `;
});
