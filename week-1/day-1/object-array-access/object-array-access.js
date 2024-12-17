
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
 * 
 *
 */
// Problem #3 //
function getLastCourseNameAndStatus(object){
    
}
/**
 * 
 *
 */
// Problem #4 //
function createSimplifiedObject(object){
    
}

/**
 * 
 *
 */
// Problem #5 //
function createString(object){
    
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

