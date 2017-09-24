import { combineReducers } from 'redux';

import ArtistReducer  from './reducer_artistInfo';
import ArtistReducerAlbums  from './reducer_artistAlbums';
import ArtistReducerTracks  from './reducer_artistTracks';

//tabs
import Tabs from './tabs/reducer_tabs';
import ActiveTabs from './tabs/reducer_activeTab';

const rootReducer = combineReducers({
  artist: ArtistReducer,
  artistAlbums: ArtistReducerAlbums,
  artistTracks: ArtistReducerTracks,
  tabs: Tabs,
  activeTab: ActiveTabs
});

export default rootReducer;
