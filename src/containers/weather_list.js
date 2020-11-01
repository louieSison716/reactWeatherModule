// installed parklines library, to use for the line chart
// npm install --save react-sparklines

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{

renderWeather(cityData) {

  const name = cityData.city.name;
  const temps = cityData.list.map( weather => weather.main.temp );
  const pressure = cityData.list.map( weather => weather.main.pressure );
  const humidity = cityData.list.map( weather => weather.main.humidity );

  return (
    <tr key={ name }>
     <td>{name}</td>
     <td><Chart data={temps} color="orange" units="K"/></td>
     <td><Chart data={pressure} color="green" units="hPa"/></td>
    <td><Chart data={humidity} color="black" units="%"/></td>
    </tr>
  );
}

 render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// connects the values of weather state from reducers/index.js to WeatherList
// maps weather state to props
// from reducers/index.js
function mapStateToProps(state){
 return {
      weather: state.weather
  };
}
// connects the mapped props to WeatherList Component
export default connect(mapStateToProps)(WeatherList);
