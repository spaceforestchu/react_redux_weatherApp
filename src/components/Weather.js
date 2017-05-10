import React, {Component} from 'react';

class Weather extends Component {
  render() {

    if (Object.getOwnPropertyNames(this.props.weather).length === 0) {
      return (
        <div></div>
      )
    }

    const location = this.props.weather.current_observation.display_location.full;
    const weather = this.props.weather.current_observation.weather;
    const icon = this.props.weather.current_observation.icon_url;
    const temp = this.props.weather.current_observation.temperature_string;
    const humidity = this.props.weather.current_observation.relative_humidity;
    const wind = this.props.weather.current_observation.wind_string;
    const dewpoint = this.props.weather.current_observation.dewpoint_string;
    return (
      <div>
        <h3>{location}</h3>
        <h3>{weather}</h3>
        <img src={icon} />
        <h1>{temp}</h1>
        <ul className='list-group'>
          <li className='list-group-item'><strong>Relative Humidity: {humidity}</strong></li>
          <li className='list-group-item'><strong>Wind: </strong>{wind}</li>
          <li className='list-group-item'><strong>Dewpoint: </strong>{dewpoint}</li>
        </ul>
      </div>
    )
  }
}



export default Weather;
