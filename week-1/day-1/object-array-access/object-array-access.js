
// Problem #1 //

/**
 * I: Inputs an object
 * O: returns first prep observation text as string, followed by the date it was made
 * C:
 * E: N/A
 *
 */
console.log(object)
function getFirstPrepObservation(object){
    console.log(object.courses)


   return object.courses[Prep].observations.text + object.courses[Prep].observations.dateObserved
}
/**
 * I: object
 * O: a string of the name and role of the author of the
 * student's last observation from the last phase they attempted
 * C:
 * E:
 *
 */
// Problem #2 //
function getLastObservationAuthor(object){
    
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

