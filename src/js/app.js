'use strict';

import React, { Component } from 'react';
import { Router } from 'react-router';
const createBrowserHistory = require("history").createBrowserHistory;    //?? через import
import MainContainer from './components/containers/mainContainer';
import HeaderContainer from './components/containers/headerContainer';
import MenuContainer from './components/containers/menuContainer';
import Footer from './components/views/footer';
import AlertFormContainer from './components/containers/alertFormContainer';
import HidingLayerContainer from './components/containers/HidingLayerContainer';
import siteConst from './constants/siteConst';
import { getBackgroundImage } from './utils/forumDesignUtils';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.history = createBrowserHistory();

    // стили по умолчанию
    this.defaultClassNames = {
      pageClassName: 'page_day-mode',
    }

    this.state = {
      // стиль оформления страницы
      pageClassName: this.defaultClassNames.pageClassName,
    };

    this.changePageColorTheme = this.changePageColorTheme.bind(this);
  }

  componentDidMount() {
    debugger;
    const backgroundImage = getBackgroundImage();

    // установка фона в зависимости от времени суток
    document.body.style.backgroundImage = backgroundImage;
  }

  // изменить тему оформления
  changePageColorTheme(colorTheme) {
    const dayModeModificator = '_day-mode';
    const nightModeModificator = '_night-mode';

    // оформление страницы
    let pageClassName = 'page';

    switch (colorTheme) {
      case siteConst.colorThemes.day:
        pageClassName += dayModeModificator;
        break;

      case siteConst.colorThemes.night:
        pageClassName += nightModeModificator;
        break;

      default:
        pageClassName = this.defaultClassNames.pageClassName;
        break;
    }

    this.setState({
      pageClassName: pageClassName,
    });
  }

  render() {
    const pageClassName = 'page ' + this.state.pageClassName;

      return (
        <div className = {pageClassName}>
          <HeaderContainer/>

          <Router history={this.history}>
            <HidingLayerContainer/>

            <AlertFormContainer/>

            <MenuContainer
              changePageColorTheme = {this.changePageColorTheme}
            />

            <MainContainer/>
          </Router>

          <Footer className = 'page__footer '/>
        </div>
      )  
  }
}




