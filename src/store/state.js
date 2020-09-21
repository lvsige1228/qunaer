let defaultCity = '上海';

try {
  // console.log(localStorage.getItem(city))
  if (localStorage.city) {
        defaultCity = localStorage.city
    }
  } catch (e) {}

export default {
  city: defaultCity,
}
