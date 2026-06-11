const countdown = document.querySelector('[data-countdown]');

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateCountdown() {
  if (!countdown) return;

  const target = new Date(countdown.dataset.countdown).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  countdown.querySelector('[data-days]').textContent = pad(days);
  countdown.querySelector('[data-hours]').textContent = pad(hours);
  countdown.querySelector('[data-minutes]').textContent = pad(minutes);
  countdown.querySelector('[data-seconds]').textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
