/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('getNumbersToTen():', getNumbersToTen());
console.log('getNumbersToTen():', getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());
console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log(repeatWord('hey', 3));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log('logEachCharacter(""):', logEachCharacter(''));
console.log(
  'logEachCharacter("Malcolm Abbott"):',
  logEachCharacter('Malcolm Abbott')
);
console.log(
  'logEachCharacter("This is a full sentence."):',
  logEachCharacter('This is a full sentence.')
);

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log('doubleAll([1, 2, 3]):', doubleAll([1, 2, 3]));
console.log('doubleAll([1, 2, 3, 4, 5]):', doubleAll([1, 2, 3, 4, 5]));
console.log(
  'doubleAll([1, 2, 3, 4, 5, 6, 7]):',
  doubleAll([1, 2, 3, 4, 5, 6, 7])
);

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

const myObj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
};
const yourObj = {
  prop4: 'value4',
  prop5: 'value5',
  prop6: 'value6',
};
console.log('getKeys(myObj):', getKeys(myObj));
console.log('getKeys(yourObj):', getKeys(yourObj));

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}

console.log('getValues(myObj):', getValues(myObj));
console.log('getValues(yourObj):', getValues(yourObj));
