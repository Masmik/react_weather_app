import React from 'react';

class AddToFavorite extends React.Component {
    constructor(props) {
        super(props);
        // handle events
        // this.el.addEventListener('click', props.handlerClickFavorite);
    }

    render() {
        const svgStyle = {
            fill: '#ffd333',
            stroke: '#ffd333',
            strokeWidth: 0,
            verticalAlign: 'bottom'
        };

        return (
            <button className="addFuncBtn favoriteCity">
                <svg className="P(6px) Cur(p)" width="26"
                     style={svgStyle} height="26"
                     viewBox="0 0 24 24"
                     data-icon="star" data-reactid="11">
                    <path
                        d="M8.485 7.83l-6.515.21c-.887.028-1.3 1.117-.66 1.732l4.99 4.78-1.414 6.124c-.2 1.14.767 1.49 1.262 1.254l5.87-3.22 5.788 3.22c.48.228 1.464-.097 1.26-1.254l-1.33-6.124 4.962-4.78c.642-.615.228-1.704-.658-1.732l-6.486-.21-2.618-6.22c-.347-.815-1.496-.813-1.84.003L8.486 7.83zm7.06 6.05l1.11 5.11-4.63-2.576L7.33 18.99l1.177-5.103-4.088-3.91 5.41-.18 2.19-5.216 2.19 5.216 5.395.18-4.06 3.903z"
                        data-reactid="12"></path>
                </svg>
            </button>
        );
    }

}

export default AddToFavorite;
