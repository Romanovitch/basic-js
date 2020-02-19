module.exports = class DepthCalculator {
    
	calculateDepth(arr) {
		let count = 1
		arr.forEach(el => {
			if (Array.isArray(el)){ 
				let tmp = this.calculateDepth(el)+1
				if (tmp > count) count = tmp
			}
		});
		return count
	}
};