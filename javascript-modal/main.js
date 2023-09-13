const $open = document.querySelector('.open');
const $close = document.querySelector('.no');
const $modalContainer = document.querySelector('.modal-container');

$open.addEventListener('click', (event) => {
  $modalContainer.classList.remove('hidden');
});

$close.addEventListener('click', (event) => {
  $modalContainer.classList.add('hidden');
});
