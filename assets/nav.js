// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (
      (page === 'index.html' || page === '') && href === 'index.html' ||
      href === page
    ) {
      link.classList.add('active');
    }
  });
});
