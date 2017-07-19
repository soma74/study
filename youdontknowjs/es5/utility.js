"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var abc = 1;
function sum(a, b) {
	return a + b;
}

function product(a, b) {
	if (Number.isInteger(a)) {
		return a * b;
	} else return 0;
}

exports.product = product;
exports.sum = sum;