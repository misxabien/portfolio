function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('active');
}

function showTab(tabId, clickedButton) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  contents.forEach(content => {
    content.classList.remove('active');
    content.setAttribute('hidden', true);
  });

  buttons.forEach(btn => btn.classList.remove('active'));

  const target = document.getElementById(tabId);
  target.classList.add('active');
  target.removeAttribute('hidden');
  clickedButton.classList.add('active');
}
