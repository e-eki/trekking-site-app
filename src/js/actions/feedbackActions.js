'use strict';

import * as actionTypes from './actionTypes';

// текущий отправляемый фидбек
export function setCurrentFeedback(data) {
	return {
	  type: actionTypes.SET_CURRENT_FEEDBACK,
	  data
	};
}
