// console.log(this);

const object = {
    rocket: '🚀',
    home:'🏡'
}
for (x in object){
    // console.log(x);
}

//object can also contain object

const obj1 = {
    rocket: '🚀',
    fuel: 20,
    configuration:{
        name: 'snr1',
        date: '20/10/2023'
    }
}
// console.log(obj1);
obj1.fuel=20000;
obj1['year']=2023;
// console.log(obj1);

//part2: another way of declaretion object

const obj2 = new Object()  //constructor base syntax
obj2.redbook = '📕'
obj2.bluebook = '📘'
obj2.myValue = '1 blue book'

// console.log(obj2);

//part3: another way

const power = {
    fly:true,
    cordinate: Math.random()+2
}

const obj3 = Object.create(power)
// console.log(obj3);
// console.log(obj3.cordinate);
// console.log(power);
// console.log(Object.getPrototypeOf(obj3));

//part4: another way

const obj4 = Object.create({})
Object.defineProperty(obj4,'book',{
    // icon:'🎵' //if we want some properties to be returned the we cant use icons like that
    get:()=>'🎵',
    get:()=>'1234',  //we can also console.log the last get 
    //set need to be explored by me
    enumerable:true
})
// console.log(obj4);
// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4));

//important for backend
for (k in obj4){
    // console.log('value of k is',k);
}

//part5: another way

const obj5 = {
    comics: 'marvel',
    pen:'',
    printcomic:function(){
        this.pen += '🖋️'
        console.log(this);
        return this;        //used for object chaining, this 'this' keyword will access the parent obj5 and all its keys and functions
    },
    // printacomic :()=>{       //'this' will not work in arrow function, it doesn't have the context, it was never designed like that
    //     // this.pen += '🖋️'
    //     console.log(this);
    // }
}
// console.log(obj5.printcomic());
// console.log(obj5.printacomic());

//object chaining
console.log(obj5.printcomic().printcomic().printcomic().printcomic());

// console.log(Object.prototype);

// const obj = {
//     foo: 1,
//     // You should not define such a method on your own object,
//     // but you may not be able to prevent it from happening if
//     // you are receiving the object from external input
//     propertyIsEnumerable() {
//       return false;
//     },
//   };
  
//   console.log(obj.propertyIsEnumerable("foo"));  // false; unexpected result
//  console.log(Object.prototype.propertyIsEnumerable.call(obj, "foo"));  // true; expected result

const obj6 = { 
    a: 1,
    b:2
};
// let x= toString(obj6);
// for(x in obj6){
//     console.log(x);
// }
// console.log(obj6.valueOf());

const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

// console.log(hasPerson("hasOwnProperty"));  // true
// console.log(getAge("toString"));  // [Function: toString]
let a = hasPerson('hasOwnProperty');
// console.log(a);
let b = getAge('toString');
// console.log(b);

//Object.assign()       // copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const onemore = {b:6, c:10, d:20}

const returnedTarget = Object.assign(target, source,onemore);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true

//Object.create     //creates a new object, using an existing object as the prototype of the newly created object

const person = {
    isHuman: false,
    printIntroduction: function(){
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
}
// const me = {
//     name: 'souvik',
//     isHuman: true
// }
const me = Object.create(person);

me.name = 'Souvik'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

// me.printIntroduction();
// console.log(person);
// console.log(me);

//Object.properties()

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {},
  property3:{
   value:50,
   writable:true
  },
});

// console.log(object1.property3);
const obj7 = {};
Object.defineProperties(obj7, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
  // etc. etc.
});
// console.log(obj7.property1);