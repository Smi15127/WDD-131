 function toggleTheme() {
    const body = document.body;
    const logo = document.getElementById("byui-logo");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        logo.src = "byui-dark-logo.png";
    } else {
        logo.src = "byui-logo.png";
    }
}
