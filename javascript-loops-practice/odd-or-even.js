/* exported oddOrEven */
function oddOrEven(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] % 2 ? result.push('odd') : result.push('even');
  }
  return result;
}
