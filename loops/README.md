### For loops

Looping concepts are very important in JavaScript because they give us an ability to repeat a sequence of code more efficiently. Consider this example:

```javascript

const students = [
    { id: 0, name: 'Stephanie Cooper', course: 'Bootcamp' },
    { id: 1, name: 'Bethany Joseph', course: 'Bootcamp' },
    { id: 2, name: 'Nathan Coen', course: 'Precourse' },
    { id: 3, name: 'Kyle Bradley', course: 'Precoures'}
];
```

Let's say we have an array of Operation Spark students, and we want to create a new array of only the Bootcamp students. There are many reasons we might want to do this. In a world without loops you might have to create code that looks like this...

```javascript
const bootcampStudents = [];

if (students[0].course === 'Bootcamp'){
    bootcampStudents.push(students[0]);
} else if (students[1].course === 'Bootcamp'){
    bootcampStudents.push(students[1]);
} else if (students[2].course === 'Bootcamp'){
    bootcampStudents.push(students[2]);
} else if (students[3].course === 'Bootcamp'){
    bootcampStudents.push(students[3]);
}

```

There are several problems with creating this code. Firstly, what happens when our array of `students` gets new students added to it? We have to add new else if statements to our conditional chain to make sure those students are being checkded and pushed into `bootcampStudents`. More broadly, the code is very repetitive. This is where the idea of the for loop makes your life infinitely easier. *A for loop gives you the ability to iterate through a counting sequence.* Here is a basic example:

```javascript
for (let i = 1; i < 4; i++){
    console.log("Count " + i);
}
/*
LOGS =>
Count 1
Count 2
Count 3
*/
```