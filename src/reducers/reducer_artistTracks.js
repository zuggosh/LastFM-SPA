import { FETCH_ARTISTSONGS } from '../actions/getArtistTracks';

export default function (state = [], action){
    switch (action.type){
        case FETCH_ARTISTSONGS:
            state = [];
            return [action.payload.data, ...state];
    }
    return state;
}
