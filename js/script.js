/* ===================================
   FUNCIONALIDADES GERAIS
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
  initMenuToggle();
  initScrollEffects();
  initScrollTop();
  initFormValidation();
  initAnimationOnScroll();
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
  
  // Fechar menu ao clicar em um link
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
  }, {
    threshold: 0.1
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
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
    
    // Simular envio
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
   GALERIA / LIGHTBOX
   =================================== */

class Lightbox {
  constructor() {
    this.init();
  }
  
  init() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => this.open(index));
    });
    
    this.createLightboxHTML();
    this.attachLightboxEvents();
  }
  
  createLightboxHTML() {
    if (document.querySelector('.lightbox')) return;
    
    const lightboxHTML = `
      <div class="lightbox">
        <div class="lightbox-overlay"></div>
        <div class="lightbox-content">
          <button class="lightbox-close">&times;</button>
          <div class="lightbox-image">
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: rgba(255, 255, 255, 0.3); font-size: 6rem;">
              📷
            </div>
          </div>
          <div class="lightbox-nav">
            <button class="lightbox-prev">❮</button>
            <button class="lightbox-next">❯</button>
          </div>
          <div class="lightbox-counter">
            <span class="current">1</span> / <span class="total">1</span>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
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
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }
  
  open(index) {
    const lightbox = document.querySelector('.lightbox');
    const total = document.querySelectorAll('.gallery-item').length;
    
    this.currentIndex = index;
    this.currentIndex = this.currentIndex < 0 ? total - 1 : this.currentIndex % total;
    
    if (lightbox) {
      lightbox.classList.add('active');
      document.querySelector('.lightbox-counter .current').textContent = this.currentIndex + 1;
      document.querySelector('.lightbox-counter .total').textContent = total;
    }
  }
  
  close() {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
      lightbox.classList.remove('active');
    }
  }
  
  prev() {
    this.open(this.currentIndex - 1);
  }
  
  next() {
    this.open(this.currentIndex + 1);
  }
}

// Inicializar lightbox se houver galeria
if (document.querySelector('.gallery-item')) {
  new Lightbox();
}

/* ===================================
   CARROSSEL
   =================================== */

class Carousel {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;
    
    this.items = this.container.querySelectorAll('.carousel-item');
    this.currentIndex = 0;
    
    this.init();
  }
  
  init() {
    this.showItem(0);
    
    const prevBtn = this.container.querySelector('.carousel-prev');
    const nextBtn = this.container.querySelector('.carousel-next');
    
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    
    // Auto play
    setInterval(() => this.next(), 5000);
  }
  
  showItem(index) {
    this.items.forEach(item => item.classList.remove('active'));
    this.items[index].classList.add('active');
    this.currentIndex = index;
  }
  
  prev() {
    let newIndex = this.currentIndex - 1;
    if (newIndex < 0) newIndex = this.items.length - 1;
    this.showItem(newIndex);
  }
  
  next() {
    let newIndex = this.currentIndex + 1;
    if (newIndex >= this.items.length) newIndex = 0;
    this.showItem(newIndex);
  }
}

// Inicializar carrosel se houver
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.carousel')) {
    new Carousel('.carousel');
  }
});

/* ===================================
   PLAYER DE MÚSICA (Spotify)
   =================================== */

function initSpotifyPlayer() {
  // Integração com Spotify Web Player API
  // Por enquanto, apenas placeholder
  const player = document.querySelector('.spotify-player');
  if (player) {
    // Código para integração real seria adicionado aqui
    console.log('Spotify Player Ready');
  }
}

/* ===================================
   CONTADOR DE VISITANTES
   =================================== */

function initVisitorCounter() {
  const counterElement = document.querySelector('.visitor-count');
  if (!counterElement) return;
  
  let count = localStorage.getItem('visitCount') || 0;
  count = parseInt(count) + 1;
  localStorage.setItem('visitCount', count);
  
  counterElement.textContent = count;
}

initVisitorCounter();

/* ===================================
   LAZY LOADING DE IMAGENS
   =================================== */

function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => observer.observe(img));
}

initLazyLoading();

/* ===================================
   ESTILOS PARA LIGHTBOX
   =================================== */

const lightboxStyles = `
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    z-index: 2000;
  }
  
  .lightbox.active {
    display: flex;
  }
  
  .lightbox-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
  }
  
  .lightbox-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  
  .lightbox-image {
    width: 90%;
    height: 80%;
    max-width: 800px;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .lightbox-close {
    position: absolute;
    top: 20px;
    right: 40px;
    background: none;
    border: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    z-index: 2;
    transition: all 0.3s ease;
  }
  
  .lightbox-close:hover {
    transform: scale(1.2);
  }
  
  .lightbox-nav {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  
  .lightbox-prev,
  .lightbox-next {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid white;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }
  
  .lightbox-prev:hover,
  .lightbox-next:hover {
    background: white;
    color: black;
  }
  
  .lightbox-counter {
    color: white;
    margin-top: 20px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    .lightbox-close {
      right: 20px;
      font-size: 2rem;
    }
    
    .lightbox-image {
      width: 95%;
      height: 60%;
    }
  }
`;

const style = document.createElement('style');
style.textContent = lightboxStyles;
document.head.appendChild(style);

/* ===================================
   CONSOLE LOG
   =================================== */

console.log('%c🎵 Bem-vindo ao site da banda!', 'font-size: 20px; color: #e94560; font-weight: bold;');
console.log('%cFeito com ❤️ usando HTML, CSS e JavaScript puro', 'font-size: 14px; color: #e94560;');
