## ES6 Features Practice

1. Create a function called `getInfoString` that takes in one parameter - `film` which represents a film object like the ones in the `films` array in the data.js file. This function use destructuring to create three variables from the input `film` object: `title`, `year`, `director`. Using template literal syntax, the function should return a string of the film's title, year, and director in the format seen below:
```javascript
// example output
getInfoString(films[1]); // => "Blue Velvet (1986) - diredted by David Lynch"
```