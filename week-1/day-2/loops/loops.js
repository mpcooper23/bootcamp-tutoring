// Problem #1 //
function getNameAndCourse(array){
    const output = [];
    for (let i = 0; i < array.length; i++){
        output.push(array[i].name + " - " + array[i].course);
    }
    return output;
}