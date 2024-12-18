
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
/**
 * 
 * 3. Create a function called `getStringValues` that takes in one parameter - `student` - 
 * which represents an individual student object like the ones in the students array in data.js. 
 * This function should use a for in loop to iterate through the input object and push any string 
 * values at each key that have a length longer than 3 into an output array. This function should 
 * return the output array of string values at the end.
 * 
```javascript
// example output
getStringValues(students[0]); // => [ 'Stephanie Cooper', 'New Orleans, LA']; 

I: individual student object
O: array of all string values in object, but only if they have a length of over 3
C: for-in loop, conditional if statement to check for string data value
E:


 */

function getStringValues(student){
    let studentStr = [];
    for (let key in student){
        if (typeof student[key] === "string" && student[key].length > 3){
studentStr.push(student[key])
        }
    }
    return studentStr
}

// Problem #4 //

/**
 * 
 * 4. Create a function called `createBooleanEntries` that takes in two parameters 
 * - `array`, `name`. `array` represents an array of student objects like the one 
 * featured in data.js; `name` represents a string of an individual student's name. 
 * This function should use a for loop to iterate through the input array and find 
 * the student matching the input name. When the student is found, the function should 
 * use a for in loop to iterate through the keys that student object and create a 
 * subarray of the key and value for every property that has a boolean value attached 
 * to it. These subarrays should be pushed into an output array that is returned at 
 * the end of the function.
```javascript
// example output
createBooleanEntries(students, 'Bethany Joseph'); // => [['hotSpotAvailability', true], ['transportation', false], ['newsLetterSubscription', true]]

I: array of objects and a name string data, which contains student's name
O: "subarrays" of the key and value of each object (which includes both key and value) 
that also has a boolean value attached; these elements are then pushed into the outlet array
C: for loop, nested for-in loop
E:

*/

function createBooleanEntries(array, name){
    const output = []
for (let i = 0; i < array.length; i++){
    if(array[i].name === name){
        for (let key in object){
            output.push([key, object[key]], array[i].name === name ? true: false)
        }
    }
return output;
}
}

// Problem #5 //

/**
 * 
 * 5. Create a function called `getCoursesByYear` that takes in two parameters - `array`, `year`; 
 * `array` represents an array of student objects like the one featured in data.js; 
 * `year` represents a string of a year (example: '2024'). This function should 
 * use a for loop to iterate through the input array and then use a nested for loop 
 * to iterate through each student's courses array. 
 * For each course that was last attempted in the input `year`, the function should 
 * create an object that looks like this:
```javascript
{
    studentName: <name of student>,
    course: <course name>,
    status: <status>,
    observations: <number of observations>
}
```
Each new object created should be pushed into an output array that is returned at the end of the function.
```javascript
// example output
getCourseByYear(students, '2024'); 
/*
RETURNS =>
[
    {
        studentName: 'Stephanie Cooper', 
        course: 'Prep', 
        status: 'Passed', 
        observations: 1
    },
    {
        studentName: 'Bethany Joseph', 
        course: 'Bootcamp', 
        status: 'Passed', 
        observations: 1
    },
]

I: takes in an array of student objects, andstring data that represents a year 
O: each new object should be pushed into output array
C: use a for loop to iterate through the input array and then use a nested for loop 
 * to iterate through each student's courses array
E:

*/

function getCoursesByYear(array, year){
    
}
