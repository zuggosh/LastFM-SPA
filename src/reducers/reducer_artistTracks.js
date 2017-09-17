import { FETCH_ARTISTALBUMS } from '../actions/getArtistTracks';

export default function (state = [], action){
    switch (action.type){
        case FETCH_ARTISTALBUMS:
            state = [];
            // return state.concat([ action.payload.data ]);
            return [action.payload.data, ...state]; //same above line code
    }
    return state;
}
