
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
function logHalf(array){
    
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
