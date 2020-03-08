'use strict';

import React, { PureComponent } from 'react';
import siteContent from '../../constants/siteContent';

// раздел контента
export default class ContentItem extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger;

        if (this.props.name === siteContent.trekkingCalendarBlock.name) {
            const pastEventsLink = document.querySelector('.past-events-link');
            const futureEventsLink = document.querySelector('.future-events-link');

            const pastEventsDescription = document.querySelector('.past-events-description');
            const futureEventsDescription = document.querySelector('.future-events-description');

            pastEventsDescription.classList.add('content-item_hidden');
            futureEventsLink.classList.add('content-item_hidden');

            pastEventsLink.addEventListener('click', (event) => {
                event.preventDefault();

                pastEventsDescription.classList.remove('content-item_hidden');   //todo: вынести в методы show и hide
                pastEventsDescription.classList.add('content-item_shown');

                futureEventsDescription.classList.remove('content-item_shown');
                futureEventsDescription.classList.add('content-item_hidden');

                // futureEventsLink.classList.remove('content-item_shown');
                // futureEventsLink.classList.add('content-item_hidden');

                // pastEventsLink.classList.remove('content-item_shown');
                // pastEventsLink.classList.add('content-item_hidden');
            });

            futureEventsLink.addEventListener('click', (event) => {
                event.preventDefault();

                pastEventsDescription.classList.remove('content-item_shown');
                pastEventsDescription.classList.add('content-item_hidden');

                futureEventsDescription.classList.remove('content-item_hidden');
                futureEventsDescription.classList.add('content-item_shown');

                futureEventsLink.classList.remove('content-item_shown');
                futureEventsLink.classList.add('content-item_hidden');
            });
        }
    }
    
    render() {
        const className = 'content-item ' + (this.props.className ? this.props.className : '');

        debugger;
        
        return (
            <div className = {className}>
                <div className ="content-item__heading">
                    {this.props.heading}
                </div> 

                <div className ="content-item__description">
                    {this.props.description}
                </div>              
            </div>
        )
    }
}