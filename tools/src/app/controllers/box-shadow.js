export default {

  update: (name, value) => {
    store.dispatch({
      type: 'BOX_SHADOW:UPDATE',
      name: name,
      value: value,
    });
  } 

}