'use strict';

import React, { PureComponent } from 'react';
import siteContent from '../../constants/siteContent';
import FeedbackForm from '../views/forms/feedbackForm';

// раздел контента сайта
export default class ContentItem extends PureComponent {

    constructor(props) {
        super(props);

        // ссылка "прошедшие события"
        this.pastEventsLink = null;
        // ссылка "грядущие события"
        this.futureEventsLink = null;
        // описание прошедших событий
        this.pastEventsDescription = null;
        // описание грядущих событий
        this.futureEventsDescription = null;
        // кнопка вызова формы обратной связи
        this.feedbackButtonLink = null;

        this.showItem = this.showItem.bind(this);
        this.hideItem = this.hideItem.bind(this);
        this.showFutureEvents = this.showFutureEvents.bind(this);
        this.showPastEvents = this.showPastEvents.bind(this);
        this.showTravelRoute = this.showTravelRoute.bind(this);
        this.getFeedbackForm = this.getFeedbackForm.bind(this);
        this.getFeedbackButton = this.getFeedbackButton.bind(this);
    }

    componentDidMount() {
        // если это раздел "календарь походов"
        if (this.props.name === siteContent.trekkingCalendarBlock.name) {
            // ссылка "прошедшие события"
            this.pastEventsLink = document.querySelector('.past-events-link');
            // ссылка "грядущие события"
            this.futureEventsLink = document.querySelector('.future-events-link');

            // описание прошедших событий
            this.pastEventsDescription = document.querySelector('.past-events-description');
            // описание грядущих событий
            this.futureEventsDescription = document.querySelector('.future-events-description');

            // кнопка вызова формы обратной связи
            this.feedbackButtonLink = document.querySelector('.feedback-button');

            // при загрузке страницы открывается этот раздел, с грядущими событиями.
            // поэтому описание прошедших и ссылку на грядующие - скрываем
            this.hideItem(this.pastEventsDescription);
            this.hideItem(this.futureEventsLink);

            // по клику на ссылку показать прошедшие события
            this.pastEventsLink.addEventListener('click', this.showPastEvents);

            // по клику на ссылку показать грядущие события
            this.futureEventsLink.addEventListener('click', this.showFutureEvents);
        }
        // если это раздел "маршруты путешествий"
        else if (this.props.name === siteContent.travelRoutesBlock.name) {

            //todo!!!!!!!
            const kolaLink = document.querySelector('.kola-link');

            const krlLink = document.querySelector('.krl-link');

            const lenLink = document.querySelector('.len-link');

            const putoranLink = document.querySelector('.putoran-link');

            // по клику на ссылку
            kolaLink.addEventListener('click', this.showTravelRoute);

            krlLink.addEventListener('click', this.showTravelRoute);

            lenLink.addEventListener('click', this.showTravelRoute);

            putoranLink.addEventListener('click', this.showTravelRoute);
        }
    }

    componentDidUpdate(prevProps) {
        debugger;

        // при переходе из раздела "календарь" в другой раздел - отображаются грядущие события
        if (this.props.name === siteContent.trekkingCalendarBlock.name &&
            (this.props.className === 'content-item_hidden' &&
            prevProps.className === 'content-item_shown')) {
                this.showFutureEvents();
            }
    }

    // показать элемент
    showItem(item) {
        if (item && item.classList) {
            item.classList.remove('content-item_hidden');
            item.classList.add('content-item_shown');
        }
    }

    // скрыть элемент
    hideItem(item) {
        if (item && item.classList) {
            item.classList.remove('content-item_shown');
            item.classList.add('content-item_hidden');
        }
    }

    // показать грядущие события в календаре
    showFutureEvents(event) {
        debugger;
        if (event) {
            event.preventDefault();
        }

        this.hideItem(this.pastEventsDescription);
        this.showItem(this.futureEventsDescription);

        this.hideItem(this.futureEventsLink);
        this.showItem(this.pastEventsLink);

        this.showItem(this.feedbackButtonLink);
    }

    // показать прошедшие события в календаре
    showPastEvents(event) {
        debugger;
        if (event) {
            event.preventDefault();
        }

        this.hideItem(this.futureEventsDescription);
        this.showItem(this.pastEventsDescription);

        this.hideItem(this.pastEventsLink);
        this.showItem(this.futureEventsLink);

        this.hideItem(this.feedbackButtonLink);
    }

    // показать маршрут путешествия
    // todo!!! 
    showTravelRoute(event) {
        if (event) {
            event.preventDefault();
        }
    }

    // показать форму обратной связи, если она нужна
    getFeedbackForm() {
        let feedbackForm = null;

        // если мы в разделе календарь или контакты, и была нажата кнопка "отправить фидбек"
        if ((this.props.name === siteContent.trekkingCalendarBlock.name ||
            this.props.name === siteContent.contactsBlock.name) &&
            this.props.currentFeedback) {
                feedbackForm = <FeedbackForm
                                    colorTheme = {this.props.colorTheme}
                                    hideFeedbackForm = {this.props.hideFeedbackForm}
                                    doSendFeedback = {this.props.doSendFeedback}
                                />;
            }

        return feedbackForm;
    }

    // показать кнопку вызова формы обратной связи, если она нужна
    getFeedbackButton() {
        // отправить фидбек можно из разделов "календарь"
        const feedbackButton = ((this.props.name === siteContent.trekkingCalendarBlock.name) ||
                                // или "контакты"
                                this.props.name === siteContent.contactsBlock.name)
                                ?
                                <button
                                    className = 'feedback-button'
                                    onClick = {this.props.showFeedbackForm}
                                >
                                    Отправить письмо
                                </button>
                                :
                                null;

        return feedbackButton;
    }
    
    render() {
        const className = 'content-item ' + (this.props.className ? this.props.className : '');

        const feedbackForm = this.getFeedbackForm();
        const feedbackButton = this.getFeedbackButton();
        
        return (
            <div className = {className}>
                {feedbackForm}

                <div className ="content-item__heading">
                    {this.props.heading}
                </div>

                <div className ="content-item__description">
                    {this.props.description}
                </div>

                {feedbackButton}      
            </div>
        )
    }
}