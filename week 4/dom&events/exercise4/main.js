const nameInput = document.getElementById("nameInput");
const salaryInput = document.getElementById("salaryInput");
const birthdayInput = document.getElementById("birthdayInput");
const phoneInput = document.getElementById("phoneInput");

const submitBtn = document.getElementById("submitBtn");
const errorsBox = document.getElementById("errorsBox");


const createError = function (msg) {
  const error = document.createElement("p");
  error.textContent = msg;
  error.style.color = "red";
  errorsBox.appendChild(error);
}

const validate = function () {
  errorsBox.innerHTML = "";
  const name = nameInput.value;
  const salary = Number(salaryInput.value);
  const birthday = birthdayInput.value;
  const phone = phoneInput.value;

  if (name.length <= 2) {
    createError("Name must be longer than 2 characters");
  }

  if (salary <= 10000 || salary >= 16000) {
    createError("Salary is not in range (10,000 - 16,000)");
  }

  if (birthday === "") {
    createError("birthday is missing");
  }

  if (phone.length !== 10) {
    createError("phone number has to have 10 digits");

  }
}
  submitBtn.onclick = function () {
  validate();
  };