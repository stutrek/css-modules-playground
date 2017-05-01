var main = require('./main.less');
var button = require('./button.less');
var icon = require('./icon.less');

console.log('');
console.log('Your JS values');
console.log('-------- main ----------');
console.log(main);

console.log('-------- button ----------');
console.log(button);

console.log('-------- icon ----------');
console.log(icon);

console.log('');
console.log('Sample HTML');
var sampleHtml = `
	<button class="${button.button}">
		<span class="${icon.icon}">
			😊
		</span>
	</button>
`;

console.log(sampleHtml);

console.log('');
console.log('Your CSS');

