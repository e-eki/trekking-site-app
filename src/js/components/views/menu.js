'use strict';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// меню
export default class Menu extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        debugger;
        const className = 'menu ' + (this.props.className ? this.props.className : '');

        
        
        return (
            <div className = {className}>
                

                <button onClick={this.props.changeColorTheme} className = 'menu__mode-button'>
                    {this.props.colorThemeTitle}
                </button>
            </div>
        )
    }
}