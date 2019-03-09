const initState = {
  width:30,
  height: 50,
  direction: 'TOP',
  color: '#00aeef',
  border_width: '0 25px 50px 25px',
  border_color: 'transparent transparent #00aeef transparent'
}

const TriangleReducer = (state = initState, action) => {
  
  switch(action.type) {

    case 'TRIANGLE:UPDATE':
      const ns = {...state};
      ns[action.name] = action.value;

      if (ns.direction == 'TOP') {
        ns.border_width = `0 ${ns.width/2}px ${ns.height}px ${ns.width/2}px`;
        ns.border_color = `transparent transparent ${ns.color} transparent`;
      } else if (ns.direction == 'TOP_RIGHT') {
        ns.border_width = `0 ${ns.width}px ${ns.width}px 0px`;
        ns.border_color = `transparent ${ns.color} transparent transparent`;
      } else if (ns.direction == 'RIGHT') {
        ns.border_width = `${ns.height/2}px 0 ${ns.height/2}px ${ns.width}px`;
        ns.border_color = `transparent transparent transparent ${ns.color}`;
      } else if (ns.direction == 'BOTTOM_RIGHT') {
        ns.border_width = `0 0 ${ns.width}px ${ns.width}px`;
        ns.border_color = `transparent transparent ${ns.color} transparent`;
      } else if (ns.direction == 'BOTTOM') {
        ns.border_width = `${ns.height}px ${ns.width/2}px 0 ${ns.width/2}px`;
        ns.border_color = `${ns.color} transparent transparent transparent`;
      } else if (ns.direction == 'BOTTOM_LEFT') {
        ns.border_width = `${ns.width}px 0 0 ${ns.width}px`;
        ns.border_color = `transparent transparent transparent ${ns.color}`;
      } else if (ns.direction == 'LEFT') {
        ns.border_width = `${ns.height/2}px ${ns.width}px ${ns.height/2}px 0`;
        ns.border_color = `transparent ${ns.color} transparent transparent`;
      } else if (ns.direction == 'TOP_LEFT') {
        ns.border_width = `${ns.width}px ${ns.width}px 0 0`;
        ns.border_color = `${ns.color} transparent transparent transparent`;
      }

      if (ns.direction.includes('TOP_') || ns.direction.includes('BOTTOM_')) {
        if (action.name == 'width') {
          ns.height = action.value;
        } else if (action.name == 'height') {
          ns.width = action.value;
        } else {
          ns.height = ns.width;
        }
      }

      return ns;
    default:
      return state
  }
}


export default TriangleReducer;