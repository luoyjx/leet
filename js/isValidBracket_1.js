/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === '') { return true }
  if (s.length % 2 !== 0) { return false }

  var tokens = []

  for (var i = 0, len = s.length; i < len; i++) {
    if (tokens.length === 0) {
      tokens.push(s[i])
    } else {
      if (isCoupled(tokens[tokens.length - 1], s[i])) {
        tokens.pop()
      } else {
        tokens.push(s[i])
      }
    }
  }
  console.log(`${s} => ${tokens.length === 0}`)
  return tokens.length === 0
};

function isCoupled(a, b) {
  return (
    (a === '(' && b === ')') ||
    (a === '{' && b === '}') ||
    (a === '[' && b === ']')
  )
}

isValid('()')
isValid('()[]{}')
isValid('(]')
isValid('([)]')
isValid('{[]}')
isValid('')
isValid('((')
isValid('(')