// MENU SCROLL EFFECT (Muda cor e altura do header ao rolar)
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (!header) return;

  if (window.scrollY > 50) {
    header.style.background = "#013b1f";
    header.style.padding = "15px 0";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
  } else {
    header.style.background = "#013b1f";
    header.style.padding = "20px 0";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,.15)";
  }
});

// SMOOTH SCROLL MENU (Rolagem suave considerando o menu fixo)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const headerOffset = 80; // Altura do cabeçalho
      const elementPosition = target.getBoundingClientRect().top;
      const headerOffset = 80;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// REVEAL ANIMATION (Animação de surgimento ao rolar)
function revealOnScroll() {
  const reveals = document.querySelectorAll('.card, .service, .about-content');
  const windowHeight = window.innerHeight;

  reveals.forEach(item => {
    const revealTop = item.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);

// COUNTER ANIMATION (Contadores numéricos se houverem elementos com a classe .counter)
const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
  counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

// WHATSAPP BUTTON ACTION (Abrir WhatsApp dinamicamente)
function openWhatsapp() {
  const phone = '5598987787962';
  const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento.');
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// HERO PARALLAX EFFECT
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    let scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = (scrollPosition * 0.4) + 'px';
  }
});
