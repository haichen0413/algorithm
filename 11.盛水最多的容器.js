/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (!height || height <= 1) return 0;

  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    // 计算初始状态面基
    const area = Math.abs(right - left) * Math.min(height[left], height[right]);

    if (area > maxArea) {
      maxArea = area;
    }

    // 左边的小，移动左边
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
