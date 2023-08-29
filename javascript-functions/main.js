function convertMinutesToSeconds(minutes) {
  const seconds = 60 * minutes;
  return seconds;
}

console.log('convertMinutesToSeconds(5):', convertMinutesToSeconds(5));

function greet(name) {
  const greeting = `Hey, ${name}`;
  return greeting;
}

console.log('greet("Beavis"):', greet('Beavis'));

function getArea(width, height) {
  const area = width * height;
  return area;
}

console.log('getArea(17, 42):', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log(
  'getFirstName({ firstName: "Lelouche", lastName: "Lamperouge" }):',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array) {
  return array[array.length - 1];
}

console.log(
  `getLastElement(['propane', 'and', 'propane', 'accessories']):`,
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
