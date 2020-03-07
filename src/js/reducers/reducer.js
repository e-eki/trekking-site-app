'use strict';

import { combineReducers } from 'redux';
import alertDataReducer from './alertDataReducer';
import contentReducer from './contentReducer';
import forumDesignReducer from './forumDesignReducer';


const reducer = combineReducers({
  alertDataState: alertDataReducer,
  contentState: contentReducer,
  forumDesignState: forumDesignReducer,
});

export default reducer;
