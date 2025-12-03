// Select the form
const form = document.querySelector("form");

// When form is submitted
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page refresh

    // Collecting form data
    const fullName = document.getElementById("fullName").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const gender = document.querySelector("input[name='gender']:checked");

    // Validation
    if (!fullName || !username || !email || !phone || !password || !gender) {
        alert("Please fill all fields!");
        return;
    }

    // Object of user data
    const userData = {
        fullName: fullName,
        username: username,
        email: email,
        phone: phone,
        password: password,
        gender: gender.value
    };

    console.log("User Registered:", userData);
    alert("Registration Successful!");

    // Clear form
    form.reset();
});
