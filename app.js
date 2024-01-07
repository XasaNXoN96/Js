// alert('Salom Java Script') //Хабар бериш
//dataTypes

//string malumot turi
// let ism = `Botir`; // "" '' ``
// console.log(ism);

//number malumot turi
// let number = 15
// number = 20
// console.log(number);
// console.log(number * 2);

// let son = 5
// console.log(son / 0);

// let abc = -6
// console.log(abc / 0 );

//boolean
// const name = true;
// const user = false;
// console.log(name);
// console.log(user);

//null
// console.log(userName);

//undefined
// let soz
// console.log(soz);

//NaN
// let userClient = 'Botir'
// console.log(userClient / 8);


//object
// const odam = {
//     ism: 'Ali',
//     age : 15,
//     job : 'Taksist',
//     kiyim : 'spartivka'
// }
// console.log(odam);
// console.log(typeof odam);

// //array
// // array malumotlari 0 dan boshlanadi
// let color = ['red', 'yellow', 'blue' , 'green']
// console.log(color[5]);


//alertning turlari
//alert('salom Js')

//interpolatsiya
//const joy = confirm('Sen shu yerdamisan') // savol berish uchun xa yoki yoq

// const joy = prompt('sen shu yerdamisan' , "")

// const channel = prompt('sizga qaysi video bloger yoqadi ?')
// console.log(`https://youtube.com/${channel}`);


// const age = prompt('yoshingiz nechida' , "18 dami ?")

// console.log(age + 10);
// console.log(typeof age);

// const yosh =+prompt('yoshingiz nechida ?', '15')
// console.log(yosh  + 10);
// console.log(typeof yosh);

//operatorlar
let name = 'ali '
let surname = 'Aliev'
console.log(name + surname);

console.log('Xasan' + 'xon');

console.log(6 + +'Ali'); //bu yerda raqam yoq
console.log(6 + +'9');// bu ikkalasi yigindisi qoshiladi

let incr = 10;
let decr = 10;

//incr ++; //increment sonni +1 ga oshiradi
//decr --; //dicrement sonni -1 ga kamaytiradi
// console.log(++incr);
// console.log(++decr);
// console.log(incr++);
// console.log(decr--);
// console.log(incr++);
// console.log(decr--);
// console.log(incr);
// console.log(decr);

console.log(5 % 2);//qoldiqni aniqlash
console.log(5 * 5 == 25); //solishtirish 2 ta turaga bolinadi == bolsa faqat qiymatiga 
//=== teng bolsa qiymatiga malumot turi bilan solishtradi

// && = va degan belgi hamma narsa true bolishi kerak bittasi false bolsa xammasi falsni beradi
// || yoki degan belgi bunda 1 ta true bolsa xammasi true boladi
// agar qiymatdan oldin ! qoyilsa fasle teskarini qaytaradi true bolsa False qayatadi 

const isAge = true
const isClose = true
const isChecked = false
const alertM = false

console.log(isAge && isClose && isChecked);
console.log(isAge || isClose);
console.log(!alertM);