/*! es5.js © yamoo9.net, 2017 */

//////////////////////////////
// 1. JavaScript 데이터 유형
// 참고: https://goo.gl/UqYzzm
//////////////////////////////


// 1-1) 원시(Primitive) 데이터 유형
// 원시 데이터 유형은 변수에 값이 할당될 때, 복사(Copy)된다.
// 원시 데이터 유형은 객체를 생성하는 대신, 리터럴을 주로 사용한다.
console.groupCollapsed('원시 데이터 유형');


// - Number
// 주로 사용되는 방법은 다음과 같다.
console.log('Number Literal:', 90);                       // 숫자 값
// 원시 데이터 유형에서는 아래와 같은 방법은 거의 사용하지 않는다.
console.log('Number Object:', new Number(90));            // 숫자 객체
console.log('Number Object:', new Number(90).valueOf());  // 숫자 객체 값 도출

// - String
console.log('String Liternal:', 'Modern JavaScript');
console.log('String Object:', new String('Modern JavaScript'));
console.log('String Object:', new String('Modern JavaScript').valueOf());

// - Boolean
console.log('Boolean Liternal:', true);
console.log('Boolean Object:', new Boolean(true));
console.log('Boolean Object:', new Boolean(true).valueOf());

// ——————————————————————————————————————————————————————————
// null, undefined 는 객체가 아니다.
// ——————————————————————————————————————————————————————————

// - null
console.log('null:', null);

// - undefined
console.log('undefined:', undefined);


console.groupEnd('원시 데이터 유형');


// 1-2) 참조(Reference)형 데이터 유형
// 참조 데이터 유형은 변수에 값이 할당될 때, 참조(Reference)된다.

console.groupCollapsed('참조 데이터 유형');

// - Function Object
var fnc     = function() {};      // 함수 값(Function Literal), 함수 표현식
var fnc_obj = new Function();     // 함수 객체 생성자를 통한 객체 생성 방법
console.log('fnc:', fnc);
console.log('fnc_obj:', fnc_obj);

// - Array Object
var arr     = [];                 // 배열 값(Array Literal)
var arr_obj = new Array();
console.log('arr:', arr);
console.log('arr_obj:', arr_obj);

// - Object (Plain Object)
var obj     = {};                 // 객체 값(Object Literal)
var obj_obj = new Object();
console.log('obj:', obj);
console.log('obj_obj:', obj_obj);

// 네이티브 객체에 한해서 객체 생성 방법 보다는 리터럴을 사용하세요.
// ;
// 9
// 'yamoo9'
// false
// (function(){})
// null
// undefined
// [9, 99]
// {name: 'object'}
console.groupEnd('참조 데이터 유형');


console.groupCollapsed('값 복사: 원시데이터 유형');
// 1-3) 원시 데이터 타입, 참조형 데이터 타입 구분
// 단일 var 패턴 (Single var pattern)
var empty       = null,
    isNotDefine = undefined,
    num         = 2017,
    str         = '이천십칠년',
    boo         = true,
    fnc         = function(){},
    arr         = [ num, str, boo ],
    obj         = {dataType: 'Object', author: 'yamoo9'};

// 1-3-1) 값 복사(pass by value)
// 원시 데이터 유형: 숫자, 문자, 논리(불리언), null, undefined
// 원시 데이터 유형을 변수에 할당(Assign)
var _empty       = empty;
var _isNotDefine = isNotDefine;
var _num         = num;
var _str         = str;
var _boo         = boo;

// 값이 복사된 변수의 값을 변경해보자.
_empty       = 'change value';
_isNotDefine = !false;
_num         = "assign String Value";
_str         = 909;
_boo         = null;

console.log('empty:', empty, '  VS  _empty:', _empty);
console.log('isNotDefine:', isNotDefine, '  VS  _isNotDefine:', _isNotDefine);
console.log('num:', num, '  VS  _num:', _num);
console.log('str:', str, '  VS  _str:', _str);
console.log('boo:', boo, '  VS  _boo:', _boo);

