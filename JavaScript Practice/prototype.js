let myHeros = ['Iron man','Thor','Captain America'];

let heropower = {
    Ironman: 'Rich',
    Thor: 'Thunder',
    Captain: 'Strength',
    getPower: function(){
        console.log(`Iron man's power is ${this.Ironman}`);
    }
}

Object.prototype.souvik = function(){
    console.log(`Souvik is an object prototype name that is declared by user and it can be maned anything and it is present in all objects`);
}

Object.prototype.suvo = function(){
    console.log(`Suvo has the power of thor: ${this.Thor}`);
}

Array.prototype.suvo = function(){
    console.log(`Suvo has the power of thor: ${this.Thor}`);        //almost everything in JS is an object. the starting datatype can be anything according to the program
}

myHeros.souvik();
heropower.suvo();

//inheritance

const obj1 = {
    firstName: 'Souvik',
    lastName: 'Nath',
}

const obj2 = {
    email: 'souvikn20@gmail.com',
    phone: 1234567890
}

const obj3 = {
    address: 'address line 1, address line2, address line 3, PIN',
    availability: true
}

const obj4 = {
    acc_no: 'XXXX XXXX XXXX 2345',
    isActive: true
}

//old school syntax
// obj1.__proto__ = obj2;       //either this
obj2.__proto__ = obj1;          //or this

//new gen syntax
Object.setPrototypeOf(obj3,obj4);

//now we will create a custom prototype to trim the spaces between a string

let myName = 'Souvik Nath   ';      
console.log(myName.length);

String.prototype.trueLength = function(){
    console.log(`True length of the string is ${this.trim().length}`);
}

myName.trueLength();