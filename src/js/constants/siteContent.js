'use strict';

import React from 'react';

module.exports = {
	// порядок разделов
	blocksOrder: [
		'trekkingCalendarBlock',
		'aboutMeBlock',
		'travelRoutesBlock',
		'rulesBlock',
		'contactsBlock',
		'forumBlock',
	],

	// раздел, который показываем при входе на сайт
	defaultBlock: 'trekkingCalendarBlock',

	// раздел "Календарь походов"
	trekkingCalendarBlock: {
		name: 'trekkingCalendarBlock',
		menuHeading: 'Календарь походов',
		heading: 'Календарь походов "С Марго на Север"',
		description: <div>
						<p>
							<a className = 'past-events-link' href="/">Прошедшие события. Ссылки и отзывы</a>
						</p>

						<p>
							<a className = 'future-events-link' href="/">Грядущие события. Сезон 2020</a>
						</p>

						<div className = 'past-events-description'>
							<div
								className = 'image image_can-zoom-in image_past-events-review-0' 
								alt = 'отзыв 0'>
							</div>

							<div
								className = 'image image_can-zoom-in image_past-events-review-1' 
								alt = 'отзыв 1'>
							</div>

							<div
								className = 'image image_can-zoom-in image_past-events-review-2' 
								alt = 'отзыв 2'>
							</div>

							<div
								className = 'image image_can-zoom-in image_past-events-review-3' 
								alt = 'отзыв 3'>
							</div>
						</div>

						<div className = 'future-events-description'>

							<p className = 'content-item__title'>ЗИМА</p>

							<div
								className = 'image image_calendar-image-0' >
							</div>

							<p className = 'content-item__subtitle'>Февраль</p>

							<p><span className = 'content-item__subtitle'>9 февраля</span> на снегоступах к Ладоге.</p>
							<p className = 'content-item content-item_no-margin-top'>Прогулка без ночевки.</p>
							
							<p><span className = 'content-item__subtitle'>23 февраля</span> на снегоступах к озерам Карельского перешейка.</p>
							<p className = 'content-item content-item_no-margin-top'>Прогулка без ночевки.</p>

							<p className = 'content-item__subtitle'>Март</p>

							<p><span className = 'content-item__subtitle'>8-9 марта</span> на снегоступах к озерам Кузнечного.</p>
							<p className = 'content-item content-item_no-margin-top'>Ночуем на снегу.</p>

							<p><span className = 'content-item__subtitle'>21-22 марта</span> на снегоступах к Ладоге. Залив Лехмалахти. </p>
							<p className = 'content-item content-item_no-margin-top'>Ночуем на снегу. Празднуем весеннее равноденствие.</p>

							<p className = 'content-item__subtitle'>Апрель</p>

							<p><span className = 'content-item__subtitle'>1-10 апреля</span> на снегоступах в Хибины. Живем на КСП Куэльпорр.</p>
							<p className = 'content-item content-item_no-margin-top'>Ходим пер. Вост. Петрелиуса, Умбозерский, Юж. Рисчорр.</p>

							<p className = 'content-item__title'>ЛЕТО</p>

							<p className = 'content-item__subtitle'>Май</p>

							<p><span className = 'content-item__subtitle'>1-6 Майские</span> в Заонежье. Пегрема, разведка водного трансфера.</p>
							<p className = 'content-item content-item_no-margin-top'>Поход по себестоимости.</p>

							<p className = 'content-item__subtitle'>Июнь</p>

							<p><span className = 'content-item__subtitle'>20-27 июня</span> Солнцестояние на Нуорунен. Нац. парк Паанаярви.</p>
							<p className = 'content-item content-item_no-margin-top'>Северная Карелия.</p>

							<p className = 'content-item__subtitle'>Июль</p>

							<p><span className = 'content-item__subtitle'>11-25 июля</span> Плато Путорана.</p>
							<p className = 'content-item content-item_no-margin-top'>Поход-разведка вместе с ТурКлубом ПиК.</p>

							<p className = 'content-item__subtitle'>Август</p>

							<p><span className = 'content-item__subtitle'>31 июля - 8 августа</span> Ловозерские тундры.</p>
							<p className = 'content-item content-item_no-margin-top'>Сейдозеро с ТурКлубом ПиК.</p>

							<p><span className = 'content-item__subtitle'>10-18 августа</span> Хибины с ТурКлубом ПиК.</p>

							<p><span className = 'content-item__subtitle'>20-28 августа</span> Хибины без рюкзаков с ТурКлубом ПиК.</p>
							<p className = 'content-item content-item_no-margin-top'>Живем на КСП Куэльпорр, ходим Сев. Чоргорр.</p>

							<p className = 'content-item__title'>ОСЕНЬ</p>

							<p className = 'content-item__subtitle'>Сентябрь</p>

							<p><span className = 'content-item__subtitle'>11-19 сентября</span> Ловозерские тундры.</p>
							<p className = 'content-item content-item_no-margin-top'>Сейдозеро с ТурКлубом ПиК.</p>

							<p className = 'content-item__subtitle'>Ноябрь</p>

							<p><span className = 'content-item__subtitle'>1-6 ноября</span> Самайн на Воттовааре.</p>
							<p className = 'content-item content-item_no-margin-top'>Карелия вместе с Проектом 61\30.</p>

							<p className = 'content-item content-item_margin-top'>Подробнее о каждом походе можно узнать у меня. Пишите, Друзья!</p>
							<p className = 'content-item__subtitle content-item_no-margin-top'>И до встречи на Северной тропе!)</p>
						</div>
					</div>
	},

	// раздел "Обо мне"
	aboutMeBlock: {
		name: 'aboutMeBlock',
		menuHeading: 'Обо мне',
		heading: 'Обо мне',
		description: <div>
						<div
							className = 'image image_about-me-image-0'>
						</div>

						<p className = 'content-item__subtitle'>Добро пожаловать в тундру, Друзья!</p>
						<p>В этом сообществе я хочу рассказать вам о своих путешествиях.</p>
						<p>Много лет подряд, я уезжаю вслед за отступающей зимой на Север и провожу короткий сезон открытой пешеходной тропы в Хибинах и Ловоозерских тундрах, открывая для себя этот суровый и потрясающий край.</p>
						<p>Много зим подряд, я путешествую вслед за метелями, уезжаю высоко в южные горы вместе с моей доской. Драгобрат, Буковель, Парнассос, Гуадаури, Яхорина - снежные путешествия открывали мне удивительные, новые вершины и склоны, знакомили с такими разными народами, их кухней и обычаями.</p>

						<p>Вожу гидом большинство из своих приключений.</p>
						<p>Пишите мне, если захотите присоединиться к текущим проектам!</p>
					</div>
	},

	// раздел "Маршруты путешествий"
	travelRoutesBlock: {
		name: 'travelRoutesBlock',
		menuHeading: 'Маршруты путешествий',
		heading: 'Маршруты путешествий',
		description: <div>
						<p>
							<a className = 'kola-link' href="/">Мурманская область</a>
						</p>

						<p>
							<a className = 'krl-link' href="/">Карелия</a>
						</p>

						<p>
							<a className = 'len-link' href="/">Ленинградская область</a>
						</p>

						<p>
							<a className = 'putoran-link' href="/">Красноярский край</a>
						</p>
					</div>
	},

	// раздел "Свод правил"
	rulesBlock: {
		name: 'rulesBlock',
		menuHeading: 'Свод правил',
		heading: 'Свод правил пользования тундрой',
		description: <div>
						<div
							className = 'image image_rules-image-0'>
						</div>

						<p className = 'content-item__subtitle content-item_margin-top'>1. ВЕСЬ свой мусор внимательно утилизируй!</p>
						
						<p>Ни одного следа не оставляй после себя на тропе и стоянках.</p>

						<p>Обувь!!!, стекло, резина, металлические баллоны газа или репеллентов, банки консервы в костре не пережигаются, строго на вынос. Пережечь металл нужно несколько суток горения, а потом глубокий закоп для разложения. Иначе каждое кострище будет забито мусором. В общем - обувь, резину, металл и стекло строго с собой, обратно в города.</p>
						
						<p>Полиэтиленовые фантики\бутылки\пакеты, все влажные салфетки!, окурки!!, носки и трусы!!!, тампоны, прокладки, памперсы - строго в огонь. На тропе все несем с собой в карманах, до костра, и там сжигаем. В почве все перечисленное не разлагается годами, и очень мерзко выглядит.</p>
						
						<p>Пищевые остатки с котлов, очистки от рыбы и овощей, туалетную бумагу нужно закапывать поглубже и подальше от стоянок, троп и водоемов. Не привлекай к стоянке диких зверей и не будь засранцем.</p>
						
						<div
							className = 'image image_rules-image-1'>
						</div>

						<p className = 'content-item__subtitle content-item_margin-top'>2. Помни о чистоте питьевой воды!</p>

						<p>Не сливай с посуды и котлов остатки пищи в горные озера и реки. Там рыбы нет, а всем последующим полуразложившиеся макароны не в радость.</p>
						
						<p>И вообще, зубную пасту в воду не плюй, шампунь и мыло смывай с себя котлом на землю, подальше, а не напрямую в ручей. Стирай в пакете, и мыльную воду тоже сливай повыше на берег.</p>
						
						<p>Ограничь использование моющих средств на природе. Вместо фейри используй горчичный порошок, песок, мох или траву.</p>
						
						<p>Помни — внизу по течению тоже люди.</p>

						<div
							className = 'image image_rules-image-2'>
						</div>

						<p className = 'content-item__subtitle content-item_margin-top'>3. Не гадь на тропе!!!</p>

						<p>Никто не должен натыкаться на твои следы. Будь как ниндзя!</p>
						
						<p>Закапывай свои бумажки поглубже в дальних кустах, под мох или в камни.</p>

						<div
							className = 'image image_rules-image-3'>
						</div>

						<p className = 'content-item__subtitle content-item_margin-top'>4. Бережно относись к природе.</p>

						<p>Не рви букеты\венки, срывай растения аккуратно и только для еды\чая. Не руби зеленые деревья и их ветви — они не горят.</p>
						
						<p>Не обдирай лапник под палатку, кору на растопку, не строй шалаши выживания. Все тоже самое можно сделать со снаряжением. Туристов по тропам ходит много, а дерево растет долго. Оставь стоянку красивой, а не лысой!</p>
						
						<div
							className = 'image image_rules-image-4'>
						</div>

						<p className = 'content-item__subtitle content-item_margin-top'>5. Разводи костер ТОЛЬКО в готовом кострище. Всегда внимательно туши огонь.</p>
						
						<p>Стоянок на тропах много, всегда можно дойти до уже готового и прогоревшего места.</p>
						
						<p>На территориях нац. парков, заповедников и заказников используй для готовки еды газ. Костер только в разрешенном месте и преимущественно для сушки\обогрева.</p>
						
						<p>В горах, где дров практически нет, используй для готовки еды газ. Те немногие дрова, что есть на камнях, возможно, спасут кому-то жизнь в холод и непогоду.</p>
						
						<div
							className = 'image image_rules-image-5'>
						</div>

						<div className = 'content-item__subtitle content-item_margin-top'>
							<p>И самое важное, ведь чисто там, где убирают.</p>

							<p>Оставь стоянку чище, чем она была до тебя.</p>

							<p className = 'content-item content-item_no-margin-top'>Разводя костер, собери старый пластик вокруг стоянки и сожги его.</p>
							
							<p>Сделай тундре хорошо!</p>
						</div>

						<div
							className = 'image image_rules-image-6 image_margin-top'>
						</div>
					</div>
	},

	// раздел "Контакты"
	contactsBlock: {
		name: 'contactsBlock',
		menuHeading: 'Контакты',
		heading: 'Контакты',
		description: <div>
						<p>Телефон: <a href="tel:+79217635608">+7 (921) 763-56-08</a></p>
						<p>E-mail: <a href="mailto:ya.snejnoya@ya.ru">ya.snejnoya@ya.ru</a></p>
						{/* <p>Skype: <a href="skype:live:ifirtree"> live:ifirtree</a></p> */} 

						<p>Я <a href="https://vk.com/margoseverguid">Вконтакте</a></p>
						<p>Путешествия за снегом <a href="https://vk.com/tropanasever">Вконтакте</a></p>

						<p>Я <a href="https://t.me/MargoSever">в Telegram</a></p>
						<p>Путешествия за снегом <a href="https://t.me/tropanasever">в Telegram</a></p>

						<p>Путешествия за снегом <a href="https://www.youtube.com/channel/UCnAkW2xISc1g7SPvkxacPlA">на Youtube</a></p>
					</div>
	},

	// раздел "Форум"
	forumBlock: {
		name: 'forumBlock',
		menuHeading: 'Форум',
		heading: 'Форум',
		description: <div></div>
	},

}