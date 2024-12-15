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
    bootcampStudents.push(students[<index>])
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

### Iterating Through Arrays of Complex Data

Think back to our last section, **"Object And Array Access"**, and the incredibly complicated `user` object we created:

```javascript
const user1 = {
    firstName: 'Alex',
    lastName: 'Aaron',
    age: 37,
    phone: '111-222-3333',
    email: 'alex@operationspark.org',
    emergencyContact: {
        name: 'Stephanie Cooper',
        relationship: 'Wife',
        phone: '888-777-6666'
    },
    purchases: [
        {
            item: 'Rear Window Bluray',
            date: '12/10/2023',
            price: 20.99
        },
        {
            item: 'Wired earbuds',
            date: '2/05/2024/',
            price: 16.99
        }
    ]
};
```

Now imagine we had an entire array of these types of objects.

```javascript
const users = [
    {
        firstName: 'Alex',
        lastName: 'Aaron',
        age: 37,
        phone: '111-222-3333',
        email: 'alex@operationspark.org',
        emergencyContact: {
            name: 'Stephanie Cooper',
            relationship: 'Spouse',
            phone: '888-777-6666'
        },
        purchases: [
            {
                item: 'Rear Window Bluray',
                date: '12/10/2023',
                price: 20.99
            },
            {
                item: 'Wired earbuds',
                date: '2/05/2024/',
                price: 16.99
            }
        ]
   },
   {
        firstName: 'Stephanie',
        lastName: 'Cooper',
        age: 37,
        phone: '888-777-6666',
        email: 'steph@email.com',
        emergencyContact: {
            name: 'Alex Aaron',
            relationship: 'Spouse',
            phone: '111-222-3333'
        },
        purchases: [
            {
                item: 'Chair mat',
                date: '12/13/2024',
                price: 31.67
            },
            {
                item: 'Bluetooth earbuds',
                date: '12/14/2024',
                price: '23.15'
            }
        ]
   },
   {
        firstName: 'Bethany',
        lastName: 'Joseph',
        age: 35,
        phone: '555-444-3333',
        email: 'bethany@email.com',
        emergencyContact: {
            name: 'Chris Parker',
            relationship: 'Boyfriend',
            phone: '777-888-9999'
        },
        purchases: [
            {
                item: 'Rug',
                date: '10/12/2024',
                price: 50.99
            },
        ]
   }
]
```

Seems pretty complex, right? Well, yes, but we interact with arrays populated with objects this complicated all the time. You need to feel confident using everything you know about for loops and object & array access to do this successfully.

Let's consider a relatively straightforward problem first: create a for loop to iterate over this `users` array and log each user's fullName to the console.

The first part of this problem is relatively simple... if we want to create a loop to iterate over `user` we need to create a counting sequence with a counting variable that starts at zero...

```javascript
for (let i = 0; _____; _____){

}
```

... we want to keep iterating as long as that variable is less than the length of the array...

```javascript
for (let i = 0; i < users.length; _____){

}
```

... and we want to increment our counting variable by 1 at the end of each iteration.

```javascript
for (let i = 0; i < users.length; i++){
    console.log(?);
}
```

The most important thing to remember when you create a for loop that is intended to "iterate" through an array is that your counting variable is just a number. In this case, it will count `0, 1, 2` and then stop. BUT, you can use that number to access the item at each index in the array. So, as this for loop iterates, each iteration we can do this:

```javascript
for (let i = 0; i < users.length; i++){
    console.log(users[i]);
}
```
But if you execute you'll notice this doesn't give us the full name we're trying to log, it just gives the current user object. That's because of the principles of array access. On the first iteration, our counting variable of i is set to `0`, so when we hit `console.log(users[i])` that code resolves to `console.log(users[0])`, which is just the user object representing Alex Aaron. If we want to use this for loop to log the full name of each student we need to use the principles of object access as well.

If we know `users[i]` represents an object at each iteration, then `users[i].firstName` should give us that object's firstName value and `users[i].lastName` should give us that object's lastName value.

```javascript
for (let i = 0; i < users.length; i++){
    console.log(users[i].firstName + " " + users[i].lastName);
}
```

