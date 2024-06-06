const presentCity = document.querySelector('.present-city')
// const presentRentData = document.querySelector('.present-rentData')
// const tbarTitleRentData = document.querySelector('.present-rentData .tbar-title')
const presentCountries = document.querySelector('.present-country')
const childInp = document.querySelector('#child')


const cityInp = document.querySelector('#city')


cityInp.addEventListener('click', () => {
    presentCity.classList.toggle('active')
})

const rentCities = document.querySelectorAll('.cityRent .item')

rentCities.forEach(el => {

    el.addEventListener('click', () => {
        cityInp.value = el.innerText
        backFromRentCity.click()
    })
})

const countryInp = document.querySelector('#country')
countryInp.addEventListener('click', () => {
    presentCountries.classList.toggle('active')
})

const countries = document.querySelectorAll('.countries .item')
countries.forEach(el => {
    el.addEventListener('click', () => {
        countryInp.value = el.innerText
        backFromCountries.click()
    })
})

const childCount = document.querySelector('#childCount')
const childCheck = document.querySelector('#child')
childCheck.addEventListener('click', () => {
    document.querySelector('.childHolder').classList.toggle('active')
    childCount.required = !childCount.required
})


let objectDate = new Date(new Date().getTime() + 120 * 60 * 60 * 1000)

// Extract the day, month, and year
const day = String(objectDate.getDate()).padStart(2, '0');
const month = String(objectDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const year = objectDate.getFullYear();

// Format the date to dd.mm.yyyy
const formattedDate = `${day}.${month}.${year}`;

const picker = new Litepicker({
    element: document.querySelector('#dateRange'),
    delimiter: "  -  ",
    format: "DD.MM.YYYY",
    lang: "ru-RU",
    minDate: objectDate - 1
});

const username = document.querySelector('#username')
const city = document.querySelector('#city')
const country = document.querySelector('#country')
const dateRange = document.querySelector('#dateRange')
dateRange.value = formattedDate
const plusminus = document.querySelector('#plusminus')
const nights = document.querySelector('#nights')
const adults = document.querySelector('#adults')
const phone = document.querySelector('#phone')

const modal = document.querySelector('#open-modal')


const rentForm = document.querySelector('#rentForm')
rentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    sendMessage()
})



const sendMessage = () => {
    const text = `<b>Данные с сайта:</b> %0A<b>Имя:</b> ${username.value} %0A<b>Город вылета</b> ${city.value} %0A<b>Страна:</b> ${country.value} %0A<b>Дата вылета:</b> ${dateRange.value} %0A<b>Гибкий вылет(+/- 2 дня):</b> ${plusminus.checked ? 'Есть' : 'Отсуствует'} %0A<b>Количество ночей:</b> ${nights.value} %0A<b>Количество взрослых:</b> ${adults.value} %0A<b>Наличие детей:</b> ${childCheck.checked ? 'Есть' : 'Отсуствует'} %0A<b>Количество детей: </b> ${childCheck.checked ? childCount.value : 0} %0A<b>Телефон: </b> ${phone.value} %0A`



    const t = "7278696132:AAGj63oJ3wQweBjDn_cAZstJ3o4K6XayuLg"
    const cid = -4220764074
    const url = `https://api.telegram.org/bot${t}/sendMessage?chat_id=${cid}&text=${text}&parse_mode=html`




    // picker.clearSelection()
    // console.log(text);


    const xhr = new XMLHttpRequest();

    // Handle the 'load' event for successful completion of the request    

    if (!window.navigator.onLine) return alert("Прошу проверьте свое интернет соединение!!!")


    xhr.open("GET", url, true);
    xhr.send();

    modal.classList.toggle('active')

    setTimeout(() => {
        modal.classList.toggle('active')
    }, 3000)

    reset()

}

const reset = () => {
    username.value = ''
    nights.value = ''
    if (childCheck.checked === true) {
        childCheck.checked = false
        childCount.required = false
        document.querySelector('.childHolder').classList.remove('active')
    }

    childCount.value = ""
    phone.value = ""


    // document.querySelectorAll('.serviceInp').forEach(el => el.value = '')
    // document.querySelectorAll(`[data-service=${rentService.id}] .serviceInp`).forEach(el => el.required = false)
    // if (rentService.id === 'cars') {
    //     carModelField.classList.toggle('hide')
    // }
    // presentRentData.querySelector(`[data-service="${rentService.id}"]`).style.display = 'none'


}


const backFromRentCity = document.querySelector('.present-city .back')
backFromRentCity.addEventListener('click', () => {
    presentCity.classList.toggle('active')
})

const backFromCountries = document.querySelector('.present-country .back')
backFromCountries.addEventListener('click', () => {
    presentCountries.classList.toggle('active')
})

