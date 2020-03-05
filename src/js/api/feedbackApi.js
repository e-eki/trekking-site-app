'use strict';

import axios from 'axios';
import Promise from 'bluebird';
import apiConst from '../constants/apiConst';

// отправить письмо через форму обратной связи
export function sendFeedback(data) {
	debugger;

	const options = {
		method: 'POST',
		url: `${apiConst.feedbackApi}`,
		data: data,
	};
	
	return axios(options);
}
