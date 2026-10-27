// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link
document.querySelectorAll("#navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Automatically update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
// This opens the visitor's email application; it does not send messages
// directly to a server. Replace the placeholder email before publishing.
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const contactEmail = ""; // Add your actual email address here.

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
        return;
    }

    if (!contactEmail.trim()) {
        formStatus.textContent =
            "Please configure your actual contact email in script.js before using this form.";

        formStatus.style.color = "#ffb86b";
        return;
    }

    const formData = new FormData(contactForm);

    const name = formData.get("name");
    const email = formData.get("email");
    const projectType = formData.get("projectType");
    const message = formData.get("message");

    const subject = encodeURIComponent(
        `Website Inquiry: ${projectType}`
    );

    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Project Type: ${projectType}\n\n` +
        `Project Details:\n${message}`
    );

    formStatus.textContent =
        "Opening your email application. Please review and send the message.";

    window.location.href =
        `mailto:${contactEmail}?subject=${subject}&body=${body}`;
});