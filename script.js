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
 
    const contactForm = document.getElementById("portfolio-Contact-form");
    const fbSuccessMsg = document.getElementById("fb-success-msg");
 
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
 
        const formData = new FormData(contactForm);
 
        fetch("https://formsubmit.co/ajax/adithyaks662@gmail.com", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                fbSuccessMsg.style.display = "block";
                contactForm.reset();
                setTimeout(() => {
                    fbSuccessMsg.style.display = "none";
                }, 4000);
            }
        })
        .catch(error => {
            console.error("Form error:", error);
        });
    });
 
});
