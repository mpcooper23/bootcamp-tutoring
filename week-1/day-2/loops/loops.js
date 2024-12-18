
// Problem #1 //
/**
 * 
 * 1. Create a function called `logLocationAndTime` that takes in one parameter - `array` - 
 * which represents an array of student objects like the one featured in data.js. 
 * This function should use a for loop to iterate backwards through the input array, 
 * and each iteration it should log the current student's location followed by a dash and their timezone.
```javascript
// example output
logLocationAndTime(students);
/*
LOGS =>
Baltimore, MD - EST
Atlanta, GA - EST
New Orleans, LA - CST
New Orleans, LA - CST
*/


function logLocationAndTime(array){
   for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i].location + ' - ' + array[i].timeZone)
   }
}

// Problem #2 //
/**
 * 2. Create a function called `logHalf` that takes in one parameter - `array` - 
 * which represents an array of student objects like the one featured in data.js. 
 * This function should use a for loop to only iterate through HALF of the input 
 * array and log each student's name followed by a dash and the number of courses 
 * they have attempted and ending with two dashes. For the purposes of this function, 
 * assume the length of the input array will always be even.
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

I: array of objects
O: log each student's name followed by /n and the number of courses they have attempted; end w two dashes
C: use for loop to iterate through HALF of array (assume array is even)
E:
*/
 
function logHalf(array){
    for (let i = 0; i >= array.length / 2; i++){
console.log(array[i].name + '\n' + 'Courses attempted: ' + array[i].courses.length + '\n' + '--')
    }
}

// Problem #3 //
function getStringValues(student){
    
}

// Problem #4 //
function createBooleanEntries(array, name){
    
}

// Problem #5 //
function getCoursesByYear(array, year){
    
}
