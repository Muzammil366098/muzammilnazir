// Show back-to-top button on scroll
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
