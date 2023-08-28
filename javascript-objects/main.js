const student = {
  firstName: 'Malcolm',
  lastName: 'Abbott',
  age: 33,
};

const fullName = `${student.firstName} ${student.lastName}`;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'EMT';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2015,
};

vehicle['color'] = 'dark grey';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Ava',
  type: 'dog',
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
