document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Switch from "Loading..." to "Welcome"
        document.querySelector('.message').style.opacity = '0';
        document.querySelector('.welcome-message').style.opacity = '1';

        // Redirect after the transition
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000); // Redirect 1 second after the transition completes
    }, 9000); // Switch text after 5 seconds
});