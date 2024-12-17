
// Problem #1 // use destructuring on a single object
let getInfoString;

// Problem #2 // using spread operator on a simple array
let getNewGenreTagsArray = (film, newTag) => {
    const [ genreTags ] = film.genreTags;
    const output = [ ...genreTags, ];
    output.push(newTag);
    return output;
}


// destructuring on each object using a for loop

// using spread operator on a simple arrays

// using spread operator on objects or objects in arrays

// every function should be an arrow function

// using 