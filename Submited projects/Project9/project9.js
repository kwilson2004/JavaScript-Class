// 1. DOM property that returns an array holding a collection of elements
const paragraphs = document.getElementsByTagName('p');
document.write(`<p>The collection of paragraphs has ${paragraphs.length} elements.</p>`);

// 2. Three additional DOM properties
const docTitle = document.title;
document.write(`<p>The title of the document is "${docTitle}".</p>`);
// This code would show a domain of the website.
const docDomain = document.domain;
document.write(`<p>The domain of the document is "${docDomain}".</p>`);
//This will show the heght of pixel of your browser window.
const winHeight = window.innerHeight;
document.write(`<p>The height of the browser window is ${winHeight} pixels.</p>`);

// 3. Three additional DOM methods
const heading = document.createElement('h2');
heading.textContent = 'Project 9: The Document Object';
document.body.prepend(heading);
//This displays the h3 heading for the document.
const h1 = document.createElement('h3');
h1.textContent = 'Kyle Wilson';
document.body.prepend(h1);
//this shows a random image on every refresh of the page.
const image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.alt = 'Random Image';
document.body.append(image);
//this will show the last link of the document.
const links = document.links;
const lastLink = links[links.length - 1];
document.write(`<p>The last link in the document goes to "${lastLink.href}".</p>`);
