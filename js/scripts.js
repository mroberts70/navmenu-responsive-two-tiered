const navigationMenu = document.getElementById("navmenu");
const navigationButton = document.getElementById("toggle-menu");

function toggleMenu() {
    let isVisible = navigationMenu.getAttribute("data-visible");
    console.log(isVisible);
    if(isVisible === "false") {
        navigationMenu.setAttribute("data-visible", "true");
        navigationButton.setAttribute("data-visible", "true");
    }
    else {
        navigationMenu.setAttribute("data-visible", "false");
        navigationButton.setAttribute("data-visible", "false");
    }
}

function closeMobile() {
    navigationMenu.setAttribute("data-visible", "false");
    navigationButton.setAttribute("data-visible", "false");

}

navigationButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", closeMobile);