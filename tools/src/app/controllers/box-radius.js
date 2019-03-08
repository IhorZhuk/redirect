export default {

  update: (name, value) => {
    store.dispatch({
      type: 'BOX_RADIUS:UPDATE',
      name: name,
      value: value,
    });
  } 

}