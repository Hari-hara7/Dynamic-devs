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


// Get modal element
var modal = document.getElementById("registration-modal");

// Get open modal buttons
var registerButtons = document.querySelectorAll(".register-button");

// Get close button
var closeButton = document.querySelector(".close");

// Get form and confirmation message
var form = document.getElementById("registration-form");
var confirmationMessage = document.getElementById("confirmation-message");

// Open modal when "Register Now" button is clicked
registerButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        modal.style.display = "block";
    });
});

// Close modal when close button is clicked
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when clicking outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            confirmationMessage.classList.remove("hidden");

            // Show success pop-up
            const successPopup = document.getElementById("successPopup");
            successPopup.classList.remove("hidden");

            // Hide modal after 2 seconds
            setTimeout(() => {
                modal.style.display = "none";

                // Hide success pop-up after an additional 2 seconds
                setTimeout(() => {
                    successPopup.classList.add("hidden");
                }, 2000);
            }, 2000); // Close modal after 2 seconds

        } else {
            alert("Something went wrong. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});



function openMeeting() {
    window.open('https://finiteloop.daily.co/hello-daily', '_blank');
}


function openMeetings() {
    window.open('https://roboticsclub.daily.co/8id78buYAm8PLyRMMJc0', '_blank');
}
function openMeetingss() {
    window.open('https://aeroclubnmamit.daily.co/hvJyS2HlCA6KDuGQNObX', '_blank');
}
