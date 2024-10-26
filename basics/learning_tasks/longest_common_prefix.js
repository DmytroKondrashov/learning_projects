// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function(strs) {
  if (strs.length === 1) {
      return strs[0];
  }
  const prefix = [];

  let shortestWord = strs[0];
  strs.forEach(str => {
      if (str.lengts < shortestWord.length) {
          shortestWord = str;
      }
  })

  if (shortestWord.length === 0) {
      return '';
  } 

  for(let i = 0; i < shortestWord.length; i++) {
      for (const str of strs) {
        if (!prefix[i]) {
              prefix.push(str[i])
          }
          if (str[i] !== prefix[i]) {
              prefix.pop();
              break
          }
      }
  }

  return prefix.join('');
};
