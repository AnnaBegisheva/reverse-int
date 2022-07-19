module.exports = function reverse (n) {
  let str = (Math.abs(n)).toString().split('');
  return +str.reverse().join('');
}
