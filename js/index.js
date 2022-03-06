console.log('start frontend200tb three divs');


/*****************
Константы
*****************/
const div5 = document.querySelector('.div5');
const div6 = document.querySelector('.div6');


/*****************
Переменные
*****************/
let width5 = div5.offsetWidth;
console.log('width5', width5);
let height5 = div5.offsetHeight;
console.log('height5', height5);
let width6 = div6.offsetWidth;
console.log('width6', width6);
let height6 = div6.offsetHeight;
console.log('height6', height6);
let leftPos = (width5 - width6) / 2;
console.log('leftPos', leftPos);
let topPos = (height5 - height6) / 2;
console.log('topPos', topPos);


/*****************
Функции
*****************/

div5.style.position = 'relative';
div6.style.position = 'relative';
div6.style.top = `${topPos}px`;
div6.style.left = `${leftPos}px`;




/*****************
События
*****************/


console.log('end frontend200tb three divs');
