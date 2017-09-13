import { FETCH_ARTIST } from '../actions/index';

export default function (state = [], action){
    switch (action.type){
        case FETCH_ARTIST:
            // return state.concat([ action.payload.data ]);
            return [action.payload.data, ...state]; //same above line code
    }
    return state;
}
