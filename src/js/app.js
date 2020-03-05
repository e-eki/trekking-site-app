'use strict';

import React, { Component } from 'react';
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
    debugger;
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
    debugger;
    const pageClassName = 'page ' + this.state.pageClassName;

      return (
        <div className = {pageClassName}>
          <HeaderContainer/>

          <HidingLayerContainer/>

          <AlertFormContainer/>

          <MenuContainer
            changePageColorTheme = {this.changePageColorTheme}
          />

          <MainContainer/>

          <Footer className = 'page__footer '/>
        </div>
      )  
  }
}




