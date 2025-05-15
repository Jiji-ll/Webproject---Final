document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar a');

  function activateNavLink() {
    let scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80; // adjust if you have a fixed header
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector('.navbar a[href="#' + section.id + '"]');
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', activateNavLink);

  // Also update on click (for instant feedback)
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Initial activation
  activateNavLink();
});