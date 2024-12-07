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
function getLastRoleAndDateArray(array){
    const output = [];
    for (let i = 0; i < array.length; i++){
        const course = array[i].courses[array[i].courses.length - 1];
        let object;
        if (course.observations.length > 1){
            object = course.observations[course.observations.length - 1];
        } else {
            object = course.observations[0];
        }
        
        output.push(object.author.role + " - " + object.dateObserved);
    }
    return output;
}
