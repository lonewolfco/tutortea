

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
  if (response.ok) document.location.reload();

  else alert("failed to post new tutor");
  
};

document.querySelector("#tutor-button").addEventListener("click", submitTutor);
