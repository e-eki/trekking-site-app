'use strict';

import { combineReducers } from 'redux';
import alertDataReducer from './alertDataReducer';
import menuReducer from './menuReducer';
import forumDesignReducer from './forumDesignReducer';


const reducer = combineReducers({
  alertDataState: alertDataReducer,
  menuState: menuReducer,
  forumDesignState: forumDesignReducer,
});

export default reducer;
