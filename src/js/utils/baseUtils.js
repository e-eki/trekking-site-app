'use strict';

import store from '../store/store';
import { setAlertData } from '../actions/alertDataActions';

// получить сообщение об ошибке
export function getErrorResponseMessage(error) {
	debugger;
	let message = '';

	if (error.response && error.response.data) {
		message = error.response.data;
	}
	else if (error.message) {
		message = error.message;
	}
	// else if (error.data && error.data.message) {  //???
	// 	message = error.data.message;
	// }
	else if (error.status === 500) {
		message = 'Internal server error';
	}
	else {
		message = 'Some client error';  //?
	}

	return message;
}

// показать сообщение об ошибке
export function showErrorMessage(error) {
	debugger;

	const message = getErrorResponseMessage(error);

	const alertData = {
		message: message,
	};

	store.dispatch(setAlertData(alertData));
}

// проверка имейла на валидность
export function isEmailValid(email) {
	var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegex.test(String(email).toLowerCase());
}
