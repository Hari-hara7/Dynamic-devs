document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function navigateToClub(clubUrl) {
    window.location.href = clubUrl;
}


// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
});


// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
});
