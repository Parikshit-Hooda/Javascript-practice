const a;
Uncaught SyntaxError: Missing initializer in const declaration


const a = 1;
undefined

a
1

a = {
     key1 : "val1",
    key2 : 4,
    key3: ()=>{console.log("key3 fn");
              }
}
Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3
(anonymous) @ VM320:1


const b = {
     key1 : "val1",
    key2 : 4,
    key3: ()=>{console.log("key3 fn");
              }
}
undefined

b
{key1: 'val1', key2: 4, key3: ƒ}

b.key3
()=>{console.log("key3 fn");
              }
b.key3()
key3 fn
undefined


a.key1 = "val1_edited"
'val1_edited'
