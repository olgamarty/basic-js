const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let result = [];
	for (let j = 0; j < matrix.length; j++) {
		let arrayOneString = [];
		let count = 0;
		for (let i = 0; i < matrix[j].length; i++) {
			if (matrix[j][i - 1] === true) count++;
			if (matrix[j][i + 1] === true) count++;
			if (matrix[j + 1]) {
				if (matrix[j + 1][i - 1] === true) count++;
				if (matrix[j + 1][i + 1] === true) count++;
				if (matrix[j + 1][i] === true) count++;
			}
			if (matrix[j - 1]) {
				if (matrix[j - 1][i - 1] === true) count++;
				if (matrix[j - 1][i + 1] === true) count++;
				if (matrix[j - 1][i] === true) count++;
			}

			arrayOneString.push(count);
			count = 0;
		}
		result.push(arrayOneString);
	}
	return result;
}

module.exports = {
	minesweeper
};