And that example is one of the simpler ones. Imagine if we wanted to loop through the `users` array to log the name of each user's emergency contact. The good news is that since we're still just trying to access every index of the `users` array, we can create the same basic structure:

```javascript
for (let i = 0; i < users.length; i++){
    // what next?
}

```
But as we're accessing each object one at a time, it gets a little tougher. We're still just starting with `users[i]` since we know that code represents the object we're trying to access data on.

```javascript
for (let i = 0; i < users.length; i++){
    console.log(users[i])
}

```

Then we need to access the `emergencyContact` key that exists on `users[i]`.
```javascript
for (let i = 0; i < users.length; i++){
    console.log(users[i].emergencyContact)
}
```

If you are checking this code in your own workspace, you will see that we are closer! Now, we are accessing the emergency contact objects at each iteration. But we're not done yet. We said at the beginning we wanted to access their name.

```javascript
for (let i = 0; i < users.length; i++){
    console.log(users[i].emergencyContact.name);
}
/*
LOGS =>
Stephanie Cooper
Alex Aaron
Chris Parker
*/

```

Once we specify that we are trying to access the `name` key that exists at `users[i].emergencyContact, our code will now log the names properly.

## For In Loops

For loops are a great tool for iterating through arrays or strings (remember that strings are also zero indexed). But if we need to iterate through an object, they are less useful. Objects are not ordered by an index. We don't think of an object as having a first item and a last item. Objects dont' even have a built-in length property. Objects are just collections of key/value pairs.

Luckily, there is a construct that exists in JavaScript that makes iterating through objects easier: `for in loop`

Look at the object below. Here is how we used use a for in loop to iterate through it.

```javascript
const movie = {
    title: 'Rear Window',
    director: 'Alfred Hitchcock',
    year: 1954,
    topBilledActor: 'James Stewart'
}

for (let key in movie){
    console.log(key);
}

/*
LOGS =>
title
director
year
topBilledActor
*/
```

The most important part in the construction of the for in loop is this...

```javascript
for (let <variable> in <object>){
    // code to execute at each key of the object
}
```

With for in loops, you declare a variable (we usually call this variable `key`) and you specify the name of the object you want to iterate through. In this case, that worked out to `for (let key in movie)...` The way a for in loop iterates is that it access every key in the object one at a time. You can see in the example above that when we hit this code - `console.log(key)` - it logs each key in the movie object. Just like a for loop has a counting variable that changes each iteration, so does this `key` variable. Each iteration, it represents the new key we're accessing.

The question is what can we do with this? Well, if you think of any object access question you will quickly realize that if you have access to a key and the name of the object, you have everything you need to access the value that exists at that key.

```javascript
const movie = {
    title: 'Rear Window',
    director: 'Alfred Hitchcock',
    year: 1954,
    topBilledActor: 'James Stewart'
}

console.log(movie.title); // LOGS => Rear Window
```

Break this example down into its most basic parts. We know we have an object called `movie` and we know there is a key on that object called `title` that we want to access, so we just use the basic object access principles to log the value. The same thing is true of a for in loop, except you have to remember that you are not dealing with a literal key each iteration. You are dealing with a VARIABLE that represents the current key. 

Here is what it would look like if I wanted to log the VALUE at each key of the movie object using a for in loop.

```javascript
const movie = {
    title: 'Rear Window',
    director: 'Alfred Hitchcock',
    year: 1954,
    topBilledActor: 'James Stewart'
}

for (let key in movie){
    console.log(movie[key]);
}
```

## Nesting Loops

It is important to remember that these loops can all be used in conjunction with each other. For example, what if I wanted to loop through `users` array and log all of the values from each user`s emergency contact. When you encounter problems like this, always start at your outermost point. In this case, that is the array populatd we need to access. So, again we can start with this basic structure:

```javascript
for (let i = 0; i < users[i].length; i++){
    // users[i] gives us access to each user object one at a time
}
```

Once we create our initial for loop, we know `users[i]` gives us access to each user. Then the question becomes, what are we trying to do to each user? In this case, we want to access each user's emergencyContact object and iterate through the values. Again, start with the outermost concern--accessing the current user's emergencyContact object...

```javascript
for (let i = 0; i < users[i].length; i++){
    console.log(users[i].emergencyContact);
}
```

