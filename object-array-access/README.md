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

## Arrays

Arrays are the other most common complex datatype in JavaScript. Unlike objects, which are used to model individual things in our program, arrays are basically just a storage device for holding lists of like data. 