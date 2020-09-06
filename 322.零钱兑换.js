/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) {
    return 0;
  }

  // 给dp装上最大值，有一个装满最大值的数组
  const dp = Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        // 当前和当前的上一步
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[dp.length - 1] === Number.MAX_VALUE ? -1 : dp[dp.length - 1];
};
