// Problem #1 //
function getFirstPrepObservation(object){
    const observation = object.courses[0].observations[0];
    return observation.text + " - " + observation.dateObserved;
}

// Problem #2 //
function getLastObservationAuthor(object){
    const course = object.courses[object.courses.length - 1];
    const observation = course.observations[course.observations.length - 1];
    return observation.author.name + " - " + observation.author.role;
}

// Problem #3 //
function getLastCourseNameAndStatus(object){
    const last = object.courses[object.courses.length - 1];
    return last.courseName + " - " + last.status;
}

// Problem #4 //
function createSimplifiedObject(object){
    const name = object.firstName + " " + object.lastName;
    const location = object.city + ", " + object.state;
    return {
        name: name,
        age: object.age,
        location: location,
        courses: object.courses.length
    }
}

// Problem #5 //
function createString(object){
    const name = object.firstName + " " + object.lastName[0] + ".";
    const stateAndTime = object.state + " - " + object.timeZone;
    const last = object.courses[object.courses.length - 1];
    const lastCourseDate = last.dateOfLastAttempt + " (" + last.courseName + ")";

    return `${name}\nState & Time Zone: ${stateAndTime}\nDate of Last Course: ${lastCourseDate}\n`
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

