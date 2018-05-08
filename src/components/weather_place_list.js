import {Component} from './';
import {bindAll} from '../utils';

class WeatherPlaceList extends Component {
    constructor(props) {
        super(props);
        bindAll(this, 'componentReceivedProps');
        this.el = document.createElement('div');
        this.el.classList.add('addFuncBlock');
    }

    componentReceivedProps(props) {

    }


    render() {

        const {list, title} = this.props;

        let items = '';
        for (let i = list.length - 1; i >= 0; i--) {
            let {url, name} = list[i];

            items += `<li class="list">
                        <a class="cityForecast" href="${url}" data-name="${name}">${name}</a>
                    </li>`;
        }

        return `<h3 class="titleFuncBlock weeklyTitle">${title}</h3>
                                    <ul>${items}</ul>`;
    }

}

export default WeatherPlaceList;
