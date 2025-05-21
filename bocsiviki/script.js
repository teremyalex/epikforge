function orderInfo(info, element) {
    document.querySelector('.order-info button.active').classList.remove('active')
    document.querySelector('.order-info .info-block div.active').classList.remove('active')
    element.classList.add('active')
    document.getElementById(info).classList.add('active')
}

function gyik(info, element) {
    document.querySelector('.gyik button.active').classList.remove('active')
    document.querySelector('.gyik .info-block div.active').classList.remove('active')
    element.classList.add('active')
    document.getElementById(info).classList.add('active')
}

function cart(info, element) {
    document.querySelector('.cart button.active').classList.remove('active')
    document.querySelector('.cart .info-block div.active').classList.remove('active')
    element.classList.add('active')
    document.getElementById(info).classList.add('active')
}

function weekChange(element) {
    document.querySelector('.menu button.active').classList.remove('active')
    element.classList.add('active')
}

document.querySelector('.mobil-bar').addEventListener('click', () => {
    document.body.classList.toggle('mobil');
    document.querySelector('nav.mobil').style.display = "block"
    setTimeout(() => document.querySelector('nav.mobil').classList.toggle('active'), 10)
})

function mobilSubOpen(menu){
    document.querySelectorAll('nav.mobil .sub-menu').forEach(item=>item.classList.remove('visible'))
    document.querySelector('nav.mobil .' + menu).classList.add('visible')
}

function companyCheck() {
    document.getElementById("company-cart").style.display = document.getElementById("company-check").checked ? "block" : "none"
}