'use strict';

import * as actionTypes from './actionTypes';

// текущий раздел меню
export function setCurrentMenuItem(data) {
	return {
	  type: actionTypes.SET_CURRENT_MENU_ITEM,
	  data
	};
}
