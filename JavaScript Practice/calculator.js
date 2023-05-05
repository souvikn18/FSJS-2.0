function add () {
    let sum = 0;
    for(i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
let addition = add(10,20,30);
console.log(addition);

function sub(val1, val2){
    if(val1>val2){
        let d1 = val1-val2;
        return d1;
    }
    else{
        let d2 = val2-val1;
        return d2;
    }
}
let difference = sub(60,150);
console.log(difference);

function mult(){
    let a = 1;
    for(i=0; i<arguments.length; i++){
        a = a*arguments[i];
    }
    return a;
}
let multiplication = mult(4,5,3,2);
console.log(multiplication);

function div(dividend, divisor){
    let r1= dividend/divisor;
    return r1;
}
let division = div(100,50);
console.log(division);

function mod(val5, val6){
    let m1= val5%val6;
    return m1;
}
let modulus = mod(56,11);
console.log(modulus);