console.groupEnd('값 복사: 원시데이터 유형');


console.groupCollapsed('값 참조: 참조 데이터 유형');

// 1-3-2) 값 참조(pass by reference)
var _fnc, _arr, _obj;

// 기존 변수에 참조되어 있는 객체를
// 새로운 변수에 할당 (이 과정에서 복사가 아닌, 참조가 이루어진다)
_fnc = fnc;
_arr = arr;
_obj = obj;

// console.log('fnc:', fnc, '  VS  _fnc:', _fnc);
console.log('arr:', arr, '  VS  _arr:', _arr);
console.log('obj:', obj, '  VS  _obj:', _obj);

console.log('값 변경 전.....');

console.log("arr.push('new content'):", arr.push('new content'));
console.log("obj.name = 'yamoo9':", obj.name = 'yamoo9');

console.log('값 변경 후.....');

// console.log('fnc:', fnc, '  VS  _fnc:', _fnc);
console.log('arr:', arr, '  VS  _arr:', _arr);
console.log('obj:', obj, '  VS  _obj:', _obj);

// 참조라는 개념은 하나의 객체를 변수에 할당할 때 복사가 아닌,
// 일종의 가리키는 행위가 수행된다. 참조 객체를 할당 받은 변수를
// 다른 변수에 할당 했을 때도 참조가 이루어진다.

// 둘 중 하나를 변경하면 두 변수는 동일한 객체를 참조하기에
// 변경된 값을 동시에 공유하게 된다.

console.groupEnd('값 참조: 참조 데이터 유형');

// 1-4) 자바스크립트 메모리 관리는 어떻게 하는가?
// 참고: https://goo.gl/EWWHnZ






////////////////////////////////////
// 2. JavaScript 데이터 유형 올바른 감지
////////////////////////////////////

console.groupCollapsed('데이터 유형 체크: typeof');

// 2-1) 데이터 타입 검증 방법 typeof
// 참고: https://goo.gl/6rpQQi

console.log('typeof num:', typeof num);             // 'number'
console.log('typeof str:', typeof str);             // 'string'
console.log('typeof boo:', typeof boo);             // 'boolean'
console.log('typeof fnc:', typeof fnc);             // 'function'
console.log('typeof arr:', typeof arr);             // 'array'  [x]
console.log('typeof obj:', typeof obj);             // 'object'
console.log('typeof null:', typeof null);           // 'null'   [x]
console.log('typeof undefined:', typeof undefined); // 'undefined'
console.log('typeof /^[0-9]/:', typeof /^[0-9]/);   // 'regexp' [x]

// 결과적으로 typeof는 사용하지 않는 것이 좋다.
// 이유는 제대로 데이터 유형을 감지하지 못하기 때문
// new 생성자() 의 경우는 대부분 Object 라 말하고,
// array, null의 경우는 object 라고만 말한다.

console.groupEnd('데이터 유형 체크: typeof');


// 2-2) 데이터 타입 검증 방법 instanceof
// 참고: https://goo.gl/3w3EEw

// 객체 instanceof 생성자
// 인스턴스 instanceof 클래스
// MyShape{} instanceof MyShape;

// Class   --> Instance
// Number  --> new Number()
// 붕어빵 틀 ==> 붕어빵
// MyShape --> new MyShape() x 100

console.groupCollapsed('데이터 유형 체크: instanceof');

console.log('num instanceof Number:', num instanceof Number);     // true [x]
console.log('str instanceof String:', str instanceof String);     // true [x]
console.log('boo instanceof Boolean:', boo instanceof Boolean);   // true [x]
console.log('fnc instanceof Function:', fnc instanceof Function); // true
console.log('arr instanceof Array:', arr instanceof Array);       // true
console.log('obj instanceof Object:', obj instanceof Object);     // true

