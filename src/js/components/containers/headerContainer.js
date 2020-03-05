'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../views/header';
import { setAlertData } from '../../actions/alertDataActions';
import siteConst from '../../constants/siteConst';

// контейнер для хэдера
class HeaderContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.showVersionInfo = this.showVersionInfo.bind(this);
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
            <Header
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