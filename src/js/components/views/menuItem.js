'use strict';

import React, { PureComponent } from 'react';

// раздел меню
export default class MenuItem extends PureComponent {

    constructor(props) {
        super(props);

        this.onClickMenuItem = this.onClickMenuItem.bind(this);
    }

    onClickMenuItem(event) {
        debugger;

        this.props.setCurrentMenuItem(this.props.name);
    }

    render() {
        const menuClass = 'menu__item ' + (this.props.className ? this.props.className : '');
        
        return (
            <div className = {menuClass} onClick = {this.onClickMenuItem}>
                <div className = "item-decor" data-hover = {this.props.text}>
                    {this.props.heading}
                </div>
            </div>
        )
    }
}