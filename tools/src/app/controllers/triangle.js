export default {

  update: (name, value) => {
    store.dispatch({
      type: 'TRIANGLE:UPDATE',
      name: name,
      value: value,
    });
  } 

}