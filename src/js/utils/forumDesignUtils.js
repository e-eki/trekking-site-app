'use strict';

// получить изображение для фона в зависимотси от времени суток
export function getBackgroundImage() {
	debugger;
	const hours = new Date().getHours();

	let backgroundImage;

	if (hours > 5 && hours < 8) {
		backgroundImage = "url('/images/kola_sunrise.jpg')";
	}
	if (hours > 8 && hours < 11) {
		backgroundImage = "url('/images/kola_morning.jpg')";
	}
	else if (hours > 11 && hours < 18) {
		backgroundImage = "url('/images/kola_day.jpg')";
	}
	else if (hours > 18 && hours < 21) {
		backgroundImage = "url('/images/kola_sunset.jpg')";
	}
	else if (hours > 21 && hours < 1) {
		backgroundImage = "url('/images/kola_starlight_night.jpg')";
	}
	else if (hours > 1 && hours < 5) {
		backgroundImage = "url('/images/kola_northern_lights.jpg')";
	}

	return backgroundImage;
}
