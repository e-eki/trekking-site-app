'use strict';

import React, { PureComponent } from 'react';
import siteConst from '../../constants/siteConst';

// футер
export default class Footer extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const className = 'footer ' + (this.props.className ? this.props.className : '');

        const mailLink = `mailto:${siteConst.siteEmail}`;
        
        return (
            <div className = {className}>
                <div className ="footer__title">
                    Feedback: <a href={mailLink}>{siteConst.siteEmail}</a>
                </div>

                <div className ="footer__title">
                    Content &#169; М. Крылова, 2020
                </div>

                <div className ="footer__title">
                    Software &#169; В. А. Дремина, 2020
                </div>
            </div>
        )
    }
}