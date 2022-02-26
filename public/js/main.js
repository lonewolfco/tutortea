const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(
        "/?toast=" + encodeURI(`Welcome ${username}! Bottoms up!`)
      );
    } else {
      document.location.replace(
        "/logout/?toast=" +
          encodeURI(
            "Invalid user name or password. Min 8 alphanumeric characters."
          )
      );
    }
  }
};

$("#login-form").submit(loginFormHandler);

let quoteBlock = document.querySelector(".quoteBlock");
let quotesFooter = [
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
  if (currentIndex >= quotesFooter.length) {
    currentIndex = 0;
  }
  quoteBlock.innerHTML = quotesFooter[currentIndex];
}

var teaFacts = setInterval(advanceTeaFacts, 8000);
