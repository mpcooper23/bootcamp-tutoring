
//function getFirstObservation(object){
   // return object.courses.filter(course => {course.length - 1})
  //  }



// Problem #1 //

/**

1. Create a function called `getFirstPrepObservation` that takes in one parameter - `object` - which 
represents a student object like the one featured in the data.js file. This function should use the 
principles of object and array access to return a string of the text of the student's first observation 
from the Prep phase (assume all students will have a Prep observation) followed by the date the observation 
was made.
I: object
O: string of teh student's first obs from Prep followed by date obs was made

*/

function getFirstPrepObservation(object){
 if (student.courses[0].courseName = 'Prep'){
    let date = student.courses[0].observations[0].dateObserved;
    let text = student.courses[0].observations[0].text
    return `${text} - ${date}`
 }
}







/**
 * 2. Create a function called `getLastObservationAuthor` that takes in one parameter
 *  - `object` - which represents a student object like the one featured in the data.js file. 
 * This function use the principles of object and array access to return a string the of the 
 * name and role of the author of the student's last observation from the last phase they have 
 * attempted (assume the last object in the courses array is the last one chronologically). 
 * You SHOULD NOT HARDCODE
 * 
 * i: object
 * o: string of name, role of the author of the student's last observation 
 */


// Problem #2 //*




function getLastObservationAuthor(object){

let lastClass = object.courses[object.courses.length - 1];
let lastObs = lastClass.observations[lastClass.observations.length -1]
let lastAuthor = lastObs.author.name
let lastRole = lastObs.author.role

return `${lastAuthor} - ${lastRole}`
}



/**
 * Create a function called `getLastCourseNameAndStatus` that takes in one parameter - `object`, 
 * which represents a student object like the one featured in data.js. This function should use 
 * the principles of object and array access to return a string of the last course the user has 
 * taken followed by a dash and the course's status (assume the last course in the user's courses array is last chronologically).
 * I: object
 * O: last course user took "-" course status
 * C:
 * E://
 *
 */
// Problem #3 //
function getLastCourseNameAndStatus(object){
let lastCourse = object.courses[object.courses.length - 1].courseName;
let lastStatus = object.courses[object.courses.length - 1].status;
return `${lastCourse} - ${lastStatus}`
}
/**
 * 
 *
 * 4. Let's say we want to create a simpler student object. 
 * Create a function called `createSimplifiedObject` that 
 * takes in one parameter - `object` - which represents a student
 *  object like the one featured in data.js. This function should 
 * return a new object that looks like this...
 * 
 * RETURNS => 
{
    name: 'Nathan Coen',
    age: 36,
    location: "Atlanta, Georgia",
    courses: 2,
}

 * I:object 
* O:simplified object: keys should include name, age, location, and 
number of courses.

 */
// Problem #4 //



/**
 * 
 *Create a function called `createString` that takes in one parameter - `object` - 
 which represents a student object like the one featured in data.js. This function 
 should use the principles of object and array access to create a string like this:

```javascript
// example output
createString(student); // => "Nathan C.\nState & Time Zone: Georgia - EST\nDate of Last Course: 09/15/2023 (Bootcamp)\n"
/*
LOGS =>

Nathan C.
State & Time Zone: Georgia - EST,
Date of Last Course: 09/15/2023 (Bootcamp)
 * 
 * 
 */

// Problem #5 //






