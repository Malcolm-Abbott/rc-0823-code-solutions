const $list = document.querySelector('.task-list');

$list.addEventListener('click', (event) => {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    const $closest = event.target.closest('.task-list-item');
    console.log('$closest:', $closest);
    $closest.remove();
  }
});
