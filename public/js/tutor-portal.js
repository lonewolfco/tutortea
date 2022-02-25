

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

async function deleteFormHandler(event) {
  event.preventDefault();
  
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  const response = await fetch(`/api/tutor/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        post_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  
}


async function editFormHandler(event) {
  event.preventDefault();

  const tutorName= document.querySelector('input[name="tutor-name"]').value;
  const tutorEmail = document.querySelector('input[name="tutor-email"]').value;
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  const response = await fetch(`/api/tutor/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          tutorName,
         tutorEmail
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
}



document.querySelector("#tutor-button").addEventListener("click", submitTutor);
