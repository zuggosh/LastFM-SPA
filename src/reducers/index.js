import { combineReducers } from 'redux';
import ArtistReducer  from './reducer_artistInfo';

const rootReducer = combineReducers({
  artist: ArtistReducer
});

export default rootReducer;
