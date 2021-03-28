let currentLocation = location.href;
let menuItem = document.querySelectorAll('ul.menu__list a');
let menuLength = menuItem.length
for (let i = 0; i < menuLength; i++){
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active"
    }
}