let var1 = 'JavaScript';

lorem ipsum ${var1} dolor;


Output: lorem ipsum JavaScript dolor


const colors = ['red', 'blue'];
Output: undefined

const items = colors.map(color => `<l1>${color}</li>`)
Output: undefined

items
Output: (2) ['<l1>red</li>', '<l1>blue</li>']


//multi-line string using template literals
const example = `line1
line2
line3`;
