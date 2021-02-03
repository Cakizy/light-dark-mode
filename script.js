const toggleSwitch = document.getElementById('themeCheckbox');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

// Change Mode Style
function changeMode(param) {
    nav.style.backgroundColor = param === LIGHT_THEME ? 'rgb(255 255 255 / 50%)': 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = param === LIGHT_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = param === LIGHT_THEME ? 'Light Mode': 'Dark Mode';
    param === LIGHT_THEME ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    image1.src = `img/undraw_proud_coder_${param}.svg`;
    image2.src = `img/undraw_feeling_proud_${param}.svg`;
    image3.src = `img/undraw_conceptual_idea_${param}.svg`;
    localStorage.setItem('theme', param);
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        changeMode(DARK_THEME);
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        changeMode(LIGHT_THEME);
    }

}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        changeMode(DARK_THEME);
    }
}