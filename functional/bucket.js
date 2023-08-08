const order1 = document.querySelector('.order1')
const order2 = document.querySelector('.order2')
const order3 = document.querySelector('.order3')

const orderBtn1 = document.querySelector('.order-btn1')
const orderBtn2 = document.querySelector('.order-btn2')
const orderBtn3 = document.querySelector('.order-btn3')

const priceProduct1 = document.querySelector('.order-priсe1')
priceProduct1.innerHTML = `${localStorage.product1}рублей`

const priceProduct2 = document.querySelector('.order-priсe2')
priceProduct2.innerHTML = `${localStorage.product2}рублей`

const priceProduct3 = document.querySelector('.order-priсe3')
priceProduct3.innerHTML = `${localStorage.product3}рублей`

const massage = document.querySelector('.massage')

if (!localStorage.length) {
    massage.innerHTML = `Товаров нет`
}

if (!localStorage.product1) {
    order1.style.visibility = 'hidden'; //visible
}

if (!localStorage.product2) {
    order2.style.visibility = 'hidden'; //visible
}

if (!localStorage.product3) {
    order3.style.visibility = 'hidden'; //visible
}


orderBtn1.addEventListener('click', () => {
    localStorage.removeItem('product1')
    window.location.reload()
})

orderBtn2.addEventListener('click', () => {
    localStorage.removeItem('product2')
    window.location.reload()
})

orderBtn3.addEventListener('click', () => {
    localStorage.removeItem('product3')
    window.location.reload()
})
