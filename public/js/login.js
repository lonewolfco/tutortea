const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector(".username-signup").value.trim();
  const password = document.querySelector(".password-signup").value.trim();

  const userCreateValidation = document.querySelector(".userCreateValidation");

  if (username && password) {
    const response = await fetch("/api/user", {
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
        "/login/?toast=" +
          encodeURI(`This username is invalid or already taken! Try again!`)
      );
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

