import { combineReducers } from 'redux';
import FETCH_ARTIST from './reducer_artistInfo';

const rootReducer = combineReducers({
  artist: FETCH_ARTIST
});

export default rootReducer;
