// 실제 DOM 실습
// var body = document.querySelector('body');
// var p_node = document.createElement('p');
// p_node.classList.add('actual-dom');
// p_node.textContent = 'Actual DOM Scripting';
// body.appendChild(p_node);

// ------------------------
// 가상 DOM 실습
// ------------------------
// virtual hyperscript module => VNode -> VTree
// h.js, createElement.js, diff.js, patch.js
var h = require('virtual-dom/h');
var createElement = require('virtual-dom/create-element');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');

// 상태(Data) 설정
// ToDoList 데이터
var todolistData = [
	'모닝 커피 마시기',
	'혼잡한 지하철에서 살아남기',
	'상사 눈치보며 열 일',
	'퇴근 후, 맥주 한 잔!!',
	'영화 보며 단 잠~',
	'영화 보며 단 잠~',
]; 

function removeTodolistData(index) 
{
	// todolistData 조작(제거)
	todolistData.splice(index, 1);
	update();
}

function registerTodolistDataItem(content) 
{
	todolistData.unshift(content);
	update();
}

window.todolistData = todolistData;
window.registerTodolistDataItem = registerTodolistDataItem;

// 렌더링을 처리하는 함수
function render() 
{
	var items = todolistData.map(function(item, index) {
		var item_link = h('a.todolist-item-link', {href: ''}, item);
		var deleteButton = h('button', {
			type: 'button',
			onclick: removeTodolistData.bind(null, index)
		}, '제거');

		return h('li.todolist-item', [
			h('input', {type: 'checkbox'}), 
			item,
			deleteButton
		]);
	});
	var list = h('ul.todolist', items);
	
	return list;
}

// 뷰 업데이트 함수
function update()
{
	// h, diff, pathc 모듈 
	// 새로운(New) 가상 DOM 생성
	var new_vTree = render();

	// 이전(Old) 가상 DOM 비교
	var patches = diff(vTree, new_vTree);

	// 변경 사항이 발생하면 패치
	rootTree = patch(rootTree, patches);

	// 새로운 가상 DOM은 이전(Old) DOM으로 변경
	vTree = new_vTree;
}

// 초기 렌더링 수행
var vTree = render();
var rootTree = createElement(vTree); // VTree -> 실제 DOM 요소 생성

// body 요소의 앞에 붙여 보도록 하거나,
// h1 요소 뒤에 붙여보자.
var h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', rootTree);

// // 시간에 따라 데이터 변경
// var i = window.setInterval(function() {
// 	update();
// }, 2000);

// window.setTimeout(function() {
// 	window.clearInterval(i);
// },10000);