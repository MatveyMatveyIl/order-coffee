let countCoffe = 1;
let newForm
const button = document.querySelector(".add-button")
button.addEventListener("click", function () {


    let forms = document.querySelector(".beverage");
    newForm = forms.cloneNode(true);
    const count = newForm.querySelector('.beverage-count')
    countCoffe += 1
    count.textContent = `Напиток №${countCoffe}`
    forms.before(newForm)
});

function remove(target) {
    if (countCoffe > 1)
        target.parentElement.remove();
    countCoffe -= 1
}

cloneText = (textarea) =>{
    document.getElementsByClassName("comment")[0].textContent =
        textarea.value.replace(/(срочно)|(быстрее)|(побыстрее)|(скорее)|(поскорее)|(очень нужно)/gi, "<b>$&</b>");
}

const modalWindow = document.getElementById('modalWindow');
const modalWindowOpenBtn = document.querySelector('#submit-button');
const modalWindowCloseBtn = document.querySelector('.close');

modalWindowOpenBtn.addEventListener('click', (event) => {
    document.querySelector('.modal-body').textContent = `Вы заказали ${countCoffe} ${getModalBodyText()}`;
    modalWindow.style.display = 'block';
    event.preventDefault()
});
modalWindowCloseBtn.addEventListener('click', () => modalWindow.style.display = 'none');

function getModalBodyText() {
    const forms = ["напиток",
        "напитка",
        "напитков",]
    const n = Math.abs(countCoffe) % 100;
    const n1 = n % 10;

    if (n > 10 && n < 20)
        return forms[2];

    if (n1 > 1 && n1 < 5)
        return forms[1];

    if (n1 === 1)
        return forms[0];

    return forms[2];
}