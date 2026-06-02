document.addEventListener("DOMContentLoaded", () => {
    
    
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const bodyElement = document.body;

    themeToggleBtn.addEventListener("click", () => {
        if (bodyElement.classList.contains("dark-theme")) {
            bodyElement.classList.remove("dark-theme");
            bodyElement.classList.add("light-theme");
            themeToggleBtn.innerHTML = `<i class="fas fa-moon"></i>`;
        } else {
            bodyElement.classList.remove("light-theme");
            bodyElement.classList.add("dark-theme");
            themeToggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
        }
    });
const ContactForm = document.getElementById("portfolio-Contact-form");
    const fbSuccessMsg = document.getElementById("fb-success-msg");

    ContactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        fbSuccessMsg.style.display = "block";
        ContactForm.reset();

        setTimeout(() => {
            fbSuccessMsg.style.display = "none";
        }, 4000);
    });
});
