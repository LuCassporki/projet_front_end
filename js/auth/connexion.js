const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnCo = document.getElementById("btnconnexion");

btnCo.addEventListener("click", checkCredentials);

function checkCredentials() {
  //info factisse for the moment
  if (
    mailInput.value === "cass@tete.com" &&
    passwordInput.value === "LuCass2708!"
  ) {
    //recuperer les vrai toeckens pour la BBDD
    const token = "ujhygfjgjgvyjtjgvygjkg";
    setToken(token);
    //placer les tokens en cookie

    window.location.replace("/");
  } else {
    alert("Connexion échouée");
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}
