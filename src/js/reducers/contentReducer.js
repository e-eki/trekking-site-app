'use strict';

import {Map} from 'immutable';
import * as actionTypes from '../actions/actionTypes';

// управление отображаемым контентом
export default function contentReducer(state = Map(), action) {

  switch (action.type) {
    case actionTypes.SET_CURRENT_MENU_ITEM:
      return state.set('currentMenuItem', action.data);
    
    default:
      return state;
  }
}

