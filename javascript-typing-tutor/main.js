const $span = document.querySelectorAll('span');
let index = 0;
let element = $span[index];

document.addEventListener('keydown', (event) => {
  if (index === $span.length) {
    return 'done';
  } else if (element.textContent === event.key) {
    element.className = 'go';
    element = $span[++index];
    if (element !== undefined) {
      element.className = 'current';
    }
  } else {
    element.classList.add('stop');
  }
});
