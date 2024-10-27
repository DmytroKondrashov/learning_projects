// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

var removeDuplicates = function(nums) {
  const set = new Set();

  nums.forEach(num => set.add(num));

  return Array.from(set);
};

console.log(removeDuplicates([1,1,2]))