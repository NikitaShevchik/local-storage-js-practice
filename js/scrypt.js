"use strict"

const inputTest = document.querySelector(".test__input");
const buttonTest = document.querySelector(".test__button");
const resultTest = document.querySelector(".test__result");

/*--------
buttonTest.addEventListener('click', function () {
    window.location.href = '/about.html';
    console.log(localStorage.getItem(res));
    setTimeout(() => {
        resultTest.innerHTML = 'E'
    }, 1000);
});

setTimeout(() => {
    console.log(inputTest.value);
    let res = inputTest.value;
    localStorage.setItem('One', 1);
    localStorage.setItem('two', 2);
    localStorage.setItem('three', 3);
    localStorage.setItem(res, 4);
    console.log(localStorage.getItem(res));

}, 1000);
---------*/


// const myName = 'Nikita';
// localStorage.removeItem('nikita');
// localStorage.setItem('name', myName);
// console.log(localStorage.getItem('name'));

const object = {
    name: 'Nikita',
    age: 22
}
//localStorage.setItem('person', JSON.stringify(object));
const raw = localStorage.getItem('person');
//raw.name = 'Oleg'

console.log(JSON.parse(raw))