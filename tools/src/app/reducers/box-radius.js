const initState = {
  top_left: 15,
  top_right: 15,
  bottom_left: 15,
  bottom_right: 15,
  all: 15,
}

const BoxShadowReducer = (state = initState, action) => {
  
  switch(action.type) {

    case 'BOX_RADIUS:UPDATE':
      const newState = {...state};
      newState[action.name] = action.value;
      return newState;
    default:
      return state
  }
}


export default BoxShadowReducer;