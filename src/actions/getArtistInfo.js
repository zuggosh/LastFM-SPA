import axios from 'axios';
import { API_KEY }  from './variables';

export const FETCH_ARTIST = 'FETCH_ARTIST';

export function fetchArtist(name){
    const URL_INFO_ARTIST = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${API_KEY}&format=json`;
    const artistInfo = axios.get(URL_INFO_ARTIST);

    return{
      type: FETCH_ARTIST,
      payload: artistInfo
    };
}
