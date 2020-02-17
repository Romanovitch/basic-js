module.exports = function repeater(str, options) {
	const item = (text = '', repTimes = 1, separ = '+') => new Array(repTimes)
		.fill(`${text}`)
		.join(`${separ}`)
			
	return item(
		`${str}${item(
		options.addition, 
		options.additionRepeatTimes, 
		options.additionSeparator)}`, 
		options.repeatTimes, 
		options.separator)
};
  