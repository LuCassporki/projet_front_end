export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.authorize = authorize;
  }
}

/*
[]-> all peaple
["deconnecter"]-> utilisateur connecté
["client"]-> role client
["admin"]-> role admin
["admin","client"]-> client ou admin
*/
