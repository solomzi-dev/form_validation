const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/,
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
        input.className = 'valid';
    } else {
        input.className = 'invalid';
    }
}