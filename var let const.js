const a; //doesn't work. const has to be declared at definition
Uncaught SyntaxError: Missing initializer in const declaration


const a = 1; //works
undefined

a //const a value = 1. works
1

a = {
     key1 : "val1",
    key2 : 4,
    key3: ()=>{console.log("key3 fn");
              }
} //redifining a with an object. doesn't work, can't redefine const.
Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3
(anonymous) @ VM320:1


const b = {
     key1 : "val1",
    key2 : 4,
    key3: ()=>{console.log("key3 fn");
              }
} //works
undefined

b //const b is an object
{key1: 'val1', key2: 4, key3: ƒ}

b.key3 //works
()=>{console.log("key3 fn");
              }

b.key3() //works
key3 fn
undefined

b.key1 = "val1_edited" //works. changed one property of const b object
'val1_edited'
b
{key1: 'val1_edited', key2: 4, key3: ƒ}