If you're checking this work in your own workspace, you should see each user's emergencyContact object being logged. Now we can use a for in loop. If we know `users[i].emergencyContact` gives us access to an object, we can use a for in loop to iterate over that object.

```javascript
for (let i = 0; i < users[i].length; i++){
    for (let key in users[i].emergencyContact){
        console.log(users[i].emergencyContact[key])
    }
}
```

Here is what we have done in essence... we have a created a for loop that will iterate over every object in the `users` array. Each iteration of that for loop we are accessing the current user's emergencyContact and initiating a for in loop to log the values at each key of that object. Check this work in your own workspace to confirm the result.

One thing to consider... take a look at our final console.log statement => `console.log(users[i].emergencyContact[key])` 

Seems a little long and clunky right? This can happen frequently when you are dealing complex pieces of data. Sometimes it can make your code more readable to create variables to shorten some of this.

```javascript
for (let i = 0; i < users[i].length; i++){
    const contact = users[i].emergencyContact;
    for (let key in contact){
        console.log(contact[key])
    }
}
```

You can see in this example that rather than writing the whole code out, we can create a `contact` variable that references `users[i].emergencyContact`. So, in our for in loop we can just use that `contact` variable.

This is not the only way we can nest loops. It is entirely possible to nest for loops. Take another look at our `users` array.

```javascript
const users = [
    {
        firstName: 'Alex',
        lastName: 'Aaron',
        age: 37,
        phone: '111-222-3333',
        email: 'alex@operationspark.org',
        emergencyContact: {
            name: 'Stephanie Cooper',
            relationship: 'Spouse',
            phone: '888-777-6666'
        },
        purchases: [
            {
                item: 'Rear Window Bluray',
                date: '12/10/2023',
                price: 20.99
            },
            {
                item: 'Wired earbuds',
                date: '2/05/2024/',
                price: 16.99
            }
        ]
   },
   {
        firstName: 'Stephanie',
        lastName: 'Cooper',
        age: 37,
        phone: '888-777-6666',
        email: 'steph@email.com',
        emergencyContact: {
            name: 'Alex Aaron',
            relationship: 'Spouse',
            phone: '111-222-3333'
        },
        purchases: [
            {
                item: 'Chair mat',
                date: '12/13/2024',
                price: 31.67
            },
            {
                item: 'Bluetooth earbuds',
                date: '12/14/2024',
                price: '23.15'
            }
        ]
   },
   {
        firstName: 'Bethany',
        lastName: 'Joseph',
        age: 35,
        phone: '555-444-3333',
        email: 'bethany@email.com',
        emergencyContact: {
            name: 'Chris Parker',
            relationship: 'Boyfriend',
            phone: '777-888-9999'
        },
        purchases: [
            {
                item: 'Rug',
                date: '10/12/2024',
                price: 50.99
            },
        ]
   }
]
```

We have an array of `users`, and each user has it's own array of `purchases`. What if we needed to access all of the purchases each user made for some purpose? Maybe we were collecting all of the individual purchases into their own array. Just like the previous problem, you start with the outermost concern, which is iterating through our users (we can't access the purchases if we're not accessing the users first).

```javascript
const allPurchases = [];

for (let i = 0; i < users.length; i++){
    // users[i] gives us access to each user object
}
```

Again, this basic for loop gives us access to each user through `users[i]`. What is the next concern... iterating through each user's purchases. That requires another loop within our current one.

```javascript
const allPurchases = [];

for (let i = 0; i < users.length; i++){
    for (let j = 0; j < users[i].purchases.length; j++){
        allpurchases.push(users[i].purchases[j]);
    }
}
```

The first thing you will probably notice is that the nested for loop has a different countinv variable declared - `j`. This is because creating the same variable as the outer for loop will cause a lot of problems. 

Again though, you can see the pattern. Our first for loop gives us the ability to access each index of the `users` array. Each iteration of that loop, we are then iterating through the current user's `purchases` property and logging each purchase to the console. This is another example where creating a variable can make your life easier.

```javascript
const allPurchases = [];

for (let i = 0; i < users.length; i++){
    const purchases = users[i].purchases;
    for (let j = 0; j < purchases.length; j++){
        allPurchases.push(purchases[j]);
    }
}
```