const $bulb = document.querySelector('.bulb');
const $container = document.querySelector('.container');
$bulb.addEventListener('click', (event) => {
  $bulb.classList.toggle('night');
  $container.classList.toggle('night-background');
});
