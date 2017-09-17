import { FETCH_ARTISTSONGS } from '../actions/getArtistTracks';

export default function (state = [], action){
    switch (action.type){
        case FETCH_ARTISTSONGS:
            state = [];
            // return state.concat([ action.payload.data ]);
            return [action.payload.data, ...state]; //same above line code
    }
    return state;
}
