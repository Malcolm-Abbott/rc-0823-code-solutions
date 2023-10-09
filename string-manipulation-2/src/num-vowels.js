/* exported numVowels */
function numVowels(string) {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    const letter = string[i].toLowerCase();
    switch (letter) {
      case 'a':
        result += 1;
        break;
      case 'e':
        result += 1;
        break;
      case 'i':
        result += 1;
        break;
      case 'o':
        result += 1;
        break;
      case 'u':
        result += 1;
        break;
    }
  }
  return result;
}
