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
setCookie(RoleCookieName, "admin", 7); 
    window.location.replace("/");
  } 
  
  else if (
    mailInput.value === "test@test.com" &&
    passwordInput.value === "123!"
  ) {
    //recuperer les vrai toeckens pour la BBDD
    const token = "gthvukytftyfkho";
    setToken(token);
    //placer les tokens en cookie
setCookie(RoleCookieName, "client", 7); 
    window.location.replace("/");
  } 
  
  else {
    alert("Connexion échouée");
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}
