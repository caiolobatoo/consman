

// MENU SCROLL EFFECT

window.addEventListener('scroll', () => {

  const header = document.querySelector('header');

  if(window.scrollY > 50){

    header.style.background = "#013b1f";

    header.style.padding = "15px 0";

    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";

  } else {

    header.style.background = "#013b1f";

    header.style.padding = "20px 0";

    header.style.boxShadow = "0 2px 10px rgba(0,0,0,.15)";

  }

});


// SMOOTH SCROLL MENU

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if(target){

      window.scrollTo({
        top: target.offsetTop - 80,
        behavior:'smooth'
      });

    }

  });

});


// REVEAL ANIMATION

const reveals = document.querySelectorAll('.card, .service, .about-content');

function revealOnScroll(){

  const windowHeight = window.innerHeight;

  reveals.forEach(item => {

    const revealTop = item.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      item.classList.add('active');

    }

  });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


// COUNTER ANIMATION

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

  counter.innerText = '0';

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target');

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});


// WHATSAPP BUTTON

function openWhatsapp(){

  const phone = '55989981986482';

  const message = encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento de energia solar.'
  );

  window.open(
    `https://wa.me/${phone}?text=${message}`,
    '_blank'
  );

}


// BUTTON ACTIONS

document.querySelectorAll('.btn').forEach(button => {

  button.addEventListener('mouseenter', () => {

    button.style.transform = 'scale(1.05)';

  });

  button.addEventListener('mouseleave', () => {

    button.style.transform = 'scale(1)';

  });

});


// HERO PARALLAX EFFECT

window.addEventListener('scroll', () => {

  const hero = document.querySelector('.hero');

  let scrollPosition = window.pageYOffset;

  hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';

});

