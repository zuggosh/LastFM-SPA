import { TAB_SELECTED } from '../../actions/selectTab';

export default function( state = null, action){
  switch(action.type){
    case TAB_SELECTED:
      state = [];
      return action.payload.data;
    }

  return state;
}