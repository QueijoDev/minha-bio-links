// script.js
const html = document.documentElement;
const toggleBtn = document.getElementById('toggle-theme');
const toggleIcon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
    
    if (html.classList.contains('dark-mode')) {
        toggleIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        toggleIcon.classList.replace('fa-sun', 'fa-moon');
    }
});