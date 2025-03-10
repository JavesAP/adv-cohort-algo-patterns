// 1. Remove Duplicates from Sorted Array (Easy)
// Given a sorted array, remove the duplicates in-place such that each element appears only once.
// Return the new length of the array.
function removeDuplicates(nums: number[]) {
  // Implement the logic using two pointers
  let target = 0, pointer = 1
  for (const num of nums) {
    //console.log(target, pointer)
    if (nums[pointer] !== nums[target]) {
      if (pointer - 1 === target) {
        if (pointer + 1 < nums.length) target += 1, pointer += 1
      }
    } else if (nums[pointer] === nums[target]){
      nums.splice(pointer, 1)
    }
  }
  return nums
}
// Test Cases
console.log(removeDuplicates([1, 1, 2, 3, 3, 4])); // Normal Case: [1, 2, 3, 4]
console.log(removeDuplicates([])); // Edge Case: Empty array

// 2. Two Sum II - Input Array is Sorted (Easy)
// Given a sorted array and a target number, return indices of the two numbers that add up to target.
function twoSumSorted(nums: number[], target: number) {
  // Implement two pointers logic
  let leftPointer = 0, rightPointer = nums.length - 1
  for (const num of nums) {
    if (nums[leftPointer] + nums[rightPointer] === target) return [leftPointer, rightPointer]
    if (leftPointer + 1 !== rightPointer || leftPointer !== rightPointer) {
      if (nums[rightPointer] > target) rightPointer -= 1
      else leftPointer += 1
    }
  }
  return 'No valid pairs'
}
// Test Cases
console.log(twoSumSorted([2, 7, 11, 15], 9)); // Normal Case: [0, 1]
console.log(twoSumSorted([1, 2, 3, 4], 10)); // Edge Case: No valid pairs

// 3. Container With Most Water (Medium)
// Given an array representing heights of vertical lines, find two lines that together with the x-axis form a container that holds the most water.
function maxArea(height) {
  // Use two pointers to maximize the area
}
// Test Cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Normal Case
console.log(maxArea([1, 1])); // Edge Case: Minimal height difference

// 4. Three Sum (Medium)
// Given an integer array, return all unique triplets that sum up to zero.
function threeSum(nums) {
  // Use two pointers inside a loop to find unique triplets
}
// Test Cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Normal Case
console.log(threeSum([0, 0, 0, 0])); // Edge Case: All elements are the same
