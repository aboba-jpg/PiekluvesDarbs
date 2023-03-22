const registerBtn = document.getElementById("register-btn");
const registrationForm = document.getElementById("registration-form");

registerBtn.addEventListener("click", () => {
  if (registrationForm.style.display === "none") {
    registrationForm.style.display = "block";
  } else {
    registrationForm.style.display = "none";
  }
});