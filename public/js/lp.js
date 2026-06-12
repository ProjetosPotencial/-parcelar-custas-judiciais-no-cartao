
;(function(){

(function() {
  const slider = document.getElementById('hero-slider');
  if (!slider) return;

  // Flag: hero estático (false) vs. slider ativo (true). Controlado pelo atributo data-slider-enabled.
  const sliderEnabled = slider.dataset.sliderEnabled === 'true';
  if (!sliderEnabled) {
    // HERO ESTÁTICO: mostra só o slide 0, esconde controles (setas + bolinhas), sem autoplay.
    var prevB = document.getElementById('hero-prev');
    var nextB = document.getElementById('hero-next');
    var dotsWrap = slider.querySelector('.hero-dots');
    if (prevB) prevB.style.display = 'none';
    if (nextB) nextB.style.display = 'none';
    if (dotsWrap) dotsWrap.style.display = 'none';
    // Garante o slide 0 visível e os demais ocultos (estado já é esse por padrão no HTML).
    return; // não inicializa o slider
  }

  const total = parseInt(slider.dataset.total, 10);
  let current = 0;
  let timer = null;
  const INTERVAL = 5000;

  const slides = slider.querySelectorAll('.hero-slide');
  const images = slider.querySelectorAll('.hero-slide-img');
  const dots = slider.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');

  function show(index) {
    current = ((index % total) + total) % total;
    slides.forEach(s => {
      const i = parseInt(s.dataset.slide, 10);
      s.style.display = i === current ? 'flex' : 'none';
    });
    images.forEach(img => {
      const i = parseInt(img.dataset.slide, 10);
      img.style.display = i === current ? 'block' : 'none';
    });
    dots.forEach(d => {
      const i = parseInt(d.dataset.slide, 10);
      d.style.background = i === current ? '#ffb800' : '#371b01';
    });
    slider.dataset.current = current;
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  function startAuto() {
    stopAuto();
    timer = setInterval(next, INTERVAL);
  }
  function stopAuto() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  // Listeners
  prevBtn.addEventListener('click', () => { prev(); startAuto(); });
  nextBtn.addEventListener('click', () => { next(); startAuto(); });
  dots.forEach(d => {
    d.addEventListener('click', () => {
      show(parseInt(d.dataset.slide, 10));
      startAuto();
    });
  });

  // Pausa auto-play no hover
  slider.addEventListener('mouseenter', stopAuto);
  slider.addEventListener('mouseleave', startAuto);

  // Inicia
  startAuto();
})();

})();
;(function(){

  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "wpkakfpd2p");

})();
;(function(){

  (function () {
    document.querySelectorAll('#faq details').forEach(function (det) {
      det.addEventListener('toggle', function () {
        if (!det.open) return;
        var group = det.parentElement; // container do grupo (desktop ou mobile)
        group.querySelectorAll(':scope > details').forEach(function (other) {
          if (other !== det) other.open = false;
        });
      });
    });
  })();

})();
;(function(){

  (function () {
    var toggle = document.getElementById('mobileToggle');
    var menu = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;

    function openMenu() {
      menu.classList.add('open');
      toggle.classList.add('is-open');
      menu.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
      menu.classList.remove('open');
      toggle.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.contains('open') ? closeMenu() : openMenu();
    });
    // fecha ao clicar num link do menu
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    // fecha ao clicar fora
    document.addEventListener('click', function (e) {
      if (menu.classList.contains('open') && !menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
    // fecha com ESC
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  })();

})();
;(function(){

(function(){
  function initCarousel(wrapSelector, trackClass, cardClass, dotsClass, prevClass, nextClass, activeColor, inactiveColor){
    var wrap = document.querySelector(wrapSelector);
    if(!wrap) return;
    var track = wrap.querySelector('.'+trackClass);
    var cards = wrap.querySelectorAll('.'+cardClass);
    var dots = wrap.querySelectorAll('.'+dotsClass+' span');
    var prev = wrap.querySelector('.'+prevClass);
    var next = wrap.querySelector('.'+nextClass);
    if(!track || !cards.length) return;
    var current = 0;
    function setActive(i){
      current = Math.max(0, Math.min(cards.length-1, i));
      dots.forEach(function(d, idx){ d.style.background = (idx===current) ? activeColor : inactiveColor; d.style.width = (idx===current) ? '24px' : '8px'; });
    }
    function scrollTo(i){
      i = Math.max(0, Math.min(cards.length-1, i));
      var card = cards[i];
      track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.clientWidth)/2, behavior: 'smooth' });
      setActive(i);
    }
    prev && prev.addEventListener('click', function(){ scrollTo(current-1); });
    next && next.addEventListener('click', function(){ scrollTo(current+1); });
    dots.forEach(function(d){ d.style.cursor='pointer'; d.addEventListener('click', function(){ scrollTo(parseInt(d.getAttribute('data-i'))); }); });
    var t;
    track.addEventListener('scroll', function(){
      clearTimeout(t);
      t = setTimeout(function(){
        var center = track.scrollLeft + track.clientWidth/2;
        var best=0, bestDist=Infinity;
        cards.forEach(function(c, idx){
          var cc = c.offsetLeft + c.clientWidth/2;
          var dist = Math.abs(cc - center);
          if(dist < bestDist){ bestDist = dist; best = idx; }
        });
        setActive(best);
      }, 80);
    });
    setActive(0);
  }
  function fixTitleBreaks(){
    // No mobile, os <br/> dos títulos e parágrafos foram pensados para o desktop e geram
    // quebras feias. Substitui por espaço para deixar o texto quebrar naturalmente.
    // Guarda o HTML original em data-attr para poder restaurar se voltar ao desktop.
    var els = document.querySelectorAll('section h2, section p');
    var isMobile = window.innerWidth <= 767;
    els.forEach(function(el){
      if(el.dataset.origHtml === undefined){ el.dataset.origHtml = el.innerHTML; }
      if(isMobile){
        // substitui qualquer <br> por espaço
        if(el.querySelector('br')){
          el.innerHTML = el.dataset.origHtml.replace(/<br\s*\/?>/gi, ' ');
        }
      } else {
        // restaura original no desktop
        if(el.innerHTML !== el.dataset.origHtml){ el.innerHTML = el.dataset.origHtml; }
      }
    });
  }
  function initMicrointeractions(){
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1) SCROLL REVEAL — revela elementos .reveal ao entrarem na viewport
    var revealEls = document.querySelectorAll('.reveal');
    if(reduce || !('IntersectionObserver' in window)){
      // Sem animação: mostra tudo imediatamente (fallback acessível)
      revealEls.forEach(function(el){ el.classList.add('is-visible'); });
    } else {
      var ro = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if(e.isIntersecting){ e.target.classList.add('is-visible'); ro.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      revealEls.forEach(function(el){ ro.observe(el); });
    }

    // 2) FADE-IN DE IMAGENS — suaviza o "pop" ao carregar
    document.querySelectorAll('img.img-fade').forEach(function(img){
      if(img.complete && img.naturalWidth > 0){ img.classList.add('is-loaded'); }
      else { img.addEventListener('load', function(){ img.classList.add('is-loaded'); }); 
             img.addEventListener('error', function(){ img.classList.add('is-loaded'); }); }
    });

    // 3) PULSE ÚNICO DO CTA FLUTUANTE — chama atenção 1x quando o usuário rola além do hero
    var cta = document.getElementById('cta-flutuante');
    if(cta && !reduce){
      var pulsed = false;
      window.addEventListener('scroll', function onScroll(){
        if(!pulsed && window.scrollY > window.innerHeight * 0.8){
          pulsed = true; cta.classList.add('pulse-once');
          window.removeEventListener('scroll', onScroll);
        }
      }, { passive: true });
    }
  }
  function initAll(){
    // Links de menu/footer ainda sem destino final (Entrar, Política, Termos, etc.):
    // previne o salto ao topo até que as URLs reais sejam definidas. PENDENTE: definir hrefs.
    document.querySelectorAll('a[data-pendente="true"]').forEach(function(a){
      a.addEventListener('click', function(e){ e.preventDefault(); });
    });
    initCarousel('.impacto-mobile', 'imp-track', 'imp-card', 'imp-dots', 'imp-prev', 'imp-next', '#ffb800', '#e0ddd4');
    initCarousel('.quem-mobile', 'quem-track', 'quem-card', 'quem-dots', 'quem-prev', 'quem-next', '#009F44', '#d4e8da');
    fixTitleBreaks();
    initMicrointeractions();
    var rt;
    window.addEventListener('resize', function(){ clearTimeout(rt); rt = setTimeout(fixTitleBreaks, 150); });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAll);
  else initAll();
})();

})();
;(function(){

(function(){
  var links = document.querySelectorAll('header .nav-link[href^="#"]');
  if(!links.length) return;
  var map = {};
  links.forEach(function(a){
    var id = a.getAttribute('href').slice(1);
    if (id === 'solucao') return;
    var sec = document.getElementById(id);
    if(sec) map[id] = a;
  });
  if(!Object.keys(map).length) return;
  function setActive(id){
    links.forEach(function(a){ a.classList.remove('is-active'); });
    if(map[id]) map[id].classList.add('is-active');
  }
  function onScroll(){
    var bestId=null, bestDist=Infinity, anchor = window.innerHeight * 0.3;
    Object.keys(map).forEach(function(id){
      var sec = document.getElementById(id);
      if(!sec) return;
      var r = sec.getBoundingClientRect();
      if(r.top <= anchor && r.bottom >= anchor){
        var d = Math.abs(r.top - anchor);
        if(d < bestDist){ bestDist = d; bestId = id; }
      }
    });
    setActive(bestId);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();

})();
;(function(){

(function(){
  const desktop = document.querySelector('#faq .faq-desktop');
  const card = desktop ? desktop.querySelector('.bg-white.absolute') : null;
  if (!desktop || !card) return;
  function adjustHeight(){
    // top do card (absolute) + altura real do card + respiro de 48px no fim
    const cardTop = parseInt(card.style.top) || 463;
    const cardHeight = card.offsetHeight;
    desktop.style.minHeight = (cardTop + cardHeight + 48) + 'px';
  }
  // No load
  adjustHeight();
  // Em qualquer toggle de details
  desktop.querySelectorAll('details').forEach(d => {
    d.addEventListener('toggle', adjustHeight);
  });
  // Em resize (mobile transition)
  window.addEventListener('resize', adjustHeight);
})();

})();
