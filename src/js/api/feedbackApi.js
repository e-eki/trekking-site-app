'use strict';

import axios from 'axios';
import Promise from 'bluebird';
import apiConst from '../constants/apiConst';
import { getFingerprint } from '../utils/fingerprintUtils';

// отправить письмо через форму обратной связи
export function sendFeedback(name, email, text) {
	debugger;
	//get fingerprint
	return getFingerprint()
		.then(fingerprint => {
			debugger;

			return axios.post(`${apiConst.feedbackApi}`, {
				name: name,
				email: email,
				text: text,
				fingerprint: fingerprint,
			});
		})
}
