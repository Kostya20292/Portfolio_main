const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('.menu-list__link');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-active');
    });
});

document.addEventListener('click', (event) => {
    if (
        !(
            event.target.closest('.menu') ||
            event.target.closest('.humburger-menu') ||
            event.target.closest('.menu-list__item')
        )
    ) {
        menu.classList.remove('menu-active');
    }
});
