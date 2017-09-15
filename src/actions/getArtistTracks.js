import axios from 'axios';

const API_KEY = 'ce5ceabebbe101e3e04685022e994525';

export const FETCH_ARTISTALBUMS = 'FETCH_ARTISTALBUMS';

export function fetchArtist(name){
    const URL_ALBUMS_ARTIST = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json`;
    const topAlbums = axios.get(URL_ALBUMS_ARTIST);

    return{
        type: FETCH_ARTISTALBUMS,
        payload: topAlbums
    };
}
