//Number

let balance =120;
let anotherBalance = new Number(120)



// 
// console.log(anotherBalance);

// console.log(anotherBalance.valueOf())


console.log(typeof(balance))

console.log(typeof(anotherBalance))


///boolean

let isActive= true;
let isReallyActive =new Boolean(true);


//null and undefined

 let firstname =null;
 let lastname=undefined;
console.log(firstname);
console.log(lastname);



///string
let myString ="hello"
let myStringOne="hola"
let username="Easin"




let oldGreet= myString + " " + "Easin";
console.log(oldGreet)
let greetMessage=`Hello ${username} !`;
let demoOne=`value is ${2*2}`;
console.log(demoOne)
console.log(greetMessage)

let sm1= Symbol("easin")
let sm2=Symbol("easin")
console.log(sm1==sm2)