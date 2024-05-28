const presentCity = document.querySelector('.present-city')
// const presentRentData = document.querySelector('.present-rentData')
// const tbarTitleRentData = document.querySelector('.present-rentData .tbar-title')
// const presentOtherServices = document.querySelector('.present-otherServices')
const childInp = document.querySelector('#child')


const cityInp = document.querySelector('#city')
console.log(cityInp);


cityInp.addEventListener('click', () => {
    presentCity.classList.toggle('active')
})

const rentCities = document.querySelectorAll('.cityRent .item')

rentCities.forEach(el => {

    el.addEventListener('click', () => {
        cityInp.value = el.innerText
        backFromRentCity.click()
    }
    )
})


const childCheck = document.querySelector('#child')
childCheck.addEventListener('click', () => {
    document.querySelector('.childHolder').classList.toggle('active')
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

const username = document.querySelector('#name')
const phoneFor = document.querySelector('#phoneFor')



const phone = document.querySelector('#phone')
const dateRange = document.querySelector('#dateRange')
dateRange.value = formattedDate
const gruzTextarea = document.querySelector('#gruzTextarea')
const equipmentsTextarea = document.querySelector('#equipmentsTextarea')
const modal = document.querySelector('#open-modal')



const sendMessage = () => {

    // const t = "6569603838:AAF_gfsCWK5fughj7bevQswTyn4ruxq1t8g"
    // const cid = -1002112977648
    // const url = `https://api.telegram.org/bot${t}/sendMessage?chat_id=${cid}&text=${text}&parse_mode=html`

    let t
    let cid
    let text

    if (rentService.id === 'cars') {
        t = "6435795574:AAHDuWdPQpcNI3yPekGjbV1GRPU7SRFw4Q4"
        cid = -4135021717

        if (serviceStatus === 'rentFor') {
            text = `<b>Данные с сайта:</b> %0A<b>Статус:</b> Cдать под Аренду %0A<b>Вид услуги:</b> ${rentService.name} %0A<b>Город:</b> ${rentCity}%0A<b>Имя:</b> ${username.value} %0A<b>Телефон:</b> ${phoneFor.value}`
        } else {
            text = `<b>Данные с сайта:</b> %0A<b>Статус:</b> Арендовать %0A<b>Вид услуги:</b> ${rentService.name}%0A<b>Марка машины:</b> ${inputCarName.value}%0A<b>Модель машины:</b> ${inputCarModel.value}%0A<b>Период Аренды:</b> ${dateRange.value} %0A<b>Город:</b> ${rentCity}%0A<b>Телефон:</b> ${phone.value}`
        }
    }


    picker.clearSelection()


    console.log(text);


    const url = `https://api.telegram.org/bot${t}/sendMessage?chat_id=${cid}&text=${text}&parse_mode=html`

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

    document.querySelectorAll('[data-present]').forEach(el => el.classList.remove('active'))
}

const reset = () => {
    document.querySelectorAll('.serviceInp').forEach(el => el.value = '')
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


const backFromOtherServices = document.querySelector('.present-otherServices .back')
backFromOtherServices.addEventListener('click', () => {
    presentOtherServices.classList.toggle('active')
})

