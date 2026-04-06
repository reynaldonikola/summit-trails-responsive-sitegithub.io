const toggleButton = document.getElementById("themeToggle");
const themeId = "theme-stylesheet";
const themeHref = "./css/theme.css";

function enableTheme() {
  const existingTheme = document.getElementById(themeId);

  if (!existingTheme) {
    const themeLink = document.createElement("link");
    themeLink.rel = "stylesheet";
    themeLink.href = themeHref;
    themeLink.id = themeId;
    document.head.appendChild(themeLink);
  }

  toggleButton.setAttribute("aria-pressed", "true");
  toggleButton.textContent = "Original Theme";
}

function disableTheme() {
  const existingTheme = document.getElementById(themeId);

  if (existingTheme) {
    existingTheme.remove();
  }

  toggleButton.setAttribute("aria-pressed", "false");
  toggleButton.textContent = "Switch Theme";
}

toggleButton.addEventListener("click", function () {
  const themeIsActive = document.getElementById(themeId);

  if (themeIsActive) {
    disableTheme();
  } else {
    enableTheme();
  }
});
