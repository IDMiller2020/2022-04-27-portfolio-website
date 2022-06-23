const navMenu = document.getElementById('menu-open')
const navClose = document.getElementById('menu-close')
const linkClickClose = document.getElementById('nav-list')
const navDropDownMenu = document.getElementById('drop-down-menu')
let showMenu = false
const modal = document.getElementById("project-one-modal");
const btn = document.getElementById("project-one-info");
const span = document.getElementsByClassName("close")[0];
function toggleNavMenu () {
  showMenu = !showMenu
  if (showMenu) {
    navDropDownMenu.style.display = 'unset'
  } else {
    navDropDownMenu.style.display = 'none'
  }
}
function showModal() {
  modal.style.display = 'block'
}
function modalClose() {
  modal.style.display = 'none'
}
navMenu.addEventListener('click', toggleNavMenu)
navClose.addEventListener('click', toggleNavMenu)
linkClickClose.addEventListener('click', toggleNavMenu);
btn.addEventListener('click', showModal)
span.addEventListener('click', modalClose)
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}