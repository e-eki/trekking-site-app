'use strict';

import {Map} from 'immutable';
import * as actionTypes from '../actions/actionTypes';

// управление окном для отправки фидбека
export default function feedbackReducer(state = Map(), action) {

  switch (action.type) {
    case actionTypes.SET_CURRENT_FEEDBACK:
      return state.set('currentFeedback', action.data);
    
    default:
      return state;
  }
}

