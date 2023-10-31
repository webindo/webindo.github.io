const myToast = new bootstrap.Toast(".toast");
setTimeout(() => {
  myToast.show();
});

// script di bawah digunakan untuk bagian contact
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzQ_4pDUDo6CpiMCK_sOQmZ_hvVTqiAeKaMkLzG8k2L_K-Dc01RLxr0oEqNSpomaQ4F/exec";
const form = document.forms["ArstContact"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika sudah di submit
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //notif success
      myAlert.classList.toggle("d-none");
      //reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
