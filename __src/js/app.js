const btn = document.getElementById('menu-button');
const menu = document.getElementById('mobile-menu-container');
const sendForm = document.getElementById('form');
const formBtn = document.getElementById('send-message');

document.addEventListener('click', ({ target }) => {
    if (window.screen.width >= 768 || target !== btn) {
        menu.classList.remove('active');
        return;
    }
    menu.classList.toggle('active');
});

window.addEventListener('resize', function () {
    if (window.screen.width >= 768) menu.classList.remove('active');
});

sendForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendForm.reset();
    formBtn.classList.add('disabled');
    formBtn.textContent = 'Thank you!';
});
