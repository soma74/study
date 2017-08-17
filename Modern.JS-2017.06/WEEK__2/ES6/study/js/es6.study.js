"use strict";

// ES5: var
// ES6+: var, let, const


// Global Scope
var myJob = '강의하는 지식인';
var webpack = "Modlue Bundler";

// 함수 표현식
var getSomePeople = function getSomePeople() {
	"use strict";

	// this Context -> ?? 가리킨다.
	// 함수를 실행하는 주체 === this
	// 누가 함수를 실행시켰나?

	console.log(this); //this??
};

getSomePeople(); // 전역에서 함수 실행

// Arrow Function Expression
// 화살표 함수 식
var getAnyPeople = function getAnyPeople() {};
console.log(getAnyPeople instanceof Function);

console.log(myJob);
console.log(webpack);

// webpack = "Modlue Bundler"; // 상수를 바꾼다?

// Block Scope
// let, const는 블록 영역을 만든다.
{
	// 오류 발생
	// let 키워드 변수는 호이스팅 되지 않기 때문
	console.log(_myJob);

	var _myJob = '선생님';
}