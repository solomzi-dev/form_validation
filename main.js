const patterns = {
    username: /^[a-z\d]{5,12}$/gi,
    email: /^[]$/,
    password: /^[a-z\d@\?]{8,20}$/,
    telephone: /^\d{10}$/,
    profileSlug: /^[a-z\d-]{8,20}$/
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        validate(input, patterns[input.name]);
    });
});

function validate(input, regEx) {
    if(regEx.test(input.value)) {
        input.style.borderColor = 'greenyellow';
    } else {
        input.style.borderColor = 'orangered';
    }
}