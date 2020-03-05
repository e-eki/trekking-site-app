'use strict';

import React, { PureComponent } from 'react';
import Logo from './logo';
import siteConst from '../../constants/siteConst';

// хэдер
export default class Header extends PureComponent {

    constructor(props) {
        super(props);

        // название сайта
        this.siteName = siteConst.siteName;
    }

    render() {
        const className = 'header ' + (this.props.className ? this.props.className : '');
        
        return (
            <div className = {className}>
                <Logo className = 'header__logo '/>

                <div className = "header__note header_mobile" onClick = {this.props.showVersionInfo}>
                    beta - версия
                </div>

                <div className = "header__title">
                    <h1>{this.siteName}</h1>

                    <div className = "header__note" onClick = {this.props.showVersionInfo}>
                        beta - версия
                    </div>
                </div>
            </div>
        )
    }
}