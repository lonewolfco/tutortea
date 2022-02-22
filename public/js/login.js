window.onload = function () {

const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector(".username-login").value.trim();
  const password = document.querySelector(".password-login").value.trim();

  const userValidation = document.querySelector(".userValidation");

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
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

  const username = document.querySelector(".username-login1").value.trim();
  const password = document.querySelector(".password-login1").value.trim();

  const userValidation = document.querySelector(".userValidation");

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
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
      document.location.replace("/");
    } else {
      const duplicateUser = await response.json();
      userCreateValidation.classList.remove("d-none");
      userCreateValidation.innerHTML = duplicateUser.message;
    }
  }
};


  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);

  document
    .querySelector(".signup-form1")
    .addEventListener("submit", signupFormHandler);

  document
    .querySelector(".login-form1")
    .addEventListener("submit", loginFormHandler1);

  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
};
