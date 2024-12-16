
// Problem #1 //
function logLocationAndTime(array){
    for (let i = array.length - 1; i >= 0; i--){
        console.log(array[i].location + " - " + array[i].timeZone);
    }
}

// Problem #2 //
function logHalf(array){
    const stop = (array.length / 2);
    for (let i = 0; i < stop; i++){
        console.log(array[i].name + "\nCourses attempted: " + array[i].courses.length + "\n--");
    }
}

// Problem #3 //
function getStringValues(student){
    const strings = [];
    for (let key in student){
        if (typeof student[key] === 'string' && student[key].length > 3){
            strings.push(student[key]);
        }
    }
    return strings;
}

// Problem #4 //
function createBooleanEntries(array, name){
    const output = [];
    for (let i = 0; i < array.length; i++){
        const obj = array[i];
        if (obj.name === name){
            for (let key in obj){
                if (typeof obj[key] === 'boolean'){
                    const sub = [key, obj[key]];
                    output.push(sub);
                }
            }
        }
    }
    return output;
}

// Problem #5 //
function getCoursesByYear(array, year){
    const output = [];
    for (let i = 0; i < array.length; i++){
        const courses = array[i].courses;
        for (let j = 0; j < courses.length; j++){
            if (courses[j].dateOfLastAttempt.includes(year)){
                const obj = {
                    studentName: array[i].name,
                    course: courses[j].courseName,
                    status: courses[j].status,
                    observations: courses[j].observations.length,
                }
                output.push(obj);
            }
        }
    }
    return output;
}
