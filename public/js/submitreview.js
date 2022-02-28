const submitReview = async (event) => {
  event.preventDefault();
  const body = {
    tutor_id: parseInt(document.querySelector("#tutor-select").value),
    rating: parseInt(
      document.querySelector(".star-icon [type=radio]:checked").value
    ),
    nights: document.querySelector("#weekends").checked,
    weekends: document.querySelector("#nights").checked,
    daytime: document.querySelector("#daytime").checked,
    review: document.querySelector("#review").value,
  };

  const response = await fetch("/api/review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    document.location.replace(
      "/sip/?toast=" + encodeURI("Review submitted successfully")
    );
  } else {
    document.location.replace(
      "/?toast=" + encodeURI("You may have missed a field. Try again!")
    );
  }
};

document
  .querySelector("#submit-review")
  .addEventListener("click", submitReview);
