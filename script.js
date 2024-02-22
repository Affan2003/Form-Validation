//validate SignIn form
function validateSignInForm() {
    var email = document.getElementById('signInUsername').value.trim();
    var password = document.getElementById('signInPassword').value.trim();

    if (email === '' || password === '') {
        alert('User ID or Email and password are required.');
        return false;
    }

    // Check if email is in valid format
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}


// validate SignUp form
function validateSignUpForm() {
    var fullName = document.getElementById('signUpFullName').value.trim();
    var email = document.getElementById('signUpEmail').value.trim();
    var password = document.getElementById('signUpPassword').value.trim();
    var contact = document.getElementById('signUpContact').value.trim();
    var gender = document.getElementById('signUpGender').value.trim();
    var age = document.getElementById('signUpAge').value.trim();
    var city = document.getElementById('signUpCity').value.trim();
    var country = document.getElementById('signUpCountry').value.trim();

    if (fullName === '' || email === '' || password === '' || contact === '' || gender === '' || age === '' || city === '' || country === '') {
        alert('All fields are required.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!validatePassword(password)) {
        alert('Password must contain at least one special character.');
        return false;
    }

    if (isNaN(age) || age < 18) {
        alert('Age must be a number and at least 18.');
        return false;
    }

    return true;
}

// validate email
function validateEmail(email) {
    var atIndex = email.indexOf('@');
    var dotIndex = email.lastIndexOf('.');
    return (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1);
}

// validate password
function validatePassword(password) {
    var re = /^(?=.*[!@#$%^&*])/; // Regex to check for at least one special character
    return re.test(password);
}


document.getElementById('signInForm').addEventListener('submit', function(event) {
    if (!validateSignInForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    if (!validateSignUpForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
