// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
  const arr = s.split(' ');
  const notEmpty = arr.filter(el => el !== '');
  const lastWord = notEmpty[notEmpty.length - 1];
  return lastWord.length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))