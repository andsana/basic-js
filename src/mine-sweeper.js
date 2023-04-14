const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  // Создаем пустую матрицу с таким же размером как исходная, заполненную нулями
  const resultMatrix = Array.from({ length: matrix.length }, () => Array.from({ length: matrix[0].length }, () => 0));

  // Проходим по каждой ячейке матрицы
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      // Если в текущей ячейке находится мина, увеличиваем счетчики вокруг соседних ячеек
      if (matrix[i][j]) {
        // Проходим по всем соседним ячейкам
        for (let x = i - 1; x <= i + 1; x++) {
          for (let y = j - 1; y <= j + 1; y++) {
            // Проверяем, что соседняя ячейка находится в пределах матрицы
            if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length && !(x === i && y === j)) {
              // Увеличиваем счетчик вокруг соседней ячейки
              resultMatrix[x][y]++;
            }
          }
        }
      }
    }
  }

  return resultMatrix;
}


module.exports = {
  minesweeper
};
