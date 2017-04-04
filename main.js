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
  var liEl = document.createElement('li')
  var list = document.querySelector('#add-guest .guest-list')
  liEl.classList.add('guest')
  if (key.keyCode === 13 && this.value !== '') {
    liEl.textContent = this.value
    list.appendChild(liEl)
    this.value = ''
  }
}

document.querySelector('.answer-box input').addEventListener('keypress', addGuestToList)

function addGuestWithBtn (key) {
  if (key.keyCode === 13 && this.value !== '') {
    var btnEl = document.createElement('button')
    btnEl.textContent = 'X'
    btnEl.addEventListener('click', function () {
      this.parentElement.remove()
    })
    var liEl = document.createElement('li')
    liEl.classList.add('guest')
    liEl.textContent = this.value
    liEl.appendChild(btnEl)
    var list = document.querySelector('#bonus-list .guest-list')
    list.appendChild(liEl)
    this.value = ''
  }
}

document.querySelector('#bonus-list input').addEventListener('keypress', addGuestWithBtn)
