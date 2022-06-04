"use strict"

const inputTest = document.querySelector(".test__input");
const buttonTest = document.querySelector(".test__button");
const resultTest = document.querySelector(".test__result");

// const person = {
//     name: 'Никита',
//     age: 22,
//     city: 'Минск',
//     greet: function () {
//         console.log(`Привет, меня зовут ${this.name}! Мне ${this.age}. Я родом из города ${this.city}`)
//     }
// }

const person = new Object({
    name: 'Никита',
    age: 22,
    city: 'Минск',
    greet: function () {
        console.log(`Привет, меня зовут ${this.name}! Мне ${this.age}. Я родом из города ${this.city}`)
    }
});

Object.prototype.sayHello = function () {
    console.log('Hello.')
}


const lena = Object.create(person);
lena.name = 'Елена';

const str = new String('YoYoYO');




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

/*------
const object = {
    name: 'Nikita',
    age: 22
}
//localStorage.setItem('person', JSON.stringify(object));
const raw = localStorage.getItem('person');
const person = JSON.parse(raw)
person.name = 'Oleg'

// console.log(raw);
// console.log(person)

window.addEventListener('storage', event => {
    console.log(event)
});

window.onstorage = () => { };
-------*/