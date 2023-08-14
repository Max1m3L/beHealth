const bucket = document.querySelector('.countBucket')
const productBtn = document.querySelector('.product1-btn')
const productTWOBtn = document.querySelector('.product2-btn')
const productTHREEBtn = document.querySelector('.product3-btn')


bucket.innerHTML = localStorage.length

productBtn.addEventListener('click', () => {
    if (!localStorage.product1) {
        localStorage.setItem('product1', 1990)
    } else {
        alert("Вы уже добавили товар в корзину") 
        return;
    }
    bucket.innerHTML = localStorage.length
})

productTWOBtn.addEventListener('click', () => {
    if (!localStorage.product2) {
        localStorage.setItem('product2', 1900)
    } else {
        alert("Вы уже добавили товар в корзину")
        return;
    }
    bucket.innerHTML = localStorage.length
})

productTHREEBtn.addEventListener('click', () => {
    if (!localStorage.product3) {
        localStorage.setItem('product3', 1390)
    } else {
        alert("Вы уже добавили товар в корзину")
        return;
    }
    bucket.innerHTML = localStorage.length
})

