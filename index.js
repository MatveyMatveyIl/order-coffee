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
    CreateTable();
    modalWindow.style.display = 'block';
    event.preventDefault()
});
modalWindowCloseBtn.addEventListener('click', () => modalWindow.style.display = 'none');

function getModalBodyText() {
    const forms = ["напиток",
        "напитка",
        "напитков",]
    const num = Math.abs(countCoffe) % 100;
    const updNum = num % 10;

    if (num > 10 && num < 20)
        return forms[2];

    if (updNum > 1 && updNum < 5)
        return forms[1];

    if (updNum === 1)
        return forms[0];

    return forms[2];
}

function CreateTable() {
    let row = document.createElement("TR");
    document.getElementById('table').appendChild(row);
    let th1 = document.createElement("TH");
    let th2 = document.createElement("TH");
    let th3 = document.createElement("TH");
    row.appendChild(th1);
    th1.innerHTML = "Напиток";
    row.appendChild(th2);
    th2.innerHTML = "Молоко";
    row.appendChild(th3);
    th3.innerHTML = "Дополнительно";
    FillTable();
}

function FillTable()
{
    const forms = document.querySelectorAll("form");
    for (let form of forms)
    {
        const table = document.getElementById('table');
        const row = document.createElement("TR");
        table.appendChild(row);
        let td1 = document.createElement("TD");
        const td2 = document.createElement("TD");
        const td3 = document.createElement("TD");

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);

        let drink = '';
        if (form.drink.value === "espresso")
            drink='Эспрессо';
        if (form.drink.value ==="capuccino")
            drink='Капучино';
        if (form.drink.value ==="cacao")
            drink='Какао';

        td1.innerHTML = drink;

        let milk ='';

        if (form.milk.value ==="usual")
            milk='обычное';
        if (form.milk.value ==="no-fat")
            milk='обезжиренное';
        if (form.milk.value ==="soy")
            milk='соевое молоко';
        if (form.milk.value ==="coconut")
            milk='кокосовое молоко';

        td2.innerHTML = milk;

        let extra ='';
        if (form.querySelector('input[value="whipped cream"]').checked === true)
            extra+=" взбитые сливки";

        if (form.querySelector('input[value="marshmallow"]').checked === true)
            extra+=" зефирки";

        if (form.querySelector('input[value="chocolate"]').checked === true)
            extra+=" шоколад";

        if (form.querySelector('input[value="cinnamon"]').checked === true)
            extra+=" корица";

        td3.innerHTML = extra;
    }
}