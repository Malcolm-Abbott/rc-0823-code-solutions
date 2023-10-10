function ExampleConstructor() {}

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log(
  'typeof ExampleConstructor.prototype:',
  typeof ExampleConstructor.prototype
);

const cloneExampleConstructor = new ExampleConstructor();
console.log('cloneExampleConstructor:', cloneExampleConstructor);

const isClone = cloneExampleConstructor instanceof ExampleConstructor;
console.log('isClone:', isClone);
