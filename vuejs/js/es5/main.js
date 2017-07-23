'use strict';

var _VueMathPlugin = require('/js/es5/VueMathPlugin.js');

var _VueMathPlugin2 = _interopRequireDefault(_VueMathPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_VueMathPlugin2.default);

new Vue({
	el: '#app',
	date: { item: 49 }
});