document.getElementById("name").addEventListener("input", function (e) {
    const pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (e.target.value.match(pattern)) {
        e.target.setCustomValidity("");
    } else {
        e.target.setCustomValidity(" Please enter a valid name");
    }
});

document.getElementById("email").addEventListener("input", function (e) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (e.target.value.match(pattern)) {
        e.target.setCustomValidity("");
    } else {
        e.target.setCustomValidity("Please enter a valid email address");
    }
});

document.getElementById("number").addEventListener("input", function (e) {
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    if (e.target.value.match(pattern)) {
        e.target.setCustomValidity("");
    } else {
        e.target.setCustomValidity(
            "Please enter a valid phone number (format: XXX-XXX-XXXX)"
        );
    }
});

function formatPhoneNumber(input) {
    let number = input.value.replace(/[^\d]/g, "");
    if (number.length > 11) {
        number = number.substring(0, 11);
    }
    if (number.length > 3) {
        number = number.substring(0, 3) + "-" + number.substring(3);
    }
    if (number.length > 7) {
        number = number.substring(0, 7) + "-" + number.substring(7, 11);
    }
    input.value = number;
}