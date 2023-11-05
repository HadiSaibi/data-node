const _ = require('lodash');
let a = [1,[1,2],[3,4,[5,6,[7,8,9,10]]]]
console.log(_.flattenDeep(a))

let firstname = 'hadi';
let lastname = 'saaibi';
let arr = ['one', 'two', 'three'];

module.exports = arr;

console.log(module.exports)
console.log('i am from app2')
function f1 () {
    console.log('I am f1');
}

const f2 = () => {
    console.log('I am f2');
}


// module.exports = {firstname, lastname, f1, f2};
// console.log(module.exports)
