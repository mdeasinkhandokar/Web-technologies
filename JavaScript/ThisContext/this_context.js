const person={
    name:"Easin",

    greet(){
        console.log(`hi , i am  ${this.name}`);
    },



};
person.greet();


const greetFunction=person.greet;
greetFunction();

const boundGreet =person.greet.bind({name:"Sanim"});
boundGreet();

const boundGreet1= person.greet.bind({name: "Shafin"});
boundGreet1();