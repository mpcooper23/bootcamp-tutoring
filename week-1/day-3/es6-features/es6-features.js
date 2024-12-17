
// Problem #1 // use destructuring on a single object
let getInfoString;

// Problem #2 // using spread operator on a simple array
let getNewGenreTagsArray;

// Problem #3 // using spread operator to create a copy of an object
let getNewObject;

// Problem #4 // destructuring on each object using a for loop
let printAwards;

// Problem #5 // use destructing on an array of arrays
let updateAward = (film, nominatedFilm, category, updates) => {
    const awards = film.director.academyAwards;
    for (let i = 0; i < awards.length; i++){
        if (awards[i].filmTitle === nominatedFilm && awards[i].category === category){
            const copy = { ...awards[i] };
            for (let j = 0; j < updates.length; j++){
                const [ key, value ] = updates[j];
                copy[key] = value;
            }
            return copy;
        }
    }
}
