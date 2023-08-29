const colors = ['red', 'white', 'blue'];

for (let i = 0; i < colors.length; i++) {
  console.log(`value of colors[${i}]: ${colors[i]}`);
}

const america = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(america);

colors[2] = 'green';
const mexico = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(mexico);
console.log('value of colors:', colors);

const students = ['Malcolm', 'Alexa', 'James', 'Reginald'];
const numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in the class.`);

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}.`);
console.log('value of students:', students);
