'use strict';

import React, { PureComponent } from 'react';
import siteConst from '../../constants/siteConst';

// логотип
export default class Logo extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const className = 'logo ' + (this.props.className ? this.props.className : '');
        
        return (
            <div className = {className}>
                <a href={siteConst.forumLink}>
                    <img 
                        name = 'logo'
                        className = 'logo__img' 
                        src = '/images/trekking_logo.png' 
                        alt = 'Перейти на форум'
                        title = 'Перейти на форум'
                        // alt = {siteConst.siteName} 
                        // title = {siteConst.siteName}
                    >
                    </img>
                </a>
            </div>
        )
    }
}