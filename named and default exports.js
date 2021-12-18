import React, { Component } from 'react';
//here, React is a default export. We can use a different name to capture the import of React.
//here, Component is a named export. We can't use any other name than Component due to the nature of the export from the source file.


//example.js
  export function fn1() {
  console.log("named export console log"); //import as 
  //import fn1 from './example.js'
  }
  
  export default function fn2() {
  console.log("default export console log"); //import as
  //import defaultExportFn from './example.js'
  }
