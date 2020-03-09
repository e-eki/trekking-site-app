'use strict';

import { combineReducers } from 'redux';
import alertDataReducer from './alertDataReducer';
import contentReducer from './contentReducer';
import forumDesignReducer from './forumDesignReducer';
import feedbackReducer from './feedbackReducer';


const reducer = combineReducers({
  alertDataState: alertDataReducer,
  contentState: contentReducer,
  forumDesignState: forumDesignReducer,
  feedbackState: feedbackReducer,
});

export default reducer;
