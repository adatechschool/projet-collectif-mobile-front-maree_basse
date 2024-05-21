// var Airtable = require('airtable');
// import { API_TOKEN } from "../env.jsx";

// var base = new Airtable({ apiKey: API_TOKEN }).base('appEksYm9WhIjEtus');
const apiUrl = "http://192.168.1.198:3000/appli";


export default class SpotModel {
  constructor(id, name, place, image, difficulty, breaktype, peakseasonbegins, peakseasonends, link, geocode) {
    this.id = id;
    this.name = name;
    this.place = place;
    this.image = image;
    this.difficulty = difficulty;
    this.breaktype = breaktype;
    this.peakseasonbegins = peakseasonbegins;
    this.peakseasonends = peakseasonends;
    this.geocode = geocode;
    this.link = link;
  }
}

// export const fetchSpotData = () => {
//     return new Promise((resolve, reject) => {
//         base("Surf Destinations").select({
//             maxRecords: 100,
//             view: "By Surf Break"
//         }).eachPage(function page(records, fetchNextPage) {
//             resolve(records);
//             fetchNextPage();
//         }, function done(err) {
//             if (err) {
//                 reject(err);
//             }
//         });
//     });
// };

export function fetchSpots() {
    return fetch(`${apiUrl}`)
    //Pas de method précisée : GET par défaut
.then(response => response.json())
}

export function fetchAddSpot(donnees){
  return fetch(`${apiUrl}`,{
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      //Evite les requêtes depuis ou vers d'autres sites web
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //mode de cache utilisé : cache du navigateur
      credentials: "same-origin", // include, *same-origin, omit
      //info d'identification qu'on souhaite utiliser pour la demande(envoi de cookies d'identification en plus)
      headers: {
      "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //en-tête de la requête
      redirect: "follow", // manual, *follow, error
      //redirection vers URL indiquée
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //Ne pas indiquer la page d'origine de la requête
       body: JSON.stringify(donnees),
      // le type utilisé pour le corps doit correspondre à l'en-tête "Content-Type"
  })
   // transforme la réponse JSON reçue en objet JavaScript natif;
}