# FreeCodeCamp
## JavaScript Algorithms and Data Structures

### Basic JavaScript
1. **Comment Your JavaScript Code**

There are two ways to write comments in JavaScript: 

Using `//` will tell JavaScript to ignore the remainder of the text on the current line:<br><br>  
> // This is an in-line comment.  

You can make a multi-line comment beginning with `/*` and ending with `*/`:<br><br>

> /* This is a multi-line comment */

----

2. **Declare JavaScript Variables**

JavaScript provides eight different data types which are
- undefined
- null
- boolean
- string
- symbol
- bigint
- number
- object

✍ *Use the var keyword to create a variable called myName.*<br><br>
> var myName;

----

3. **Storing Values with the Assignment Operator**

In JavaScript, you can store a value in a variable with the *assignment* operator.<br><br>
    
> myVariable = 5;
    
This assigns the `Number` value `5` to `myVariable`.<br><br>
Assignsment always goes from right to left. Everything to the right of the `=` operator is resolved before the value is assigned to the variable to the left of the operator.<br><br>
> myVar = 5;<br>
> myNum = myVar;
    
This assigns `5` to `myVar` and then resolves `myVar` to `5` again and assigns it to `myNum`.


✍ *Assign the value `7` to variable `a`.*<br>
✍ *Assign the contents of `a` to variable `b`.*<br><br>

> a = 7;<br>b = a;

----

4. **Initializing Variables with the Assignment Operator**

It is common to initialize a variable to an initial value in the same line as it is declared.

> var myVar = 0;

Creates a new variable called `myVar` and assigns it an initial value of `0`.

✍ *Define a variable `a` with `var` and initialize it to a value of `9`.*

> var a = 9;

----

5. **Understanding Uninitialized Variables**

When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be `NaN` which means "*Not a Number*". If you concatenate a string with an `undefined` variable, you will get a literal *string* of `"undefined"`.

✍ *Initialize the three variables `a`, `b`, and `c` with `5`, `10`, and `"I am a"` respectively so that they will not be `undefined`.*

> // Only change code below this line<br>
var a = 5;<br>
var b = 10;<br>
var c = "I am a";<br>
// Only change code above this line<br>
<br>
a = a + 1;<br>
b = b + 5;<br>
c = c + " String!";


----
### ES6

----
### Regular Expressions

----
### Debugging

----
### Basic Data Structures

----
### Basic Algorithm Scripting

----
### Object Oriented Programming

----
### Functional Programming

----
### Intermediate Algorithms Scripting

----
### JavaScript Algorithms and Data Structures Projects

----
