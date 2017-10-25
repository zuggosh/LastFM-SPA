import axios from 'axios';
import { API_KEY }  from './variables';

export const FETCH_ARTISTALBUMS = 'FETCH_ARTISTALBUMS';

export function fetchArtistAlbums(name){
    const URL_ALBUMS_ARTIST = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json`;
    const topAlbums = axios.get(URL_ALBUMS_ARTIST);

    return{
        type: FETCH_ARTISTALBUMS,
        payload: topAlbums
    };
}
