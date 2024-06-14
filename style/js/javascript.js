document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('close-btn');

    burgerMenu.addEventListener('click', () => {
        mobileNav.style.left = '0';
    });

    closeBtn.addEventListener('click', () => {
        mobileNav.style.left = '-100%';
    });

    document.addEventListener('click', (event) => {
        if (!mobileNav.contains(event.target) && !burgerMenu.contains(event.target)) {
            mobileNav.style.left = '-100%';
        }
    });
});
