// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Pink glow effect for input
const input = document.querySelector('.input');
const pinkMask = document.getElementById('pink-mask');

input.addEventListener('focus', () => {
  pinkMask.style.opacity = '0.5';
});

input.addEventListener('blur', () => {
  pinkMask.style.opacity = '0';
});

// LIVE SEARCH FUNCTIONALITY
const cards = document.querySelectorAll('.search-card');

input.addEventListener('input', () => {
  const query = input.value.toLowerCase();
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if(text.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
