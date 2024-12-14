## Loops Practice
**Note: Do not use map, filter, or reduce, or forEach in your solutions for these prompts.

1. Create a function called `getNameAndCourse` that takes in one parameter - `array` - which represents an array of student objects like you see at the top of file. This function should iterate through the input array using a for loop to create a new array of strings that includes the student's name followed by a dash and the value at their cours property.
```javascript
const result = getNameAndCourse(students);
console.log(result);
/*
LOGS => 
[
    "Stephanie Cooper - Bootcamp",
    "Bethany Joseph - Bootcamp",
    "Nathan Coen - Precourse",
    "Kyle Bradley - Precourse",
    "Stanley Rayford - Junior",
    "Vickie Lean - Senior"
]
*/
```