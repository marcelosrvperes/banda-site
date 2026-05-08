/* ===================================
   FUNCIONALIDADES GERAIS
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
  initMenuToggle();
  initScrollEffects();
  initScrollTop();
  initFormValidation();
  initAnimationOnScroll();
  initHeroSlideshow();
  initMarquee();
  initFeaturedCarousel();
  initMembersStrip();
});

/* Menu Mobile */
function initMenuToggle() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (!menuToggle) return;

  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
  });

  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
    });
  });
}

/* Header Scroll Effect */
function initScrollEffects() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* Scroll to Top Button */
function initScrollTop() {
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Animação ao rolar a página */
function initAnimationOnScroll() {
  const elements = document.querySelectorAll('.card, .fade-in, .section-title');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
}

/* ===================================
   HERO SLIDESHOW
   =================================== */

function initHeroSlideshow() {
  const slidesContainer = document.getElementById('hero-slides');
  const dotsContainer = document.getElementById('hero-dots');
  if (!slidesContainer || typeof fotosHero === 'undefined') return;

  fotosHero.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'hero-slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = `url("${src}")`;
    slidesContainer.appendChild(slide);

    if (dotsContainer) {
      const dot = document.createElement('button');
      dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Ir para foto ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  });

  const slides = slidesContainer.querySelectorAll('.hero-slide');
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.hero-dot') : [];
  let current = 0;
  let timer;

  function goTo(i) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
    restart();
  }

  function next() { goTo(current + 1); }

  function restart() {
    clearInterval(timer);
    timer = setInterval(next, 5500);
  }

  restart();
}

/* ===================================
   MARQUEE / FAIXA DE FOTOS ROLANDO
   =================================== */

function initMarquee() {
  const marquee = document.getElementById('marquee');
  if (!marquee || typeof fotosBanda === 'undefined') return;

  // duplica para criar loop infinito
  const lista = fotosBanda.concat(fotosBanda);
  marquee.innerHTML = lista
    .map(src => `<img loading="lazy" src="${src}" alt="Foto da banda">`)
    .join('');
}

/* ===================================
   CARROSSEL DE FOTOS DESTACADAS
   =================================== */

function initFeaturedCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track || typeof fotosBanda === 'undefined') return;

  // pega 10 primeiras
  const fotos = fotosBanda.slice(0, 10);

  fotos.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = `url("${src}")`;
    track.appendChild(slide);
  });

  const slides = track.querySelectorAll('.carousel-slide');
  const totalEl = document.getElementById('carousel-total');
  const currentEl = document.getElementById('carousel-current');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');

  let current = 0;
  let timer;

  if (totalEl) totalEl.textContent = slides.length;

  function goTo(i) {
    slides[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (currentEl) currentEl.textContent = current + 1;
    restart();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function restart() {
    clearInterval(timer);
    timer = setInterval(next, 4500);
  }

  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);

  restart();
}

/* ===================================
   PREVIEW DE INTEGRANTES (home)
   =================================== */

function initMembersStrip() {
  const strip = document.getElementById('members-strip');
  if (!strip || typeof integrantesData === 'undefined') return;

  strip.innerHTML = integrantesData.map(m => `
    <a href="integrantes.html" class="member-mini">
      <img loading="lazy" src="${m.foto}" alt="${m.nome}" class="member-mini-photo">
      <div class="member-mini-name">${m.nome}</div>
      <div class="member-mini-role">${m.instrumento}</div>
    </a>
  `).join('');
}

/* ===================================
   FORMULÁRIO DE CONTATO
   =================================== */

function initFormValidation() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Por favor, insira um email válido!');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      alert('Obrigado! Sua mensagem foi enviada com sucesso!');
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* ===================================
   LIGHTBOX DA GALERIA
   =================================== */

