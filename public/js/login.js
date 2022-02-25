window.onload = function () {
  const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = $("#username-login").val().trim();
    const password = $("#password-login").val().trim();

    const userValidation = document.querySelector(".userValidation");

    if (username && password) {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          password
        }),
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        const invalidResponse = await response.json();
        userValidation.classList.remove("d-none");
        userValidation.innerHTML = invalidResponse.message;
      }
    }
  };

  const loginFormHandler1 = async (event) => {
    event.preventDefault();

    const username = $("#username-login1").val().trim();
    const password = $("#password-login1").val().trim();

    const userValidation = document.querySelector(".userValidation");

    if (username && password) {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          password
        }),
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        const invalidResponse = await response.json();
        userValidation.classList.remove("d-none");
        userValidation.innerHTML = invalidResponse.message;
      }
    }
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = $("#username-signup").val().trim();
    const password = $("#password-signup").val().trim();

    const userCreateValidation = document.querySelector(
      ".userCreateValidation"
    );

    if (username && password) {
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
          username,
          password
        }),
        headers: {
          "Content-Type": "application/json"
        },
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

  $('#login-form').submit(loginFormHandler);
  $('#login-form1').submit(loginFormHandler1);
  $('#signup-form').submit(signupFormHandler);
  // document
  //   .querySelector(".login-form")
  //   .addEventListener("submit", loginFormHandler);

  // document
  //   .querySelector(".signup-form1")
  //   .addEventListener("submit", signupFormHandler);

  // document
  //   .querySelector(".login-form1")
  //   .addEventListener("submit", loginFormHandler1);

  // document
  //   .querySelector(".signup-form")
  //   .addEventListener("submit", signupFormHandler);
};