'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HidingLayer from '../views/hidingLayer';

// контейнер для слоя, скрывающего основной контент и делающего его неактивным
// в случае, когда показано всплывающее окно
class HidingLayerContainer extends PureComponent {

    constructor(props) {
        super(props);
    }
    
    render() {
        debugger;

        // всплывающее окно показано, если:
        // есть оповещение для юзера или открыта форма обратной связи
        const isPopupFormShown = this.props.alertData || this.props.currentFeedback;


        const hidingLayer = isPopupFormShown
                            ?
                            <HidingLayer/>
                            :
                            null;

        return (
            <div>{hidingLayer}</div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        alertData: store.alertDataState.get('alertData'),
        currentFeedback: store.feedbackState.get('currentFeedback'),
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        //?
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HidingLayerContainer);