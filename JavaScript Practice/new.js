// let fname = 'souvik';
// console.log(fname);

// {
//     fname:souvik
//     lname:nath
// }

// let fname='Souvik';
// let lname='Nath';
// const mobile=1234567890;

// console.log('My first name is', fname);
// console.log('My last name is', lname);
// console.log(mobile);

// console.log(`My name is ${fname} ${lname} and my mobile number is ${mobile}`)

// let x=100;
// let y=100;
// if(x>y){
//     console.log('I win');
// }else if(x==y){
//     console.log('draw!!');
// }else{
//     console.log('you win');
// }

//switch

// let x=10;
// switch (x) {
//     case 10:
//         console.log("Print x:",x);
//         break;
//     case 11:
//         console.log("print x:",x);
//         break;
//     default:
//         console.log("dont print");
//         break;
// }

//ternary

// let y=21;
// y>20 ? console.log(y) : console.log("no value");

// let admin = false;
// admin ? console.log('give access') : console.log('KICK OUT');

//Array

// let name = ['alok', 'sourav', 'nayan','barnali','suman','master'];
// console.log(name);
// console.log(name[3]);

// object

// let Oname = {
//     owner: 'alok',
//     boy1: 'sourav',
//     boy2: 'nayan',
//     girl1: 'barnali',
//     sir1: 'suman',
//     sir2: 'master',
// }

// console.log(Oname.sir2);

//math

// let arr1 = [10,2,5,7,9,3,4,11,20,1];
// // console.log(arr1[5]);
// console.log(Math.min(arr1));
// console.log(Math.min(10,2,5,11,23));
// console.log(Math.max(10,2,5,11,23));

//do-while

// let i=10;
// do {
//     console.log('value of i=',i);
//     i++;
// } while (i<10);

// while

// let i=9;
// while (i<10) {
//     console.log('value of i=',i);
//     i++;
// }

//for loop

// for (let i = 1; i <= 10; i++) {
//     console.log('value of i=',i);
// }

// for (let i = 0; i <=20; i++) {
//     console.log(`${i}*${i}=${i*i}`);
// }

//methods of array

// let arr1=[0,1,2,3,4,5,6,7,8,'ss'];
// console.log(arr1.length)
// console.log(arr1[arr1.length - 4]);
// arr1[10]='souvik';
// console.log(arr1);
// arr1[0]='sumona';
// console.log(arr1);
// arr1.push('krishna');
// console.log(arr1);
// console.log(arr1[arr1.length-1]);

//slice
// let names = ['sumona','neha','swapna','tryhani','aishi','shreya','susmita'];
// console.log(names);
// console.log(names.slice(0,1));  //like cutting a cake slice: j index no e kata suru korchi seta theke jetay kata ses korchi tar age porjonto value output debe

//splice
// names.splice(1,7,'souvik');  //splice e first number ta holo j index e value ta dhokate chaichi r second number ta holo jotokota value bad dite chaichi
// console.log(names);

//concatenation

// let surnames = ['mondal','maitra','kayal','mondal','roy','shinde','roy'];
// // let x = names.concat(surnames);
// console.log(names.concat(surnames));

//fill

// console.log(names.fill('souvik',1,7));
// console.log(names.fill('souvik',2,5));  //fill will take the portion like slice and fill with the content provided

//include

// let names = ['sumona','neha','swapna','tryhani','aishi','shreya','susmita'];
// console.log(names.includes('sumona'));          //it will check the whole arrat if the passing element is in the array or not
// console.log(names.includes('susmita',7));       //it will start checking from the passing index number

//index of  :give the index number of the array element

// console.log(names.indexOf('sumona'));

//isArray :means is there any array named as the passing array name?

// let surname = 'mondal'
// console.log(Array.isArray(names));
// console.log(Array.isArray(surname));

//join

// let x = names.join(' souvik ');         //it joins every element of array with the provided element and makes it a string
// console.log(x);
// console.log(typeof x);

//last index of             //gives us the last index number of the provided element

// let names = ['sumona','neha','swapna','tryhani','aishi','shreya','susmita','sumona'];
// console.log(names.lastIndexOf('sumona'));
// console.log(names.indexOf('sumona'));

//map

// let m1 = [1,4,9,16,25,36,49,64,81,100];
// console.log(m1.map(x=>x*2));                //map passes any function and applies it in the given array
// console.log(m1.map(Math.sqrt));

//pop

let m1 = [1,4,9,16,25,36,49,64,81,100];
// m1.pop();
// console.log(m1);
// m1.push(100);
// console.log(m1);

//reverse

// console.log(m1.reverse());

//shift         //it removes the first element and return it and after that it changes the array length

// console.log(m1.shift());
// console.log(m1)

//unshift       //it adds all the passing elements from index 0 and increase the array length

// m1.unshift(101,102);
// console.log(m1);

//converting to array

// let a1 = 'souvik nath';
// let a2 = a1.split("");      //split function converts any string to a singular charecter array
// console.log(a1);
// console.log(a2);

let names = ['sumona','neha','swapna','tryhani','aishi','shreya','susmita','sumona'];
let Uppercasenames = [];

//for of

// for (let x of names){
//     Uppercasenames.push(x.toUpperCase());
// }
// console.log(Uppercasenames);

// for(let y of names){
//     Uppercasenames.push(y.length);
// }
// console.log(Uppercasenames);