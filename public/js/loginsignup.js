const loginFormHandler1 = async (event) => {
  event.preventDefault();

  const username = $("#username-login1").val().trim();
  const password = $("#password-login1").val().trim();
  const userValidation = document.querySelector(".userValidation");

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
        const invalidResponse = await response.json();
        userValidation.classList.remove("d-none");
        userValidation.innerHTML = invalidResponse.message;
    }
  }
};

const signupFormHandler1 = async (event) => {
  event.preventDefault();

    const username = $("#username-signup1").val().trim();
    const password = $("#password-signup1").val().trim();
    const userCreateValidation = document.querySelector(".userValidation");

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
      const invalidResponse = await response.json();
      userValidation.classList.remove("d-none");
      userValidation.innerHTML = invalidResponse.message;
    }
  }
};

$('#login-form1').submit(loginFormHandler1);
$('#signup-form1').submit(signupFormHandler1);