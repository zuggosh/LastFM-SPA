import axios from 'axios';

const API_KEY = 'ce5ceabebbe101e3e04685022e994525';


export const FETCH_ARTIST = 'FETCH_ARTIST';

export function fetchArtist(name){
    const URL_INFO_ARTIST = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${API_KEY}&format=json`;
    const artistInfo = axios.get(URL_INFO_ARTIST);

    const URL_TOPALBUMS_ARTIST = `http://ws.audioscrobbler.com//2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json`;
    const topAlbumsInfo = axios.get(URL_TOPALBUMS_ARTIST);

    console.log(topAlbumsInfo);

    return{
      type: FETCH_ARTIST,
      payload: {
          artistInfo,
          topAlbumsInfo
      }
    };
}
