'use strict';

const server_url = 'http://localhost:3000';
// const server_url = 'https://trekking-site.herokuapp.com';   // для heroku
const api_url = `${server_url}/api`;

// адреса для обращения к апи сервера
module.exports = {
	serverUrl: `${server_url}`,

	feedbackApi: `${api_url}/feedback`,
}