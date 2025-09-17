// Initialize AOS for scroll animations
AOS.init({
  once: true,
  duration: 800,
  easing: 'ease-in-out'
});

// Typed.js for rotating roles in hero (uncomment if needed in hero):
// const typed = new Typed('#typed-text', {
//   strings: ['Coder', 'Bot Builder', 'Free Net Explorer', 'Full-Stack Developer'],
//   typeSpeed: 60,
//   backSpeed: 40,
//   loop: true
// });

// Hamburger menu toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  // Close menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Skill bar fill animation
const skillSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.skill-card');

let skillsAnimated = false;
window.addEventListener('scroll', () => {
  if (!skillSection || skillsAnimated) return;
  const triggerPoint = window.innerHeight * 0.85;
  const sectionTop = skillSection.getBoundingClientRect().top;
  if (sectionTop < triggerPoint) {
    skillsAnimated = true;
    // Optionally animate icons or labels here
    skillBars.forEach((card, i) => {
      card.style.transform = 'scale(1.05)';
      setTimeout(() => {
        card.style.transform = 'scale(1)';
      }, 200 + i * 100);
    });
  }
});
