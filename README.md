# Javascript-practice
Javascript code snippets

### var, let, const

- var -> function scoped. variable declared with var is visible everywhere inside the function its declared in.
- let -> block scoped. variable declared with let is visible everywhere inside the block its declared in. A let variable can only be declared once, defined multiple times.
- const -> block scoped. variable declared with const is visible everywhere inside the block its declared in. A const variable can only be declared once. Value has to be assigned at the time of declaration. 

[some code snippets](https://github.com/Parikshit-Hooda/Javascript-practice/blob/main/var%20let%20const.js)

---

### Arrow function

Syntax for regular JS functions:
`
const square = function(num) {
return num * num;
}
`

Syntax for arrow functions:

`
const square = (num) => {
return num * num;
}
`

or 

`
const square = num => num * num; //note that we can remove the parentheses in the parameters in case of only 1 parameter being passed.
`

In case of no parameter,

`
const dummy = () => console.log("dummy function");
`

Note: Arrow functions don't rebind the 'this' keyword.

---

### Template literals

[template literals.js](https://github.com/Parikshit-Hooda/Javascript-practice/blob/main/template%20literals.js)

Note: Template literals allow us to have multi-line strings. For example, see [this](https://github.com/Parikshit-Hooda/Javascript-practice/blob/f64e17299240e81821397f8fed2f07c7cf4c7e32/template%20literals.js#L19).


### Object destructuring

[object destructuring.js](https://github.com/Parikshit-Hooda/Javascript-practice/blob/main/object%20destructuring.js)

### Spread operator

ES6 spread operator helps us construct new arrays/objects by 'spreading' the existing arrays/objects.

**Spreading arrays, spreading objects**

[spread operator example.js](https://github.com/Parikshit-Hooda/Javascript-practice/blob/main/spread%20operator%20example.js)

### ES6 Classes


### Modules


### Named and Default exports

[named and default exports.js](https://github.com/Parikshit-Hooda/Javascript-practice/blob/main/named%20and%20default%20exports.js)


## padStart() and padEnd()

The padStart function is used for padding the start of a string.
The padEnd function is used for padding the end of a string.

[padStart and padEnd.js](https://github.com/Parikshit-Hooda/Javascript-practice/blob/main/padStart%20and%20padEnd.js)


### Notes
- In JS, functions are objects.
- Using JS 'bind' method, one can bind a method to a JS object to avoid ambiguous behavior of JS 'this' keyword.


### Resources

[Mosh ES6 Tutorial](https://www.youtube.com/watch?v=NCwa_xi0Uuc)
