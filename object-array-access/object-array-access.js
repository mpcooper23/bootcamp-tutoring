// Problem #1 //
function getFirstPrepObservation(object){
    
}

// Problem #2 //
function getLastObservationAuthor(object){
    const course = object.courses[object.courses.length - 1];
    const observation = course.observations[course.observations.length - 1];
    return observation.author.name + " - " + observation.author.role;
}

console.log(getLastObservationAuthor(student));