document.getElementById("open-btn__registration-popup").addEventListener("click", function(){
    document.getElementById("registration-popup-opened").classList.add("open")
})
// Найти в документе! элемент по id! и добавить к нему слушателя!, который при клике! будет:(делать)!
// искать элемент по id! и добавлять к нему класс .open!(мы создали этот класс в css и html доках)

document.getElementById("close-btn__registration-popup").addEventListener("click", function(){
    document.getElementById("registration-popup-opened").classList.remove("open")
})
// Найти в документе! элемент по id! и добавить к нему слушателя!, который при клике! будет:(делать)!
// искать элемент по id! и удалять у него класс .open!(мы создали этот класс в css и html доках) - 
// следовательно модальное окно закроется
const menu = document.querySelector('.header-menu')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if(menu && menuBtn){
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        // body.classList.toggle('lock')
    })
    menu.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
        })
    })
}