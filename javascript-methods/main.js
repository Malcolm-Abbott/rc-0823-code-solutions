const num1 = 1;
const num2 = 2;
const num3 = 3;
const maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

const heroes = ['hero1', 'hero2', 'hero3', 'hero4'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'title1',
    author: 'author1',
  },
  {
    title: 'title2',
    author: 'author2',
  },
  {
    title: 'title3',
    author: 'author3',
  },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Lea Verou',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

const fullName = 'Malcolm Abbott';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
