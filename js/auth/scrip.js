const tokenCookieName = "accesstoken";
const RoleCookieName = "role";
const deconnexion = document.getElementById("decobtn");

//permet de deconnecter l'utilisateur
deconnexion.addEventListener("click", deconnexionUser); //appel de la fonction deconnexionUser

function getRole() {
  return getCookie(RoleCookieName);
}

function deconnexionUser() {
  eraseCookie(tokenCookieName); //supprime le cookie
  eraseCookie(RoleCookieName); //supprime le cookie
  window.location.reload(); //recharge la page
}

function setToken(token) {
  //permet de placer le token dans le cookie
  setCookie(tokenCookieName, token, 7); //le token est valable 7 jours
}
function getToken() {
  //permet de recuperer le token
  return getCookie(tokenCookieName); //retourne le token
}
//methode fixe-----------------------------------------------------------------------------------------
//methode de gestion des cookies pour la connexion et la deconnexion de l'utilisateur
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

//methode de recuperation des cookies
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

//methode de suppression des cookies
function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
//------------------------------------------------------------------------------------------------------

//methode permettant de verifier si l'utilisateur est connecté
function isConnected() {
  if (getToken() == null || getToken == undefined) {
    return false;
  } else {
    return true;
  }
}

// if (isConnected()) {
//   alert("Vous êtes connecté");
// } else {
//   alert("Vous n'êtes pas connecté");
// }

//role
// 1-deconnecter
// 2-connecter(admin ou client)
// 3   -admin
// 4  -client

function showAnHideElementsForRoles() {
  const userConnected = isConnected();
  const role = getRole();

  let allElementsToEdit = document.querySelectorAll("[data-show]");
  allElementsToEdit.forEach((element) => {
    switch (element.dataset.show) {
      case "deconnecter":
        if (userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "connecter":
        if (!userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "admin":
        if (!userConnected || role !== "admin") {
          element.classList.add("d-none");
        }
        break;
      case "client":
        if (userConnected || role !== "client") {
          element.classList.add("d-none");
        }
        break;
    }
  });
}
