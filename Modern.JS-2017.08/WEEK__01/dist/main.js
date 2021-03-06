'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! main.js @ 2017, yamoo9.net */

// ——————————————————————————————————————
// JavaScript 약점
// 동적 형 지정 언어
// ——————————————————————————————————————

// ——————————————————————————————————————
// JavaScript 약점
// 동적 형 지정 언어
// 유형 설정이 너무 자유스럽다.
// 디버깅이 어렵고, 문제 발생 소지가 다분.
// ——————————————————————————————————————

// JavaScript Data Types
// null, undefined, Literal(String, Number, Boolean)
// Object, Array Object, Function Object

var num, str, boo, fnc, arr, obj;

num = 90;
str = 'tranning';
boo = false;
// fnc = function(){}; // new Function()
fnc = function fnc() {}; // ES 6 Arrow Function
arr = []; // new Array()
obj = {}; // new Object

console.log('typeof num:', typeof num === 'undefined' ? 'undefined' : _typeof(num)); // 'number'
console.log('typeof str:', typeof str === 'undefined' ? 'undefined' : _typeof(str)); // 'string'
console.log('typeof boo:', typeof boo === 'undefined' ? 'undefined' : _typeof(boo)); // 'boolean'
console.log('typeof fnc:', typeof fnc === 'undefined' ? 'undefined' : _typeof(fnc)); // 'function'
console.log('typeof arr:', typeof arr === 'undefined' ? 'undefined' : _typeof(arr)); // 'array'
console.log('typeof obj:', typeof obj === 'undefined' ? 'undefined' : _typeof(obj)); // 'object'

// 네임스페이스 객체 생성
var y9 = {};
// 네임스페이스 객체의 메서드 등록
y9.type = function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    // data = data || null;
    return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
};

// 조건 검증 코드 실행
var data = arr;

// 문제가 있는 네이티브 자바스크립트 방식
// if ( typeof data === 'array' ) {

// 문제를 해결한 커스텀 유틸리티 함수를 사용하는 방식
if (y9.type(data) === 'array') {
    console.log('data is array.');
} else {
    console.log('data is not array.');
}

// ——————————————————————————————————————
// DOM 형성 과정
// ——————————————————————————————————————

var root = window.document.querySelector('html');

root.classList.add('root-element');

////////////////
// let, const //
////////////////

{
    // 전역 변수
    // 블록 내부에 공간(scope)을 형성 하지 않아서
    var test = '테스트';
}

{
    // 지역 변수
    // 블록 공간을 형성
    var _test = '테스트 ES6';
}
