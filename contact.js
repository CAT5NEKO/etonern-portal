const text = 'support@etonemail.ilnk.info';
let index = 0;

function type() {
  const h1 = document.querySelector('.typewriter');
  if (index > text.length) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(type, 100);
