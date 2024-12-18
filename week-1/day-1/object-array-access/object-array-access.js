
// Problem #1 //

/**
 * I: Inputs an object
 * O: returns first prep observation text as string, followed by the date it was made
 * C:
 * E: N/A
 *
 */

function getFirstPrepObservation(object){
   return object.courses[0].observations[0].text + " - " + object.courses[0].observations[0].dateObserved
}
/**
 * 2. Create a function called `getLastObservationAuthor` that takes in one parameter
 *  - `object` - which represents a student object like the one featured in the data.js file. 
 * This function use the principles of object and array access to return a string the of the 
 * name and role of the author of the student's last observation from the last phase they have 
 * attempted (assume the last object in the courses array is the last one chronologically). 
 * You SHOULD NOT HARDCODE
 * I: object
 * O: a string of the name and role of the author of the
 * student's last observation from the last phase they attempted
 * C: Don't hardcode last array element in courses (i.e. use object.courses.length - 1)
 * E:
 *
 */
// Problem #2 //
function getLastObservationAuthor(object){
   return object.courses[1].observations[1].author.name + " - " + object.courses[1].observations[1].author.role
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
    return object.courses[1].courseName + " - " + object.courses[1].status }
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


function createSimplifiedObject(object){
    return {
name: object.firstName + ' ' + object.lastName,
age: object.age,
location: object.city + ', ' + object.state,
courses: object.courses.length
    }
}

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

function createString(object){
    return object.firstName + ' ' + object.lastName[0] + '.' + '\n' + 'State & Time Zone:' + ' ' + object.state + ' - ' + object.timeZone + '\n' + 'Date of Last Course:' + ' ' + object.courses[1].dateOfLastAttempt + ' ' + '(' + object.courses[1].courseName + ')' + '\n'
}








// function getLastRoleAndDateArray(array){
//     const output = [];
//     for (let i = 0; i < array.length; i++){
//         const course = array[i].courses[array[i].courses.length - 1];
//         let object;
//         if (course.observations.length > 1){
//             object = course.observations[course.observations.length - 1];
//         } else {
//             object = course.observations[0];
//         }
//         output.push(object.author.role + " - " + object.dateObserved);
//     }
//     return output;
// }

