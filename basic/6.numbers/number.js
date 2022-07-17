//! numbers

// javascript has only one type of numbers can be written with or without decimal

let x = 3.12; // a number with decimals
let y = 3; //a number without decimal

// *extra large and extra small number 
let z = 3e3;
console.log(z); // 3000

let a = 2e2;
console.log(a); //200

let b = 1e2;
console.log(b); //100

let c = 4e3;
console.log(c);

// !javascript er sobgolo number 64 bit floating point

// !precision 
// **(15 porjonto digit integer number accurate hobe jabascript e)
let d = 9999999999999999; //result 10000000000000000 hoi
let e = 999999999999999; // result 999999999999999 show korbe so its right:

// ** 2ta floating poin jog korle sobsomi tik dekai na
let m = 0.3 + 0.2; //result 0.5 tik ace 
let n = 0.2 + 0.1; //result 0.30000000000000004 dekabe so its wrong way


// **ai sommas solution holo 0.1 k 10 dara gon kora abong bag kore float theke integer a porinoto koro 
let o = (0.2 * 10 + 0.1 * 10) / 10; //result will be 0.3

// agolo holo basic concept of number in javascript


// ! adding number and string
// *** javascript use the + operator both addition and concatination
// ** numbers are added .String are concatinate

// if you add two number the result will be number 
let p = 10;
let q = 20;
console.log(p + q); //30

// if you add two string the result will be string concatenation 
let r = "arifur";
let s = "rahman";
console.log(r + s); //arifurrahman


let t = "20";
let u = "10";
console.log(t+u); //2010 it will be string

// if you add a number and a string,the result will be a string concatenation

let v = 10;
let w = "20";
console.log(v + w); //1020 it will be string

// if you add a string and a number,the result will be a string concatenation
let f = "10";
let g = 20;
console.log(f+g); //1020 it will be string


// **common mistake
let h = 20;
let i = 40;
let j = "the result will be" + h + i;
console.log(j); //the result will be2040

// javascript left theke right er dike code pare .prothome deke string ace so etak se string + number =string hobn


let k = 20;
let l = 40;
let res = h + i +" the result will be" ;
console.log(res); //60 the result will be

// abar ebake se pai number+number=number hobe than sting er sate concate hobe.


let h1 = 20;
let i1 = 40;
let j1 = "the result will be" +( h1 + i1);
console.log(j1); //the result will be60

//bracket dile ei problem er solution hobe

// !Numeric String

let x1 = "100";
let y1 = "10";
let z1 = x1 / y1;
console.log(z1); //10

let a1 = 500;
let a2 = "30";
let a3 = a1 / a2;
console.log(a3); //16.666666666666668

let b1 = 1500;
let b2 = "30";
let b3 = b1 * b2;
console.log(b3); //45000

// *kinto

let c1 = "hello";
let c2 = 500;
let c3 = c1 / c2;
console.log(c3); // NaN not a number asbe

// ** javascript will try to convert strings to numbers in all numeric operations
//division ba into er ketre onno rokom r + addition/concatenation er ketre string piority pabe

// ! NaN - not a number

let e1 = 100;
let e2 = "apple";
let e3 = e1 / e2;
console.log(e3); //NaN

// **isNaN() to find out vcalue is a number 
let f1 = 10;
console.log(isNaN(f1)); //false mane eta akta number

let f2 = "20";
console.log(isNaN(f2)); //false mane eta k o  number bolche

let f3 = "hello";
console.log(isNaN(f3)); //true mane eta number na

// *NaN is a number:typeOf NaN returns number

// ! Infinity


//!Hexadecimal

/* 
decimal    base 10 
0123456789

example: 12  128  345

binary    base 2
0 1
on off 

example : 

octal base 8
01234567

hexadecimal base 16
0123456789ABCDEF
A mane 10
B mane11

*/

/* 
decimal to binary
348 

*/


 










