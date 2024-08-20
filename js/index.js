const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuIconElement = $(".menu-icon");
const sidebarOverlayElement = $(".sidebar-overlay");
const sidebarElement = $(".sidebar");
const goToTopElement = $(".go-to-top");

if (menuIconElement) {
  menuIconElement.onclick = () => {
    sidebarElement.style.translate = "0";
    sidebarOverlayElement.style.visibility = "visible";
    sidebarOverlayElement.style.opacity = 0.6;
  };
}

if(sidebarOverlayElement) {
  sidebarOverlayElement.onclick = () => {
    sidebarElement.style.translate = "-100% 0";
    sidebarOverlayElement.style.visibility = "hidden";
    sidebarOverlayElement.style.opacity = 0;
  }
}

if(goToTopElement) {
  goToTopElement.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth"})
  }
}

window.onscroll = () => {
  if(window.scrollY >= 2000 && goToTopElement.style.display !== "flex") {
    goToTopElement.style.display = "flex"
  }else if(window.scrollY < 2000 && goToTopElement.style.display !== "none") {
    goToTopElement.style.display = "none"
  }
}
