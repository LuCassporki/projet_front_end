import Route from "./ROute.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/galerie", "galerie", "/pages/gallery.html",[]),
    new Route("/connexion", "connexion", "/pages/auth/connexion.html",["deconnecter"] , "/js/auth/connexion.js"),
    new Route("/s'inscrir", "s'inscrir", "/pages/auth/inscription.html",["deconnecter"], "/js/auth/inscription.js"),
    new Route("/monCompte", "mon compte", "/pages/auth/monCompte.html",["admin","client"]),
    new Route("/editpassword", "edit password", "/pages/auth/editpassword.html",["admin","client"]),
    new Route("/allResa", "vos reservations", "/reservations/allResa.html",["client"]),
    new Route("/reserver", "reserver", "/reservations/reserver.html",["client"]),

];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
