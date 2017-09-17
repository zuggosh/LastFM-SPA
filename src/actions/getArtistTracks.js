import axios from 'axios';

const API_KEY = 'ce5ceabebbe101e3e04685022e994525';

export const FETCH_ARTISTSONGS = 'FETCH_ARTISTSONGS';

export function fetchArtistTracks (name){
    const URL_TOPTRACKS_ARTIST = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${API_KEY}&format=json`;
    const topTracks = axios.get(URL_TOPTRACKS_ARTIST);

    return{
        type: FETCH_ARTISTSONGS,
        payload: topTracks
    };
}
