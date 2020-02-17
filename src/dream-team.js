module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  return members.map(el => {
    return typeof(el) === 'string' 
      ? el.trim()[0].toUpperCase() 
      : ''
  })
  .sort()
  .join('')
};