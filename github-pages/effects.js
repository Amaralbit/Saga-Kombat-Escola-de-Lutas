// Acabamento de interação: header com estado, revelação no scroll, paralaxe e brilho nos botões.
(function () {
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 30);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var revealTargets = document.querySelectorAll('[data-reveal]');
  if (revealTargets.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  document.querySelectorAll('.button').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var r = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', e.clientX - r.left + 'px');
      btn.style.setProperty('--my', e.clientY - r.top + 'px');
    });
  });

  var heroVisual = document.querySelector('.hero-visual');
  var rings = document.querySelector('.rings');
  var stamp = document.querySelector('.stamp');
  if (heroVisual && rings && stamp && window.matchMedia('(min-width: 861px)').matches) {
    heroVisual.addEventListener('mousemove', function (e) {
      var r = heroVisual.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      rings.style.transform = 'translate(calc(-50% + ' + px * 22 + 'px), calc(-50% + ' + py * 22 + 'px))';
      stamp.style.transform = 'rotate(14deg) translate(' + px * -14 + 'px, ' + py * -14 + 'px)';
    });
    heroVisual.addEventListener('mouseleave', function () {
      rings.style.transform = 'translate(-50%, -50%)';
      stamp.style.transform = 'rotate(14deg)';
    });
  }
})();
