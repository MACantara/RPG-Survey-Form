document.getElementById('name').addEventListener('input', function (e) {
    const pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (e.target.value.match(pattern)) {
        e.target.setCustomValidity('');
    } else {
        e.target.setCustomValidity(' Please enter a valid name');
    }
});

document.getElementById('email').addEventListener('input', function (e) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (e.target.value.match(pattern)) {
        e.target.setCustomValidity('');
    } else {
        e.target.setCustomValidity('Please enter a valid email address');
    }
});

