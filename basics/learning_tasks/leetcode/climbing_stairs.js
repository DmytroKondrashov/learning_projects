// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function(n) {
  if (n <= 1) return 1

  const dp = Array.from(n+1).fill(0)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
};

console.log(climbStairs(4))