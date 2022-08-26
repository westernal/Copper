const sidebar = document.getElementsByClassName("sidebar")[0];
const closeTag = document.getElementsByClassName("close-tag")[0];
const burgerMenu = document.getElementById("burger-menu");
const infoBar = document.getElementById("info-bar");
const items = document.getElementsByClassName("item");
var screenSize = window.matchMedia("(max-width: 800px)");
const barCloseTag = document.getElementById("close-info");

if (screenSize.matches) {
  burgerMenu.addEventListener("click", () => {
    sidebar.style.width = "201px";
  });

  closeTag.addEventListener("click", () => {
    sidebar.style.width = "0";
  });
}

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    infoBar.style.width = "201px";
    for (let i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = "#ededed";
      items[i].style.backgroundColor = "white";
    }
    items[i].style.backgroundColor = "#ededed";
  });
}

barCloseTag.addEventListener("click", () => {
  infoBar.style.width = "0";
});
