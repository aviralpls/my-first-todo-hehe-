const form = document.querySelector('#form');
const inputpdt = document.querySelector('#product');
const inputqty = document.querySelector('#qty');
const list = document.querySelector('#list');
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const pdt = inputpdt.value;
    const qty = inputqty.value;
    const newList = document.createElement("li");
    newList.innerText = `${qty} ${pdt}`;
    list.append(newList);
    inputpdt.value = "";
    inputqty.value = "";
})