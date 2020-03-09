'use strict';

import React, { PureComponent } from 'react';
import siteContent from '../../constants/siteContent';

// раздел контента
export default class ContentItem extends PureComponent {

    constructor(props) {
        super(props);

        this.showItem = this.showItem.bind(this);
        this.hideItem = this.hideItem.bind(this);
    }

    // показать элемент
    showItem(item) {
        item.classList.remove('content-item_hidden');
        item.classList.add('content-item_shown');
    }

    // скрыть элемент
    hideItem(item) {
        item.classList.remove('content-item_shown');
        item.classList.add('content-item_hidden');
    }

    componentDidMount() {
        debugger;

        // если это раздел "календарь походов"
        if (this.props.name === siteContent.trekkingCalendarBlock.name) {
            // ссылка "прошедшие события"
            const pastEventsLink = document.querySelector('.past-events-link');
            // ссылка "грядущие события"
            const futureEventsLink = document.querySelector('.future-events-link');

            // описание прошедших событий
            const pastEventsDescription = document.querySelector('.past-events-description');
            // описание грядущих событий
            const futureEventsDescription = document.querySelector('.future-events-description');

            // при загрузке страницы открывается этот раздел, с грядущими событиями.
            // поэтому описание прошедших и ссылку на грядующие - скрываем
            this.hideItem(pastEventsDescription);
            this.hideItem(futureEventsLink);

            // по клику на ссылку показать прошедшие события
            pastEventsLink.addEventListener('click', (event) => {
                event.preventDefault();

                this.hideItem(futureEventsDescription);
                this.showItem(pastEventsDescription);

                this.hideItem(pastEventsLink);
                this.showItem(futureEventsLink);
            });

            // по клику на ссылку показать грядущие события
            futureEventsLink.addEventListener('click', (event) => {
                event.preventDefault();

                this.hideItem(pastEventsDescription);
                this.showItem(futureEventsDescription);

                this.hideItem(futureEventsLink);
                this.showItem(pastEventsLink);
            });
        }
        // если это раздел "маршруты путешествий"
        else if (this.props.name === siteContent.travelRoutesBlock.name) {
            const kolaLink = document.querySelector('.kola-link');

            const krlLink = document.querySelector('.krl-link');

            const lenLink = document.querySelector('.len-link');

            const putoranLink = document.querySelector('.putoran-link');

            // по клику на ссылку
            kolaLink.addEventListener('click', (event) => {
                event.preventDefault();
            })

            krlLink.addEventListener('click', (event) => {
                event.preventDefault();
            })

            lenLink.addEventListener('click', (event) => {
                event.preventDefault();
            })

            putoranLink.addEventListener('click', (event) => {
                event.preventDefault();
            })
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