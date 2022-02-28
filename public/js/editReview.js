const editFormHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute("data-id");
  const rating = parseInt(
    document.querySelector(".star-icon [type=radio]:checked").value
  );
  const nights = document.querySelector(".weekends").checked;
  const weekends = document.querySelector(".nights").checked;
  const daytime = document.querySelector(".daytime").checked;
  const review = document.querySelector("#myReview").value;

  const response = await fetch(`/api/review/${id}`, {
    method: "PUT",

    body: JSON.stringify({
      rating,
      nights,
      weekends,
      daytime,
      review,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(
      "/?toast=" + encodeURI("Review updated successfully")
    );
  } else {
    document.location.replace(
      "/?toast=" + encodeURI("Review updated successfully")
    );
  }
};

const deleteFormHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute("data-id");
  const response = await fetch(`/api/review/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(
      "/sip/?toast=" + encodeURI("Review deleted successfully")
    );
  } else {
    document.location.replace(
      `/edit/${id}/?toast=` +
        encodeURI("Review was not deleted successfully. Please try again")
    );
  }
};

document
  .querySelector(".edit-review")
  .addEventListener("click", editFormHandler);

document
  .querySelector("#delete-review")
  .addEventListener("click", deleteFormHandler);

console.log("Trying to get this to work still");
