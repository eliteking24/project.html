document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const contactForm = document.getElementById('contactForm');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                event.preventDefault();
                alert('Passwords do not match!');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Login Successful! Redirecting to home...');
            window.location.href = 'index.html';
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('contactName').value;
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
            contactForm.reset();
        });
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});
