// nav.js — page navigation and skill bar trigger

function nav(name) {
  closeSide();
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.ni').forEach(n => n.classList.remove('on'));

  const page = document.getElementById('pg-' + name);
  if (page) page.classList.add('on');

  const link = document.querySelector('[data-p="' + name + '"]');
  if (link) link.classList.add('on');

  if (name === 'bio' || name === 'skills') animateSkillBars();
}

function animateSkillBars() {
  setTimeout(() => {
    document.querySelectorAll('.sbf').forEach(bar => {
      bar.style.width = bar.getAttribute('data-w') + '%';
    });
  }, 120);
}

// Trigger skill bars on initial load (About page is shown by default)
window.addEventListener('load', () => {
  animateSkillBars();
  renderTools();
  renderProjects();
});
