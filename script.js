var span = document.querySelector('#year')
var year= new Date().getFullYear()
span.innerHTML = year

var menuHumburger = document.querySelector('.menu-humburger')
var menuHumburgerModal = document.querySelector('.menu-humburger-modal')
var menuHumburgerClose = document.querySelector('.menu-humburger-close')
menuHumburger.addEventListener('click', (e)=>{
    menuHumburgerModal.style.display = "block"
    menuHumburgerClose.style.display = "block"
    menuHumburger.style.display = "none"
})
menuHumburgerClose.addEventListener('click', (e)=>{
    menuHumburgerModal.style.display = "none"
    menuHumburgerClose.style.display = "none"
    menuHumburger.style.display = "block"

})