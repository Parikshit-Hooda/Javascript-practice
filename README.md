# Javascript-practice
Javascript code snippets

### var, let, const

- var -> function scoped. variable declared with var is visible everywhere inside the function its declared in.
- let -> block scoped. variable declared with let is visible everywhere inside the block its declared in. A let variable can only be declared once, defined multiple times.
- const -> block scoped. variable declared with const is visible everywhere inside the block its declared in. A const variable can only be declared once. Value has to be assigned at the time of declaration. 

[some code snippets](https://github.com/Parikshit-Hooda/Javascript-practice/blob/main/var%20let%20const.js)


### Arrow function

Syntax for regular JS functions:
const square = function(num) {
return num * num;
}

Syntax for arrow functions:

const square = (num) => {
return num * num;
}

or 

const square = num => num * num; //note that we can remove the parentheses in the parameters in case of only 1 parameter being passed.

In case of no parameter,

const dummy = () => console.log("dummy function");

Note: Arrow functions don't rebind the 'this' keyword.


### Template literals

let var1 = 'JavaScript';
Syntax: `lorem ipsum ${var1} dolor`;

Output: lorem ipsum JavaScript dolor

----------------------
const colors = ['red', 'blue'];
Output: undefined
const items = colors.map(color => `<l1>${color}</li>`)
Output: undefined
items
Output: (2) ['<l1>red</li>', '<l1>blue</li>']


### Object destructuring
[object destructuring.js](https://github.com/Parikshit-Hooda/Javascript-practice/blob/main/object%20destructuring.js)

### Spread operator
ES6 spread operator helps us construct new arrays/objects by 'spreading' the existing arrays/objects.

**Spreading arrays**
const first = ["val1", "val2"];
const second = ["val3", "val4"];

const combinedArr = [...first, ...second];
//combinedArr = ["val1", "val2", "val3", "val4"];

**spreading objects**
const third = {key1: val1, key2: "val2"};
const fourth = {key3: val3, key4: "val4"};

const combinedObj = {...third, ...fourth}
//combinedObj = {key1: val1, key2: "val2", key3: val3, key4: "val4"}

Note: In case of duplicate keys while spreading, the key and value of the last object will be used. For example:

const third = {key1: 1, key2: "val2"};
const fourth = {key1: 2, key4: "val4"};

const combinedObj = {...third, ...fourth}
//combinedObj = {key1: val1, key2: "val2", key3: val3, key4: "val4"}
undefined
combinedObj
{key1: 2, key2: 'val2', key4: 'val4'}

### ES6 Classes


### Notes
- In JS, functions are objects.
- Using JS 'bind' method, one can bind a method to a JS object to avoid ambiguous behavior of JS 'this' keyword.
