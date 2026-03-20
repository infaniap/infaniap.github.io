const heroImg = document.querySelector('.hero-img');
const base = 'assets/photos/leds.png';

let resetTimeout = null;

// PRELOAD
for (let i = 1; i <= 16; i++) {
  const img = new Image();
  img.src = `assets/photos/ledsp${i}.png`;
}

// HOVER LOGIC
document.querySelectorAll('.led-spot').forEach(spot => {
  spot.addEventListener('mouseenter', () => {
    if (resetTimeout) clearTimeout(resetTimeout);

    heroImg.src = `assets/photos/ledsp${spot.dataset.led}.png`;
  });

  spot.addEventListener('mouseleave', () => {
    resetTimeout = setTimeout(() => {
      heroImg.src = base;
    }, 60);
  });
});

// DEBUG CLICK (optional)
document.querySelector('.hero').addEventListener('click', (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  console.log(`left: ${x.toFixed(2)}%; top: ${y.toFixed(2)}%;`);
});

document.querySelectorAll('.led-spot').forEach(spot => {
  spot.addEventListener('mouseenter', () => {
    console.log('hovering:', spot.dataset.led);

    heroImg.src = `assets/photos/ledsp${spot.dataset.led}.png`;
  });
});