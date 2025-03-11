// 1. Generate Parentheses (Medium)
// Given an integer n, generate all combinations of well-formed parentheses with n pairs.
function generateParenthesis(n) {
  // Implement backtracking logic
}
// Test Cases
console.log(generateParenthesis(3)); // Normal Case
console.log(generateParenthesis(0)); // Edge Case: No parentheses needed

// 2. Permutations (Medium)
// Given an array of distinct integers, return all possible permutations.
function permute(nums) {
  // Implement backtracking logic
}
// Test Cases
console.log(permute([1, 2, 3])); // Normal Case
console.log(permute([])); // Edge Case: Empty array

// 3. Combination Sum (Medium)
// Given an array of integers and a target, return all unique combinations where numbers sum to target.
function combinationSum(candidates, target) {
  // Implement backtracking logic
}
// Test Cases
console.log(combinationSum([2, 3, 6, 7], 7)); // Normal Case
console.log(combinationSum([2, 4], 7)); // Edge Case: No valid combinations

// 4. Word Search (Medium)
// Given an m x n grid of letters and a word, check if the word exists in the grid using adjacent letters.
function exist(board: string[][], word: string) {
  // Implement backtracking logic
  const columns = board[0].length
  const rows = board.length
  let boolean = false
  
  const directionsToCheck = {
    up: [-1, 0],
    down: [1, 0],
    right: [0, 1],
    left: [0, -1],
    upperRight: [-1, 1],
    upperLeft: [-1, -1],
    lowerRight: [1, 1],
    lowerLeft: [1, -1],
  }
  
  function dfs(row, col, index = 0) {
    if (!board[row][col]) return 
    if (index === word.length) return true
    
    if (board[row][col] === word[index]) {
      Object.entries(directionsToCheck).forEach((entry) => {
        const [direction, [x, y]] = entry
        return dfs(row + x, col + y, index + 1)
      })
    } else return false 
  }
  
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= columns; j++) {
      const check = dfs(i, j)
      if (check === true) boolean = true
    }
  }
  return boolean
}
// Test Cases
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
); // Normal Case
console.log(exist([["A"]], "B")); // Edge Case: Single letter grid with a different word
