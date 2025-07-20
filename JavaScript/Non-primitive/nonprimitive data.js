const { useDeferredValue } = require("react");

let username={
    firstname: "Easin",
    isLoggedin:true,



};


// username.firstname="Mr, H";
// username.lastname="khan"
// console.log(username.firstname);
// console.log(username.lastname);
// console.log( username);
// console.log(typeof username);


let today= new  Date();
// console.log(today.getDate());


///Array

// let heros= ["a","b","c",true]
let anotherUser=["Easin","Khandokar",true];

// console.log(anotherUser[2])


///implecit conversion
// let isValue= 3;
// let isValue= true;
let isValue= "3abc";
console.log(isValue+1);
console.log( typeof Number(isValue));
console.log("1"+1);
// console.log(Number(null));
