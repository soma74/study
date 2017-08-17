($=>{
	'use strict';

	// 뮤직을 재생할 오디오 객체를 참조할 변수 선언
	let audio;

	// 뮤직 플레이리스트를 화면에 그려주는 이벤트에 연결된 버튼
	let button_content = "뮤직 플레이리스트 렌더링";
	let button = $('<button>', {
		type: 'button',
		text: button_content,
		
		// Event handling
		on: {
			click: renderMusicPlayList
		}
	}).prependTo('body');

	// 뮤직 플레이리스트를 화면에 그리는 함수
	function renderMusicPlayList() 
	{
		loadMusicPlayListData();
		createAudio();
	}

	function createAudio()
	{
		audio = new Audio();
	}

	// 뮤직 플레이리스트 데이터를 로드하는 함수
	// 데이터를 json으로 사용
	// 서버에서 데이터를 로드하는 역할을 수행한다.
	// 받아온 데이터를 반환한다.
	function loadMusicPlayListData() 
	{
		// ajax를 사용하여 API 데이터 로드
		// https://api.myjson.com/bins/zqhud
		// jQuery.ajax() 사용
		$.ajax({
			// url: 'https://api.myjson.com/bins/zqhud',
			url: 'http://local.modernjs/WEEK__2/ES6/study/Data/music_list.json',
			type: 'GET',
			dataType: 'json'
		}).done(response=>{
			// 비동기데이터 처리
			// console.log(response.data);
			// 데이터가 성공적으로 불러와지면 데이터를 템플릿에 바인딩하여 사용자 화면에 렌더링 한다.
			render(response.data);
		}).fail(error=>{
			console.log(error.message);
		});
		
		// return music_list;
	}

	function render(data)
	{
		// HTML 코드를 완성할 변수 선언
		let music_playlist_html = `<ul class="music-playlist">`;

		data.forEach((item, index)=> {
			let cover = item.cover;
			let alt = item.alt;
			let src = item.source;

			music_playlist_html += `
				<li class="music-playlist-item clearfix">
					<a class="music-playlist-item-link" href="./Data/${item.source}">
						<img class="music-playlist-img" src="./Data/${item.cover}" alt>
						<p class="music-playlist-content">${item.alt}</p>
					</a>
				</li>
			`;
		});

		music_playlist_html += `</ul>`;

		// 렌더링
		$(music_playlist_html).appendTo('body');
		// bindEventsMusicPlayerlistItemLink();
	}

	function bindEventsMusicPlayerlistItemLink()
	{
		var $links = $('.music-playlist-item-link');

		$.each($links, (index)=> {
			let $link = $links.eq(index);
			$link.on('click', e=>{
				e.preventDefault();
				// console.log(this); // 화살표 함수표현식에서는 undefined
				// console.log($link); // jQuery Instance
				
				let source = $link.attr('href');
				$(audio).attr('src', source);
				// audio.setAttribute('src', source);
				console.log(audio.getAttribute('src'));
				audio.play();
			});
		});
	}

	$('body').on('click', '.music-playlist-item-link', function(e) {
		e.preventDefault();
		
		// $(audio).attr('src', $(this).attr('href'));
		audio.setAttribute('src', $(this).attr('href'));
		audio.play();
	});
})(window.jQuery);