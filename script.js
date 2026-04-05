const toggleButton = document.getElementById('themeToggle');
const themeId = 'theme-stylesheet';
const themeHref = 'theme.css';

function enableTheme() {
  const existingTheme = document.getElementById(themeId);

  if (!existingTheme) {
    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.href = themeHref;
    themeLink.id = themeId;
    document.head.appendChild(themeLink);
  }

  toggleButton.textContent = 'Original Theme';
}

function disableTheme() {
  const existingTheme = document.getElementById(themeId);

  if (existingTheme) {
    existingTheme.remove();
  }

  toggleButton.textContent = 'Switch Theme';
}

function toggleTheme() {
  const themeIsActive = document.getElementById(themeId);

  if (themeIsActive) {
    disableTheme();
  } else {
    enableTheme();
  }
}

toggleButton.addEventListener('click', toggleTheme);
