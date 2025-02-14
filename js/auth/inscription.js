const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValid = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscripton");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValid.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm() {
   const nomok =validateRequired(inputNom);
   const prenomok =validateRequired(inputPrenom);
   const mailok =validateMail(inputMail);

   //permet da cacher le button tant que les champ pas rempli
    if(nomok && prenomok && mailok){
        btnValidation.disabled = false;
    }else{
        btnValidation.disabled = true;
    }
}


//Function permettant de valider un input


function validateMail(input){ //Fonction permettant de valider un mail
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

function validateRequired(input) { //Fonction permettant de valider un input
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
