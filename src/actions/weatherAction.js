import axios from 'axios';

export function fetchWeather(location){
  return function (dispatch) {
    axios.get('http://api.wunderground.com/api/'+ process.env.API_KEY +'/conditions/q/' + location.state + '/' + location.city + '.json')
      .then( (response) => {
        dispatch({
          type: "FETCH_WEATHER_FULFILLED",
          payload: response.data
        })
      })
      .catch( (err) => {
        dispatch({
          type: 'FETCH_WEATHER_REJECTED',
          payload: err
        })
      })
  }
}
