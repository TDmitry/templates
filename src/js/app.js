
const btn = document.getElementById('menu-btn');
const menu = document.querySelector('.header-menu-list');
const form = document.getElementById('form');
const emailForm = document.getElementById('emails');


window.addEventListener('resize', function () {
    if (window.screen.width >= 768) {
        menu.classList.remove('active');
        btn.classList.remove('btn-transition');
    }
});

document.addEventListener('click', ({ target }) => {
    if (window.screen.width >= 768 || target !== btn) {
        menu.classList.remove('active');
        btn.classList.remove('btn-transition');
        return;
    }
    btn.classList.toggle('btn-transition');
    menu.classList.toggle('active');
});

form.addEventListener('submit', (e) => {
    const formBtn = document.getElementById('form-btn');
    const inputs = document.querySelectorAll('.text-input');
    const message = document.getElementById('message');
    e.preventDefault();
    form.reset();
    formBtn.setAttribute('disabled', true);
    formBtn.textContent = 'We shall contact you soon!';
    inputs.forEach(el => el.setAttribute('disabled', true));
    message.setAttribute('disabled', true);
});

emailForm.addEventListener('submit', (e) => {
    const button = document.getElementById('subscribe-btn');
    const input = document.getElementById('subscribe');
    e.preventDefault();
    emailForm.reset();
    button.setAttribute('disabled', true);
    button.textContent = 'Thanks';
    input.setAttribute('disabled', true);
});
