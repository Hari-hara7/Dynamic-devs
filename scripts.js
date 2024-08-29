document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('overlay');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scroll to section function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Navigate to club page
function navigateToClub(clubUrl) {
    window.location.href = clubUrl;
}