// 원시데이터 유형(리터럴을 사용) instanceof 는 사실만을 이야기 하지만,
// 사람들의 일반적인 인식과 차이가 있어 사용에 주의가 요구된다. (아무 짝에 쓸모가 없다)
// instanceof 는 객체만 판별 가능하기에 null, undefined 는 감지할 수 없다.

console.groupEnd('데이터 유형 체크: instanceof');



// 2-3) 데이터 타입 검증 방법 .consturctor 속성
// 참고: https://goo.gl/RqAF6f

// Class     --> new Class()    --> instance
// 생성자함수  --> new 생성자함수() --> 객체{}

// 자바스크립트에 존재하는 모든 객체는 생성자로부터 태어날 때
// 모두 꼬리표(.constructor 속성)를 가지고 태어난다.
// 자신이 누구로부터 탄생했는지 증거를 남긴다.

console.groupCollapsed('데이터 유형 체크: .constructor');

console.log('num.constructor === Number:', num.constructor === Number);     // true
console.log('str.constructor === String:', str.constructor === String);     // true
console.log('boo.constructor === Boolean:', boo.constructor === Boolean);   // true
console.log('fnc.constructor === Function:', fnc.constructor === Function); // true
console.log('arr.constructor === Array:', arr.constructor === Array);       // true
console.log('obj.constructor === Object:', obj.constructor === Object);     // true

// 객체에 한해서는 "완벽" 그 자체이지만...
// 객체가 아닌 null, undefined는 검증할 수 없어
// 아쉬움을 남긴다.

console.groupEnd('데이터 유형 체크: .constructor');



// 2-4) 데이터 타입 검증 방법 직접 만든 유틸리티 함수

// null, undefined 와 같은 비 객체도 검증할 수 있어야 한다.
// array와 같은 유사 객체도 올바르게 배열임을 증명할 수 있어야 한다.
// 정규 표현식(RegExp), 날짜 객체(Date)... 올바르게 검증 가능해야 한다.

// 올바른 검증을 위한 사용자 정의 함수를 만들 것이다.
// 함수 <- 로직(Logic)
// function type(data) {
//   // 전달받은 데이터 유형의 올바른 값을 반환한다.
//   // return data.validType;
//   var _type = Object.prototype.toString.call(data);
//   _type = _type.slice(8,-1);
//   _type = _type.toLowerCase();
//   return _type;
// }

console.groupCollapsed('데이터 유형 체크: type() 유틸리티 함수');

var toString = Object.prototype.toString;

// jQuery $.type(): 유틸리티 메서드와 유사한 로직 사용
function type(d) {
  return toString.call(d).slice(8,-1).toLowerCase();
}

var any = [{}, {}];
var data = any;

// 폼 데이터 유효성 검사
if ( type(any) === 'string' ) {
	console.log('any is string data type');
} else {
	console.log('any is not string data type');
}

console.log("type(null) === 'null':", type(null) === 'null');
console.log("type(undefined) === 'undefined':", type(undefined) === 'undefined');
console.log("type(num) === 'number':", type(num) === 'number');
console.log("type(str) === 'string':", type(str) === 'string');
console.log("type(boo) === 'boolean':", type(boo) === 'boolean');
console.log("type(fnc) === 'function':", type(fnc) === 'function');
console.log("type(arr) === 'array':", type(arr) === 'array');
console.log("type(obj) === 'object':", type(obj) === 'object');
console.log("type(/[0-9]/) === 'regexp':", type(/[0-9]/) === 'regexp');

console.groupEnd('데이터 유형 체크: type() 유틸리티 함수');

// 결국, 자바스크립트에서 제공해주는 방법 1,2,3은 모두 문제를 수반하는 방법들이다.
// 우리는 올바른 데이터 유형 감지를 위한 헬퍼(유틸리티) 함수를 제작할 필요가 있다.
// 결과적으로 이런 것들이 모여 라이브러리가 된다.
// e.g) jQuery, Lodash(Underscore), ScrollMagic, GSAP....




////////////////////////////
// 3. JavaScript 구문, 표현식
////////////////////////////


