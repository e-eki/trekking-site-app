'use strict';

import React, { PureComponent } from 'react';


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
                <div className = 'menu__items-block'>
                    {this.props.menuItems}
                </div>

                <button onClick={this.props.changeColorTheme} className = 'menu__mode-button'>
                    {this.props.colorThemeTitle}
                </button>
            </div>
        )
    }
}