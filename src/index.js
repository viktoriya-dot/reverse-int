module.exports = function reverse (n) {
    let result = '';
    if (n < 0) {
      n *= -1
    }
    n = String(n).split('').reverse();
      if (n[0] === '0') {
        n.shift()
      }
    result = n.join('')
    return result
    }

