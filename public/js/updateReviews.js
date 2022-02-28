const updateReview = async (event) => {
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
    method: "UPDATE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    document.location.replace(
      "/sip/?toast=" + encodeURI("Review updated successfully")
    );
    const message = "Review updated successfully";
  } else {
    alert("Failed to submit review.");
  }
};

document
  .querySelector(".update-review")
  .addEventListener("click", updateReview);
