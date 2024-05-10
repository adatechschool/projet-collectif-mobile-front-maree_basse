var Airtable = require('airtable');
import { API_TOKEN } from "../env.jsx";

var base = new Airtable({ apiKey: API_TOKEN }).base('appEksYm9WhIjEtus');



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

export const fetchSpotData = () => {
    return new Promise((resolve, reject) => {
        base("Surf Destinations").select({
            maxRecords: 100,
            view: "By Surf Break"
        }).eachPage(function page(records, fetchNextPage) {
            resolve(records);
            fetchNextPage();
        }, function done(err) {
            if (err) {
                reject(err);
            }
        });
    });
};
