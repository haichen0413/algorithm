/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (board == null) {
    return false;
  }
  if (word == null) {
    return true;
  }

  const row = board.length;
  const col = board[0].length;

  // 怎么找
  // 先遍历每一行
  for (let i = 0; i < row; i++) {
    // 再遍历每一列
    for (let j = 0; j < col; j++) {
      // 单词的位置和索引作为参数
      const res = find(i, j, 0);
      if (res) {
        return true;
      }
    }
  }
  return false;

  function find(i, j, cur) {
    // 边界处理
    if (i >= row || i < 0) return false;
    if (j >= col || j < 0) return false;
    // 如果没有越界 找到当前的字母
    const letter = board[i][j];
    // 字母不匹配
    if (letter !== word[cur]) return false;
    // 找到最后一个 并且相等
    if (cur === word.length - 1) return true;
    // 终止条件完成
    board[i][j] = null;
    const res = find(i + 1, j, cur + 1) || find(i - 1, j, cur + 1) || find(i, j + 1, cur + 1) || find(i, j - 1, cur + 1);
    board[i][j] = letter;
    return res;
  }
};
