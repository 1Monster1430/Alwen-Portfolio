// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation and Feedback
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("formResponse").innerText = "Please fill out all fields.";
        document.getElementById("formResponse").style.color = "red";
    } else {
        // Simulating form submission
        document.getElementById("formResponse").innerText = "Message sent successfully!";
        document.getElementById("formResponse").style.color = "green";

        // Clear the form
        document.getElementById("contactForm").reset();
    }
});