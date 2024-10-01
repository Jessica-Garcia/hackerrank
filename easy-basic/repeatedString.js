/**
 There is a string, , of lowercase English letters that is repeated infinitely many times. 
 Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Returns

int: the frequency of a in the substring

*/

const s = 'abcac';
const n = 10;

const repeatedString = (s, n) => {
  const wordSize = s.length; // tamanho da palavra
  const numberOfLetterAInWord = s
    .split('')
    .filter((letter) => letter.toLowerCase() === 'a').length; // número de letras A na palavra

  const repsNumberUp = n > wordSize ? Math.ceil(n / wordSize) : 1; // quantas vezes tem que repetir a palavra para que tenha um número >= N
  const missingLettersNumber = n - wordSize * repsNumberUp; // quantas letras faltam da palavra na última repetição para que se atinja o número N de caracteres
  const remainingLetters = s.slice(0, missingLettersNumber).split(''); // as letras que sobram da palavra na última repetição
  const numberOfLetterAInRemainingLetters =
    remainingLetters.length > 0
      ? remainingLetters.filter((letter) => letter.toLowerCase() === 'a').length
      : 0; // número de letras a das letras restantes, que sobram após repetições inteiras
  const totalLetterA =
    numberOfLetterAInWord * Math.floor(n / wordSize) +
    numberOfLetterAInRemainingLetters; // número total de letras A vai ser igual ao (número de letras A da palavra * número de repetiçoes inteiras da palavra) + número de letras A nas letras remanescentes

  return totalLetterA;
};

console.log(repeatedString(s, n));

/**
 * s = 100 caracteres
 * n = 1.000.000.000.000 primeiros caracteres
 * S * n = 100.000.000.000.000 caracteres
 * n / s = 10.000.000.000
 * repetir 10.000.000.000 x 100 caracteres
 *
 * s = 1
 * n = 1.000.000.000.000
 * repetir 1.000.000.000.000 x 1
 *
 * s = 100
 * n = 1
 * repetir 100 x 1
 *
 * tamanho da palavra
 * descobrir quantos 'A's tem na palavra -> filter
 * Quantas vezes a palavra deve se repetir inteiramente para o número de carateres ser >= N?
 * Quantas vezes inteiras a palavra repetiu para para o número de carateres ser <= N?
 * Quantas letras da palavra faltam para completar a última palavra quando se tem N caracteres?
 * Ver quais foram as letras da palavra cortada que permaneceram
 * Quantos As tem nas letras que permaneceram?
 * número de As é o número de As na palavra multiplicado pelo número de reptições da palavra arredondado para baixo mais a soma desse resultado com o número de letras A das letras que sobraram da última repetição
 *
 */
