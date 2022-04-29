const navMenu = document.getElementById('menu-open')
const navClose = document.getElementById('menu-close')
const linkClickClose = document.getElementById('nav-list')
const navDropDownMenu = document.getElementById('drop-down-menu')
let showMenu = false
function toggleNavMenu () {
  showMenu = !showMenu
  if (showMenu) {
    navDropDownMenu.style.display = 'unset'
  } else {
    navDropDownMenu.style.display = 'none'
  }
}
navMenu.addEventListener('click', toggleNavMenu)
navClose.addEventListener('click', toggleNavMenu)
linkClickClose.addEventListener('click', toggleNavMenu)