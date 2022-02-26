
const quoteBlock = document.querySelector("#quoteBlock");
const quotes = [
  "Love and scandal are the best sweeteners of tea. ~ Henry Fielding ~",
  "A simple cup of tea is far from a simple matter. ~ Mary Lou Heiss ~",
  "We are like Tea, we do not know our own strength until we are in Hot Water. ~ Sister Busche ~",
  "Some people will tell you there is a great deal of poetry and fine sentiment in a chest of tea. ~ Ralph Waldo Emerson ~",
];
var currentIndex = -1;
function advanceTeaFacts() {
  ++currentIndex;
  if (currentIndex >= quotes.length) {
    currentIndex = 0;
  }
  quoteBlock.innerHTML = quotes[currentIndex];
}

var teaFacts = setInterval(advanceTeaFacts, 8000);

