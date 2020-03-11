'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import scrollToComponent from 'react-scroll-to-component';
import Header from '../views/header';
import { setAlertData } from '../../actions/alertDataActions';
import siteConst from '../../constants/siteConst';

// контейнер для хэдера
class HeaderContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.showVersionInfo = this.showVersionInfo.bind(this);
    }

    componentDidMount() {
        // проскролливаем вверх после загрузки страницы
        scrollToComponent(this.headerItem, {align: 'top'});   //todo: не работает
    }

    showVersionInfo() {
        debugger;

        const mailLink = `mailto:${siteConst.siteEmail}`
        
        const alertData = {
            message: `Сайт находится на стадии beta-тестирования. Сообщения об ошибках/багах/некорректном отображении сайта на различных устройствах просьба отправлять сюда: `,
            secondaryHref: mailLink,
            secondaryMessage: siteConst.siteEmail,
        };

        this.props.setAlertData(alertData);
    }
    
    render() {
        return (
            <Header ref={elem => this.headerItem = elem}
                showVersionInfo = {this.showVersionInfo}
            />
        );
    }
}

const mapStateToProps = function(store) {
    return {
        //
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        setAlertData: function(data) {
            dispatch(setAlertData(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);