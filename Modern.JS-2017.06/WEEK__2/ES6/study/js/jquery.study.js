'use strict';

// IIFE 패턴
// 모듈 패턴
// 일반 함수식 -> 화살표 함수식 변경
// (function() {
// (()=>{

// 화살표 함수에 전달 받는 인자가 한 개일 경우는 ()를 생략할 수 있다.
// ($=>{

(function (global, $) {
	'use strict';

	var exist_jquery = false;

	{
		var _exist_jquery = !!window.jQuery;
		console.log(_exist_jquery);
	}

	console.log('jQuery Version is ', jQuery.fn.jquery);

	// DI: 의존 모듈 주입
})(window, window.jQuery);

// console.log(exist_jquery); // is not defined


// ------------------------------------------------------------------


(function ($) {
	'use strict';

	// jQuery code
	// Element Wrapping using $()
	// <button type="button">click me</button>

	var button_content = "dynamic generate button";
	var button = $('<button>', {
		type: 'button',
		text: button_content,

		// Event handling
		on: {
			// click: ()=> {
			// 	console.log('click button: ' + button_content);
			// }
			click: function click() {
				console.log('click button: ' + button_content);
			}
		}
	}).prependTo('body');

	// Event handling
})(window.jQuery);

// ------------------------------------------------------------------


(function ($) {
	'use strict';

	var music_playlist_html = '<ul class="music-playlist">';

	// music_list 데이터(배열)를 순환하여 HTML 템플릿 코드를 완성합니다.
	// ES6, String Template
	// ES5+, forEach 구문을 사용
	// 배열.forEach(콜백(아이템, 인덱스)){}
	music_list.forEach(function (item, index) {
		var cover = item.cover;
		var alt = item.alt;
		var src = item.source;
		// console.log('cover', cover);
		// console.log('alt', alt);
		// console.log('----------------------------------');

		music_playlist_html += '\n<li class="music-playlist-item clearfix">\n\t<a href="./Data/' + item.source + '">\n\t\t<img class="music-playlist-img" src="./Data/' + item.cover + '" alt>\n\t\t<p class="music-playlist-content">' + item.alt + '</p>\n\t</a>\n</li>\n\t\t';
	});
	// jQuery 유틸리티 메서드 버전
	// $.each(music_list, (index, item)=> {
	// // $(music_list).each((index, item)=> {
	// 	let cover = item.cover;
	// 	let alt = item.alt;
	// 	console.log('cover : ', cover);
	// 	console.log('alt : ', alt);
	// 	console.log('----------------------------------');
	// });

	music_playlist_html += '</ul>';

	// 동적으로 구조를 생성한 후에
	// 데이터를 순환하여 바인딩한 후, DOM에 추가
	$(music_playlist_html).appendTo('body');
})(window.jQuery);