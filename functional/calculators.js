const inputWeight = document.querySelector('.input-weight')
const userSelect = document.querySelector('.user-select-water')
const resultWater = document.querySelector('.result-water')
const btnWater = document.querySelector('.user-btn-water')

btnWater.addEventListener('click', () => {
    if (!inputWeight.value) {
        resultWater.innerHTML = 'Введите вес'
        return;
    }

    if (userSelect.value == 'sport') {
        resultWater.innerHTML = 
        `Вам рекомендуется пить не менее ${inputWeight.value * 35}мл (${inputWeight.value * 35/1000}л)`
    } else {
        resultWater.innerHTML =
         `Вам рекомендуется пить не менее ${inputWeight.value * 25}мл (${inputWeight.value * 25/1000}л)`
    }
})


