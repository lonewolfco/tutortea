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
      "/?toast=" + encodeURI("Review submitted successfully")
    );
    const message = "Review submitted successfully";
  } else {
    alert("Failed to submit review.");
  }
};

document
  .querySelector("#submit-review")
  .addEventListener("click", submitReview);

module.exports = { message };