class Lightbox {
  constructor() {
    this.items = Array.from(document.querySelectorAll('.gallery-item'));
    if (!this.items.length) return;

    this.currentIndex = 0;
    this.createLightboxHTML();
    this.attachLightboxEvents();

    this.items.forEach((item, index) => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => this.open(index));
    });
  }

  createLightboxHTML() {
    if (document.querySelector('.lightbox')) return;
    const html = `
      <div class="lightbox" role="dialog" aria-hidden="true">
        <div class="lightbox-overlay"></div>
        <div class="lightbox-content">
          <button class="lightbox-close" aria-label="Fechar">&times;</button>
          <div class="lightbox-image" id="lightbox-image"></div>
          <div class="lightbox-nav">
            <button class="lightbox-prev" aria-label="Anterior">❮</button>
            <button class="lightbox-next" aria-label="Próxima">❯</button>
          </div>
          <div class="lightbox-counter">
            <span class="current">1</span> / <span class="total">1</span>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
  }

  attachLightboxEvents() {
    const overlay = document.querySelector('.lightbox-overlay');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    overlay?.addEventListener('click', () => this.close());
    closeBtn?.addEventListener('click', () => this.close());
    prevBtn?.addEventListener('click', () => this.prev());
    nextBtn?.addEventListener('click', () => this.next());

    document.addEventListener('keydown', (e) => {
      if (!document.querySelector('.lightbox.active')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  open(index) {
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;

    const total = this.items.length;
    this.currentIndex = ((index % total) + total) % total;

    const item = this.items[this.currentIndex];
    const img = item.querySelector('img');
    const video = item.querySelector('video');
    const imageEl = document.getElementById('lightbox-image');

    if (video) {
      const src = video.querySelector('source')?.src || video.src;
      imageEl.innerHTML = `<video controls autoplay playsinline style="width:100%;height:100%;object-fit:contain;background:#000;"><source src="${src}" type="video/mp4">Seu navegador não suporta vídeo.</video>`;
    } else if (img) {
      imageEl.innerHTML = `<img src="${img.src}" alt="${img.alt || ''}" style="width:100%;height:100%;object-fit:contain;">`;
    }

    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.querySelector('.lightbox-counter .current').textContent = this.currentIndex + 1;
    document.querySelector('.lightbox-counter .total').textContent = total;
  }

  close() {
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    const imageEl = document.getElementById('lightbox-image');
    if (imageEl) imageEl.innerHTML = '';
  }

  prev() { this.open(this.currentIndex - 1); }
  next() { this.open(this.currentIndex + 1); }
}

if (document.querySelector('.gallery-item')) {
  new Lightbox();
}

/* ===================================
   CONTADOR DE VISITANTES
   =================================== */

function initVisitorCounter() {
  const counterElement = document.querySelector('.visitor-count');
  if (!counterElement) return;

  let count = parseInt(localStorage.getItem('visitCount') || '0', 10) + 1;
  localStorage.setItem('visitCount', count);
  counterElement.textContent = count;
}

initVisitorCounter();

/* ===================================
   ESTILOS DO LIGHTBOX (injetados)
   =================================== */

const lightboxStyles = `
  .lightbox {
    position: fixed;
    inset: 0;
    display: none;
    z-index: 2000;
  }
  .lightbox.active { display: flex; }
  .lightbox-overlay {
    position: absolute; inset: 0;
    background: rgba(0, 0, 0, 0.92);
  }
  .lightbox-content {
    position: relative; z-index: 1;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    width: 100%; height: 100%; padding: 20px;
  }
  .lightbox-image {
    width: 92%; height: 78%;
    max-width: 1100px;
    border-radius: 10px; overflow: hidden;
    background: #000;
  }
  .lightbox-close {
    position: absolute; top: 20px; right: 30px;
    background: none; border: none;
    color: white; font-size: 3rem;
    cursor: pointer; z-index: 2;
    transition: transform 0.3s ease;
  }
  .lightbox-close:hover { transform: scale(1.2); }
  .lightbox-nav { display: flex; gap: 20px; margin-top: 20px; }
  .lightbox-prev, .lightbox-next {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid white; color: white;
    width: 50px; height: 50px;
    border-radius: 50%;
    cursor: pointer; font-size: 1.4rem;
    transition: all 0.3s ease;
  }
  .lightbox-prev:hover, .lightbox-next:hover {
    background: white; color: black;
  }
  .lightbox-counter {
    color: white; margin-top: 18px; font-size: 1rem; letter-spacing: 1px;
  }
  @media (max-width: 768px) {
    .lightbox-close { right: 16px; font-size: 2.2rem; }
    .lightbox-image { width: 96%; height: 65%; }
  }
`;

const styleEl = document.createElement('style');
styleEl.textContent = lightboxStyles;
document.head.appendChild(styleEl);

console.log('%c♪ Os Pampeiros — site oficial', 'font-size: 18px; color: #e94560; font-weight: bold;');
