const screen = document.querySelector('.screen');
const botonOne = document.querySelector('.button.A');
const botonTwo = document.querySelector('.button.B');
const botonThree = document.querySelector('.button.C');
const botonPlus = document.querySelector('.button.D');
const botonFour = document.querySelector('.button.E');
const botonFive = document.querySelector('.button.F');
const botonSix = document.querySelector('.button.G');
const botonMinus = document.querySelector('.button.H');
const botonSeven = document.querySelector('.button.I');
const botonEight = document.querySelector('.button.J');
const botonNine = document.querySelector('.button.K');
const botonTimes = document.querySelector('.button.L');
const botonZero = document.querySelector('.button.M');
const botonDivision = document.querySelector('.button.N');
const botonClear = document.querySelector('.button.O');
const botonEqual = document.querySelector('.button.P');
let string = 'hola';
let uno = '1';
let dos = '2';
let tres = '3';
let cuatro = '4';
let cinco = '5';
let seis = '6';
let siete = '7';
let ocho = '8';
let nueve = '9';
let cero = '0';
let clear = '';
let pantalla = '';
let a = 0;
let b = 0;
let operation = '';
let result = 0;

function buttona(){
    pantalla = pantalla.concat('',uno)
    console.log(pantalla);
    screen.textContent = `${pantalla}`;
}
function buttonb(){
    pantalla = pantalla.concat('',dos)
    console.log(pantalla)
    screen.textContent = `${pantalla}`
}
function buttonc(){
    pantalla = pantalla.concat('',tres)
    console.log(pantalla)
    screen.textContent = `${pantalla}`
}
function buttond(){
    pantalla = pantalla.concat('',cuatro)
    console.log(pantalla)
    screen.textContent = `${pantalla}`
}
function buttone(){
    pantalla = pantalla.concat('',cinco)
    console.log(pantalla)
    screen.textContent = `${pantalla}`
}
function buttonf(){
    pantalla = pantalla.concat('',seis)
    console.log(pantalla)
    screen.textContent = `${pantalla}`
}
function buttong(){
    pantalla = pantalla.concat('',siete)
    console.log(pantalla)
    screen.textContent = `${pantalla}`
}
function buttonh(){
    pantalla = pantalla.concat('',ocho)
    console.log(pantalla)
    screen.textContent = `${pantalla}`
}
function buttoni(){
    pantalla = pantalla.concat('',nueve)
    console.log(pantalla)
    screen.textContent = `${pantalla}`
}
function buttonj(){
    pantalla = pantalla.concat('',cero)
    console.log(pantalla)
    screen.textContent = `${pantalla}`
}
function Clear(){
    pantalla = '';
    console.log(pantalla)
    screen.textContent = `${pantalla}`
}

function Plus(){
    a = parseInt(pantalla);
    operation = 'suma';
    pantalla = '';
    screen.textContent = ''
}

function Minus(){
    a = parseInt(pantalla);
    operation = 'resta';
    pantalla = '';
    screen.textContent = ''
}

function Times(){
    a = parseInt(pantalla);
    operation = 'multiplicacion';
    pantalla = '';
    screen.textContent = ''
}

function Division(){
    a = parseInt(pantalla);
    operation = 'division';
    pantalla = '';
    screen.textContent = ''
}

function equal(){
    b = parseInt(pantalla)

    if(operation=='suma'){
        pantalla = a + b;
        screen.textContent = `${pantalla}`
    }else if(operation=='resta'){
        pantalla = a - b;
        screen.textContent = `${pantalla}`
    }else if(operation=='multiplicacion'){
        pantalla = a * b;
        screen.textContent = `${pantalla}`
    }else if(operation=='division'){
        pantalla = a / b;
        screen.textContent = `${pantalla}`
    }
}

botonOne.addEventListener('click', buttona)
botonTwo.addEventListener('click', buttonb)
botonThree.addEventListener('click', buttonc)
botonFour.addEventListener('click', buttond)
botonFive.addEventListener('click', buttone)
botonSix.addEventListener('click', buttonf)
botonSeven.addEventListener('click', buttong)
botonEight.addEventListener('click', buttonh)
botonNine.addEventListener('click', buttoni)
botonZero.addEventListener('click', buttonj)
botonClear.addEventListener('click', Clear)

botonPlus.addEventListener('click', Plus)

botonEqual.addEventListener('click', equal)

botonMinus.addEventListener('click', Minus)

botonTimes.addEventListener('click', Times)

botonDivision.addEventListener('click', Division)