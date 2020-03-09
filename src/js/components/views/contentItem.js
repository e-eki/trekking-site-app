'use strict';

import React, { PureComponent } from 'react';
import siteContent from '../../constants/siteContent';
import FeedbackForm from '../views/forms/feedbackForm';

// раздел контента
export default class ContentItem extends PureComponent {

    constructor(props) {
        super(props);

        this.showItem = this.showItem.bind(this);
        this.hideItem = this.hideItem.bind(this);
        this.getFeedbackForm = this.getFeedbackForm.bind(this);
        this.getFeedbackButton = this.getFeedbackButton.bind(this);
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

            // кнопка вызова формы обратной связи
            const feedbackButton = document.querySelector('.feedback-button');

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

                this.hideItem(feedbackButton);
            });

            // по клику на ссылку показать грядущие события
            futureEventsLink.addEventListener('click', (event) => {
                event.preventDefault();

                this.hideItem(pastEventsDescription);
                this.showItem(futureEventsDescription);

                this.hideItem(futureEventsLink);
                this.showItem(pastEventsLink);

                this.showItem(feedbackButton);
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

    componentDidUpdate(prevProps) {
        debugger;
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

    // показать форму обратной связи, если она нужна
    getFeedbackForm() {
        debugger;
        let feedbackForm = null;

        // если мы в разделе календарь или контакты, и была нажата кнопка "отправить фидбек"
        if ((this.props.name === siteContent.trekkingCalendarBlock.name ||
            this.props.name === siteContent.contactsBlock.name) &&
            this.props.currentFeedback) {
                feedbackForm = <FeedbackForm
                                    colorTheme = {this.props.colorTheme}
                                    hideFeedbackForm = {this.props.hideFeedbackForm}
                                />;
            }

        return feedbackForm;
    }

    // показать кнопку вызова формы обратной связи, если она нужна
    getFeedbackButton() {
        debugger;

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

        debugger;
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