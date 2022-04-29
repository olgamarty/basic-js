const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (Array.isArray(members)) {
		let onlyNames = members.filter(element => typeof element === 'string');
		onlyNames = onlyNames.map(el => el.trim().toUpperCase()).sort();
		let result = '';
		for (let name of onlyNames) {
			result += name[0];
		}
		return result;
	} else return false;

}

module.exports = {
	createDreamTeam
};
