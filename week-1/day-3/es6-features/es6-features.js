
// Problem #1 // use destructuring on a single object
/**
 * 1. Create a function called `getInfoString` that takes in one parameter - 
 * `film` which represents a film object like the ones in the `films` array in the data.js file. 
 * This function use destructuring to create three variables from the input `film` object: 
 * `title`, `year`, `director`. Using template literal syntax, the function should return a 
 * string of the film's title, year, and director in the format seen below:
```javascript
// example output
getInfoString(films[1]); // => "Blue Velvet (1986) - diredted by David Lynch"

I: object type that reps film
O: string with dash to separate <title/date> - <director>
C: destructure to create 'title', 'year', 'director'; template literal with dash;
use arrow syntax for func
E:

 */

let getInfoString = (film) => {
    const { title, year, director } = film //destructure obj
 return `${title} (${year}) - directed by ${director.name}`//returning template literal
}

// Problem #2 // using spread operator on a simple array
/**
 * 2. Create a function called `getNewGenreTagsArray` that takes in two parameters 
 * - `film` & `newTag`; `film` represents a film object like the ones in the `films`
 * array in the data.js file. This function should use destructuring to create a variable 
 * for the input `film` object's genreTags array (meaning instead of accessing that 
 * property directly, you should create a variable assigned to that array). 
 * This function should then use the spread operator to create a new array with 
 * all of the values from that variable copied in. Once the copy is made, the function 
 * should add the `newTag` input into the copied array and return that array at the end of 
 * the function.
```javascript

I:
O:
C:
E:

 */

let getNewGenreTagsArray;

// Problem #3 // using spread operator to create a copy of an object
/**
 * 3. Create a function called `getNewObject` that takes in three parameter 
 * - `film`, `key`, `value`; `film` represents a film object like the ones in 
 * the `films` array in the data.js file; `key` represents a new key to be added; 
 * `value` represents the value that should be attached to the key. This function 
 * should use the spread operator to make a copy of the input object. After the 
 * copy is made, the function should add the new key and the value attached to 
 * that key to the copy and then return it.

I:
O:
C:
E:
*/

let getNewObject;

// Problem #4 // destructuring on each object using a for loop
/**
 * 4. Create a function called `logAwards` that takes in two parameters 
 * - `films` & `director`; `films` represents an array of films like the 
 * one featured in data.js; `director` represents the name of a director 
 * we are searching for. This function should iterate through the input 
 * array and find the director. Once the director is found, the function 
 * should iterate through the director's `academyAwards` array. At 
 * each iteration, the function should use destructuring to create variables 
 * for each object's `filmTitle`, `category`, and `status` properties. The 
 * function should use template literal syntax to log each award's status 
 * followed by a colon and the title of the film and category it was nominated in.
```javascript

I:
O:
C:
E:
*/

let printAwards;

// Problem #5 // use destructing on an array of arrays
/**
 * 5. Create a function called `updateAward` that takes in 4 parameters 
 * - `film`, `nominatedFilm`, `category`, `updates`; `film` represents 
 * a film object like the ones in the `films` array in the data.js file; 
 * `nominatedFilm` represents a string of a film the director of the input 
 * film was nominated for; `category` represents the specific category the 
 * `nominatedFilm` was nominated in. `status` represents an array of arrays, 
 * where each subarray contains a key on the nomination that we want to alter 
 * and a value we want to attach at the key. This function should find the 
 * `nominatedFilm` in the input film's `academyAwards` array. Once found, 
 * this function should use the spread operator to create a copy of the 
 * nomination. The function should then iterate through the  `updates` 
 * array to update each key and value on the nomination. Make sure you 
 * use destructuring on each subarray to create variables for the key 
 * and value. This function should return the updated copy.
```javascript
// example output
updateAward(films[1], 'Blue Velvet', 'Best Director', [ ['filmTitle', 'BLUE VELVET'], ['status', 'NOMINATION'] ]);
/*
RETURNS => 
            {
                filmTitle: 'BLUE VELVET',
                year: 1986,
                category: 'Best Director',
                status: 'NOMINATION'
            };

I:
O:
C:
E:
            */


let updateAward;
