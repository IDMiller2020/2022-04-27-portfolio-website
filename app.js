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

const projectOneModal = document.getElementById("project-one-modal");
const projectOneBtn = document.getElementById("project-one-info");
const projectOneClose = document.getElementsByClassName("close")[0];

function showProjectOneModal() {
  projectOneModal.style.display = 'block'
}
function projectOneModalClose() {
  projectOneModal.style.display = 'none'
}

projectOneBtn.addEventListener('click', showProjectOneModal)
projectOneClose.addEventListener('click', projectOneModalClose)
window.onclick = function(event) {
  if (event.target == projectOneModal) {
    projectOneModal.style.display = "none";
  } else if (event.target == projectTwoModal) {
    projectTwoModal.style.display = "none";
  } else if (event.target == projectThreeModal) {
    projectThreeModal.style.display = "none";
  }
}
const projectTwoModal = document.getElementById("project-two-modal")
const projectTwoBtn = document.getElementById("project-two-info")
const projectTwoClose = document.getElementsByClassName("close")[1];

function showProjectTwoModal() {
  projectTwoModal.style.display = 'block'
}
function projectTwoModalClose() {
  projectTwoModal.style.display = 'none'
}

projectTwoBtn.addEventListener('click', showProjectTwoModal)
projectTwoClose.addEventListener('click', projectTwoModalClose)

const projectThreeModal = document.getElementById("project-three-modal")
const projectThreeBtn = document.getElementById("project-three-info")
const projectThreeClose = document.getElementsByClassName("close")[2];

function showProjectThreeModal() {
  projectThreeModal.style.display = 'block'
}
function projectThreeModalClose() {
  projectThreeModal.style.display = 'none'
}

projectThreeBtn.addEventListener('click', showProjectThreeModal)
projectThreeClose.addEventListener('click', projectThreeModalClose)