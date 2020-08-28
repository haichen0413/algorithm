/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let obj = { "(": ")", "[": "]", "{": "}" };

  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    if (a in obj) {
      stack.push(a);
    } else {
      const pop = stack.pop();
      if (a !== obj[pop]) {
        return false;
      }
    }
  }

  return !stack.length;
};
