'use strict';

import Promise from 'bluebird';
import React, { PureComponent } from 'react';
// import scrollToComponent from 'react-scroll-to-component';
import { connect } from 'react-redux';
import Menu from '../views/menu';
import { setAlertData } from '../../actions/alertDataActions';
import { setColorTheme } from '../../actions/forumDesignActions';
import { setCurrentMenuItem } from '../../actions/contentActions';
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

    // componentDidUpdate(prevProps) {
    //     debugger;
    //     // если перешли к другому разделу меню
    //     if (prevProps.currentMenuItem !== this.props.currentMenuItem) {
    //         // проскролливаем вверх к меню
    //         scrollToComponent(this.menuRef, {align: 'top'});
    //     }
    // }

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
                const className = (this.props.currentMenuItem === block.name) ? 'menu__item_active' : '';

                const menuItem = <MenuItem
                                    key={itemKey}
                                    className = {className}
                                    name = {block.name}
                                    heading = {block.menuHeading}
                                    setCurrentMenuItem = {this.props.setCurrentMenuItem}
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
            <Menu /*ref={elem => this.menuRef = elem}*/
                colorThemeTitle = {colorThemeTitle}
                changeColorTheme = {this.changeColorTheme}
                menuItems = {menuItems}
                // currentMenuItem = {this.props.currentMenuItem}
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
        setAlertData: function(data) {
            dispatch(setAlertData(data));
        },
        setColorTheme: function(data) {
            dispatch(setColorTheme(data));
        },
        setAlertData: function(data) {
            dispatch(setAlertData(data));
        },
        setCurrentMenuItem: function(data) {
            dispatch(setCurrentMenuItem(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);