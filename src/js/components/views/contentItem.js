'use strict';

import React, { PureComponent } from 'react';

// раздел контента
export default class ContentItem extends PureComponent {

    constructor(props) {
        super(props);
    }
    
    render() {
        const className = 'content-item ' + (this.props.className ? this.props.className : '');

        debugger
        
        return (
            <div className = {className}>
                <h2 className ="content-item__heading">
                    {this.props.heading}
                </h2> 

                <div className ="content-item__description">
                    {this.props.description}
                </div>              
            </div>
        )
    }
}