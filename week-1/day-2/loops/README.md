## For loops

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

The key feature that allows this to work is this: `let i = 1`. This is where we declare a *counting variable*. We almost always call this variable i, and the key thing to remember is that this variable represents the **start** of your counting sequence. In this case, we are essentially telling the program, *"start counting at 1"*. The next two parts of the this loop are also critically important.

`i < 4`: This condition defines when the loop should stop. When this condition finally returns false, the loop ends.

`i++`: This defines how we are going update our counting variable. In this case the `++` indicates that we are incrementing our counting variable by 1 each iteration.

If you put all of this together, we have a loop that operates on this logic: _**the counting sequence starts with a counting variable set to 1; as long as the counting variable is less than 4 the loop will execute; the counting variable will be incremented by 1 at the end of each iteration.**_

So, in essence we have a loop that will count `1, 2, 3` and the stop. This means that we have in fact created a block of code that will execute 3 times. Now, creating a loop that simply logs "Count {number}" isn't necessarily that useful. But we can use the principles of a for loop to make our original task with the Operation Spark students a lot easier. Take a look at our original code:

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

If you break this code down to it's most abstract, it can expressed like this:

```javascript
const bootcampStudents = [];

if (students[<index>].course === 'Bootcamp'){
    bootcampStudents.push((students[<index>]))
}
```

If we could find a way to create a value that starts at 0 and then increments through every index number of the students array, we could save ourselves a lot of code (and prevent ourselves from simply hard-coding the index of each student). Luckily, that is exactly what a for loop does. Think of it like this... we want to start by accessing the zero index of the students array and check to see if it's course property is equal to 'Bootcamp', then we want to check the next index up and so on until the end. A for loop gives us the ability to do this. Here is what it might look like:

```javascript
for (let i = 0; i < 4; i++){
    console.log(students[i]);
}

/*
LOGS =>
 { id: 0, name: 'Stephanie Cooper', course: 'Bootcamp' }
 { id: 1, name: 'Bethany Joseph', course: 'Bootcamp' }
 { id: 2, name: 'Nathan Coen', course: 'Precourse' }
 { id: 3, name: 'Kyle Bradley', course: 'Precoures'}
*/
```

In this example, we are creating a counting variable that starts at 0 (`let i = 0`), which makes sense because we know that all arrays start at index 0. The counting sequence will continue as long as i is less than 4 (`i < 4`), and it will increment the value of i by 1 at the end of each iteration (`i++`). So, at the end of the day our counting variable will count `0, 1, 2, 3` and then stop. This is great because the counting sequence we created perfectly matches the index numbers of the array we want to access. Think of the loop operating like this...

```javascript
for (let i = 0; i < 4; i++){
    console.log(students[i]);
}

// first iteration => i = 0 // 0 < 4 (true)
 
  // console.log(students[0])

  // i increments from 0 to 1
********************************************
// second iteration => i = 1 // 1 < 4 (true)

  // console.log(students[1])

  // i increments from 1 to 2
********************************************
// third iteration => i = 2 // 2 < 4 (true)

  // console.log(students[2])

  // i increments from 2 to 3
*********************************************
// fourth iteration => i = 3 // 3 < 4 (true)

  // console.log(students[3])

  // i increments from 3 to 4
*********************************************
// fifth iteration => i = 4 // 4 < 4 (false) // LOOP ENDS
```

There is one problem with this for loop we created though, and it's the stop condition we chose: `i < 4`. You see, this is still hard-coding. If any additional students get added to our `students` array, the for loop will still only count from index 0-3. For that reason, what we almost always do in this case is reference the array's length in our stop condition:

```javascript
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}
```

It's okay to 'hard-code' that i begins at 0 because we will always want the loop to start counting at zero. But by coding `i < students.length` we are keeping our loop flexibile. Even if more students get added, we will always just be referencing the current length as our stopping out.

To bring this back to our original problem, we could use the for loop to simply our code to this:

```javascript
const bootcampStudents = [];

for (let i = 0; i < students.length; i++){
    if (students[i].course === 'Bootcamp'){
        bootcampStudents.push((students[i]))
    }
}

```

### Manipulating For Loops

The key thing to understand with a for loop is that YOU get to determine how it "counts". Now, if we are using a for loop to "count" through the indexes of an array so we can access each item one at a time efficiently, we will typically do what you saw in the example above. We will start our counting variable at 0; we will continue counting as long as the variable is less than the length of the array; and we will increment by 1 each iteration. But there's nothing to say we can't play with that. Take this array for example:

```javascript
const names = ['stanley', 'vickie', 'alex', 'kyle', 'arthur', 'stephanie'];
```

What if we wanted to iterate through the array and log each name, but we wanted to it in _reverse_. Well, just think about what that would entail. Rather than starting our loop at 0, we would want to start the loop at the _**last**_ index of the array.Instead of saying, "keep iterating as our long as our counting variable is _**less than**_ than the length of the array", we want to say, "keep counting as long as the counting variable is _**greater than or equal to**_ zero. And finally, instead of incrementing our counting variable we want to decrement it.

```javascript
for (let i = names.length - 1; i >= 0; i--){
    console.log(names[i]);
}
/*
LOGS => 
stephanie
arthur
kyle
alex
vickie
stan
*/
```

Think of how this counting sequence will break down:
* `let i = names.length - 1`: The length of the array is 6, and 6 minus 1 gives us 5. So the sequence begins at 5.
* `i >= 0`: The loop will continue as long as i is greater than or equal to 0.
* `i--`: i will decrement by 1 at the end of each iteration.

This will give us a sequence that counts 5, 4, 3, 2, 1, 0 and then stops; thus allowing us to iterate backwards through the array. We're still following the essential rules of the for loop. We are creating a counting variable and giving it a starting number; we are defining a condition that when false stops the loop; and we are defining how to increment our loop each iteration.