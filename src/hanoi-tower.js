module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = new Array(disksNumber).fill(2).reduce((res, num)=>res * num) - 1
    return {
      turns,
      seconds: turns / (turnsSpeed / 3600)
    }
  }