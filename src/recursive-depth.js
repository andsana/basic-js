const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  // метод calculateDepth принимает массив arr и возвращает его глубину
  calculateDepth(arr) {
    let depth = 1; // устанавливаем начальную глубину 1
    for (let i = 0; i < arr.length; i++) { // проходим по каждому элементу массива
      if (Array.isArray(arr[i])) { // если элемент является массивом
        const currDepth = this.calculateDepth(arr[i]) + 1; // рекурсивно вызываем метод calculateDepth для этого элемента и увеличиваем его результат на 1
        if (currDepth > depth) { // если текущая глубина больше, чем сохраненная глубина
          depth = currDepth; // обновляем сохраненную глубину
        }
      }
    }
    return depth; // возвращаем сохраненную глубину
  }
}

module.exports = {
  DepthCalculator
};
