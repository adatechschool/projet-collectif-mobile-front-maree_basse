// var Airtable = require('airtable');
// import { API_TOKEN } from "../env.jsx";

// var base = new Airtable({ apiKey: API_TOKEN }).base('appEksYm9WhIjEtus');
const apiUrl = "http://192.168.11.173:3000/appli";


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