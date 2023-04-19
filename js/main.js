const burguer = document.querySelector('.burguer')
const menu = document.querySelector('.menu')

burguer.addEventListener('click', () => {
    burguer.classList.toggle('rotate')
    menu.classList.toggle('show')
})

