document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('signInForm');
    const createAccountForm = document.getElementById('createAccountForm');

    if (signInForm) {
        signInForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;

            if (email) {
                window.location.href = 'index.html';
            } else {
                alert('Please enter your email');
            }
        });
    }

    if (createAccountForm) {
        createAccountForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const passwordCheck = document.getElementById('passwordCheck').value;

            if (name && email && password && password === passwordCheck) {
                window.location.href = 'index.html'; // Redirect to sign-in page or another page
            } else if (password !== passwordCheck) {
                alert('Passwords do not match');
            } else {
                alert('Please fill out all fields');
            }
        });
    }
});
