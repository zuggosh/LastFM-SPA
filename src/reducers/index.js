import { combineReducers } from 'redux';
import ArtistReducer  from './reducer_artistInfo';
import ArtistReducerTracks  from './reducer_artistTracks';


const rootReducer = combineReducers({
  artist: ArtistReducer,
  artistTracks: ArtistReducerTracks
});

export default rootReducer;
