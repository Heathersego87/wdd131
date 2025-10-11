// ====== MENU TOGGLE ======
const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('nav');

// Toggle the menu visibility
menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});

// Handle window resizing
function handleResize() {
  if (window.innerWidth > 1000) {
    navMenu.classList.remove('hide');
  } else {
    navMenu.classList.add('hide');
  }
}

window.addEventListener('resize', handleResize);
handleResize();

// ====== IMAGE VIEWER (MODAL) ======
const gallery = document.querySelector('.gallery');
const modal = document.createElement('dialog');
document.body.appendChild(modal);

gallery.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('img');
  if (!clickedImage) return;

  const src = clickedImage.getAttribute('src');
  const alt = clickedImage.getAttribute('alt');

  // Replace "-sm.jpeg" with "-full.jpeg" for large image
  const fullSrc = src.split('-')[0] + '-full.jpeg';

  modal.innerHTML = `
    <img src="${fullSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;

  modal.showModal();

  const closeBtn = modal.querySelector('.close-viewer');
  closeBtn.addEventListener('click', () => modal.close());
});

// Close modal when clicking outside image
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});
