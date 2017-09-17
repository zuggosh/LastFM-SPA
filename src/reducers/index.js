import { combineReducers } from 'redux';

import ArtistReducer  from './reducer_artistInfo';
import ArtistReducerAlbums  from './reducer_artistAlbums';
import ArtistReducerTracks  from './reducer_artistTracks';

const rootReducer = combineReducers({
  artist: ArtistReducer,
  artistAlbums: ArtistReducerAlbums,
  artistTracks: ArtistReducerTracks
});

export default rootReducer;
