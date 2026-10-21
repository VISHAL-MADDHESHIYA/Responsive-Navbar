document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navOverlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.getElementById('header');

  const toggleMenu = () => {
    const isActive = navMenu.classList.contains('active');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    hamburger.setAttribute('aria-expanded', !isActive);
    document.body.style.overflow = isActive ? '' : 'hidden';
  };

  hamburger.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
  });
});