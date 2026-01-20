const navLinks = document.querySelectorAll("nav a");

menuButton.addEventListener("click", () => {
  navLinks.forEach(link => {
    link.classList.toggle("hide");
  });
});

function handleResize() {
  if (window.innerWidth >= 700) {
    navLinks.forEach(link => link.classList.remove("hide"));
  } else {
    navLinks.forEach(link => link.classList.add("hide"));
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);
