const initState = {
  h_length: 0,
  v_length: 0,
  blur: 0,
  spread: 0,
  bg_color: 0,
  box_color: 0,
  opacity: 0.5,
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