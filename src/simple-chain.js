const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  // инициализируем пустой массив цепочки
  chain: [],
  // метод getLength возвращает текущую длину цепочки
  getLength() {
    return this.chain.length;
  },
  // метод addLink добавляет новое звено с указанным значением в конец цепочки
  addLink(value) {
    // приводим значение к строке и добавляем новый элемент в цепочку
    this.chain.push(`( ${String(value)} )`);
    // возвращаем сам объект chainMaker, чтобы методы были chainable
    return this;
  },
  // метод removeLink удаляет звено в указанной позиции из цепочки
  removeLink(position) {
    // проверяем, что позиция является целым числом
    if (!Number.isInteger(position)) {
      // если нет, выбрасываем ошибку
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    // проверяем, что позиция находится в пределах цепочки
    if (position < 1 || position > this.chain.length) {
      // если нет, выбрасываем ошибку
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    // удаляем элемент из цепочки
    this.chain.splice(position - 1, 1);
    // возвращаем сам объект chainMaker, чтобы методы были chainable
    return this;
  },
  // метод reverseChain переворачивает цепочку
  reverseChain() {
    // переворачиваем цепочку
    this.chain.reverse();
    // возвращаем сам объект chainMaker, чтобы методы были chainable
    return this;
  },
  // метод finishChain завершает цепочку и возвращает её строковое представление
  finishChain() {
    // объединяем элементы цепочки в одну строку, разделяя их символом '~~'
    const result = this.chain.join('~~');
    // очищаем цепочку
    this.chain = [];
    // возвращаем строку
    return result;
  }
};


module.exports = {
  chainMaker
};
