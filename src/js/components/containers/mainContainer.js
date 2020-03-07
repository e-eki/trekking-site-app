'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Main from '../views/main';
import siteContent from '../../constants/siteContent';
import ContentItem from '../views/contentItem';

// контейнер для главной страницы
class MainContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.getContentItems = this.getContentItems.bind(this);
    }

    getContentItems() {
        debugger;

        const contentItems = [];
        let itemKey = 0;

        siteContent.blocksOrder.forEach(item => {
            const block = siteContent[item];

            if (block) {
                const className = (this.props.currentMenuItem === block.name) ? 'content-item_shown' : 'content-item_hidden';

                const contentItem = <ContentItem
                                        key={itemKey}
                                        className = {className}
                                        heading = {block.heading}
                                        description = {block.description}
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
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);