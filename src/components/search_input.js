import React from 'react';
// import { bindAll } from '../utils';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        // bindAll(this, 'handleEvent');
    }

    // handleEvent(e) {
    //     if (e.target.id == 'getWeather') {
    //         this.props.searchWeatherButton(e);
    //     }
    // }

    render() {
        const { address } = this.props;
        return (
            <div className="searchInputWrapper">
                <input type="text" className="enterWeather" id="city-search" placeholder="Enter City"
                       value={address}></input>
                <button className="searchWeather__button" id="getWeather">Search</button>
            </div>

        )
    }

}

export default SearchInput;
