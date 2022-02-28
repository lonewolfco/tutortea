const message = document.querySelector("#toast-body").innerHTML;

Toastify({
  text: message,
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "hsla(129, 18%, 21%, 1)",

    background: "linear-gradient(90deg, hsla(129, 18%, 21%, 0.5) 0%, hsla(120, 25%, 98%, 1) 100%)",
    
    background: "-moz-linear-gradient(90deg, hsla(129, 18%, 21%, 0.5) 0%, hsla(120, 25%, 98%, 1) 100%)",
    
    background: "-webkit-linear-gradient(90deg, hsla(129, 18%, 21%, 0.5) 0%, hsla(120, 25%, 98%, 1) 100%)",
    
  },

  onClick: function () {}, // Callback after click
}).showToast();
