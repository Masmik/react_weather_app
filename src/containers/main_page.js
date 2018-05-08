import React from 'react';

import {
    AutoLocationComp,
    AddToFavoriteComp,
    SearchInputComp,
    WeatherTodayComp,
//     WeatherWeeklyComp,
//     WeatherPlaceListComp
} from "../components";
// import {isAllowedGEOLocation} from "../utils/auto_location";
// import {AutoGEOLocation, bindAll, getLocalStorage, setLocalStorage, setUniqueLocalStorage, temperatureConverter} from '../utils';
// import {SuggestionApi, getWeather, getLocationName} from '../api'

const lsHistoryKey = 'history';
// const lsFavoriteKey = 'favorite';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        // bindAll(
        // //     this,
        // //     'handlerAutoGEOLocationClick',
        //     'searchWeatherButton',
        // //     'GoogleApiLoaded',
        // //     'handleSuggestion',
        // //     'afterRender',
        //     'getWeatherForecast',
        // //     'handlerClickFavorite',
        // //     'handlerTemperatureChange',
        // //     'handlerUrlChange'
        // );

        // window.GoogleApiLoaded = this.GoogleApiLoaded;

        // origin state
        this.state = {
            autoLocation: {
                // isAllowed: isAllowedGEOLocation(),
                lat: null,
                long: null,
                handlerClick: this.handlerAutoGEOLocationClick
            },
            googleApiLoaded: false,
            location: {
                lat: null,
                long: null
            },
            address: "",
            forecast: null,
            temperatureType: 'fahrenheit',
            temperature: 0
        };
        //
        // // init components
        // this.autoLocationComp = new AutoLocationComp(this.state.autoLocation);
        // this.addToFavoriteComp = new AddToFavoriteComp({
        //     handlerClickFavorite: this.handlerClickFavorite
        // });
        // this.searchInputComp = new SearchInputComp();
        // this.weatherTodayComp = new WeatherTodayComp({
        //     handlerTemperatureChange: this.handlerTemperatureChange
        // });
        // this.weatherWeeklyComp = new WeatherWeeklyComp();
        // this.weatherHistoryListComp = new WeatherPlaceListComp();
        // this.weatherFavoriteListComp = new WeatherPlaceListComp();

        // window.onhashchange = this.handlerUrlChange;

        // this.handlerUrlChange();
    }


    // handlerAutoGEOLocationClick(e) {
    //     e.preventDefault();
    //
    //     this.state.autoLocation.isAllowed = false;
    //     this.update(this.state);
    //
    //     if (this.state.autoLocation.lat) {
    //         // get location from cache
    //         this.state.autoLocation.isAllowed = true;
    //         this.state.location.lat = this.state.autoLocation.lat;
    //         this.state.location.long = this.state.autoLocation.long;
    //         this.state.address = "Current Location";
    //         this.update(this.state);
    //         return;
    //     }
    //
    //     AutoGEOLocation().then((locationObj) => {
    //         this.state.autoLocation.isAllowed = true;
    //         this.state.autoLocation.lat = locationObj.lat;
    //         this.state.autoLocation.long = locationObj.long;
    //         this.state.address = "Current Location";
    //         this.state.location.lat = locationObj.lat;
    //         this.state.location.long = locationObj.long;
    //         getLocationName(this.state.autoLocation.lat, this.state.autoLocation.long).then(address => {
    //             this.state.address = address;
    //             this.getWeatherForecast();
    //             this.update(this.state);
    //         });
    //         this.update(this.state);
    //     }, (err) => {
    //         console.warn(err);
    //         this.state.autoLocation.isAllowed = false;
    //         this.update(this.state);
    //     });
    // }
    //
    // handlerClickFavorite(e) {
    //     e.preventDefault();
    //     setUniqueLocalStorage(lsFavoriteKey, {
    //         name: this.state.address,
    //         url: window.location.href
    //     });
    //     this.update(this.state);
    //
    // }
    //
    // searchWeatherButton(e) {
    //     e.preventDefault();
    //     this.getWeatherForecast();
    // }
    //
    // handlerTemperatureChange(temperatureType) {
    //     this.state.temperatureType = temperatureType;
    //     this.state.temperature = temperatureConverter(this.state.temperatureType, this.state.forecast.currently.temperature);
    //     this.update(this.state);
    // }
    //
    //
    // getWeatherForecast() {
    //
    //     getWeather(this.state.location.lat, this.state.location.long).then(resp => {
    //         this.state.forecast = resp;
    //         this.handlerTemperatureChange(this.state.temperatureType);
    //         window.location.hash = `lat=${this.state.location.lat}&long=${this.state.location.long}`;
    //         setLocalStorage(lsHistoryKey, {
    //             name: this.state.address,
    //             url: window.location.href
    //         });
    //         this.update(this.state);
    //     }, err => {
    //         console.error(err);
    //     });
    // }
    //
    // GoogleApiLoaded() {
    //     this.state.googleApiLoaded = true;
    //     this.update(this.state);
    // }

    // handleSuggestion() {
    //
    //     if (!this.state.googleApiLoaded) {
    //         return;
    //     }
    //     let inputEl = document.querySelector("#city-search");
    //
    //     SuggestionApi(inputEl).then((locationObj) => {
    //         this.state.location.lat = locationObj.lat;
    //         this.state.location.long = locationObj.long;
    //         this.state.address = locationObj.address;
    //         this.getWeatherForecast();
    //         this.update(this.state);
    //     }, (err) => {
    //         console.warn(err);
    //     });
    // }
    //
    // handlerUrlChange() {
    //     // console.log(window.location);
    //     let hash = window.location.hash.substr(1);
    //     let result = hash.split('&').reduce(function (result, item) {
    //         let parts = item.split('=');
    //         result[parts[0]] = parts[1];
    //         return result;
    //     }, {});
    //
    //     if (typeof result.lat == "undefined" || typeof result.long == "undefined") {
    //         return;
    //     }
    //
    //     if (this.state.location.lat == result.lat && this.state.location.long == result.long) {
    //         return;
    //     }
    //
    //     this.state.location.lat = result.lat;
    //     this.state.location.long = result.long;
    //
    //
    //     getLocationName(this.state.location.lat, this.state.location.long).then(address => {
    //         this.state.address = address;
    //         this.getWeatherForecast();
    //         this.update(this.state);
    //     });
    // }
    //
    // afterRender() {
    //     this.handleSuggestion();
    //     skycons(this.el);
    // }

    render() {

        const {forecast, address} = this.state;

        //
        // let weatherInfoContainer = document.createElement('section');
        //
        // if (forecast != null) {
        //
        //     weatherInfoContainer.classList.add('weatherInfo');
        //
        //     weatherInfoContainer.appendChild(this.weatherTodayComp.update({
        //         forecast: forecast,
        //         address: address,
        //         temperatureType: this.state.temperatureType,
        //         temperature: this.state.temperature,
        //         handlerTemperatureChange: this.handlerTemperatureChange
        //     }));
        //
        //     let detailedInfo = document.createElement('div');
        //     detailedInfo.classList.add('detailedInfo');
        //
        //     detailedInfo.appendChild(this.weatherWeeklyComp.update({
        //         forecast: forecast,
        //         temperatureType: this.state.temperatureType
        //     }));
        //
        //     detailedInfo.appendChild(this.weatherHistoryListComp.update({
        //         list: getLocalStorage(lsHistoryKey),
        //         title: 'Recently viewed'
        //     }));
        //     detailedInfo.appendChild(this.weatherFavoriteListComp.update({
        //         list: getLocalStorage(lsFavoriteKey),
        //         title: 'Favorite'
        //     }));
        //
        //
        //     weatherInfoContainer.appendChild(detailedInfo);
        //
        // }

        // return [
        //     title,
        //     searchContainer,
        //     weatherInfoContainer
        // ];

        return (
            <div className="wrapper">
                <div className="appsName">
                    <h1 className="title">Weather App</h1>
                </div>
                <div className="searchContainer">
                    <div className="additionalBtn">
                        <AutoLocationComp/>
                        <AddToFavoriteComp/>
                    </div>
                    <SearchInputComp adress={this.address}/>
                </div>
                    {/*<section className="weatherInfo">*/}
                        {/*<WeatherTodayComp*/}
                            {/*forecast={this.forecast}*/}
                            {/*address={this.address}*/}
                            {/*temperatureType={this.state.temperatureType}*/}
                            {/*temperature={this.state.temperature}*/}
                        {/*/>*/}
                    {/*</section>*/}



            </div>
        );


    }
}

export default MainPage;
