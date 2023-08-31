/* exported countdown */
function countdown(number) {
  const result = [];
  for (; number >= 0; number--) {
    result.push(number);
  }
  return result;
}
