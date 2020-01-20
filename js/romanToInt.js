/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }

  var total = 0
  for (var i = 0, len = s.length; i < len; i++ ) {
    if (total === 0) {
      total += map[s[i]]
      continue
    }

    if (map[s[i]] > map[s[i -1]]) {
      total += (map[s[i]] - (map[s[i-1]] * 2))
    } else {
      total += map[s[i]]
    }
  }
  return total
};

romanToInt('III')
romanToInt('IV')
romanToInt('IX')
romanToInt('LVIII')
romanToInt('MCMXCIV')