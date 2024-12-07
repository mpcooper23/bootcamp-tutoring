### Object and Array Access

1. Create a function called `getFirstPrepObservation` that takes in one parameter - `object` - which represents a student object like the one featured in the data.js file. This function should use the principles of object and array access to return a string of the text of the student's first observation from the Prep phase (assume all students will have a Prep observation) followed by the date the observation was made.
```
// example output
getFirstPrepObservation(student); // => "He would benefit from asking more questions in class. - 08/23/2023"
```
2. Create a function called `getLastObservationAuthor` that takes in one parameter - `object` - which represents a student object like the one featured in the data.js file. This function use the principles of object and array access to return a string the of the name and role of the author of the student's last observation from the last phase they have attempted (assume the last object in the courses array is the last one chronologically). 
```
// example output
getLastObservationAuthor(student); // => "Vannesa Jones - Student Success Coordinator"
```