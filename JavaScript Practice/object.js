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