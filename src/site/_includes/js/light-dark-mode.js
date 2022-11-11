const root = document.documentElement;
const primaryColor = getComputedStyle(root).getPropertyValue('--primary-color');
const secondaryColor = getComputedStyle(root).getPropertyValue('--secondary-color');
const colors = [primaryColor, secondaryColor];

function switchMode() {
  root.style.setProperty('--primary-color', colors[1]);
  root.style.setProperty('--secondary-color', colors[0]);
  colors.reverse();
}

if (document.getElementById('nav-right')) {
  const navRight = document.getElementById('nav-right');
  const darkMode = document.createElement('a');
  darkMode.classList.add('top-nav-item');
  darkMode.href = '#';
  darkMode.innerHTML = 'Light Mode';
  navRight.appendChild(darkMode);
  darkMode.addEventListener('click', function (e) {
    e.preventDefault();
    darkMode.innerHTML = darkMode.innerHTML === 'Light Mode' ? 'Dark Mode' : 'Light Mode';
    switchMode();
  });
};

if (document.getElementById('mobile-nav-right')) {
  const mobileNavRight = document.getElementById('mobile-nav-right');
  const darkMode = document.createElement('a');
  darkMode.classList.add('nav-item');
  darkMode.href = '#';
  darkMode.innerHTML = 'Light Mode';
  mobileNavRight.appendChild(darkMode);
  darkMode.addEventListener('click', function (e) {
    e.preventDefault();
    darkMode.innerHTML = darkMode.innerHTML === 'Light Mode' ? 'Dark Mode' : 'Light Mode';
    switchMode();
  });
}