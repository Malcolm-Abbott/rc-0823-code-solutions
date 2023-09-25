const books = [
  {
    isbn: 'isbn1',
    title: 'title1',
    author: 'author1',
  },
  {
    isbn: 'isbn2',
    title: 'title2',
    author: 'author2',
  },
  {
    isbn: 'isbn3',
    title: 'title3',
    author: 'author3',
  },
];

console.log('books:', books);
console.log('typeof books:', typeof books);

const booksJson = JSON.stringify(books);
console.log('booksJson:', booksJson);
console.log('typeof booksJson:', typeof booksJson);

const studentJson = '{ "id": 1, "name": "name1" }';
console.log('studentJson:', studentJson);
console.log('typeof studentJson:', typeof studentJson);

const student = JSON.parse(studentJson);
console.log('student:', student);
console.log('typeof student:', typeof student);
