import Route from "./ROute.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "galerie", "/pages/gallery.html"),
    new Route("/connexion", "connexion", "/pages/auth/connexion.html"),
    new Route("/s'inscrir", "s'inscrir", "/pages/auth/inscription.html", "/js/auth/inscription.js"),
    new Route("/monCompte", "mon compte", "/pages/auth/monCompte.html"),
    new Route("/editpassword", "edit password", "/pages/auth/editpassword.html"),
    new Route("/allResa", "vos reservations", "/reservations/allResa.html"),
    new Route("/reserver", "reserver", "/reservations/reserver.html"),

];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
