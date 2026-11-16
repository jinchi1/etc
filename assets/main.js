(function () {
  'use strict';
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
    nav.querySelectorAll('a').forEach(function (item) {
      item.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  var emailLink = document.getElementById('email-link');
  var note = document.getElementById('contact-email-note');
  var email = window.CEOREONG_CONFIG && window.CEOREONG_CONFIG.contactEmail;
  if (emailLink && email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailLink.href = 'mailto:' + email + '?subject=' + encodeURIComponent('[CEOREONG] 문의');
    emailLink.innerHTML = '이메일로 문의하기 <span aria-hidden="true">↗</span>';
    emailLink.classList.remove('is-disabled');
    emailLink.removeAttribute('aria-disabled');
    if (note) note.textContent = email;
  }
})();
