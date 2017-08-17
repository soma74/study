'use strict';

(function ($) {
	'use strict';

	// 뮤직을 재생할 오디오 객체를 참조할 변수 선언

	var audio = void 0;

	// 뮤직 플레이리스트를 화면에 그려주는 이벤트에 연결된 버튼
	var button_content = "뮤직 플레이리스트 렌더링";
	var button = $('<button>', {
		type: 'button',
		text: button_content,

		// Event handling
		on: {
			click: renderMusicPlayList
		}
	}).prependTo('body');

	// 뮤직 플레이리스트를 화면에 그리는 함수
	function renderMusicPlayList() {
		loadMusicPlayListData();
		createAudio();
	}

	function createAudio() {
		audio = new Audio();
	}

	// 뮤직 플레이리스트 데이터를 로드하는 함수
	// 데이터를 json으로 사용
	// 서버에서 데이터를 로드하는 역할을 수행한다.
	// 받아온 데이터를 반환한다.
	function loadMusicPlayListData() {
		// ajax를 사용하여 API 데이터 로드
		// https://api.myjson.com/bins/zqhud
		// jQuery.ajax() 사용
		$.ajax({
			// url: 'https://api.myjson.com/bins/zqhud',
			url: 'http://local.modernjs/WEEK__2/ES6/study/Data/music_list.json',
			type: 'GET',
			dataType: 'json'
		}).done(function (response) {
			// 비동기데이터 처리
			// console.log(response.data);
			// 데이터가 성공적으로 불러와지면 데이터를 템플릿에 바인딩하여 사용자 화면에 렌더링 한다.
			render(response.data);
		}).fail(function (error) {
			console.log(error.message);
		});

		// return music_list;
	}

	function render(data) {
		// HTML 코드를 완성할 변수 선언
		var music_playlist_html = '<ul class="music-playlist">';

		data.forEach(function (item, index) {
			var cover = item.cover;
			var alt = item.alt;
			var src = item.source;

			music_playlist_html += '\n\t\t\t\t<li class="music-playlist-item clearfix">\n\t\t\t\t\t<a class="music-playlist-item-link" href="./Data/' + item.source + '">\n\t\t\t\t\t\t<img class="music-playlist-img" src="./Data/' + item.cover + '" alt>\n\t\t\t\t\t\t<p class="music-playlist-content">' + item.alt + '</p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t';
		});

		music_playlist_html += '</ul>';

		// 렌더링
		$(music_playlist_html).appendTo('body');
		// bindEventsMusicPlayerlistItemLink();
	}

	function bindEventsMusicPlayerlistItemLink() {
		var $links = $('.music-playlist-item-link');

		$.each($links, function (index) {
			var $link = $links.eq(index);
			$link.on('click', function (e) {
				e.preventDefault();
				// console.log(this); // 화살표 함수표현식에서는 undefined
				// console.log($link); // jQuery Instance

				var source = $link.attr('href');
				$(audio).attr('src', source);
				// audio.setAttribute('src', source);
				console.log(audio.getAttribute('src'));
				audio.play();
			});
		});
	}

	$('body').on('click', '.music-playlist-item-link', function (e) {
		e.preventDefault();

		// $(audio).attr('src', $(this).attr('href'));
		audio.setAttribute('src', $(this).attr('href'));
		audio.play();
	});
})(window.jQuery);