document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.contains('is-open');
    if (isOpen) { closeNav(); } else { openNav(); }
  });

  // Close menu after tapping a link (mobile)
  nav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Close menu if the viewport grows into desktop size
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 992) { closeNav(); }
  });

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
});
