const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', (event) => {
  if (event.target.matches('.tab')) {
    $tabs.forEach((element) => {
      if (element === event.target) {
        element.className = 'tab active';
      } else {
        element.className = 'tab';
      }
    });
  }
  const $targetView = event.target.getAttribute('data-view');
  $views.forEach((index) => {
    if (index.getAttribute('data-view') === $targetView) {
      index.className = 'view';
    } else {
      index.className = 'view hidden';
    }
  });
});
