'use strict';
// При замене href в index.html ссылка заработает без изменений JavaScript.
const registrationLink = document.querySelector('[data-registration]');
if (registrationLink) {
  const missing = registrationLink.getAttribute('href') === '#registration';
  if (missing) {
    registrationLink.addEventListener('click', event => event.preventDefault());
  } else {
    registrationLink.removeAttribute('aria-disabled');
  }
}
// Две одинаковые группы дают бесшовный цикл; пауза доступна с клавиатуры.
const marquee = document.querySelector('.marquee');
const pause = document.querySelector('.motion-toggle');
if (marquee && pause) {
  pause.hidden = false;
  pause.addEventListener('click', () => {
    const paused = marquee.classList.toggle('is-paused');
    pause.setAttribute('aria-pressed', String(paused));
    pause.setAttribute('aria-label', paused ? 'Продолжить бегущую строку' : 'Приостановить бегущую строку');
    pause.firstElementChild.textContent = paused ? '▷' : 'Ⅱ';
  });
}
