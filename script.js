const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the username and password entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform validation (You can replace this with your own validation logic)
    if (username === "admin" && password === "password") {
        // Successful login
        alert("Login successful!");
        // Redirect to the bank portfolio page
        window.location.href = "login.html";
    } else {
        // Failed login
        document.getElementById("errorMessage").style.display = "block"; // Show error message
    }
});

