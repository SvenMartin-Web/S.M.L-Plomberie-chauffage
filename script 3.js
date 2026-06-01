/* =====================
   AH PLOMBERIE - script.js
======================== */

// ---- Header scroll effect ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ---- Burger menu ----
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

function closeNav() {
  mobileNav.classList.remove('open');
}

// Ferme le menu si on clique en dehors
document.addEventListener('click', (e) => {
  if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
    mobileNav.classList.remove('open');
  }
});

// ---- Scroll reveal animations ----
const revealElements = document.querySelectorAll(
  '.service-card, .why-card, .testimonial, .gallery-item, .info-item'
);

revealElements.forEach(el => {
  el.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, parseInt(delay));
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => observer.observe(el));

// ---- Form submit ----
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  const nom = document.getElementById('nom').value.trim();

  // Animation bouton
  btn.textContent = '⏳ Envoi en cours...';
  btn.disabled = true;
  btn.style.opacity = '0.7';

  // Simulation envoi (remplacer par vraie API si besoin)
  setTimeout(() => {
    btn.textContent = `✅ Message envoyé, merci ${nom || ''} !`;
    btn.style.background = '#10b981';
    btn.style.opacity = '1';

    // Reset après 4 secondes
    setTimeout(() => {
      form.reset();
      btn.textContent = 'Envoyer ma demande →';
      btn.style.background = '';
      btn.disabled = false;
    }, 4000);
  }, 1200);
});

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#f59e0b';
    }
  });
});
