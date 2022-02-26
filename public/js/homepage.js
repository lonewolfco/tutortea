let quoteBlock = document.querySelector(".quoteBlock");
let quotes = [
  "Love and scandal are the best sweeteners of tea. ~Henry Fielding~",
  "Hello, is it tea, you're looking for....? ~Lionel 'T' Richie~",
  "A simple cup of tea is far from a simple matter. ~Mary Lou Heiss~",
  "I picked up my friend's coffee by accident then put it back. It wasn't my cup of tea. ~Anonymous~",
  "We are like tea, we do not know our own strength until we are in Hot Water. ~Sister Busche~",
  "Varie-tea is the spice of life! ~Collabrewators~",
  "Some people will tell you there is a great deal of poetry and fine sentiment in a chest of tea. ~Ralph Waldo Emerson~",
  "Hones-tea is the best policy. ~Anonymous~",
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
