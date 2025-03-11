// Example JavaScript code for interactivity

// Function to display a welcome alert
function showWelcomeMessage() {
    alert("Welcome to my personal portfolio!");
}


// Example function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send the data to the server or process it
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    alert("Thank you for your message, " + name + "!");
}

// Attach the form submission handler to the contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
});