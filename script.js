document.addEventListener("DOMContentLoaded", function() {

    const isDarkModeEnabled = JSON.parse(localStorage.getItem('darkModeEnabled'));


    if (isDarkModeEnabled) {
        document.body.classList.add("dark-mode");

        var darkModeToggle = document.getElementById("dark-mode-toggle");
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    }


    var darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", function() {
            if (this.checked) {
                document.body.classList.add("dark-mode");
            } else {
                document.body.classList.remove("dark-mode");
            }

            // Store the dark mode state in localStorage
            localStorage.setItem('darkModeEnabled', this.checked);
        });
    }


    var fadeElements = document.querySelectorAll(".fade-in");
    for (var i = 0; i < fadeElements.length; i++) {
        fadeElements[i].classList.add("fade-in");
    }
});
