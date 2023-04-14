const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */


class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect; // флаг, указывающий, является ли машина прямой или обратной
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!'); // проверка на наличие аргументов
    }

    message = message.toUpperCase(); // преобразование сообщения и ключа в верхний регистр
    key = key.toUpperCase();

    let encrypted = ''; // инициализация переменной для зашифрованного сообщения

    for (let i = 0, j = 0; i < message.length; i++) {
      const currentChar = message[i];
      if (/[A-Z]/.test(currentChar)) { // если текущий символ - буква латинского алфавита
        const charCode = ((currentChar.charCodeAt(0) - 65) + (key[j % key.length].charCodeAt(0) - 65)) % 26; // применение шифра Виженера для шифрования символа
        encrypted += String.fromCharCode(charCode + 65); // добавление зашифрованного символа к зашифрованному сообщению
        j++;
      } else {
        encrypted += currentChar; // если текущий символ не является буквой латинского алфавита, добавить его к зашифрованному сообщению как есть
      }
    }

    return this.isDirect ? encrypted : encrypted.split('').reverse().join(''); // вернуть зашифрованное сообщение в прямом или обратном порядке
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!'); // проверка на наличие аргументов
    }

    encryptedMessage = encryptedMessage.toUpperCase(); // преобразование зашифрованного сообщения и ключа в верхний регистр
    key = key.toUpperCase();

    let decrypted = ''; // инициализация переменной для расшифрованного сообщения

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const currentChar = encryptedMessage[i];
      if (/[A-Z]/.test(currentChar)) { // если текущий символ - буква латинского алфавита
        const charCode = ((currentChar.charCodeAt(0) - 65) - (key[j % key.length].charCodeAt(0) - 65) + 26) % 26; // применение шифра Виженера для расшифрования символа
        decrypted += String.fromCharCode(charCode + 65); // добавление расшифрованного символа к расшифрованному сообщению
        j++;
      } else {
        decrypted += currentChar; // если текущий символ не является буквой
      }
    }

    return this.isDirect ? decrypted : decrypted.split('').reverse().join('');
  }
}



module.exports = {
  VigenereCipheringMachine
};
