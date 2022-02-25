const loginFormHandler1 = async (event) => {
  event.preventDefault();

  const username = document.querySelector(".username-login1").value.trim();
  const password = document.querySelector(".password-login1").value.trim();

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(
        "/?toast=" + encodeURI(`You're logged in ${username}! Bottoms up!`)
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

const signupFormHandler1 = async (event) => {
  event.preventDefault();

  const username = document.querySelector(".username-signup1").value.trim();
  const password = document.querySelector(".password-signup1").value.trim();

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
};

document
  .querySelector(".login-form1")
  .addEventListener("submit", loginFormHandler1);

document
  .querySelector(".signup-form1")
  .addEventListener("submit", signupFormHandler1);
