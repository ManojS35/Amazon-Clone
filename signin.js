document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('signInForm');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;

        // Placeholder for actual sign-in logic
        if (email) {
            window.location.href = 'index.html';
        }
    });
});
