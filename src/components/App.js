import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/weatherAction';

import Weather from './Weather';
import LocationForm from './LocationForm';


@connect( (store) => {
  return {
    weather: store.weather.weather
  };
})

class App extends Component {

  componentWillMount(){
    this.props.dispatch(
      fetchWeather({
        city: 'Boston',
        state: 'MA'
      })
    )
  }

  render() {
    const {weather} = this.props;
    console.log(weather);
    return (
      <div className='container'>
        <div className='row'>
          <div className='text-center col-md-6 col-md-offset-3'>
            <h1>Weather Check</h1>
            <Weather weather={weather}/>
            <LocationForm  onLocationChange = {this.onLocationChange.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }

  onLocationChange(location) {
    this.props.dispatch(
      fetchWeather({
        city: location.city,
        state: location.state
      })
    )
  }
}


export default App;
