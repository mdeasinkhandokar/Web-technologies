function* numberGenerator(){
    yield 1;
    yield 3;
    yield 3;

}

let gen = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


// console.log((numberGenerator()).next().value);