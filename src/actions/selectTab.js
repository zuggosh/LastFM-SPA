import axios from 'axios';

export const TAB_SELECTED = 'TAB_SELECTED';
const API_KEY = 'ce5ceabebbe101e3e04685022e994525';


export function selectTab( tab ){
  let jsonShart;
  const sentAjax = (url) => {
    jsonShart = axios.get(url);
  };

  if ( tab.title === 'Top Artist' ){
    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;
    sentAjax(url);
  } else if( tab.title === 'Top Tracks' ){
    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;
    sentAjax(url);
  } else if( tab.title === 'Top Tags' ){
    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=${API_KEY}&format=json`;
    sentAjax(url);
  }

  return {
    type: TAB_SELECTED,
    payload: jsonShart
  };
}