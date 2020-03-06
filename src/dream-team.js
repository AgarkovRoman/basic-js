module.exports = function createDreamTeam(members) {
  if (typeof members === "number" || members === false || members === null || members === undefined || members.keys === false) {
    return false;
  } else if (members.length > 0) {
    let newArr = members.filter(word => typeof word === 'string').map(index => index.toUpperCase().replace(/\s/g, '').substr(0, 1))
    return newArr.sort().join('').toUpperCase();
  } else {
    return false;
  }
};