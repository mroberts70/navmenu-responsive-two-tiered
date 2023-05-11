# twotiermenu-responsive


05-11-2023 - Fixed the issue of the mobile menu being visible off screen:

Finally fixed the "mobile-menu sliding off the screen but still being visible if you scroll" issue.
I added a js function that toggles an "active" class on or off on the navmenu element.
I then use the "active" class to set the display property to "block" if it is active and "none" if not active..

More importantly, I added a setTimeout method so the display can be turned on before the transform/transition properties kick in,
allowing the menu to "slide" onto the screen. I also had to set it up to work in the other direction as well.
The menu "slides" off the screen, then after the sliding has completed (after a 300 millisecond timeout),
the "active" class is toggled off, which causes the css to revert back to display: none.


<br><br><br>


05-09-2023 - Two-Tiered Navigation Menu - Fully Responsive

The mobile-menu slides up and down from the bottom of the screen. 

The problem is, when the mobile menu is "closed" - you can see it when you scroll down!


Maybe try adding a brief delay and then do a display: none to completely hide it when it's off screen?


More research & experimentation needed here.
