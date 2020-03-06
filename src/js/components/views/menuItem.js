'use strict';

import React, { PureComponent } from 'react';

export default class MenuItem extends PureComponent {

    constructor(props) {
        super(props);

    }

    render() {
        const menuClass = 'menu__item ' + (this.props.className ? this.props.className : '');
        
        return (
            <div className = {menuClass}>
                <div className = "item-decor" data-hover = {this.props.text}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}