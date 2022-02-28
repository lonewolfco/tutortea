const submitTutor = async (event) => {
  event.preventDefault();
  const body = {
    email: document.querySelector("#email").value,
    name: document.querySelector("#name").value,
  };

  const response = await fetch("/api/tutor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (response.ok) {
    document.location.replace(
      "/tutorportal/?toast=" + encodeURI(`Thanks for adding a tutor!`)
    );
  } else
    document.location.replace(
      "/tutorportal/?toast=" +
        encodeURI("You may have missed a field. Try again!")
    );
};

document.querySelector("#tutor-button").addEventListener("click", submitTutor);
