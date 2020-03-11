'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Main from '../views/main';
import siteContent from '../../constants/siteContent';
import siteConst from '../../constants/siteConst';
import ContentItem from '../views/contentItem';
import { showErrorMessage } from '../../utils/baseUtils';
import { sendFeedback } from '../../api/feedbackApi';
import { setCurrentFeedback } from '../../actions/feedbackActions';
import { setAlertData } from '../../actions/alertDataActions';

// контейнер для главной страницы
class MainContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.showFeedbackForm = this.showFeedbackForm.bind(this);
        this.hideFeedbackForm = this.hideFeedbackForm.bind(this);
        this.doSendFeedback = this.doSendFeedback.bind(this);
        this.getContentItems = this.getContentItems.bind(this);
    }

    // показать форму обратной связи
    showFeedbackForm() {
        this.props.setCurrentFeedback(true);
    }

    // скрыть форму обратной связи
    hideFeedbackForm() {
        this.props.setCurrentFeedback(null);
    }

    // отправить фидбек
    doSendFeedback(name, email, text) {
        return sendFeedback(name, email, text)
			.then(response => {
                const alertData = {
                    message: 'Ваше письмо было успешно отправлено.',
                    // link: siteConst.defaultLink,
                };

                this.props.setCurrentFeedback(false);
                this.props.setAlertData(alertData);
			})
			.catch(error => {
                showErrorMessage(error);
                return false;
            })
    }

    // получить разделы сайта
    getContentItems() {
        const contentItems = [];
        let itemKey = 0;

        // если не выбран текущий раздел меню, то берем раздел по умолчанию
        const currentContentItem = this.props.currentMenuItem ? this.props.currentMenuItem : siteContent.defaultBlock;

        siteContent.blocksOrder.forEach(item => {
            const block = siteContent[item];

            if (block) {
                // текущий раздел показываем, все остальные скрываем
                const className = (currentContentItem === block.name) ? 'content-item_shown' : 'content-item_hidden';

                const contentItem = <ContentItem
                                        key = {itemKey}
                                        name = {block.name}
                                        className = {className}
                                        heading = {block.heading}
                                        description = {block.description}
                                        colorTheme = {this.props.colorTheme}

                                        currentFeedback  ={this.props.currentFeedback}
                                        showFeedbackForm = {this.showFeedbackForm}
                                        hideFeedbackForm = {this.hideFeedbackForm}
                                        doSendFeedback = {this.doSendFeedback}
                                    />; 
                
                contentItems.push(contentItem);
                itemKey++;
            }
        });

        return contentItems;
    }
    
    render() {
        debugger;

        const contentItems = this.getContentItems();
        
        return (
            <Main
                colorTheme = {this.props.colorTheme}
                contentItems = {contentItems}
            />
        );
    }
}

const mapStateToProps = function(store) {
    return {
        colorTheme: store.forumDesignState.get('colorTheme'),
        currentMenuItem: store.contentState.get('currentMenuItem'),
        currentFeedback: store.feedbackState.get('currentFeedback'),
    };
};

const mapDispatchToProps = function(dispatch) {
    return {   
        setCurrentFeedback: function(data) {
            dispatch(setCurrentFeedback(data));
        },
        setAlertData: function(data) {
            dispatch(setAlertData(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);