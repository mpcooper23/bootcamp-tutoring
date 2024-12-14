const students = [
    { id: 0, name: 'Stephanie Cooper', course: 'Bootcamp' },
    { id: 1, name: 'Bethany Joseph', course: 'Bootcamp' },
    { id: 2, name: 'Nathan Coen', course: 'Precourse' },
    { id: 3, name: 'Kyle Bradley', course: 'Precoures'},
    { id: 4, name: 'Stanley Rayford', course: 'Junior'},
    { id: 5, name: 'Vickie Lean', course: 'Senior'}
];

// Problem #1 //
function getNameAndCourse(array){
    const output = [];
    for (let i = 0; i < array.length; i++){
        output.push(array[i].name + " - " + array[i].course);
    }
    return output;
}