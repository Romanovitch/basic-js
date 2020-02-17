const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  if ( (typeof(str) !== 'string') 
    || isNaN(parseFloat(str))
    || (!isNaN(str) && (+str <= 0 || +str > 15))){ 
      return false
  } 
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(str)) 
    / (0.693 / HALF_LIFE_PERIOD))
};
