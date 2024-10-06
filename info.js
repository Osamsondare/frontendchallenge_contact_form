const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

document.getElementById('first-name').disabled = false;
document.getElementById('last-name').disabled = false;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('e-mail').value.trim();
    const queryType = document.querySelector('input[name="query-type"]:checked'); // Fixed selector
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;

    let isValid = true; // Fixed typo

    // First name validation
    if (firstName === '') {
        isValid = false;
        document.querySelector('#first-name + .error-message').style.display = 'block';
        document.querySelector('#first-name').style.border = '1px solid var(--Red-medium)';
    } else {
        document.querySelector('#first-name + .error-message').style.display = 'none';
        document.querySelector('#first-name').style.border = '1px solid var(--Grey-medium)';
    }

    // Last name validation
    if (lastName === '') {
        isValid = false;
        document.querySelector('#last-name + .error-message').style.display = 'block';
        document.querySelector('#last-name').style.border = '1px solid var(--Red-medium)';
    } else {
        document.querySelector('#last-name + .error-message').style.display = 'none';
        document.querySelector('#last-name').style.border = '1px solid var(--Grey-medium)';
    }

    // Email validation
    if (!isValidEmail(email)) {
        isValid = false;
        document.querySelector('#e-mail + .error-message').style.display = 'block';
        document.querySelector('#e-mail').style.border = '1px solid var(--Red-medium)';
    } else {
        document.querySelector('#e-mail + .error-message').style.display = 'none';
        document.querySelector('#e-mail').style.border = '1px solid var(--Grey-medium)';
    }

    // Query type validation
    if (!queryType) {
        isValid = false;
        document.querySelector('.radio-input + .error-message').style.display = 'block';
    } else {
        document.querySelector('.radio-input + .error-message').style.display = 'none';
    }

    // Message validation
    if (message === '') {
        isValid = false;
        document.querySelector('#message + .error-message').style.display = 'block';
        document.querySelector('#message').style.border = '1px solid var(--Red-medium)';
    } else {
        document.querySelector('#message + .error-message').style.display = 'none';
        document.querySelector('#message').style.border = '1px solid var(--Grey-medium)';
    }

    // Consent validation
    if (!consent) {
        isValid = false;
        document.querySelector('#consent + .error-message').style.display = 'block';
    } else {
        document.querySelector('#consent + .error-message').style.display = 'none';
    }

    // If the form is valid
    if (isValid) {
        successMessage.classList.add('active');
        form.reset();
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
