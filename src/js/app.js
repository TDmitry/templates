
const btn = document.getElementById('menu-btn');
const menu = document.querySelector('.header-menu-list');
const form = document.getElementById('form');
const emailForm = document.getElementById('emails');
const btnBook = document.getElementById('btnBook');
const bookFormCancelBtn = document.getElementById('bookFormCancelBtn');
const bookContainer = document.getElementById('book-container');
const bookContainerForm = document.getElementById('bookContainerForm');
const phoneNubmerInput = document.getElementById('phoneNumber');
const datepicker = document.getElementById('datepicker');

// menu handle on resize
window.addEventListener('resize', function () {
    if (window.screen.width >= 768) {
        menu.classList.remove('active');
        btn.classList.remove('btn-transition');
    }
});
// click on menu button on mobile
document.addEventListener('click', ({ target }) => {
    if (window.screen.width >= 768 || target !== btn) {
        menu.classList.remove('active');
        btn.classList.remove('btn-transition');
        return;
    }
    btn.classList.toggle('btn-transition');
    menu.classList.toggle('active');
});
// booking header btn
btnBook.addEventListener('click', () => {
    bookContainer.style.display = 'block';
});
// cancel booking btn
bookFormCancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    bookContainer.style.display = 'none';
});
// submit booking container
bookContainerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    bookContainer.style.display = 'none';
    btnBook.setAttribute('disabled', true);
    btnBook.textContent = 'Thank you!';
    btnBook.style.opacity = '.5';
});
// phone number correct
phoneNubmerInput.addEventListener('input', ({ target }) => {
    const x = target.value.replace(/\D/g, '')
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    // eslint-disable-next-line no-param-reassign
    target.value = !x[2] ? x[1] : `( ${x[1]} ) - ${x[2]}${!x[3] ? '' : `- ${x[3]}`}`;
});
// datepicker
function datePicking() {
    const d = new Date();
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d).padStart(2, 0);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    const today = `${ye}-${mo}-${da}`;
    datepicker.setAttribute('min', today);
    datepicker.setAttribute('value', today);
}
datePicking();
// contact-form event
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
// footer mini-form event
emailForm.addEventListener('submit', (e) => {
    const button = document.getElementById('subscribe-btn');
    const input = document.getElementById('subscribe');
    e.preventDefault();
    emailForm.reset();
    button.setAttribute('disabled', true);
    button.textContent = 'Thanks';
    input.setAttribute('disabled', true);
});
