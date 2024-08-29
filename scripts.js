// Smooth scrolling to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Club card hover animation
function animateCard(card) {
    card.style.transform = 'scale(1.1)';
}

function resetCard(card) {
    card.style.transform = 'scale(1)';
}

// Navigate to individual club pages
function navigateToClub(page) {
    window.location.href = page;
}
