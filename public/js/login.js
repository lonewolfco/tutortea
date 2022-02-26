const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("made it here");
  const username = $("#username-signup").val().trim();
  const password = $("#password-signup").val().trim();

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
      const invalidResponse = await response.json();
      userCreateValidation.classList.remove("d-none");
      userCreateValidation.innerHTML = invalidResponse.message;
    }
  }
};

$("#signup-form").submit(signupFormHandler);
