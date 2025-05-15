document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar a');

  function activateNavLink() {
    let scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50; 
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector('.navbar a[href="#' + section.id + '"]');
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', activateNavLink);

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  activateNavLink();
});

document.querySelectorAll('.con-sec-item a[aria-label="Facebook"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        alert('Facebook link clicked!');
    });
});