const user = {
  id: 339,
  name: 'Fred',
  age: 42
};
Output: undefined


const {name} = user
Output: undefined


name
Output: 'Fred'


const {name: firstName} = user
Output: undefined

firstName
Output: 'Fred'


const user1 = {
  id: 339,
  name: 'FrOutput: ed',
  age: 42,
  education: {
    degree: 'Masters'
  }
}
Output: undefined


const {education:{degree}} = user1
Output: undefined


degree
Output: 'Masters'


const { education } = user
Output: undefined


const { education: {degree} } = user
Output: VM31253:1 Uncaught TypeError: Cannot read properties of undefined (reading 'degree')
    at <anonymous>:1:21
(anonymous) @ VM31253:1


const { education: {degree} = "no degree" } = user
Output: undefined


degree
Output: undefined


const { education: {school: {degree} = "no degree"} = "no school available" } = user
Output: undefined

