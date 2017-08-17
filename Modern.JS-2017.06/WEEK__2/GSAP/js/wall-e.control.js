// poster
	// soundtrac
	// disney-pixar
	// logo
	// eve
	// m-o
	// wall-e
	// music-composed
	// 

(function(global, $, T) {
	'use strict';

	// 트윈맥스.시작할때(대상(선택자 / DOM / jQuery 객체), 시간, {속성});
	// 트윈맥스 속성 - x, y, autoAlpha, delay, ...
	// T.from('.soundtrac', 1, {
	// 	y: -1000, autoAlpha: 0, delay: 0.3, ease: 'Elastic.easeOut',
	// 	onStart: function(){console.log('start')},
	// 	onUpdate: function(){console.log('update')},
	// 	onComplete: function(){console.log('end')},
	// });
	// T.from('.disney-pixar', 1, {y: -1000, autoAlpha: 0, delay: 0.6, ease: 'Elastic.	easeOut'});
	// T.from('.logo', 1, {y: -1000, autoAlpha: 0, delay: 0.9, ease: 'Elastic.easeOut'});
	// T.from('.eve', 1, {y: -1000, autoAlpha: 0, delay: 1.2, ease: 'Elastic.easeOut'});
	// T.from('.m-o', 1, {y: -1000, autoAlpha: 0, delay: 1.5, ease: 'Elastic.easeOut'});
	// T.from('.wall-e', 1, {y: -1000, autoAlpha: 0, delay: 1.8, ease: 'Elastic.easeOut'});
	// T.from('.music-composed', 1, {y: -1000, autoAlpha: 0, delay: 2.1, ease: 'Elastic.easeOut'});
	
	// new 생성자함수() -> 객체(인스턴스) 생성
	// 설정 객체 {}에 paused
	var tl = new TimelineMax({paused: true});
	
	// console.dir(tl); // 객체의 숨겨진 속성을 확인하고자 할 때 .dir()
	tl
		.from('.soundtrac', 0.5, {y: -1000, autoAlpha: 0, ease: 'Power4.easeOut'})
		.add('here')
		.from('.disney-pixar', 0.5, {y: -1000, autoAlpha: 0, ease: 'Power4.easeOut'}, '-=0.2')
		.from('.logo', 0.5, {y: -1000, autoAlpha: 0, ease: 'Power4.easeOut'}, '-=0.2')
		.from('.eve', 0.5, {y: -1000, autoAlpha: 0, ease: 'Power4.easeOut'}, '-=0.2')
		.from('.m-o', 0.5, {y: -1000, autoAlpha: 0, ease: 'Power4.easeOut'}, '1.67')
		.from('.wall-e', 0.5, {y: -1000, autoAlpha: 0, ease: 'Power4.easeOut'}, 'here')
		.from('.music-composed', 0.5, {y: -1000, autoAlpha: 0, ease: 'Power4.easeOut'}, 'here+=0.4');
return;
	// jQuery 로 제어할 버튼 생성
	// .play()
	// .pause()
	// .resume()
	// .reverse()
	// .timeScale()
	// .seek()
	// .progress()
	// .restart();
	
	// var $btn_resume = $('<button class="btn-ani" type="button">resume animation</button>')
	// 	.prependTo('body');
	// $btn_resume.on('click', function() {tl.resume()});

	// var $btn_pause = $('<button class="btn-ani" type="button">pause animation</button>')
	// 	.prependTo('body');
	// $btn_pause.on('click', function() {tl.pause()});

	// var $btn_play = $('<button class="btn-ani" type="button">play animation</button>')
	// 	.prependTo('body');
	// $btn_play.on('click', function() {tl.restart()});


	// div.button-set
	var button_set_html = '<div class="button-set">';
	
	// button classname Array
	var buttons_classname = [
		{className: 'is-play', content: 'play'},
		{className: 'is-pause', content: 'pause'},
		{className: 'is-resume', content: 'resume'},
		{className: 'is-reverse', content: 'reverse'},
		{className: 'is-speedup', content: 'speedup'},
		{className: 'is-speeddown', content: 'speeddown'},
		{className: 'is-seek', content: 'seek 1s'},
		{className: 'is-progress', content: 'progress 42%'},
		{className: 'is-restart', content: 'restart'}
	];

	for (var i=0,l=buttons_classname.length; i<l; ++i)
	{
		var button = buttons_classname[i];
		button_set_html += '<button type="button" class="btn '+button.className+'"">'+button.content+'</button>';
	}
	button_set_html += '</div>';
	
	var $button_set = $(button_set_html).prependTo('body');
	var $buttons = $button_set.find('.btn');

	$.each($buttons, function(index) {
		var $button = $buttons.eq(index);
		$button.on('click', function() {
			// console.log('click');
			var method = $button.text();
			tl[method]();
		});
	});

})(window, window.jQuery, window.TweenMax);	