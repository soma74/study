// IIFE 패턴
// 모듈 패턴
// 일반 함수식 -> 화살표 함수식 변경
// (function() {
// (()=>{

// 화살표 함수에 전달 받는 인자가 한 개일 경우는 ()를 생략할 수 있다.
// ($=>{

((global, $)=>{
	'use strict';

	let exist_jquery = false;

	{
		let exist_jquery = !!window.jQuery;
		console.log(exist_jquery);
	}

	console.log('jQuery Version is ', jQuery.fn.jquery);

// DI: 의존 모듈 주입
})(window, window.jQuery);

// console.log(exist_jquery); // is not defined



// ------------------------------------------------------------------



($=>{
	'use strict';

	// jQuery code
	// Element Wrapping using $()
	// <button type="button">click me</button>
	let button_content = "dynamic generate button";
	let button = $('<button>', {
		type: 'button',
		text: button_content,
		
		// Event handling
		on: {
			// click: ()=> {
			// 	console.log('click button: ' + button_content);
			// }
			click: ()=> {
				console.log(`click button: ${button_content}`);
			}
		}
	}).prependTo('body');

	// Event handling
})(window.jQuery);



// ------------------------------------------------------------------



($=>{
	'use strict';

	let music_playlist_html = `<ul class="music-playlist">`;

	// music_list 데이터(배열)를 순환하여 HTML 템플릿 코드를 완성합니다.
	// ES6, String Template
	// ES5+, forEach 구문을 사용
	// 배열.forEach(콜백(아이템, 인덱스)){}
	music_list.forEach((item, index)=> {
		let cover = item.cover;
		let alt = item.alt;
		let src = item.source;
		// console.log('cover', cover);
		// console.log('alt', alt);
		// console.log('----------------------------------');

		music_playlist_html += `
<li class="music-playlist-item clearfix">
	<a href="./Data/${item.source}">
		<img class="music-playlist-img" src="./Data/${item.cover}" alt>
		<p class="music-playlist-content">${item.alt}</p>
	</a>
</li>
		`;
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

	music_playlist_html += `</ul>`;
	
	// 동적으로 구조를 생성한 후에
	// 데이터를 순환하여 바인딩한 후, DOM에 추가
	$(music_playlist_html).appendTo('body');
})(window.jQuery);