// 3-1) 구문(Statement)
// if 문
// while 문
// for 문
// for ~ in 문
// switch case 문
// statement는 "구문" 이라고 할 수 있습니다.
// 의미 상으로 보면 자바스크립트 인터프리터(번역기)에게 내리는 지시문(Directive)이라 할 수 입니다.
// 인터프리터가 이것을 보고 어떤 동작을 해야하는지 알게됩니다.
// 구문은 어떻게 동작해야 하는지 동작만 알려주고 사라집니다.
// 즉, 구문의 결과로는 아무것도 남지 않습니다.

// 아래 코드는 구문(문, Statement)이기에 값을 반환하지 않아 허용되지 않는다.
// 대체 방법으로 식(표현식, Expression)을 사용해야 한다.
// var condition = if ( type(data) === 'null' ) { return 0 }


// 3-2) 표현식(Expression)
// 식은 expression 이라 하는데, 간단히 말해 하나의 값이 되는 것입니다.
// 결론적으로 다른 모든 식은 하나의 값이 수렴하여 값 식이 되는 것이므로 "식 == 값"으로 이해해도 무방합니다.

// 4 + 2
// 10 > 3

// 아래 문장은 식을 사용하여 값을 반환하기에 사용 가능하다.
var condition = type(data) !== 'null' || 0;

console.groupCollapsed('문 VS 식');

console.log("문(값을 수렴하지 않음)을 사용한 변수 할당\nvar condition = if ( type(data) === 'null' ) { return 0 } :", '허용되지 않는다');
console.log("식(값을 수렴)을 사용한 변수 할당\nvar condition = type(data) !== 'null' || 0 :", condition);

console.groupEnd('문 VS 식');



////////////////////
// 4. JavaScript 함수
////////////////////

console.group('JavaScript 함수');

// 함수호출 : 함수를 호출한 결과는 값이 됩니다.
// 자바는 void를 반환하면 값이 될 수 없습니다만,
// 자바스크립트는 명시적으로 반환하지 않아도 undefined 가 반환되어
// 언제나 값으로 수렴됩니다.

// var result = getUserInput();


// 4-1) 영역(Scope)
// 전역: Global Scope
// 지역: Local Scope
// 즉시실행함수: IIFE 패턴 -> 모듈 정의 패턴

// 4-1-1) 라이프 사이클(Life Cycle)
// 함수 실행 영역 구간에서만 메모리에 상주한 후에 제거된다.
// 클로저를 사용하면 메모리 상주를 지속하기에 메모리 누수가 발행하여
// 성능 저하가 유발될 수 있다. e.g) IE 6, 7

// 4-1-2) 호이스팅(Hosting)

// 호이스팅 전
// var condition = false;

// function demoTest() {
//    var test = [];
//    innerAction(); // 실행이 될까?
//    // 아래 조건 구문은 결과가 참인가?
//    if (condition === false) {
//       console.log('condition is false');
//       var condition = 'truth';
//    } else {
//      condition = {};
//      test.push(condition);
//      var innerAction = function () {
//        console.log('inner Action');
//      }
//    }
//    return test;
// }

// demoTest();

// 호이스팅 이후

function demoTest() {
  function innerAction() {
    console.log('inner Action');
  }

   var test = [];
   var condition; // undefined
   innerAction(); // 실행이 될까? 실행된다.
   // 아래 조건 구문은 결과가 참인가? 조건 처리는 거짓
   if (condition === false) {
      console.log('condition is false');
      condition = 'truth';
   } else {
     condition = {};
     test.push(condition);
   }
   return test; // [{}]
}

var condition = false;


demoTest();


// 4-1-3) this 컨텍스트 참조

// 4-1-4) 메서드 빌려쓰기 패턴 .call(), .apply(), .bind()

console.groupEnd('함수');





////////////////////
// 5. JavaScript 배열
////////////////////


// 5-1) 데이터 관리

// 5-1-1) 데이터 아이템 생성(Create)

// 5-1-2) 데이터 아이템 읽기(Read)

