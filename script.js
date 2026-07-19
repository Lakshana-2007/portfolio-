// Find sidebar buttons and section panels
const navButtons = document.querySelectorAll('.sidebar-link');
const sections = document.querySelectorAll('.panel-section');
const scrollButtons = document.querySelectorAll('[data-scroll-to]');
const topbarName = document.querySelector('.topbar-name');
const topbarQuote = document.querySelector('.topbar-quote');

function updateQuoteIndent() {
  if (!topbarName || !topbarQuote) return;
  topbarQuote.style.marginLeft = `${topbarName.offsetWidth}px`;
}

window.addEventListener('load', updateQuoteIndent);
window.addEventListener('resize', updateQuoteIndent);

function setActiveSection(sectionId) {
  sections.forEach((section) => {
    section.classList.toggle('active', section.id === sectionId);
  });

  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.target === sectionId);
  });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActiveSection(button.dataset.target);
  });
});

scrollButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActiveSection(button.dataset.scrollTo);
  });
});

// Show default section on load
setActiveSection('home');
