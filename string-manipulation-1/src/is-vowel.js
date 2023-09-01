/* exported isVowel */
function isVowel(char) {
  const newChar = char.toLowerCase();
  switch (newChar) {
    case 'a':
      return true;
    case 'e':
      return true;
    case 'i':
      return true;
    case 'o':
      return true;
    case 'u':
      return true;
    default:
      return false;
  }
}
