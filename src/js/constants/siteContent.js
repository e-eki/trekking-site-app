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
		heading: 'КАЛЕНДАРЬ ПОХОДОВ "С Марго на Север". Сезон 2020',
		description: <div>
						<p>Прошедшие события. Ссылки и отзывы</p>

						<p>Грядущие события.</p>

						<p>ЗИМА</p>

						<p>Февраль</p>

						<p>9 февраля на снегоступах к Ладоге.</p>
						<p>Прогулка без ночевки.</p>
						 
						<p>23 февраля на снегоступах к озерам Карельского перешейка.</p>
						<p>Прогулка без ночевки.</p>

						<p>Март</p>

						<p>8-9 марта на снегоступах к озерам Кузнечного.</p>
						<p>Ночуем на снегу.</p>

						<p>21-22 марта на снегоступах к Ладоге. Залив Лехмалахти. </p>
						<p>Ночуем на снегу. Празднуем весеннее равноденствие.</p>

						<p>Апрель</p>

						<p>1-10 апреля на снегоступах в Хибины. Живем на КСП Куэльпорр.</p>
						<p>Ходим пер. Вост. Петрелиуса, Умбозерский, Юж. Рисчорр.</p>

						<p>ЛЕТО</p>

						<p>Май</p>

						<p>1-6 Майские в Заонежье. Пегрема, разведка водного трансфера.</p>
						<p>Поход по себестоимости.</p>

						<p>Июнь</p>

						<p>20-27 июня Солнцестояние на Нуорунен. Нац. парк Паанаярви.</p>
						<p>Северная Карелия.</p>

						<p>Июль</p>

						<p>11-25 июля Плато Путорана.</p>
						<p>Поход-разведка вместе с ТурКлубом ПиК.</p>

						<p>Август</p>

						<p>31июля - 8 августа Ловозерские тундры.</p>
						<p>Сейдозеро с ТурКлубом ПиК.</p>

						<p>10-18 августа Хибины с ТурКлубом ПиК.</p>

						<p>20-28 августа Хибины без рюкзаков с ТурКлубом ПиК.</p>
						<p>Живем на КСП Куэльпорр, ходим Сев. Чоргорр.</p>

						<p>ОСЕНЬ</p>

						<p>Сентябрь</p>

						<p>11-19 сентября Ловозерские тундры.</p>
						<p>Сейдозеро с ТурКлубом ПиК.</p>

						<p>Ноябрь</p>

						<p>1-6 ноября Самайн на Воттовааре.</p>
						<p>Карелия вместе с Проектом 61\30.</p>

						<p>Подробнее о каждом походе можно узнать у меня. Пишите, Друзья!</p>
						<p>И до встречи на Северной тропе!)</p>
					</div>
	},

	// раздел "Обо мне"
	aboutMeBlock: {
		name: 'aboutMeBlock',
		menuHeading: 'Обо мне',
		heading: 'Обо мне',
		description: <div>
						<p>Добро пожаловать в тундру, Друзья!</p>
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
						<p>Мурманская область</p>
						<p>Карелия</p>
						<p>Ленинградская область</p>
						<p>Красноярский край</p>
					</div>
	},

	// раздел "Свод правил"
	rulesBlock: {
		name: 'rulesBlock',
		menuHeading: 'Свод правил',
		heading: 'Свод правил пользования тундрой.',
		description: <div>
						<p>1. ВЕСЬ свой мусор внимательно утилизируй!</p>
						
						<p>Ни одного следа не оставляй после себя на тропе и стоянках.</p>

						<p>Обувь!!!, стекло, резина, металлические баллоны газа или репеллентов, банки консервы в костре не пережигаются, строго на вынос. Пережечь металл нужно несколько суток горения, а потом глубокий закоп для разложения. Иначе каждое кострище будет забито мусором. В общем - обувь, резину, металл и стекло строго с собой, обратно в города.</p>
						
						<p>Полиэтиленовые фантики\бутылки\пакеты, все влажные салфетки!, окурки!!, носки и трусы!!!, тампоны, прокладки, памперсы - строго в огонь. На тропе все несем с собой в карманах, до костра, и там сжигаем. В почве все перечисленное не разлагается годами, и очень мерзко выглядит.</p>
						
						<p>Пищевые остатки с котлов, очистки от рыбы и овощей, туалетную бумагу нужно закапывать поглубже и подальше от стоянок, троп и водоемов. Не привлекай к стоянке диких зверей и не будь засранцем.</p>
						
						<p>2. Помни о чистоте питьевой воды!</p>

						<p>Не сливай с посуды и котлов остатки пищи в горные озера и реки. Там рыбы нет, а всем последующим полуразложившиеся макароны не в радость.</p>
						
						<p>И вообще, зубную пасту в воду не плюй, шампунь и мыло смывай с себя котлом на землю, подальше, а не напрямую в ручей. Стирай в пакете, и мыльную воду тоже сливай повыше на берег.</p>
						
						<p>Ограничь использование моющих средств на природе. Вместо фейри используй горчичный порошок, песок, мох или траву.</p>
						
						<p>Помни — внизу по течению тоже люди.</p>

						<p>3. Не гадь на тропе!!!</p>

						<p>Никто не должен натыкаться на твои следы. Будь как ниндзя!</p>
						
						<p>Закапывай свои бумажки поглубже в дальних кустах, под мох или в камни.</p>

						<p>4. Бережно относись к природе.</p>

						<p>Не рви букеты\венки, срывай растения аккуратно и только для еды\чая. Не руби зеленые деревья и их ветви — они не горят.</p>
						
						<p>Не обдирай лапник под палатку, кору на растопку, не строй шалаши выживания. Все тоже самое можно сделать со снаряжением. Туристов по тропам ходит много, а дерево растет долго. Оставь стоянку красивой, а не лысой!</p>
						
						<p>5. Разводи костер ТОЛЬКО в готовом кострище. Всегда внимательно туши огонь.</p>
						
						<p>Стоянок на тропах много, всегда можно дойти до уже готового и прогоревшего места.</p>
						
						<p>На территориях нац. парков, заповедников и заказников используй для готовки еды газ. Костер только в разрешенном месте и преимущественно для сушки\обогрева.</p>
						
						<p>В горах, где дров практически нет, используй для готовки еды газ. Те немногие дрова, что есть на камнях, возможно, спасут кому-то жизнь в холод и непогоду.</p>
						
						<p>И самое важное, ведь чисто там, где убирают</p>
						<p>Оставь стоянку чище, чем она была до тебя.</p>
						<p>Разводя костер, собери старый пластик вокруг стоянки и сожги его.</p>
						<p>Сделай тундре хорошо!</p>
					</div>
	},

	// раздел "Контакты"
	contactsBlock: {
		name: 'contactsBlock',
		menuHeading: 'Контакты',
		heading: 'Контакты',
		description: <div>
						<p>Телефон: <a href="tel:+79629750419">+7 (962) 975 04 19</a></p>
						<p>E-mail: <a href="mailto:ya.snejnoya@ya.ru">ya.snejnoya@ya.ru</a></p>
						{/* <p>Skype: <a href="skype:live:ifirtree"> live:ifirtree</a></p> */} 

						<p>Я <a href="https://vk.com/margoseverguid">Вконтакте</a></p>
						<p>Путешествия за снегом <a href="https://vk.com/tropanasever">Вконтакте</a></p>

						<p>Я <a href="t.me/MargoSever">в Telegram</a></p>
						<p>Путешествия за снегом <a href="http://t.elegram.ru/tropanasever">в Telegram</a></p>

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