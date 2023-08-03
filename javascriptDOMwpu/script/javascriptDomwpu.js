// DOM Manipulation
// buat elemen baru

const pNew = document.createElement("p");
const textNew = document.createTextNode("Paragraf Baru");

//save the text into the paragraphs
pNew.appendChild(textNew);

//save the variable pNew at the end section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pNew);
//elements are placed at the end.

const liNew = document.createElement("li");
const textLiNew = document.createTextNode("item 3 DOM");

liNew.appendChild(textLiNew);

const ul = document.querySelector("section#b ul"); //const li2 = ul.querySelector('section#b ul li:nth-child(2)') can be abbreviated become this = change the document to the new variable.
const li2 = ul.querySelector("li:nth-child(3)");

ul.insertBefore(liNew, li2);

//how to remove
const link = document.querySelector("section#a a");
sectionA.removeChild(link);

//how to replace the element or the result
//replace paragraf 4
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const replaceH2 = document.createElement("h2");
const replaceP4 = document.createTextNode("Replace paragraph 4");

replaceH2.appendChild(replaceP4);

sectionB.replaceChild(replaceH2, p4);

pNew.style.backgroundColor = "lightgreen";
liNew.style.backgroundColor = "lightgreen";
replaceH2.style.backgroundColor = "lightgreen";

//The result from manipulation DOM will be green color
