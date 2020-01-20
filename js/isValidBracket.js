/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === '') { return true }
  if (s.length % 2 !== 0) { return false }

  var starts = [ '(', '{', '[' ];
  var ends = [ ')', '}', ']' ];

  var tokens = []

  function walk (index) {
    if (!tokens.length) {
      tokens.push(s[index])
      return walk(index+1)
    } else {
      var lastToken = tokens[tokens.length-1]
      // console.log(lastToken)
      if (
        (
          starts.indexOf(lastToken) > -1 &&
          ends.indexOf(s[index]) > -1 &&
          starts.indexOf(lastToken) !== ends.indexOf(s[index])
        ) ||
        (
          ends.indexOf(lastToken) > -1 &&
          starts.indexOf(s[index]) > -1 &&
          ends.indexOf(lastToken) !== starts.indexOf(s[index])
        )
      ) {
        return false
      } else {
        if (
          index === (s.length - 1)
        ) {
          if (
            lastToken &&
            (
              (
                starts.indexOf(lastToken) > -1 &&
                ends.indexOf(s[index]) > -1 &&
                starts.indexOf(lastToken) === ends.indexOf(s[index])
              ) ||
              (
                ends.indexOf(lastToken) > -1 &&
                starts.indexOf(s[index]) > -1 &&
                ends.indexOf(lastToken) === starts.indexOf(s[index])
              )
            )
          ) {
            // console.log(tokens)
            return true
          }

          return false
        }

        // 处于同一区间时，暂存
        if (
          (
            starts.indexOf(lastToken) > -1 &&
            starts.indexOf(s[index]) > -1
          ) ||
          (
            ends.indexOf(lastToken) > -1 &&
            ends.indexOf(s[index]) > -1
          )
        ) {
          tokens.push(s[index]);
          return walk(index+1)
        }

        // 成对时，弹出开符号
        tokens.pop()
        return walk(index+1)
      }
    }
  }

  const r = walk(0)
  console.log(`${s} => ${r}`)
  return r
};

isValid('()')
isValid('()[]{}')
isValid('(]')
isValid('([)]')
isValid('{[]}')
isValid('')
isValid('((')
isValid('(')