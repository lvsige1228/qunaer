export default {
  CHANGE_STATE (state, city) {
    state.city = city;
    try {
      localStorage.city = city;
      console.log(state.city)
    } catch (e) {

    }
  },
}
