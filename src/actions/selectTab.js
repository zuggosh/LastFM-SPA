import axios from 'axios';
import { API_KEY }  from './variables';

export const TAB_SELECTED = 'TAB_SELECTED';

export function selectTab( tab ){
  let jsonShart;
  let url = null;
  const sentAjax = (url) => {
    jsonShart = axios.get(url);
  };
  switch (tab.title){
      case 'Top Artist':
          url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;
          break;
      case 'Top Tracks':
          url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;
          break;
      case 'Top Tags':
          url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=${API_KEY}&format=json`;
          break;
  }
  sentAjax(url);
  return {
    type: TAB_SELECTED,
    payload: jsonShart
  };
}