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

$("#login-form").submit(loginFormHandler)