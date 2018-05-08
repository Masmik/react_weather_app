import React from 'react';
// import {bindAll} from '../utils';

const temperatureTypeFahrenheit = 'fahrenheit';
const temperatureTypeCelsius = 'celsius';

class WeatherToday extends React.Component {
    constructor(props) {
        super(props);
        // bindAll(this,'handleTemperatureClick');
    }

    // handleTemperatureClick(e) {
    //
    //     if (e.target.classList.contains(temperatureTypeFahrenheit)) {
    //         this.props.handlerTemperatureChange(temperatureTypeFahrenheit);
    //     }
    //
    //     if (e.target.classList.contains(temperatureTypeCelsius)) {
    //         this.props.handlerTemperatureChange(temperatureTypeCelsius);
    //     }
    // }

    render() {
        const {address, forecast, temperatureType, temperature} = this.props;

        // if (forecast == null) {
        //     return;
        // }

        return(
            <div className="currentCityWeather">
                <h2 className="currentCityName">{address.split(',')[0]}</h2>
                <h3 className="currentRegion">{address.split(',')[1]}</h3>

                <div className="currentDate">
                    <span className="date"></span>
                </div>
                <div className="weatherCard">
                    <div className="weatherDescription">
                        <canvas className="weatherIcon current" data-icon={forecast.currently.icon} width="30" height="30"></canvas>
                        <span className="description">{forecast.currently.summary}</span>
                    </div>
                    <div className="temperature">
                        <span className="temperatureValue">{temperature.toFixed(0)}</span>
                        <span className="degreeIcon">°</span>
                    </div>
                    <div className="unit-control">
                        <button className="measure celsius {temperatureType !== temperatureTypeCelsius ? 'inactive' : '' }">C</button>
                        <button className="measure fahrenheit {temperatureType !== temperatureTypeFahrenheit ? 'inactive' : '' }">F</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default WeatherToday;
