const initState = {
  h_length: 10,
  v_length: 10,
  blur: 20,
  spread: 0,
  bg_color: 0,
  box_color: 0,
  color: 'rgba(0,0,0,0.3)',
  inset: false
}

const BoxShadowReducer = (state = initState, action) => {
  
  switch(action.type) {

    case 'BOX_SHADOW:UPDATE':
      const newState = {...state};
      newState[action.name] = action.value;
      return newState;
    default:
      return state
  }
}


export default BoxShadowReducer;