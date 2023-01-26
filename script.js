function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.getElementById("burger").style.display = "none";
}

const checkpoint = 300;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 0.9;
  } else {
    opacity = 0;
  }
  document.querySelector(".change-bg").style.opacity = opacity;
});