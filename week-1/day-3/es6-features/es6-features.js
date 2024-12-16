// using spread operator on a simple arrays

// using spread operator on objects or objects in arrays

// every function should be an arrow function

// use destructuring to declare variables

// using 

// destructuring on an individual student object
let getInfoString = (film) => {
    const { title, year, director } = film;
    return `${title} (${year}) - directed by ${director.name}`;
}

// destructuring on each object using a for loop