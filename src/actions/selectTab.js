const TAB_SELECTED = 'TAB_SELECTED';

export function selectTab( tab ){
  return {
    type: TAB_SELECTED,
    payload: tab
  };
}
