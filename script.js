document.getElementById('email').addEventListener('input', function (e) {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (e.target.value.match(pattern)) {
        e.target.setCustomValidity('');
    } else {
        e.target.setCustomValidity('Please enter a valid email address');
    }
});

