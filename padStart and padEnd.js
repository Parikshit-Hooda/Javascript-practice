 //To note: If the passed string is already bigger than or equal to the lengthOfFinalString, there would be no padding happening. 
//padStart()
//syntax:
// stringName.padStart(lengthOfFinalString, stringForPadAtStart);

const example = "Parikshit";
example.padStart(20, '!');
//OUtput: '!!!!!!!!!!!Parikshit'


const example = "Parikshit";
example.padStart(20, '!#$');
//Output: '!#$!#$!#$!#Parikshit'

  
//padEnd()
//syntax:
// stringName.padEnd(lengthOfFinalString, stringForPadAtEnd);

const example = "Parikshit";
example.padEnd(20, '!');
//OUtput: 'Parikshit!!!!!!!!!!!'


const example = "Parikshit";
example.padEnd(20, '!#$');
//Output: 'Parikshit!#$!#$!#$!#'
