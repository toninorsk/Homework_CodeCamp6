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
a = a + 1;<br>
b = b + 5;<br>
c = c + " String!";

----

6. **Understanding Case Sensitivity in Variables**

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

`MYVAR` is not the same as `MyVar` nor `myvar`. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you *do not* use this language feature.

<u>Best Practice</u>

Write variable names in JavaScript in *camelCase*. In *camelCase*, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

_Examples:_

> var someVariable;<br>
var anotherVariableName;<br>
var thisVariableNameIsSoLong;

✍ *Modify the existing declarations and assignments so their names use camelCase.
Do not create any new variables.*

> // Variable declarations<br>
var studlyCapVar;<br>
var properCamelCase;<br>
var titleCaseOver;<br><br>
// Variable assignments<br>
studlyCapVar = 10;<br>
properCamelCase = "A String";<br>
titleCaseOver = 9000;<br>

----

7. **Add Two Numbers with JavaScript**

`Number` is a data type in JavaScript which represents numeric data.

Now let's try to add two numbers using JavaScript.

JavaScript uses the `+` symbol as an addition operator when placed between two numbers.

*Example:*

> myVar = 5 + 10; // assigned 15

✍ Change the 0 so that sum will equal 20.

> var sum = 10 + 10;

----

8. **Subtract One Number from Another with JavaScript**

We can also subtract one number from another.

JavaScript uses the `-` symbol for subtraction.

*Example*

> myVar = 12 - 6; // assigned 6

✍ Change the 0 so the difference is 12.

> var difference = 45 - 33;

----

9. **Multiply Two Numbers with JavaScript**

We can also multiply one number by another.

JavaScript uses the `*` symbol for multiplication of two numbers.

Example

> myVar = 13 * 13; // assigned 169

✍ Change the `0` so that product will equal `80`.

var product = 8 * 10;

----

10. **Divide One Number by Another with JavaScript**

We can also divide one number by another.

JavaScript uses the / symbol for division.

*Example*

> myVar = 16 / 2; // assigned 8

✍ Change the `0` so that the `quotient` is equal to `2`.

> var quotient = 66 / 33;

----

11. **Increment a Number with JavaScript** 

You can easily increment or add one to a variable with the `++` operator.

`i++;`

is the equivalent of

`i = i + 1;`

**Note**

The entire line becomes `i++;`, eliminating the need for the equal sign.

✍ Change the code to use the `++`operator on `myVar`.

> var myVar = 87;<br><br>
// Only change code below this line<br>
myVar++;

----

12. **Decrement a Number with JavaScript**

You can easily decrement or decrease a variable by one with the `--` operator.

`i--;`

is the equivalent of

`i = i - 1;`

**Note**

The entire line becomes `i--;`, eliminating the need for the equal sign.

✍ Change the code to use the `--` operator on `myVar`.

> var myVar = 11;<br><br>
// Only change code below this line<br>
myVar --;

----

13. **Create Decimal Numbers with JavaScript**

We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as *floating* point numbers or *floats*.

**Note**

Not all real numbers can accurately be represented in *floating point*. This can lead to rounding errors.

✍ Create a variable `myDecimal` and give it a decimal value with a fractional part (e.g. `5.7`).

> var ourDecimal = 5.7;<br><br>
// Only change code below this line<br>
var myDecimal = 15645.242;

----

14. **Multiply Two Decimals with JavaScript**

In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

Let's multiply two decimals together to get their product.

✍ Change the `0.0` so that product will equal `5.0`.

> var product = 2.0 * 2.5;

----

15. **Divide One Decimal by Another with JavaScript**

Now let's divide one decimal by another.

✍ Change the `0.0` so that quotient will equal to `2.2`.

> var quotient = 4.4 / 2.0; // Change this line

----

16. **Finding a Remainder in JavaScript**

The *remainder* operator `%` gives the remainder of the division of two numbers.

**Example**

> 5 % 2 = 1 because<br>
Math.floor(5 / 2) = 2 (Quotient)<br>
2 * 2 = 4<br>
5 - 4 = 1 (Remainder)

**Usage**

In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by `2`.

> 17 % 2 = 1 (17 is Odd)<br>
48 % 2 = 0 (48 is Even)

**Note**

The *remainder* operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers.

✍ Set `remainder` equal to the remainder of `11` divided by `3` using the *remainder* (`%`) operator.

> // Only change code below this line<br><br>
var remainder = 11 % 3;

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
