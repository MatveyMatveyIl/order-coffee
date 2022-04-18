const modalWindow = document.getElementById('modalWindow');
const modalWindowOpenBtn = document.querySelector('#submit-button');
const modalWindowCloseBtn = document.querySelector('.close');

modalWindowOpenBtn.addEventListener('click', (event) => {
    modalWindow.style.display = 'block';
    event.preventDefault()});
modalWindowCloseBtn.addEventListener('click', () => modalWindow.style.display = 'none');

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
// cloneText = (textarea) =>{
//     text = textarea.value.replace(/(срочно)|(быстрее)|(побыстрее)|(скорее)|(поскорее)|(очень нужно)/gi,"<b>$&</b>");
//     textarea.parentNode.querySelector("span").innerHTML = text;
// }