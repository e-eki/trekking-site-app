'use strict';

import React, { PureComponent } from 'react';
import scrollToComponent from 'react-scroll-to-component';

// раздел меню
export default class MenuItem extends PureComponent {

    constructor(props) {
        super(props);

        this.onClickMenuItem = this.onClickMenuItem.bind(this);
    }

    onClickMenuItem(event) {
        debugger;
        this.props.setCurrentMenuItem(this.props.name);

        // проскролливаем вверх к этому разделу меню
        // todo: на некоторых экранах скроллится не до конца, на некоторых не скроллится вообще
        scrollToComponent(this.menuItem, {align: 'top'});
    }

    render() {
        const menuClass = 'menu__item ' + (this.props.className ? this.props.className : '');
        
        return (
            <div ref={elem => this.menuItem = elem} className = {menuClass} onClick = {this.onClickMenuItem}>
                <div className = "item-decor" data-hover = {this.props.heading}>
                    {this.props.heading}
                </div>
            </div>
        )
    }
}