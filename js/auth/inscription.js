const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputPasswordValid = document.getElementById("ValidatePasswordInput");
const inputValid = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscripton");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValid.addEventListener("keyup", validateForm);
// inputPasswordValid.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm() {
  const nomok = validateRequired(inputNom);
  const prenomok = validateRequired(inputPrenom);
  const mailok = validateMail(inputMail);
  const PWok = validatePW(inputPassword);
  const PW2ok = validatePW2(inputPassword, inputPasswordValid);

  //permet da cacher le button tant que les champ pas rempli
  if (nomok && prenomok && mailok && PWok && PW2ok) {
    btnValidation.disabled = false;
  } else {
    btnValidation.disabled = true;
  }
}

//Function permettant de valider

function validateRequired(input) {
  //Fonction permettant de valider un input
  if (input.value != "") {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Fonction permettant de valider un mail
function validateMail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Fonction permettant de valider un pass word
function validatePW(input) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const PWUser = input.value;
  if (PWUser.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

// Fonction permettant de valider un pass word
function validatePW2(inputPassword, inputPasswordValid) {
  if (inputPasswordValid.value == inputPassword.value) {
    inputPasswordValid.classList.add("is-valid");
    inputPasswordValid.classList.remove("is-invalid");
    return true;
  } else {
    inputPasswordValid.classList.remove("is-valid");
    inputPasswordValid.classList.add("is-invalid");
    return false;
  }
}
