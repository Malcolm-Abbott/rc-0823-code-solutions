/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    switch (i) {
      case firstIndex:
        result += string[secondIndex];
        break;
      case secondIndex:
        result += string[firstIndex];
        break;
      case undefined:
        continue;
      default:
        result += string[i];
    }
  }
  return result;
}
