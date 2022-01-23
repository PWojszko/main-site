// Typing effect h1 h2
function typingEffect() {
const h1Name = document.querySelector("h1.name");
const h2Title = document.querySelector("h2.title");
const txtName = "Piotr Wojszko";
const txtTitle = "Web Developer";
let indexTextName = 0;
let indexTextTitle = 0;
const time = 60;
const addLetterName = () => {
  h1Name.textContent += txtName[indexTextName];
  indexTextName++;
  if (indexTextName == txtName.length) clearInterval(indexTypingName);
};
const addLetterLetter = () => {
  h2Title.textContent += txtTitle[indexTextTitle];
  indexTextTitle++;
  if (indexTextTitle == txtTitle.length) clearInterval(indexTypingTitle);
};
const indexTypingName = setInterval(addLetterName, time);
const indexTypingTitle = setInterval(addLetterLetter, time);
}
typingEffect();

// dot appears
function dotAppears() {
const h2TitleDot = document.querySelector("h2.title");
let indexText = 0;
const time = 1500;
let flag = true;
const showDot = () => {
  h2TitleDot.classList.toggle("dotappear");
  indexText++;
};
const indexTyping = setInterval(showDot, time);
}
dotAppears()