// GO!
function hideNavMenu () {
  var navMenu = document.querySelector('.nav-menu')
  var displayStyle = window.getComputedStyle(navMenu, null).getPropertyValue('display')
  if (navMenu.style.display === 'block') {
    document.querySelector('.nav-btn').innerHTML = 'Show Nav'
    return navMenu.style.display = 'none'
  } else {
    document.querySelector('.nav-btn').innerHTML = 'Hide Nav'
    return navMenu.style.display = 'block'
  }
}

document.querySelector('.nav-btn').addEventListener('click', hideNavMenu)


function addGuestToList (key) {
  var text = document.querySelector('.user-input').value
  var liEl = document.createElement('li')
  var list = document.querySelector('#add-guest .guest-list')
  liEl.classList.add('guest')
  if (key.keyCode === 13) {
    if (this.value !== '') {
      liEl.textContent = this.value
      list.appendChild(liEl)
      this.value = ''
    }
  }
}

document.querySelector('.answer-box input').addEventListener('keypress', addGuestToList)
