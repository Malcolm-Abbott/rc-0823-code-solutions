const $countdown = document.querySelector('.countdown-display');

const intervalID = setInterval(() => {
  switch (true) {
    case +$countdown.textContent > 1:
      $countdown.textContent -= 1;
      break;
    default:
      $countdown.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(intervalID);
  }
}, 1000);