// 5-1-3) 데이터 아이템 변경(Update)

// 5-1-4) 데이터 아이템 제거(Delete)


// 5-2) Array.isArray()


// 5-3) .forEach()  VS  .map()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// 5-4) .slice()  VS  .filter()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// 5-5) .indexOf()  VS  .lastIndexOf()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf


// 5-6) .every()  VS  .some()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some


// 5-7) .reduce()  VS  .reduceRight()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight







////////////////////
// 6. JavaScript 객체
////////////////////


// 6-1) Object.create()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create


// 6-2) Object.defineProperty(), Object.defineProperties()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties


// 6-3) Object.getPrototypeOf()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf


// 6-4) Object.keys()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


// 6-5) Object.seal()  VS Object.freeze()  VS  Object.preventExtensions()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions


// 6-6) Object.isSealed()  VS  Object.isFreeze()  VS  Object.isExtensible()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible







/////////////
// 7. ES5 상속
/////////////

var human = {
  sleeping : function() {},
  running  : function() {},
  eating   : function() {},
  going    : function() {},
};

var artist = Object.create(human, {
  thinking: {
    value: function(){},
    writable: true,
    enumerable: true,
    configurable: true
  },
  drawing: {
    value: function(){},
    writable: true,
    enumerable: true,
    configurable: true
  },
});






////////////////////////
// 8. DOM API
////////////////////////


// 8-1) DOM 선택 API 메서드
// getElementById()
// getElementsByTagName()
// getElementsByClassName() (IE 9+)
// querySelector() (IE 8+ CSS2 선택자로 제한, IE 9+)
// querySelectorAll()
// matches() (IE 9+ `ms` 프리픽스 필요)
// - msMatcheSelector()
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches


// 8-2) Node 속성
// childNodes
// firstChild
// lastChild
// nextSibling
// previousSibling
// parentNode
// nodeType
// nodeName
// nodeValue


// 8-3) Node 메서드
// hasChildNodes()
// appendChild()
// insertBefore()
// removeChild()
// replaceChild()
// cloneNode()
// contains()
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
// isEqualNode() (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode
// compareDocumentPosition() (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition


// 8-4) Document 메서드
// createElement()
// createTextNode()


// 8-5) HTML*Element 속성
// children
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// attributes (이 속성을 통해 반환되는 유사 배열 집합은 라이브 상태, 즉 실시간으로 변경된다)
// innerHTML
// outerHTML
// innerText
// textContent (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
// childElementCount (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount
// classList (IE 10+)
// - add()
// - remove()
// - contains()
// - toggle()
// dataset (JavaScript 객체로 `data-*` 속성에 사용된 `-`은 모두 camelCase로 처리하여 사용)


// 8-6) HTML*Element 메서드
// getAttribute()
// setAttribute()
// removeAttribute()
// hasAttribute() (요소노드에 속성이 있으면 값이 없어도 `true`를 반환, `Boolean` 속성 반환 값일 경우 상태 확인 가능)
// insertAdjacentHTML()
// https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
// insertAdjacentElement() (IE 8+)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
// insertAdjacentText() (IE ?)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText







////////////////////////
// 9. AJAX & REST API
////////////////////////

// 비동기 통신을 위한 객체 생성 (생성자 함수로부터)
// IE 6-, ActiveXObject() 사용....
// IE 7+, XMLHttpRequest() 사용 가능

// 비동기 통신을 설정
// 서버에 요청


// REST API
// HTTP 메서드: GET, POST, PUT, DELETE
// https://myjson.com


// defer, async 속성 사용 방법, 차이점 설명
// http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html

// defer 속성은 HTML 해석이 끝난 후 차례대로 실행된다.
// 하지만 모든 브라우저에서 지원하지는 않는다. (IE 10+)

// async 속성은 비동기적으로 실행되기에 실행 순서가 보장되지 않는다.
// 그러므로 의존 모듈이 있을 경우 사용에 주의가 요구된다.