'use strict';

import Promise from 'bluebird';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from '../views/menu';
import { setAlertData } from '../../actions/alertDataActions';
import { setColorTheme } from '../../actions/forumDesignActions';
import siteConst from '../../constants/siteConst';
import siteContent from '../../constants/siteContent';
import MenuItem from '../views/menuItem';

// контейнер для меню
class MenuContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.changeColorTheme = this.changeColorTheme.bind(this);
        this.getColorThemeButtonTitle = this.getColorThemeButtonTitle.bind(this);
        this.getMenuItems = this.getMenuItems.bind(this);
    }

    // изменение темы оформления
    changeColorTheme() {
        debugger;

        switch (this.props.colorTheme) {
            case siteConst.colorThemes.day:
                this.props.setColorTheme(siteConst.colorThemes.night);
                this.props.changePageColorTheme(siteConst.colorThemes.night);
                break;

            case siteConst.colorThemes.night:
                this.props.setColorTheme(siteConst.colorThemes.day);
                this.props.changePageColorTheme(siteConst.colorThemes.day);
                break;
        
            default:
                this.props.setColorTheme(siteConst.colorThemes.night);
                this.props.changePageColorTheme(siteConst.colorThemes.night);
                break;
        }
    }

    // получить название кнопки для переключения темы оформления
    getColorThemeButtonTitle() {
        debugger;
        let title;

        switch (this.props.colorTheme) {
            case siteConst.colorThemes.day:
              title = siteConst.colorThemeTitles.night;
              break;

            case siteConst.colorThemes.night:
                title = siteConst.colorThemeTitles.day;
                break;
        
            default:
                title = siteConst.colorThemeTitles.night;
                break;
        }

        return title;
    }

    getMenuItems() {
        debugger;
        const menuItems = [];

        let itemKey = 0;

        siteContent.blocksOrder.forEach(item => {
            const block = siteContent[item];

            if (block) {
                const menuItem = <MenuItem
                                    key={itemKey}
                                    className = {block.name}
                                    text = {block.menuHeading}
                                />; 
                
                menuItems.push(menuItem);
                itemKey++;
            }
        });

        return menuItems;
    }
    
    render() {
        debugger;
        const colorThemeTitle = this.getColorThemeButtonTitle();

        const menuItems = this.getMenuItems();

        return (
            <Menu
                colorThemeTitle = {colorThemeTitle}
                changeColorTheme = {this.changeColorTheme}
                menuItems = {menuItems}
            />
        );
    }
}

const mapStateToProps = function(store) {
    return {
        colorTheme: store.forumDesignState.get('colorTheme'), 
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        setAlertData: function(data) {
            dispatch(setAlertData(data));
        },
        setColorTheme: function(data) {
            dispatch(setColorTheme(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);