## Loops Practice
**Note: Do not use map, filter, or reduce, or forEach in your solutions for these prompts.

1. Create a function called `logLocationAndTime` that takes in one parameter - `array` - which represents an array of student objects like the one featured in data.js. This function should use a for loop to iterate backwards through the input array, and each iteration it should log the current student's location followed by a dash and their timezone.
```javascript
logLocationAndTime(students);
```

2. Create a function called `logHalf` that takes in one parameter - `array` - which represents an array of student objects like the one featured in data.js. This function should use a for loop to only iterate through HALF of the input array and log each student's name followed by a dash and the number of courses they have attempted and ending with two dashes. For the purposes of this function, assume the length of the input array will always be even.
```javascript
logHalf(students);
/*
LOGS =>
Stephanie Cooper
Courses attempted: 1
--
Bethany Joseph
Courses attempted: 2
--
*/
```
/*
LOGS =>
Baltimore, MD - EST
Atlanta, GA - EST
New Orleans, LA - EST
New Orleans, LA - EST
*/

```