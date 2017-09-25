
import axios from 'axios';

const API_KEY = 'ce5ceabebbe101e3e04685022e994525';

export const FETCH_TOPCHART = 'FETCH_TOPCHART';

export function fetchTopChart (nameChart){

    // /2.0/?method=chart.gettoptags&api_key=YOUR_API_KEY&format=json  -- tags
    // /2.0/?method=chart.gettoptracks&api_key=YOUR_API_KEY&format=json --tracks
    // /2.0/?method=chart.gettopartists&api_key=YOUR_API_KEY&format=json -- top artist

    const URL_TOPARTISTS = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;
    const topArtist = axios.get(URL_TOPARTISTS);

    return{
        type: FETCH_TOPCHART,
        payload: chart
    };
}
