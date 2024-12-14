## Objects and Arrays

### Objects

A key feature of web development is "object-oriented design". You will learn more about object-oriented programming and functional programming in later phases of the program, but for now it is sufficient to understand that when we create more complicated programs we need more complex data to make those programs operate effectively.

The first line of defense for modeling this complex data is using `arrays` and `objects`. Think of some of the most popular web applications today... Instagram, TikTok, Amazon... arguably the most common thing that happens when you use a web application is you sign up to be a user. 

Try to consider what it would take to accurately represent a user. What data would you want to remember? Almost certainly, you would want a user's email, possibly their full names, age, and a phone number. For a lot of this data, we can use plain old simple datatypes. For instance...

```javascript
const firstName = 'Alex';
const lastName = 'Aaron';
const age = 37;
const phone = '111-222-3333';
const email = 'alex@operationspark.org';
```

Just numbers and strings. This isn't bad, but all we've done is create a bunch of variables that-as far as our code is concerned-are unrelated. This is where something like an object becomes very useful. An object is a **_"collection of key/value pairs"_** used to model something in our code. In almost any program, one of the key artifacts we want to "model" is a user. Rather than creating a bunch of disconnected variables, we would so something like this...

```javascript
const user1 = {
    firstName: 'Alex',
    lastName: 'Aaron',
    age: 37,
    phone: '111-222-3333',
    email: 'alex@operationspark.org'
};
```
#### Object Access Using Dot or Bracket Notation

So now, if I want to access this user, I just reference `user1`, and if I want to access any data on `user1` I have to use **bracket** or **dot notation**. For instance, if I wanted to access this object and log the user's phone number, I could do this:

```javascript
// dot notation
console.log(user1.phone); // LOGS => 111-222-3333

// bracket notation
console.log(user1['phone']); // LOGS => 111-222-3333
```

The important thing to note here is that if I want to access the "value" of something, I have to access the "key" that value is stored at on the object. That's why this won't work.

```javascript
console.log(firstName); // REFERENCE ERROR: firstName is not defined
```

You might be thinking to yourself, "What's wrong with this? I know there is something called firstName which has a string attached to it!" But `firstName` is a **_key_** that exists on the user1 object. If you want to access it, you have to first start with the object (`user1.firstName` or `user1['firstName']`).

You might be asking yourself, "what is the difference between using dot or bracket notation. They both seem to work just fine. And they do.. depending on how you use them. The rule is this:
* Dot notation **ONLY** works with the literal key name you are trying to access.
* Bracket notation can be used with the literal key name or a reference to a key (like a variable or a parameter). Consider these two different functions.

```javascript
function getUserFullName(user){
    return user.firstName + " " + user.lastName;
}

function getUserProp(user, key){
    return user[key];
}

getUserFullName(user1); // => "Alex Aaron"
getUserProp(user1, 'email'); // => "alex@operationspark.org"
```

In the example of the `getUserFullName` function we know _literally_ what keys on the user parameter we want to access--`user.firstName` and `user.lastName`. Since we know those are the literal keys we want to access, there is nothing wrong with using dot notation. We could have coded the return statement using bracket notation as well => `return user['firstName'] + " " + user['lastName']`. You just need to make sure the literal key is in quotes.

However, in the case of the `getUserProp` function, dot notation would not work. The purpose of this function is to take in a key as an argument and log the value at whatever that input key is. So we don't know the _literal_ key we're trying to access. We know that we have a parameter called `key` that represents one of many possible key inputs. When you find yourself in this situation,the ONLY access method that will work is bracket notation. Take a look at our return statement:

`return user[key]`

Bracket notation allows our key parameter to resolve to whatever key was passed in. If you were to try this...

`return user.key`

... You would get an error. Because you used dot notation, the program thinks you're trying to return the value at a key LITERALLY called key.

#### Adding or Reassigning Data in Objects Using Dot or Bracket Notation

