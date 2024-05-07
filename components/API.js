var Airtable = require('airtable');
import { API_TOKEN } from "../env.jsx";

var base = new Airtable({ apiKey: API_TOKEN }).base('appEksYm9WhIjEtus');

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
