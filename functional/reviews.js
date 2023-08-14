const reviewUser1 = document.querySelector('.r-u1')
const reviewUser2 = document.querySelector('.r-u2')
const reviewUser3 = document.querySelector('.r-u3')
const reviewUser4 = document.querySelector('.r-u4')


fetch('https://jsonplaceholder.typicode.com/users/2')
    .then(res => res.json())
    .then(value => reviewUser1.innerHTML = value.name) 
    .catch(error => console.log(error))

fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(res => res.json())
    .then(value => reviewUser2.innerHTML = value.name) 
    .catch(error => console.log(error))

fetch('https://jsonplaceholder.typicode.com/users/4')
    .then(res => res.json())
    .then(value => reviewUser3.innerHTML = value.name) 
    .catch(error => console.log(error))

fetch('https://jsonplaceholder.typicode.com/users/5')
    .then(res => res.json())
    .then(value => reviewUser4.innerHTML = value.name) 
    .catch(error => console.log(error))