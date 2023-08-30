/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  const result = number < 5;
  return result;
}

console.log('isUnderFive(4):', isUnderFive(4));
console.log('isUnderFive(10):', isUnderFive(10));
console.log('isUnderFive(5):', isUnderFive(5));

function isEven(number) {
  const result = number % 2 === 0;
  return result;
}

console.log('isEven(4):', isEven(4));
console.log('isEven(10):', isEven(10));
console.log('isEven(5):', isEven(5));

function startsWithJ(string) {
  const result = string[0] === 'J';
  return result;
}

console.log('startsWithJ("JavaScript"):', startsWithJ('JavaScript'));
console.log('startsWithJ("PHP"):', startsWithJ('PHP'));
console.log('startsWithJ("HTML"):', startsWithJ('HTML'));
console.log('startsWithJ("Java"):', startsWithJ('Java'));
console.log('startsWithJ("Kotlin"):', startsWithJ('Kotlin'));
console.log('startsWithJ("C#"):', startsWithJ('C#'));

function isOldEnoughToDrink(person) {
  const result = person.age >= 21;
  return result;
}

const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};

console.log('isOldEnoughToDrink(bart):', isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person) {
  const result = person.age >= 16;
  return result;
}

const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};

console.log('isOldEnoughToDrive(homer):', isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

console.log(
  'isOldEnoughToDrinkAndDrive(homer):',
  isOldEnoughToDrinkAndDrive(homer)
);

function categorizeAcidity(pH) {
  let result;
  if (pH >= 0 && pH < 7) {
    result = 'acid';
  } else if (pH === 7) {
    result = 'neutral';
  } else if (pH > 7 && pH <= 14) {
    result = 'base';
  } else {
    result = 'invalid pH level';
  }
  return result;
}

console.log('categorizeAcidity(-1):', categorizeAcidity(-1));
console.log('categorizeAcidity(14.0000001):', categorizeAcidity(14.000001));
console.log('categorizeAcidity(7):', categorizeAcidity(7));
console.log('categorizeAcidity(2):', categorizeAcidity(2));
console.log('categorizeAcidity(9):', categorizeAcidity(9));

function introduceWarnerBro(name) {
  let result;
  switch (name) {
    case 'yakko':
      result = "We're the warner brothers!";
      break;
    case 'wakko':
      result = "We're the warner brothers!";
      break;
    case 'dot':
      result = "I'm cute~";
      break;
    case 'cody':
      result = 'Goodnight everybody!';
      break;
    case 'minerva':
      result = 'Goodnight everybody!';
  }
  return result;
}

console.log('introduceWarnerBro("yakko"):', introduceWarnerBro('yakko'));
console.log('introduceWarnerBro("wakko"):', introduceWarnerBro('wakko'));
console.log('introduceWarnerBro("dot"):', introduceWarnerBro('dot'));
console.log('introduceWarnerBro("cody"):', introduceWarnerBro('cody'));
console.log('introduceWarnerBro("minerva"):', introduceWarnerBro('minerva'));

function recommendMovie(genre) {
  let result;
  switch (genre) {
    case 'action':
      result = 'Die Hard';
      break;
    case 'comedy':
      result = 'The Big Lebowski';
      break;
    case 'horror':
      result = 'horror1';
      break;
    case 'drama':
      result = 'drama1';
      break;
    case 'musical':
      result = 'Pippin';
      break;
    case 'sci-fi':
      result = 'Enders Game';
      break;
    default:
      result =
        'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
  return result;
}

console.log('recommendedMovie("action"):', recommendMovie('action'));
console.log('recommendedMovie("comedy"):', recommendMovie('comedy'));
console.log('recommendedMovie("random"):', recommendMovie('random'));
