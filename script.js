// Progress bar scroll
const progress = document.querySelector('.progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;
  progress.style.transform = `scaleX(${scrollPercent})`;
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const options = { threshold: 0.15 };

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      obs.unobserve(entry.target);
    }
  });
}, options);

reveals.forEach(el => observer.observe(el));

// Parallax effect
const parallaxEls = document.querySelectorAll('.parallax');
window.addEventListener('scroll', () => {
  parallaxEls.forEach(el => {
    const speed = 0.3; // adjust effect strength
    const offset = window.scrollY * speed;
    el.style.transform = `translateY(${offset}px)`;
  });
});

// Smooth floating card tilt
document.querySelectorAll('.card-tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});

// ===== Active nav links =====

// ===== Parallax effect =====
const parallax = document.getElementById('parallax');
const parallaxScroll = () => {
  if(!parallax) return;
  const rect = parallax.parentElement.getBoundingClientRect();
  const progress = Math.min(1, Math.max(0, 1 - (rect.top / window.innerHeight)));
  parallax.style.transform = `translateY(${progress * -40}px) scale(1.05)`;
};
window.addEventListener('scroll', parallaxScroll, { passive: true });
parallaxScroll();

// ===== Card tilt effect =====
const tilt = document.getElementById('tilt');
if(tilt){
  tilt.addEventListener('mousemove', (e)=>{
    const rect = tilt.getBoundingClientRect();
    const px = (e.clientX - rect.left)/rect.width - 0.5;
    const py = (e.clientY - rect.top)/rect.height - 0.5;
    const rx = (py * 8).toFixed(2);
    const ry = (-px * 8).toFixed(2);
    tilt.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  tilt.addEventListener('mouseleave', ()=> tilt.style.transform = 'none');
}

// ===== Current year =====
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// TESTIMONIAL SLIDER
const testimonials = document.querySelectorAll('.testimonial');
let tIndex = 0;
setInterval(() => {
  testimonials.forEach(t => t.classList.remove('active'));
  tIndex = (tIndex + 1) % testimonials.length;
  testimonials[tIndex].classList.add('active');
}, 4000);

// ===== Dynamic projects with ratings =====
const projectsData = [
  { title: "Flowmart", tag: "Business website", URL:"https://dream-maker-developers.vercel.app", rating: 4 },
  { title: "Bright CRM", tag: "Web portal", URL:"https://bika-doc-hub.vercel.app", rating: 5 },
  { title: "Portfolio X", tag: "", img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop", rating: 4 },
];
const projectsGrid = document.getElementById('projectsGrid');
projectsData.forEach(p => {
  const star = "⭐".repeat(p.rating) + "☆".repeat(5 - p.rating);
  const article = document.createElement('article');
  article.className = "project reveal";
  article.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <div class="info">
      <span class="tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <div class="rating">${star}</div>
      <button class="btn view-more">View More</button>
    </div>
  `;
  projectsGrid.appendChild(article);
});

// ===== View More button animation =====
projectsGrid.addEventListener('click', e => {
  if(e.target.classList.contains('view-more')){
    const parent = e.target.closest('.project');
    parent.classList.toggle('expanded');
    e.target.textContent = parent.classList.contains('expanded') ? "View more" : " Click";
  }
});
// my codes

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.showcase-slide');
    let currentSlide = 0;
    const slideInterval = 6000; // Change image every 6 seconds

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, slideInterval);
});


// Responsive nav toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.navlink').forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('active');
    navLinks.classList.remove('active');
  });
});
