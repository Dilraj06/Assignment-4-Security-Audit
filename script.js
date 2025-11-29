#Testing
document.getElementById("surveyForm").addEventListener("submit", function(event) {
    let valid = true;
  
    function showError(id, message) {
      document.getElementById(id).textContent = message;
    }
  
    function clearError(id) {
      document.getElementById(id).textContent = "";
    }
  
    // Name validation
    let name = document.getElementById("name").value.trim();
    if (name === "") {
      showError("nameError", "Name is required.");
      valid = false;
    } else {
      clearError("nameError");
    }
  
    // Email validation
    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("emailError", "Enter a valid email.");
      valid = false;
    } else {
      clearError("emailError");
    }
  
    // Gender validation (radio button)
    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
      showError("genderError", "Please select your gender.");
      valid = false;
    } else {
      clearError("genderError");
    }
  
    // Country validation (dropdown)
    let country = document.getElementById("country").value;
    if (country === "") {
      showError("countryError", "Please select a country.");
      valid = false;
    } else {
      clearError("countryError");
    }
  
    // Username validation (regex)
    let username = document.getElementById("username").value.trim();
    let usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
      showError("usernameError", "Username must be alphanumeric.");
      valid = false;
    } else {
      clearError("usernameError");
    }
  
    // Prevent form submission if validation fails
    if (!valid) {
      event.preventDefault();
    }
  });

  
