const sidebar = document.getElementsByClassName("sidebar")[0];
const closeTag = document.getElementsByClassName("close-tag")[0];
const burgerMenu = document.getElementById("burger-menu");

burgerMenu.addEventListener("click", () => {
  sidebar.style.width = "201px";
});

closeTag.addEventListener("click", () => {
  sidebar.style.width = "0";
});
