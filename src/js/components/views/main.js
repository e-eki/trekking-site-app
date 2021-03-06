'use strict';

import React, { PureComponent } from 'react';

// главная страница
export default class Main extends PureComponent {

    constructor(props) {
        super(props);
    }
    
    render() {
        const className = 'main ' + (this.props.className ? this.props.className : '');

        return (
            <div className = {className}>
                {this.props.contentItems}
            </div>
        )
    }
}