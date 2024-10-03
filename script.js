// Get the login and register forms
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Get the login and register inputs
const loginUsername = document.getElementById("username");
const loginPassword = document.getElementById("password");
const registerUsername = document.getElementById("username");
const registerEmail = document.getElementById("email");
const registerPassword = document.getElementById("password");

// Add event listeners to the login and register forms
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginUsername.value;
  const password = loginPassword.value;
  // Send a request to the server to login
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Login successful!");
        // Redirect to the dashboard
      } else {
        alert("Invalid username or password");
      }
    })
    .catch((error) => {
      alert("Error logging in");
    });
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = registerUsername.value;
  const email = registerEmail.value;
  const password = registerPassword.value;
  // Send a request to the server to register
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Registration successful!");
        // Redirect to the login page
      } else {
        alert("Error registering");
      }
    })
    .catch((error) => {
      alert("Error registering");
    });
});
