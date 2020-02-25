module.exports = function transform(arr) {
	if (!Array.isArray(arr)) throw new Error()
	if (!arr.length) { return [] }
		const sequences = {
			double: {
				next: [1, 0],
				prev: [-1, 0]
			},
			discard: {
				next: [1, 1],
				prev: [-1, 1]
			}
		}
	const newArr = []
	for (let i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) === 'string' && arr[i].match(/(^--)[^-]+[-][^-]+/)){
			let position = arr[i].match(/(?<=--)([^-]+)/)[0]
			let action = arr[i].match(/([^-]+$)/)[0]
            let controlArr = sequences[position][action]
            
			if (typeof(arr[i + controlArr[0]]) === 'string' 
            && arr[i + controlArr[0]].match(/(^--)[^-]+[-][^-]+/)) throw new Error()

			if (!(typeof(arr[i + controlArr[0]]) === 'undefined')) { 
                controlArr[1]	
                    ? controlArr[0] + 1 
                        ? i++ 
                        : newArr.pop() 
                    : controlArr[0] + 1 
                        ? newArr.push(arr[i+1]) 
                        : newArr.push(arr[i-1])
			} 
		} else {
			newArr.push(arr[i])
		}
	}
	return newArr
};
