'use strict';

import Promise from 'bluebird';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Menu from '../views/menu';
import { setAlertData } from '../../actions/alertDataActions';
import { setColorTheme } from '../../actions/forumDesignActions';

// контейнер для меню
class MenuContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.changeColorTheme = this.changeColorTheme.bind(this);
        this.getColorThemeButtonTitle = this.getColorThemeButtonTitle.bind(this);
    }

    // изменение темы оформления
    changeColorTheme() {
        debugger;

        switch (this.props.colorTheme) {
            case forumConst.colorThemes.day:
                this.props.setColorTheme(forumConst.colorThemes.night);
                this.props.changePageColorTheme(forumConst.colorThemes.night);
                break;

            case forumConst.colorThemes.night:
                this.props.setColorTheme(forumConst.colorThemes.day);
                this.props.changePageColorTheme(forumConst.colorThemes.day);
                break;
        
            default:
                this.props.setColorTheme(forumConst.colorThemes.night);
                this.props.changePageColorTheme(forumConst.colorThemes.night);
                break;
        }
    }

    // получить название кнопки для переключения темы оформления
    getColorThemeButtonTitle() {
        debugger;
        let title;

        switch (this.props.colorTheme) {
            case forumConst.colorThemes.day:
              title = forumConst.colorThemeTitles.night;
              break;

            case forumConst.colorThemes.night:
                title = forumConst.colorThemeTitles.day;
                break;
        
            default:
                title = forumConst.colorThemeTitles.night;
                break;
        }

        return title;
    }
    
    render() {
        debugger;
        const colorThemeTitle = this.getColorThemeButtonTitle();

        return (
            <Menu
                colorThemeTitle = {colorThemeTitle}
                changeColorTheme = {this.changeColorTheme}
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