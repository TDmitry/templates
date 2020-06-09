const btn = document.getElementById('menu-button');
const menu = document.getElementById('mobile-menu-container');
const sendForm = document.getElementById('form');
const formBtn = document.getElementById('send-message');


document.addEventListener('click', ({ target }) => {
    if (window.screen.width >= 768 || target !== btn) {
        menu.classList.remove('active');
        btn.classList.remove('btn-transition');
        return;
    }
    btn.classList.toggle('btn-transition');
    menu.classList.toggle('active');
});

window.addEventListener('resize', function () {
    if (window.screen.width >= 768) {
        menu.classList.remove('active');
        btn.classList.remove('btn-transition');
    }
});

sendForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendForm.reset();
    formBtn.classList.add('disabled');
    formBtn.textContent = 'Thank you!';
});

window.addEventListener('scroll', () => {
    const stick = document.getElementById('stick-btn');
    if (window.pageYOffset < 400) stick.style.cssText = 'display: none';
    else stick.style.cssText = 'display: block';
});
