const dashFacts = document.querySelector(".dashFacts");
const dashFacts1 = document.querySelector(".dashFacts1");
const dashFacts2 = document.querySelector(".dashFacts2");
var currentIndex = -1;
const quotes = [
  "The drink of winners.",
  "Let’s get this par-tea started!",
  "Wisdom in a cup.",
];
var currentIndex1 = -1;
const quotes1 = [
  "Filled to the brim.",
  "Love at first sip.",
  "Fancy a cup of tea?",
];
var currentIndex2 = -1;
const quotes2 = [
  "Every cup tells a story.",
  "Don’t be chai!",
  "Time to get chat-tea",
  "We'll be-leaf you",
];

function startFacts() {
  dashFactsStart();
  dashFactsStart1();
  dashFactsStart2();
}
// scrolling quotes on View Tutors
function dashFactsStart() {
  ++currentIndex;
  if (currentIndex >= quotes.length) {
    currentIndex = 0;
  }
  dashFacts.innerHTML = quotes[currentIndex];
}

// scrolling quote on See Reviews
function dashFactsStart1() {
  ++currentIndex1;
  if (currentIndex1 >= quotes1.length) {
    currentIndex1 = 0;
  }
  dashFacts1.innerHTML = quotes1[currentIndex1];
}

// scrolling quotes on View Tutors
function dashFactsStart2() {
  ++currentIndex2;
  if (currentIndex2 >= quotes2.length) {
    currentIndex2 = 0;
  }
  dashFacts2.innerHTML = quotes2[currentIndex2];
}

setInterval(startFacts, 5000);
