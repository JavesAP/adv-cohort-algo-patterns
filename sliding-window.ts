// 1. Maximum Sum Subarray of Size K (Easy)
// Given an array of integers and an integer K, find the maximum sum of any contiguous subarray of size K.

function maxSumSubarray(arr: number[], k: number) {
  let maxSum = 0, windowMaxSum = 0;

  for (let i = 0; i < k; i++) {
      windowMaxSum += arr[i];
  }

  maxSum = windowMaxSum;

  for (let i = k; i < arr.length; i++) {
      windowMaxSum += arr[i] - arr[i - k];
      maxSum = windowMaxSum > maxSum ? windowMaxSum : maxSum
  }

  return maxSum;
}
// Test Cases
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Normal Case
console.log(maxSumSubarray([1, 2], 3)); // Edge Case: k is greater than array length

// 2. Longest Substring Without Repeating Characters (Medium)
// Given a string, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s: string) {
  //Note: This current function works for the current problem, but in cases where the repeated letter
  // is not at the start of the window 
  // ex) currentWindow = ['a', 'b', 'c'], i = 'b' 
  // I would have to restart the window at 'c' which my function can't accomplish

  // Implement sliding window logic
  let maxCharLength = 0, windowMaxChar = 0
  //let windowStartPointer = 0
  const currentWindow = new Set()
  
  for (let i = 0; i < s.length; i++) {
    console.log(`Start: ${s[i]}`, currentWindow.size)
    if (!currentWindow.has(s[i])) {
      currentWindow.add(s[i])
      windowMaxChar++
      if (windowMaxChar > maxCharLength) maxCharLength = windowMaxChar
    } else {
      if (s[i - 1] !== s[i]) {
        //if (s[windowStartPointer] === s[i]) {
          currentWindow.delete(s[i])
          currentWindow.add(s[i])
        //} else {
          //while(s[windowStartPointer] !== s[i]) {
            //currentWindow.delete(s[windowStartPointer])
            //windowStartPointer++
          //}
          //currentWindow.delete(s[i])
          //currentWindow.add(i)
          //windowStartPointer = i
      } else {
        currentWindow.clear()
        windowMaxChar = 0
        i--
      }
    }
    console.log(`End: ${s[i]}`, currentWindow.size)
  }
  return maxCharLength
}
// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Normal Case
console.log(lengthOfLongestSubstring("")); // Edge Case: Empty string

// 3. Longest Repeating Character Replacement (Medium)
// Given a string and an integer K, find the longest substring that can be obtained by replacing at most K characters.
function characterReplacement(s, k) {
  // Implement sliding window logic
  let maxCharLength = 0 
}
// Test Cases
console.log(characterReplacement("AABABBA", 1)); // Normal Case
console.log(characterReplacement("A", 2)); // Edge Case: Single character string

// 4. Minimum Window Substring (Hard)
// Given a string S and a string T, find the minimum window in S which contains all characters of T.
function minWindow(s, t) {
  // Implement sliding window logic
}
// Test Cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Normal Case
console.log(minWindow("a", "aa")); // Edge Case: No valid substring
