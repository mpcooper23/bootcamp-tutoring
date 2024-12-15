
// Problem #1 //

//regex to check standard backwards for loop
// for\s[(][a-z]{3}\s[a-z]+\s=\s[a-zA-Z]+\.length\s-\s1;\si\s>=\s0;\si--[)]

//regex to check backwards for loop where i > -1
// for\s[(][a-z]{3}\s[a-z]+\s=\s[a-zA-Z]+\.length\s-\s1;\si\s>\s-1;\si--[)]
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



// nest a for in loop in a for loop

// nest for loops in each other

// 
