/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }

  if (strs.length === 1) {
    return strs[0]
  }

  var example = strs[0]
  var prefix = ''
  var stop = false
  for (var i = 0, len = example.length; i < len ; i++) {
    for (var j = 1, jLen = strs.length; j < jLen ; j++) {
      if (example[i] !== strs[j][i]) {
        stop = true
        break
      }
    }

    if (stop) {
      break
    } else {
      prefix += example[i]
    }
  }
  return prefix
};

longestCommonPrefix(["flower","flow","flight"])
longestCommonPrefix(["dog","racecar","car"])