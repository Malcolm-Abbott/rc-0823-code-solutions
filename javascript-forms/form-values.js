const $form = document.querySelector('#contact-form');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value,
  };
  console.log('data:', data);
  $form.reset();
});
