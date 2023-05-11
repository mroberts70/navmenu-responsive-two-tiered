const navigationMenu = document.getElementById("navmenu");
const navigationButton = document.getElementById("toggle-menu");

function toggleMenu() {
    let isVisible = navigationMenu.getAttribute("data-visible");

    if(isVisible === "false") {
        // must first check to see if active is on. If not, call dataDisplay to turn on active, 
        // then call this toggleMenu function again, but after a 300ms timeout.
        // the timeout is necessary to allow the transform & transition properties to work correctly.
        if(navigationMenu.classList.contains("active")) {
            navigationMenu.setAttribute("data-visible", "true");
            navigationButton.setAttribute("data-visible", "true");
        }
        else {
            dataDisplay();
            setTimeout(toggleMenu, 100);
        }
    }
    else {
        // if isVisible is true, then set both data-visible attributes to false, then 
        // call dataDisplay to turn off the active class after a 300ms delay.
        // the delay allows the css to slide the menu out the bottom of the screen
        // before the menu display property is set to none. 
        // without the delay, the transform & transition properties don't work.
        navigationMenu.setAttribute("data-visible", "false");
        navigationButton.setAttribute("data-visible", "false");
        setTimeout(dataDisplay, 300);
    }

    function dataDisplay() {
        // Toggles the "active" class on and off for the navmenu. If active,
        // display is set to block in the css. If off, display reverts
        // back to none, which is the value set in the media query.
        // It is necessary to set the display to none so the menu can't be seen
        // when the user scrolls down.
        navigationMenu.classList.toggle("active");
    }
}

navigationButton.addEventListener("click", toggleMenu);
