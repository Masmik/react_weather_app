import {Component} from './';
import {temperatureConverter} from '../utils';
import './weather_weekly.scss';

class WeatherWeekly extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.classList.add('weeklyForecast');
        this.el.classList.add('addFuncBlock');
    }

    render() {
        const {forecast, temperatureType} = this.props;

        const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let items = forecast.daily.data
            .map(dailyForecast => {
                return `
        <div class="byDays">
            <div class="list listWeekly">
                <div class="nameOfTheDay">${daysOfTheWeek[new Date(dailyForecast.time * 1000).getDay()]}</div>
                <div class="dayWeatherIcon">
                    <canvas class="weatherIcon" data-icon="${dailyForecast.icon}" width="30" height="30"></canvas>
                </div>
                <div class="humidity">
                    <img class="humidityIcon" src="https://s.yimg.com/os/weather/1.0.1/precipitation/54x60/rain_ico_60@2x.png" alt="humidity">
                    <span class="humidityPercent">${(dailyForecast.humidity* 100).toFixed(0)}
                        <span class="percentIcon">%</span>
                    </span>
                </div>
                <div class="temperatureContainer">
                    <div class="dayMinTemp">${temperatureConverter(temperatureType, dailyForecast.temperatureMin).toFixed(0)}</div>
                    <div class="dayMaxTemp">${temperatureConverter(temperatureType, dailyForecast.temperatureMax).toFixed(0)}</div>
                </div>
            </div>
        </div>
    `
            })
            .join('');

        return `<h3 class="titleFuncBlock weeklyTitle">Forecast</h3>
                <div class="weeklyForecastContent">${items}</div>`;
    }

}

export default WeatherWeekly;