Accessing data in an object is one thing, but what if we want to do something else? What if we want to add something new to the object? Or what if we determine we want to change some data that already exists on the object? Luckily, the way do this still involves the same principles of dot or bracket notation. Take our `user1` object for instance. What if we want to add a key of `location` set to a string of whatever city they live in. It would like like this...

```javascript
// dot notation
user1.location = 'New Orleans, LA';
```
or...

```javascript
// bracket notation
user1['location'] = 'New Orleans, LA';

console.log(user1);
/*
LOGS =>
{
    firstName: 'Alex',
    lastName: 'Aaron',
    age: 37,
    phone: '111-222-3333',
    email: 'alex@operationspark.org',
    location: 'New Orleans, LA'
}
*/
```

Either way, when you check on our `user1` object after executing this code it will have a key of 'location' set to 'New Orleans, LA'.

Separately, what if the user changes their phone number and we want to reassign the value at their `phone` key. It's the same approach...

```javascript
user1.phone = '999-888-7777';
```

or... 

```javascript
user1['phone'] = '999-888-7777';
```

The same considerations that we discussed in the previous section apply here. If you know the literal name of the key you're trying to access, you can only use dot notation, but if we're using a variable or parameter then only dot notation will work. 

## Arrays

Arrays are the other most common complex datatype in JavaScript. Unlike objects, which are used to model individual things in our program, arrays are basically just a storage device for holding lists of like data. Think along these lines:

```javascript
const colors = ['red', 'blue', 'yellow', 'orange', 'green'];

const cities = ['New Orleans, LA', 'Ames, IA', 'Los Angeles, CA', 'Baltimore, MD'];
```
### Accessing Data in Arrays Using Bracket Notation 

The other vital difference between arrays and objects is that arrays are ordered by indexes starting at 0. So, for every array you create, you want to imagine each item exists at an invisible index number, and if you want to access the item you have to access the index.

```javascript
const colors = ['red', 'blue', 'yellow', 'orange', 'green'];
// indexes        0       1       2          3        4

console.log(colors[0]); // LOGS => red
console.log(colors[1]); // LOGS => blue
```

Just like if you want to access a value in an object, you have to access its key, for arrays you have to access the index number attached to the item you want to access.

## Putting it All Together

We are often forced to interact with arrays and objects together. Think about our `user1` object. It is entirely conceivable that our user might have a key with an array attached to it, or even another object attached to it. What if our user has an emergency contact. That might make our user look like this...

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
    }
};
```

This adds a whole never layer of complexity to our object. Now, if I want to access the name of user1's emergency contact, I have to move through the keys of user1 accurately. Think of the path...

```javascript
console.log(user1.emergencyContact.name); // LOGS => 'Stephanie Cooper'
```

As you can see, even as our objects get more complex, the principles of how we access the data doesn't change. To get to the emergencyContact's name, you have to first access the `user1` object's emergencyContact key, but that only gives me the object that exists at that key. You then have to go a layer deeper and access the `name` key that exists on `user1.emergencyContact`. As you can imagine, things can get quite complicated.

What if our user is a user for something like Amazon. We would certainly want to track every purchase our user made. So `user1` might need a key of `purchases`, but the value at that key would probably be an ARRAY, since purchases is most likely a list.

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
    purchases: []
};
```

To make things even MORE complicated, the items in our purchases would probably be objects because we want to model these purchases with as much complexity as possible.

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

Now imagine you wanted to access the first purchase the user made (assume the first item in the array is the first) and access that item data associated with it (just the string of what the item is). You have to follow a winding path through the correct keys on the object. 

You would start by accessing the `user1` object's purchases array... `user1.purchases`... but remember, that only gets you access to the array itself. To access the first purchase, you have to access the index it exists at... `user1.purchases[0]`... BUT that gets you the whole object. To complete the process, you have to access the right key on the object...

```javascript
console.log(user1.purchases[0].item); // LOGS => Rear Winddow Bluray
```

Finally, imagine we had an entire array of these types of users:

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
