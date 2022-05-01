const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let resultWithoutRepeat = str;
	let result = [];
	if (options.additionRepeatTimes) {
		let additionSymbols = [];
		for (let i = 0; i < options.additionRepeatTimes; i++) {
			if (options.addition === null) {
				additionSymbols.push('null');
			} else {
				additionSymbols.push(options.addition);
			}
		}

		if (options.additionSeparator) {
			resultWithoutRepeat += additionSymbols.join(options.additionSeparator);
		} else {
			resultWithoutRepeat += additionSymbols.join('|');
		}
	} else if (!options.additionRepeatTimes && options.addition) {
		resultWithoutRepeat += options.addition;
	}
	result.push(resultWithoutRepeat);

	if (options.repeatTimes) {
		for (let i = 1; i < options.repeatTimes; i++) {
			if (options.separator) {
				result.push(options.separator);
			} else {
				result.push('+');
			}
			result.push(resultWithoutRepeat);
		}
	}
	return result.join('');
}

module.exports = {
	repeater
};
