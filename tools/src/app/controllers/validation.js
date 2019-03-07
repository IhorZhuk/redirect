export default {

  onlyNumbers(val) {
    return val.replace(/[^0-9\.]+/g, '');
  },

}