# FreeCodeCamp
## JavaScript Algorithms and Data Structures

![JS cert](https://i.ibb.co/QYpXdg2/Screen-Shot-2020-09-30-at-14-53-47.png)

[JavaScript Certificate Verification](https://www.freecodecamp.org/certification/fcca8de9fc8-ae81-430b-a26f-3ca8b9761fd8/javascript-algorithms-and-data-structures)


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

✍ *Set `remainder` equal to the remainder of `11` divided by `3` using the *remainder* (`%`) operator.*

> // Only change code below this line<br><br>
var remainder = 11 % 3;

----

17. **Compound Assignment With Augmented Addition**

In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

> myVar = myVar + 5;

to add `5` to `myVar`. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the `+=` operator.
 > var myVar = 1;<br>
 myVar += 5;<br>
 console.log(myVar); // Returns 6

✍ *Convert the assignments for `a`, `b`, and `c` to use the `+=` operator.*

> var a = 3;<br>
var b = 17;<br>
var c = 12;<br><br>
// Only change code below this line<br>
a += 12;<br>
b += 9;<br>
c += 7;

----

18. **Compound Assignment With Augmented SubtractionPassed**

Like the `+=` operator, `-=` subtracts a number from a variable.

`myVar = myVar - 5;`

will subtract `5` from `myVar`. This can be rewritten as:

`myVar -= 5;`

✍ *Convert the assignments for `a`, `b`, and `c` to use the `-=` operator.*

> var a = 11;<br>
var b = 9;<br>
var c = 3;<br><br>
// Only change code below this line<br>
a -= 6;<br>
b -= 15;<br>
c -= 1;

----

19. **Compound Assignment With Augmented Multiplication**

The `*=` operator multiplies a variable by a number.

`myVar = myVar * 5;`

will multiply `myVar` by `5`. This can be rewritten as:

`myVar *= 5;`

✍ _Convert the assignments for `a`, `b`, and `c` to use the `*=` operator._

> var a = 5;<br>
var b = 12;<br>
var c = 4.6;<br><br>
// Only change code below this line<br>
a *= 5;<br>
b *= 3;<br>
c *= 10;

----

20. **Compound Assignment With Augmented Division**

The `/=` operator divides a variable by another number.

`myVar = myVar / 5;`

Will divide `myVar` by `5`. This can be rewritten as:

`myVar /= 5;`

✍ *Convert the assignments for `a`, `b`, and `c` to use the `/=` operator.*

> var a = 48;<br>
var b = 108;<br>
var c = 33;<br><br>
// Only change code below this line<br>
a /= 12;<br>
b /= 4;<br>
c /= 11;

----

21. **Declare String Variables**

Previously we have used the code

`var myName = "your name";`

`"your name"` is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes.

✍ *Create two new `string` variables: `myFirstName` and `myLastName` and assign them the values of your first and last name, respectively.*

> var myFirstName = "Nattawoot";<br>
var myLastName = 'Denduangchai';

----
22. **Escaping Literal Quotes in Strings**

When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: `"` or `'` inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (`\`) in front of the quote.

`var sampleStr = "Alan said, \"Peter is learning JavaScript\".";`

This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

`Alan said, "Peter is learning JavaScript".`

✍ _Use *backslashes* to assign a string to the `myStr` variable so that if you were to print it to the console, you would see:_

_`I am a "double quoted" string inside "double quotes".`_

> var myStr = "I am a \\"double quoted\\" string inside \\"double quotes\\"."; // Change this line

----
23. **Quoting Strings with Single Quotes**

*String* values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

> doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';

The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an `<a>` tag with various attributes in quotes, all within a string.

> conversation = 'Finn exclaims to Jake, "Algebraic!"';

However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

> goodStr = 'Jake asks Finn, "Hey, let\\'s go on an adventure?"';<br> 
badStr = 'Finn responds, "Let's go!"'; // Throws an error

In the *goodStr* above, you can use both quotes safely by using backslash `\` as an escape character.

**Note**

The backslash `\` should not be confused with the forward slash `/`. They do not do the same thing.

✍ *Change the provided string to a string with single quotes at the beginning and end and no escape characters.*

<pre>
var myStr = '<a href=\"http://www.example.com\" target=\"_blank">Link</a>';
</pre>

----

24. **Escape Sequences in Strings**

Quotes are not the only characters that can be `escaped` inside a string. There are two reasons to use escaping characters:

1. To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
2. To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.

We learned this in the previous challenge.

Code | Output
--- | ---
\\' | single quote
\\" | double quote
\\\ | backslash
\\n | newline
\\r | carriage return
\\t | tap
\\b | word boundary
\\f | form feed

*Note that the backslash itself must be escaped in order to display as a backslash.*

✍ *Assign the following three lines of text into the single variable `myStr` using escape sequences*

<pre>
FirstLine
    \SecondLine
ThirdLine
</pre>

You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

Here is the text with the escape sequences written out.

"FirstLine `newline tab backslash` SecondLine `newline` ThirdLine"

<pre>
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
</pre>

----

25. **Concatenating Strings with Plus Operator**

In JavaScript, when the `+` operator is used with a `String` value, it is called the *concatenation* operator. You can build a new string out of other strings by `concatenating` them together.

**Example**

<pre>'My name is Alan,' + ' I concatenate.'</pre>

**Note**

Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

**Example**

<pre>
var ourStr = "I come first. " + "I come second.";
// ourStr is "I come first. I come second."
</pre>

✍ *Build `myStr` from the strings `"This is the start. "` and `"This is the end."` using the + operator.*

<pre>
var myStr = "This is the start. " + "This is the end."; // Only change this line
</pre>

----

26. **Concatenating Strings with the Plus Equals Operator**

We can also use the `+=` operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

**Note**

Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

**Example**

<pre>
var ourStr = "I come first. ";
ourStr += "I come second.";
// ourStr is now "I come first. I come second."
</pre>

✍ *Build `myStr` over severall lines by concatenating these two strings: `"This is the first sentence. "` and `"This is the second sentence."` using the `+=` operator. Use the `+=` operator similar to how it is shown in the editor. Start by assigning the first string to `myStr`, then add on the second string.*


<pre>
// Only change code below this line

var myStr = "This is the first sentence. ";

myStr += "This is the second sentence.";
</pre>

----
27. **Constructing Strings with Variables**

Sometimes you will need to build a string, *Mad Libs* style. By using the concatenation operator (`+`), you can insert one or more variables into a string you're building.

**Example:**

<pre>
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
// ourStr is now "Hello, our name is freeCodeCamp, how are you?"
</pre>

✍ *Set `myName` to a string equal to your name and build `myStr` with `myName` between the strings `"My name is "` and `" and I am well!"`*

<pre>
// Only change code below this line
var myName = "Nattawoot";
var myStr = "My name is " + myName + " and I am well!";
</pre>

----

28. **Appending Variables to Strings**

Just as we build a string over multiple lines out of string *literals*, we can also append variables to a string using the plus equals (`+=`) operator.

**Example**

<pre>
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// ourStr is now "freeCodeCamp is awesome!"
</pre>

✍ *Set `someAdjective` and append it to `myStr` using the `+=` operator.*

<pre>
// Change code below this line

var someAdjective = "fun";
var myStr = "Learning to code is ";

myStr += someAdjective;
</pre>

----

29. **Find the Length of a String**

You can find the length of a `string` value by writing `.length` after the string variable or string literal.

`"Alan Peter".length; // 10`

For example, if we created a variable `var firstName = "Charles"`, we could find out how long the string `"Charles"` is by using the `firstName.length` property.

✍ *Use the `.length` property to count the number of characters in the `lastName` variable and assign it to `lastNameLength`.*

<pre>
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;
</pre>

----

30. **Use Bracket Notation to Find the First Character in a String**

*Bracket notation* is a way to get a character at a specific `index` within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as *Zero-based* indexing.

For example, the character at index 0 in the word "Charles" is "C". So if `var firstName = "Charles"`, you can get the value of the first letter of the string by using `firstName[0]`.

**Example:**

<pre>
var firstName = "Charles";
var firstLatter = firstName[0]; // firstLetter is "C"
</pre>

✍ *Use bracket notation to find the first character in the `lastName` variable and assign it to `firstLetterOfLastName`.*

**Hint**: *Try looking at the example above if you get stuck.*

<pre>
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
</pre>

----

31. **Understand String Immutability**

In JavaScript, `String` values are *immutable*, which means that they cannot be altered once created.

For example, the following code:

<pre>
var myStr = "Bob";
myStr[0] = "J";
</pre>

cannot change the value of `myStr` to "Job", because the contents of `myStr` cannot be altered. Note that this does *not* mean that `myStr` cannot be changed, just that the individual characters of a *string literal* cannot be changed. The only way to change `myStr` would be to assign it with a new string, like this:

<pre>
var myStr = "Bob";
myStr = "Job";
</pre>

✍ *Correct the assignment to `myStr` so it contains the string value of `Hello World` using the approach shown in the example above*.

<pre>
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
</pre>

----

32. **Use Bracket Notation to Find the Nth Character in a String**

You can also use *bracket notation* to get the character at other positions within a string.

Remember that computers start counting at `0`, so the first character is actually the zeroth character.

**Example:**

<pre>
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1]; // secondLetterOfFirstName is "d"
</pre>

✍ *Let's try to set `thirdLetterOfLastName` to equal the third letter of the `lastName` variable using bracket notation.*

**Hint**: *Try looking at the example above if you get stuck.*

<pre>
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line
</pre>

----

33. **Use Bracket Notation to Find the Last Character in a String**

In order to get the last letter of a string, you can subtract one from the string's length.

For example, if `var firstName = "Charles"`, you can get the value of the last letter of the string by using `firstName[firstName.length - 1]`.

**Example:**

<pre>
var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1]; // lastLetter is "s"
</pre>

✍ Use *bracket notation* to find the last character in the `lastName` variable.

**Hint**: Try looking at the example above if you get stuck.

<pre>
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
</pre>

----

34. **Use Bracket Notation to Find the Nth-to-Last Character in a String**

You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the `var firstName = "Charles"` string by using `firstName[firstName.length - 3]`

**Example:**

<pre>
var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3]; // thirdToLastLetter is "l"
</pre>

✍ *Use bracket notation to find the second-to-last character in the `lastName` string.*

**Hint**: *Try looking at the example above if you get stuck.*

<pre>
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
</pre>

----

35. **Word Blanks**

We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.

In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence - "It was really ____, and we ____ ourselves ____". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

<pre>
var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
</pre>

✍ *In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.*

*You will need to use the string concatenation operator `+` to build a new string, using the provided variables: `myNoun`, `myAdjective`, `myVerb`, and myAdverb. You will then assign the formed string to the `wordBlanks` variable. You should not change the words assigned to the variables.*

*You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.*

<pre>
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "A " + myAdjective + " " + myNoun + " " + myVerb + " very " + myAdverb + "."; // Change this line
// Only change code above this line
</pre>

----

36. **Store Multiple Values in one Variable using JavaScript Arrays**

With JavaScript `array` variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

`var sandwich = ["peanut butter", "jelly", "bread"]`.

✍ *Modify the new array myArray so that it contains both a string and a number (in that order).*

**Hint**
*Refer to the example code in the text editor if you get stuck.*

<pre>
// Only change code below this line
var myArray = ["test", 101];
</pre>

----

37. **Nest one Array within Another Array**

You can also nest arrays within other arrays, like below:

<pre>
[["Bulls", 23], ["White Sox", 45]]
</pre>

This is also called a *multi-dimensional array*.

✍ *Create a nested array called myArray.*

<pre>
// Only change code below this line
var myArray = [["Tae", 23], ["Data"], 26];
</pre>

----

38. **Access Array Data with Indexes**

We can access the data inside arrays using *indexes*.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of `0`.

**Example**
<pre>
var array = [50,60,70];
array[0]; // equals 50
var data = array[1];  // equals 60
</pre>

**Note**

There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

✍ *Create a variable called myData and set it to equal the first value of myArray using bracket notation.*

<pre>
// Setup
var myArray = [50,60,70];

// Only change code below this line
var myData = myArray[0];
</pre>

----

39. **Modify Array Data With Indexes**

Unlike strings, the entries of arrays are mutable and can be changed freely.

**Example**

<pre>
var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
</pre>

**Note**

There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

✍ *Modify the data stored at index `0` of `myArray` to a value of `45`.*

<pre>
// Setup
var myArray = [18,64,99];

// Only change code below this line
myArray[0] = 45;
</pre>

----

40. **Access Multi-Dimensional Arrays With Indexes**

One way to think of a *multi-dimensional array*, is as an *array of arrays*. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

**Example**

<pre>
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
</pre>

**Note**

There shouldn't be any spaces between the array name and the square brackets, like `array [0][0]` and even this `array [0] [0]` is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

✍ *Using bracket notation select an element from `myArray` such that `myData` is equal to `8`.*

<pre>
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[2][1];
</pre>

----

41. **Manipulate Arrays With push()**

An easy way to append data to the end of an array is via the `push()` function.

`.push()` takes one or more parameters and "pushes" them onto the end of the array.

**Examples:**

<pre>
var arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
</pre>

✍ *Push `["dog", 3]` onto the end of the `myArray` variable.*

<pre>
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
</pre>

----

42. **Manipulate Arrays With pop()**

Another way to change the data in an array is with the `.pop()` function.

`.pop()` is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, `.pop()` removes the last element from an array and returns that element.

Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

<pre>
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
</pre>

✍ Use the `.pop()` function to remove the last item from `myArray`, assigning the "popped off" value to `removedFromMyArray`.

<pre>
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();
</pre>

----

43. **Manipulate Arrays With shift()**

`pop()` always removes the last element of an array. What if you want to remove the first?

That's where `.shift()` comes in. It works just like `.pop()`, except it removes the first element instead of the last.

**Example:**

<pre>
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
</pre>

✍ *Use the `.shift()` function to remove the first item from `myArray`, assigning the "shifted off" value to `removedFromMyArray`.*

<pre>
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();
</pre>

----

44. **Manipulate Arrays With unshift()**

Not only can you `shift` elements off of the beginning of an array, you can also `unshift` elements to the beginning of an array i.e. add elements in front of the array.

`.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()` adds the element at the beginning of the array.

**Example:**

<pre>
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
</pre>

✍ *Add `["Paul",35]` to the beginning of the `myArray` variable using `unshift()`.*

<pre>
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35]);
</pre>

----

45. **Shopping List**

✍ *Create a shopping list in the variable `myList`. The list should be a multi-dimensional array containing several sub-arrays.*

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

`["Chocolate Bar", 15]`

*There should be at least 5 sub-arrays in the list.*

<pre>
var myList = [["Chocolate Bar", 15],["egg", 30],["toothpaste", 1],["Soap Bar", 4],["Chicken", 2]];
</pre>

----

46. **Write Reusable JavaScript with Functions**

In JavaScript, we can divide up our code into reusable parts called *functions*.

Here's an example of a function:
<pre>
function functionName() {
  console.log("Hello World");
}
</pre>
You can call or `invoke` this function by using its name followed by parentheses, like this: `functionName();` Each time the function is called it will print out the message `"Hello World"` on the dev console. All of the code between the curly braces will be executed every time the function is called.

✍ *Create a function called reusableFunction which prints "Hi World" to the dev console.*<br>
✍ *Call the function.*

<pre>
function reusableFunction() {
  console.log("Hi World");
} 

reusableFunction()
</pre>

----

47. **Passing Values to Functions with Arguments**

*Parameters* are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "*passed*") into a function when it is called are known as *arguments*.

Here is a function with two parameters, `param1` and `param2`:

<pre>
function testFun(param1, param2) {
  console.log(param1, param2);
}
</pre>

Then we can call `testFun`: `testFun("Hello", "World");` We have passed two arguments, `"Hello"` and `"World"`. Inside the function, `param1` will equal "Hello" and `param2` will equal "World". Note that you could call `testFun` again with different arguments and the parameters would take on the value of the new arguments.

✍ *Create a function called `functionWithArgs` that accepts two arguments and outputs their sum to the dev console.*<br>
✍ Call the function with two numbers as arguments.

<pre>
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}

functionWithArgs(7, 8);
</pre>

----

48. **Global Scope and Functions**

In JavaScript, *scope* refers to the visibility of variables. Variables which are defined outside of a function block have *Global* scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the `var` keyword are automatically created in the `global` scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `var`.

✍ *Using `var`, declare a global variable named `myGlobal` outside of any function. Initialize it with a value of `10`.*

✍ *Inside function `fun1`, assign `5` to `oopsGlobal` **without** using the `var` keyword.*

<pre>
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
</pre>

----

49. **Local Scope and Functions**

Variables which are declared within a function, as well as the function parameters have *local scope*. That means, they are only visible within that function.

Here is a function `myTest` with a local variable called `loc`.
<pre>
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
</pre>
`loc` is not defined outside of the function.

✍ *The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.*

**Note**: *The console will still have 'ReferenceError: myVar is not defined', but this will not cause the tests to fail.*

<pre>
function myLocalScope() {
  'use strict';

  // Only change code below this line
  var myVar = 'use strict';
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
</pre>

----

50. **Global vs. Local Scope in Functions**

It is possible to have both *local* and *global* variables with the same name. When you do this, the `local` variable takes precedence over the `global` variable.

In this example:
<pre>
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
</pre>
The function `myFun` will return `"Head"` because the `local` version of the variable is present.

✍ *Add a local variable to `myOutfit` function to override the value of `outerWear` with `"sweater"`.*

<pre>
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
</pre>

----

51. **Return a Value from a Function with Return**

We can pass values into a function with *arguments*. You can use a `return` statement to send a value back out of a function.

**Example**
<pre>
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
</pre>
`plusThree` takes an argument for `num` and returns a value equal to `num + 3`.

Create a function `timesFive` that accepts one argument, multiplies it by `5`, and returns the new value. See the last line in the editor for an example of how you can test your `timesFive` function.

<pre>
function timesFive(num) {
  return num * 5;
}
var answer = timesFive(3);
</pre>

----

52. **Understanding Undefined Value returned from a Function**

A function can include the `return` statement but it does not have to. In the case that the function doesn't have a `return` statement, when you call it, the function processes the inner code but the returned value is `undefined`.

**Example**
<pre>
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined
</pre>
`addSum` is a function without a `return` statement. The function will change the global `sum` variable but the returned value of the function is `undefined`.

✍ *Create a function `addFive` without any arguments. This function adds 5 to the `sum` variable, but its returned value is `undefined`.*

<pre>
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
</pre>

----

53. **Assignment with a Returned Value**

If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function `sum` which adds two numbers together, then:

`ourSum = sum(5, 12);`

will call `sum` function, which returns a value of `17` and assigns it to `ourSum` variable.

✍ *Call the `processArg` function with an argument of `7` and assign its return value to the variable `processed`.*

<pre>
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
</pre>

----

54. **Stand in Line**

In Computer Science a queue is an abstract `Data Structure` where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

✍ *Write a function `nextInLine` which takes an array (`arr`) and a number (`item`) as arguments.*

*Add the number to the end of the array, then remove the first element of the array.*

*The `nextInLine` function should then return the element that was removed.*

<pre>
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  var removed = arr.shift();
  return removed;
  // Only change code above this line
  
}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
</pre>

----

55. **Understanding Boolean Values**

Another data type is the Boolean. `Booleans` may only be one of two values: `true` or `false`. They are basically little on-off switches, where `true` is "on" and `false` is "off." These two states are mutually exclusive.

**Note**

`Boolean` values are never written with quotes. The `strings` `"true"` and `"false"` are not `Boolean` and have no special meaning in JavaScript.

✍ *Modify the `welcomeToBooleans` function so that it returns `true` instead of `false` when the run button is clicked.*

<pre>
function welcomeToBooleans() {

  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}
</pre>

----

56. **Use Conditional Logic with If Statements**

`If` statements are used to make decisions in code. The keyword `if` tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as `Boolean` conditions and they may only be `true` or `false`.

When the condition evaluates to `true`, the program executes the statement inside the curly braces. When the Boolean condition evaluates to `false`, the statement inside the curly braces will not execute.

**Pseudocode**
<pre>
if (condition is true) {
  statement is executed
}
</pre>
**Example**
<pre>
function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"
</pre>

When `test` is called with a value of `true`, the `if` statement evaluates `myCondition` to see if it is `true` or not. Since it is true, the function returns `"It was true"`. When we call `test` with a value of `false`, `myCondition` is not `true` and the statement in the curly braces is not executed and the function returns `"It was false"`.

✍ *Create an `if` statement inside the function to return `"Yes, that was true"` if the parameter `wasThatTrue` is true and return `"No, that was false"` otherwise.*

<pre>
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line

}
</pre>

----

57. **Comparison with the Equality Operator**

There are many *comparison operators* in JavaScript. All of these operators return a boolean `true` or `false` value.

The most basic operator is the equality operator `==`. The equality operator compares two values and returns `true` if they're equivalent or `false` if they are not. Note that equality is different from assignment (`=`), which assigns the value on the right of the operator to a variable on the left.

<pre>
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
</pre>

If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal". In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

<pre>
1   ==  1   // true
1   ==  2   // false
1   == '1'  // true
"3" ==  3   // true
</pre>

✍ *Add the equality operator to the indicated line so that the function will return "Equal" when `val` is equivalent to `12`.*

<pre>
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

</pre>

----

58. **Comparison with the Strict Equality Operator**

Strict equality (`===`) is the counterpart to the equality operator (`==`). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

**Examples**

<pre>
3 ===  3   // true
3 === '3'  // false
</pre>

In the second example, `3` is a `Number` type and `'3'` is a `String` type.

✍ *Use the strict equality operator in the `if` statement so the function will return "Equal" when `val` is strictly equal to `7`*

<pre>
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
</pre>

----

59. **Practice comparing different values**

In the last two challenges, we learned about the equality operator (`==`) and the strict equality operator (`===`). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

**Examples**
<pre>
3 == '3'  // returns true because JavaScript performs type conversion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed
</pre>
**Note**

In JavaScript, you can determine the type of a variable or a value with the `typeof` operator, as follows:
<pre>
typeof 3   // returns 'number'
typeof '3' // returns 'string'
</pre>

✍ *The `compareEquality` function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.*

<pre>
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
</pre>

----

60. **Comparison with the Inequality Operator**

The inequality operator (`!=`) is the opposite of the equality operator. It means "Not Equal" and returns `false` where equality would return `true` and *vice versa*. Like the equality operator, the inequality operator will convert data types of values while comparing.

**Examples**

<pre>
1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false
</pre>

✍ *Add the inequality operator `!=` in the `if` statement so that the function will return "Not Equal" when `val` is not equivalent to `99`*

<pre>
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
</pre>

----

61. **Comparison with the Strict Inequality Operator**

The strict inequality operator (`!==`) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns `false` where strict equality would return `true` and *vice versa*. Strict inequality will not convert data types.

**Examples**
<pre>
3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true
</pre>
✍ *Add the strict inequality operator to the `if` statement so the function will return "Not Equal" when `val` is not strictly equal to `17`*

<pre>
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
</pre>

----

62. **Comparison with the Greater Than Operator**

The greater than operator (`>`) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns `true`. Otherwise, it returns `false`.

Like the equality operator, greater than operator will convert data types of values while comparing.

**Examples**
<pre>
5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false
</pre>

✍ *Add the greater than operator to the indicated lines so that the return statements make sense.*

<pre>
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
</pre>

----

63. **Comparison with the Greater Than Or Equal To Operator**

The greater than or equal to operator (`>=`) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns `true`. Otherwise, it returns `false`.

Like the equality operator, `greater than or equal to` operator will convert data types while comparing.

**Examples**

<pre>
6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false
</pre>

✍ *Add the greater than or equal to operator to the indicated lines so that the return statements make sense.*

<pre>
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
</pre>

----

64. **Comparison with the Less Than Operator**

The less than operator (`<`) compares the values of two numbers. If the number to the left is less than the number to the right, it returns `true`. Otherwise, it returns `false`. Like the equality operator, less than operator converts data types while comparing.

**Examples**

2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false

✍ *Add the less than operator to the indicated lines so that the return statements make sense.*

<pre>
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
</pre>

----

65. **Comparison with the Less Than Or Equal To OperatorPassed**

The less than or equal to operator (`<=`) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns `true`. If the number on the left is greater than the number on the right, it returns `false`. Like the equality operator, `less than or equal to` converts data types.

**Examples**

<pre>
4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false
</pre>

✍ *Add the less than or equal to operator to the indicated lines so that the return statements make sense.*

<pre>
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
</pre>

----

66. **Comparisons with the Logical And Operator**

Sometimes you will need to test more than one thing at a time. The *logical and operator* (`&&`) returns `true` if and only if the *operands* to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

<pre>
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
</pre>

will only return "Yes" if `num` is greater than `5` and less than `10`. The same logic can be written as:

<pre>
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
</pre>

✍ *Replace the two if statements with one statement, using the && operator, which will return `"Yes"` if `val` is less than or equal to `50` and greater than or equal to `25`. Otherwise, will return `"No"`.*

<pre>
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
    }
  return "No";

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
</pre>

----

67. **Comparisons with the Logical Or Operator**

The *logical* or operator (`||`) returns `true` if either of the operands is true. Otherwise, it returns `false`.

The *logical* or operator is composed of two pipe symbols: (`||`). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:
<pre>
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
</pre>
will return "Yes" only if `num` is between `5` and `10` (5 and 10 included). The same logic can be written as:
<pre>
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
</pre>

✍ *Combine the two `if` statements into one statement which returns `"Outside"` if `val` is not between `10` and `20`, inclusive. Otherwise, return `"Inside"`.*

<pre>
function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
</pre>

----

68. **Introducing Else Statements**

When a condition for an `if` statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an `else` statement, an alternate block of code can be executed.

<pre>
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
</pre>

✍ *Combine the `if` statements into a single `if/else` statement.*

<pre>
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
</pre>

----

69. **Introducing Else If Statements**

If you have multiple conditions that need to be addressed, you can chain `if` statements together with `else if` statements.

<pre>
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
</pre>

✍ *Convert the logic to use `else if` statements.*

<pre>
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
}
}
testElseIf(7);
</pre>

----

70. **Logical Order in If Else StatementsPassed**

Order is important in `if`, `else if` statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first:
<pre>
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
</pre>
And the second just switches the order of the statements:
<pre>
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
</pre>
While these two functions look nearly identical if we pass a number to both we get different outputs.

<pre>
foo(0) // "Less than one"
bar(0) // "Less than two"
</pre>

✍ *Change the order of logic in the function so that it will return the correct statements in all cases.*

<pre>
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
</pre>

----

71. **Chaining If Else Statements**

`if/else` statements can be chained together for complex logic. Here is pseudocode of multiple chained `if` / `else if` statements:

<pre>
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
</pre>

✍ *Write chained if/else if statements to fulfill the following conditions:*

`num < 5` - return "Tiny"</br>
`num < 10` - return "Small"</br>
`num < 15` - return "Medium"</br>
`num < 20` - return "Large"</br>
`num >= 20` - return "Huge"

<pre>
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } 
  // Only change code above this line
}

testSize(7);
</pre>

----

72. **Golf Code**

✍ *In the game of golf each hole has a `par` meaning the average number of `strokes` a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below `par` your `strokes` are, there is a different nickname.*

*Your function will be passed `par` and `strokes` arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):*

Strokes	| Return
---|---
1	| "Hole-in-one!"
<= par - 2	| "Eagle"
par - 1	| "Birdie"
par |	"Par"
par + 1 |	"Bogey"
par + 2	 | "Double Bogey"
|>= par + 3 |	"Go Home!"

*`par` and `strokes` will always be numeric and positive. We have added an array of all the names for your convenience.*

<pre>
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line

if (strokes == 1) {
  return "Hole-in-one!";
} else if (strokes <= par - 2) {
  return "Eagle";
} else if (strokes == par - 1) {
  return "Birdie";
} else if (strokes == par) {
  return "Par";
} else if (strokes == par + 1) {
  return "Bogey";
} else if (strokes == par + 2) {
  return "Double Bogey";
} else if (strokes >= par + 3) {
  return "Go Home!";
}
  // Only change code above this line
}

golfScore(5, 4);
</pre>

----

73. **Selecting from Many Options with Switch Statements**

If you have many options to choose from, use a `switch` statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched `case` value until a `break` is encountered.

Here is an example of a `switch` statement:
<pre>
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
</pre>
`case` values are tested with strict equality (`===`). The `break` tells JavaScript to stop executing statements. If the `break` is omitted, the next statement will be executed.

✍ *Write a switch statement which tests `val` and sets `answer` for the following conditions:<br>
`1` - "alpha"<br>
`2` - "beta"<br>
`3` - "gamma"<br>
`4` - "delta"*

<pre>
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
  // Only change code above this line
  return answer;
}

caseInSwitch(1);
</pre>

----

74. **Adding a Default Option in Switch Statements**

In a `switch` statement you may not be able to specify all possible values as `case` statements. Instead, you can add the `default` statement which will be executed if no matching `case` statements are found. Think of it like the final `else` statement in an `if/else` chain.

A `default` statement should be the last case.
<pre>
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
</pre>

✍ *Write a switch statement to set `answer` for the following conditions:<br>
`"a"` - "apple"<br>
`"b"` - "bird"<br>
`"c"` - "cat"<br>
`default` - "stuff"*

<pre>
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }
  // Only change code above this line
  return answer;
}

switchOfStuff(1);
</pre>

----

75. **Multiple Identical Options in Switch Statements**

If the `break` statement is omitted from a `switch` statement's `case`, the following case statement(s) are executed until a `break` is encountered. If you have multiple `inputs` with the same output, you can represent them in a `switch` statement like this:
<pre>
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
</pre>
Cases for 1, 2, and 3 will all produce the same result.

✍ *Write a switch statement to set `answer` for the following ranges:<br>
`1-3` - "Low"<br>
`4-6` - "Mid"<br>
`7-9` - "High"*

**Note**

*You will need to have a `case` statement for each number in the range.*

<pre>
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);
</pre>

----

76. **Replacing If Else Chains with Switch**

If you have many options to choose from, a `switch` statement can be easier to write than many chained `if/else if` statements. The following:
<pre>
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
</pre>
can be replaced with:
<pre>
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
</pre>
✍ *Change the chained `if`/`else if `statements into a `switch` statement.*

<pre>
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
  
  case "bob":
    return "Marley";
    break;
  case 42:
    return "The Answer";
    break;
  case 1: 
    return "There is no #1";
    break;
  case 99:
    return "Missed me by this much!";
    break;
  case 7:
    return "Ate Nine";
    break;
  }
  
  // Only change code above this line
  return answer;
}

chainToSwitch(7);
</pre>

----

77. **Returning Boolean Values from Functions**

You may recall from Comparison with the Equality Operator that all comparison operators return a boolean `true` or `false` value.

Sometimes people use an if/else statement to do a comparison, like this:
<pre>
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
</pre>
But there's a better way to do this. Since `===` returns `true` or `false`, we can return the result of the comparison:
<pre>
function isEqual(a,b) {
  return a === b;
}
</pre>
✍ *Fix the function `isLess` to remove the `if/else` statements.*

<pre>
function isLess(a, b) {
  // Only change code below this line
  
    return a < b;
  
  // Only change code above this line
}

isLess(10, 15);
</pre>

----

78. **Return Early Pattern for Functions**

When a `return` statement is reached, the execution of the current function stops and control returns to the calling location.

**Example**
<pre>
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
</pre>
The above outputs "Hello" to the console, returns "World", but `"byebye"` is never output, because the function exits at the `return` statement.

✍ *Modify the function `abTest` so that if `a` or `b` are less than `0` the function will immediately exit with a value of `undefined`.*

**Hint**

*Remember that `undefined` is a keyword, not a string.*

<pre>
// Setup
function abTest(a, b) {
  // Only change code below this line

  if (a < 0 || b < 0) {
    return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
</pre>

----

79. **Counting Cards**

In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change |	Cards
---|---
+1 |	2, 3, 4, 5, 6
0 |	7, 8, 9
-1 |	10, 'J', 'Q', 'K', 'A'

✍ *You will write a card counting function. It will receive a `card` parameter, which can be a number or a string, and increment or decrement the global `count` variable according to the card's value (see table). The function will then return a string with the current count and the string `Bet` if the count is positive, or `Hold` if the count is zero or negative. The current count and the player's decision (`Bet` or `Hold`) should be separated by a single space.*

**Example Output**<br>
`-3 Hold`<br>
`5 Bet`

**Hint**

*Do NOT reset `count` to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.*

<pre>
var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count ++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count --;
    break;
  }
  if (count > 0) {
  return count + " Bet";
  } else {
    return count + " Hold"
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
</pre>

----

80. **Build JavaScript Objects**

You may have heard the term `object` before.

Objects are similar to `arrays`, except that instead of using indexes to access and modify their data, you access the data in objects through what are called `properties`.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:
<pre>
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
</pre>
In this example, all the properties are stored as strings, such as - `"name"`, `"legs"`, and `"tails"`. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:
<pre>
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
</pre>
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

✍ *Make an object that represents a dog called `myDog` which contains the properties `"name"` (a string), `"legs"`, `"tails"` and `"friends"`.*

*You can set these object properties to whatever values you want, as long as `"name"` is a string, `"legs"` and `"tails"` are numbers, and `"friends"` is an array.*

<pre>
var myDog = {
// Only change code below this line
  "name": "Tæ",
  "legs": 4,
  "tails": 1,
  "friends":  ['Data', 'Cherry', 'Man']
// Only change code above this line
};
</pre>

----

81. **Accessing Object Properties with Dot Notation**

There are two ways to access the properties of an object: dot notation (`.`) and bracket notation (`[]`), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using dot notation (`.`) to read an object's property:

<pre>
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
</pre>

✍ *Read in the property values of `testObj` using dot notation. Set the variable `hatValue` equal to the object's property `hat` and set the variable `shirtValue` equal to the object's property `shirt`.*

<pre>
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line
</pre>

----
82. **Accessing Object Properties with Bracket Notation**

The second way to access the properties of an object is bracket notation (`[]`). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:

<pre>
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise
</pre>

Note that property names with spaces in them must be in quotes (single or double).

✍ *Read the values of the properties `"an entree"` and `"the drink"` of `testObj` using bracket notation and assign them to `entreeValue` and `drinkValue` respectively.*

<pre>
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line
</pre>

----

83. **Accessing Object Properties with Variables**

Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

<pre>
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
</pre>

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

<pre>
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
</pre>

Note that we *do not* use quotes around the variable name when using it to access the property because we are using the *value* of the variable, not the *name*.

✍ *Use the `playerNumber` variable to look up player `16` in `testObj` using bracket notation. Then assign that name to the `player` variable.*

<pre>
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line
</pre>

----

84. **Updating Object Properties**

After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

For example, let's look at `ourDog`:

<pre>
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
</pre>

Since he's a particularly happy dog, let's change his name to "Happy Camper". Here's how we update his object's name property: `ourDog.name = "Happy Camper";` or `ourDog["name"] = "Happy Camper";` Now when we evaluate ourDog.name, instead of getting "Camper", we'll get his new name, "Happy Camper".

✍ *Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.*

<pre>
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";
</pre>

----

85. **Add New Properties to a JavaScript Object**

You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a `"bark"` property to `ourDog`:

`ourDog.bark = "bow-wow";`

or

`ourDog["bark"] = "bow-wow";`

Now when we evaluate `ourDog.bark`, we'll get his bark, "bow-wow".

Example:

<pre>
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
</pre>

✍ *Add a "bark" property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.*

<pre>
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.bark = "woof";
</pre>

----

86. **Delete Properties from a JavaScript Object**

We can also delete properties from objects like this:

`delete ourDog.bark;`

Example:

<pre>
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
</pre>

After the last line shown above, `ourDog` looks like:

<pre>
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
</pre>

✍ *Delete the `"tails"` property from `myDog`. You may use either dot or bracket notation.*

<pre>
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

delete myDog.tails;
</pre>

----

87. **Using Objects for Lookups**

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a `switch` statement or an `if/else` chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

<pre>
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"
</pre>

✍ *Convert the switch statement into an object called `lookup`. Use it to look up `val` and assign the associated string to the `result` variable.*

<pre>
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
   "alpha":"Adams",
   "bravo":"Boston",
   "charlie":"Chicago",
   "delta":"Denver",
   "echo":"Easy",
   "foxtrot":"Frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
</pre>

----

88. **Testing Objects for Properties**

Sometimes it is useful to check if the property of a given object exists or not. We can use the `.hasOwnProperty(propname)` method of objects to determine if that object has the given property name. `.hasOwnProperty()` returns `true` or `false` if the property is found or not.

**Example**

<pre>
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
</pre>

✍ *Modify the function `checkObj` to test if an object passed to the function (`obj`) contains a specific property (`checkProp`). If the property is found, return that property's value. If not, return `"Not Found"`.*

<pre>
function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)) {
  return obj[checkProp];
  } else {
    return "Not Found";
  };
  // Only change code above this line
}
</pre>

----

89. **Manipulating Complex Objects**

Sometimes you may want to store data in a flexible *Data Structure*. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of *strings*, *numbers*, *booleans*, *arrays*, *functions*, and *objects*.

Here's an example of a complex data structure:

<pre>
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
</pre>

This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested `"formats"` array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, `"artist":` `"Daft Punk"` is a property that has a key of `"artist"` and a value of `"Daft Punk"`. JavaScript Object Notation or `JSON` is a related data interchange format used to store data.

<pre>
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
</pre>

**Note**

You will need to place a comma after every object in the array, unless it is the last object in the array.

✍ *Add a new album to the `myMusic` array. Add `artist` and `title` strings, `release_year` number, and a `formats` array of strings.*

<pre>
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add a record here
  {
    "artist": "Tæ",
    "title": "Love Coding",
    "release_year": 1996,
    "formats": [
      "CD",
      "MP4",
      "YouTube"
    ]
  }
];
</pre>

----

90. **Accessing Nested Objects**

The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

<pre>
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"
</pre>

✍ *Access the `myStorage` object and assign the contents of the `glove box` property to the `gloveBoxContents` variable. Use dot notation for all properties where possible, otherwise use bracket notation.*

<pre>
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
</pre>

----

91. **Accessing Nested Arrays**

As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:

<pre>
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
</pre>

✍ *Retrieve the second tree from the variable `myPlants` using object dot and array bracket notation.*

<pre>
// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
</pre>

----

92. **Record Collection**

You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

✍ *Write a function which takes an album's `id` (like `2548`), a property `prop` (like `"artist"` or `"tracks"`), and a `value` (like `"Addicted to Love"`) to modify the data in this collection.*

If `prop` isn't `"tracks"` and `value` isn't empty (`""`), update or set the `value` for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If `prop` is `"tracks"` but the album doesn't have a `"tracks"` property, create an empty array before adding the new value to the album's corresponding property.

If `prop` is `"tracks"` and `value` isn't empty (`""`), push the `value` onto the end of the album's existing `tracks` array.

If `value` is empty (`""`), delete the given `prop` property from the album.

Hints
Use `bracket notation` when accessing object properties with variables.

The `push` array method will be helpful here. Check out our Manipulate Arrays With push() challenge to review how it works.

You may refer back to Manipulating Complex Objects Introducing JavaScript Object Notation (JSON) for a refresher.

<pre>
// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  

  return collection;
}

updateRecords(5439, "artist", "ABBA");
</pre>

----

93. **Iterate with JavaScript While Loop**

You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a `while` loop because it runs "while" a specified condition is true and stops once that condition is no longer true.

<pre>
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
</pre>

In the code example above, the `while` loop will execute 5 times and append the numbers 0 through 4 to `ourArray`.

Let's try getting a while loop to work by pushing values to an array.

✍ *Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.*

<pre>
// Setup
var myArray = [];

// Only change code below this line
var i = 5;
while(i > -1) {
  myArray.push(i);
  i--;
}
</pre>

----

94. **Iterate with JavaScript For Loops**

You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a `for` loop because it runs "for" a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

`for ([initialization]; [condition]; [final-expression])`

The `initialization` statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The `condition` statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to `true`. When `condition` is `false` at the start of the iteration, the loop will stop executing. This means if `condition` starts as `false`, your loop will never execute.

The `final-expression` is executed at the end of each loop iteration, prior to the next `condition` check and is usually used to increment or decrement your loop counter.

In the following example we initialize with `i = 0` and iterate while our condition `i < 5` is true. We'll increment `i` by `1` in each loop iteration with `i++` as our `final-expression`.

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
`ourArray` will now contain `[0,1,2,3,4]`.

✍ *Use a `for` loop to work to push the values 1 through 5 onto `myArray`.*

<pre>
// Setup
var myArray = [];

// Only change code below this line
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
</pre>

----

95. **Iterate Odd Numbers With a For Loop**

For loops don't have to iterate one at a time. By changing our `final-expression`, we can count by even numbers.

We'll start at `i = 0` and loop while `i < 10`. We'll increment `i` by 2 each loop with `i += 2`.

<pre>
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
</pre>

`ourArray` will now contain `[0,2,4,6,8]`. Let's change our `initialization` so we can count by odd numbers.

✍ *Push the odd numbers from 1 through 9 to `myArray` using a `for` loop.*

<pre>
// Setup
var myArray = [];

// Only change code below this line
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
</pre>

----

96. **Count Backwards With a For Loop**

A for loop can also count backwards, so long as we can define the right conditions.

In order to count backwards by twos, we'll need to change our `initialization`, `condition`, and final-expression.

We'll start at `i = 10` and loop while `i > 0`. We'll decrement `i` by 2 each loop with `i -= 2`.

<pre>
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
</pre>

`ourArray` will now contain `[10,8,6,4,2]`. Let's change our `initialization` and `final-expression` so we can count backward by twos by odd numbers.

✍ *Push the odd numbers from 9 through 1 to myArray using a for loop.*

<pre>
// Setup
var myArray = [];

// Only change code below this line
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
</pre>

----

97. **Iterate Through an Array with a For Loop**

A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a `for` loop. This code will output each element of the array `arr` to the console:

<pre>
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
</pre>

Remember that arrays have zero-based indexing, which means the last index of the array is `length - 1`. Our condition for this loop is `i < arr.length`, which stops the loop when `i` is equal to length. In this case the last iteration is `i === 4` i.e. when `i` becomes equal to `arr.length` and outputs `6` to the console.

✍ *Declare and initialize a variable `total` to `0`. Use a `for` loop to add the value of each element of the `myArr` array to `total`.*

<pre>
// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
</pre>

----

98. **Nesting For Loops**

If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

<pre>
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
</pre>

This outputs each sub-element in `arr` one at a time. Note that for the inner loop, we are checking the `.length` of `arr[i]`, since `arr[i]` is itself an array.

✍ *Modify function `multiplyAll` so that it returns the product of all the numbers in the sub-arrays of `arr`.*

<pre>
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++){
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
</pre>

----

99. **Iterate with JavaScript Do...While Loops**

The next type of loop you will learn is called a `do...while` loop. It is called a `do...while` loop because it will first `do` one pass of the code inside the loop no matter what, and then continue to run the loop `while` the specified condition evaluates to `true`.

<pre>
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
</pre>

The example above behaves similar to other types of loops, and the resulting array will look like `[0, 1, 2, 3, 4]`. However, what makes the `do...while` different from other loops is how it behaves when the condition fails on the first check. Let's see this in action: Here is a regular `while` loop that will run the code in the loop as long as `i < 5`:

<pre>
var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
</pre>

In this example, we initialize the value of `ourArray` to an empty array and the value of `i` to 5. When we execute the `while` loop, the condition evaluates to `false` because `i` is not less than 5, so we do not execute the code inside the loop. The result is that `ourArray` will end up with no values added to it, and it will still look like `[]` when all of the code in the example above has completed running. Now, take a look at a `do...while` loop:

<pre>
var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
</pre>

In this case, we initialize the value of `i` to 5, just like we did with the `while` loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment `i` before we get to the condition check. When we finally evaluate the condition `i < 5` on the last line, we see that `i` is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of `ourArray` is `[5]`. Essentially, a `do...while` loop ensures that the code inside the loop will run at least once. Let's try getting a `do...while` loop to work by pushing values to an array.

✍ *Change the `while` loop in the code to a `do...while` loop so the loop will push only the number `10` to `myArray`, and `i` will be equal to `11` when your code has finished running.*

<pre>
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
}
while (i < 11);
</pre>

----

100. **Replace Loops using Recursion**

Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first `n` elements of an array to create the product of those elements. Using a `for` loop, you could do this:

<pre>
  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
</pre>

However, notice that `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`. That means you can rewrite `multiply` in terms of itself and never need to use a loop.

<pre>
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
</pre>

The recursive version of `multiply` breaks down like this. In the *base case*, where `n <= 0`, it returns 1. For larger values of `n`, it calls itself, but with `n - 1`. That function call is evaluated in the same way, calling `multiply` again until `n <= 0`. At this point, all the functions can return and the original `multiply` returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when `n <= 0`), otherwise they can never finish executing.

✍ *Write a recursive function, `sum(arr, n)`, that returns the sum of the first `n` elements of an array `arr`.*


<pre>
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
</pre>

----

101. **Profile LookupPassed**

✍ *We have an array of objects representing different people in our contacts lists.*

A `lookUpProfile` function that takes `name` and a property (`prop`) as arguments has been pre-written for you.

The function should check if `name` is an actual contact's `firstName` and the given property (`prop`) is a property of that contact.

If both are true, then return the "value" of that property.

If `name` does not correspond to any contacts then return `"No such contact"`.

*If `prop` does not correspond to any valid properties of a contact found to match `name` then return `"No such property"`.*

<pre>
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for (var x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
        } else {
            return "No such property";
        }
        }
}
        return "No such contact";
    
// Only change code above this line
}

lookUpProfile("Akira", "likes");
</pre>

----

102. **Generate Random Fractions with JavaScript**

Random numbers are useful for creating random behavior.

JavaScript has a `Math.random()` function that generates a random decimal number between `0` (inclusive) and not quite up to `1` (exclusive). Thus `Math.random()` can return a `0` but never quite return a `1`

**Note**

Like Storing Values with the Equal Operator, all function calls will be resolved before the `return` executes, so we can `return` the value of the `Math.random()` function.

✍ *Change `randomFraction` to return a random number instead of returning `0`.*

<pre>
function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}
</pre>

----

103. **Generate Random Whole Numbers with JavaScript**

It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

1. Use `Math.random()` to generate a random decimal.
2. Multiply that random decimal by `20`.
3. Use another function, `Math.floor()` to round the number down to its nearest whole number.

Remember that `Math.random()` can never quite return a `1` and, because we're rounding down, it's impossible to actually get `20`. This technique will give us a whole number between `0` and `19`.

Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);

We are calling `Math.random()`, multiplying the result by 20, then passing the value to `Math.floor()` function to round the value down to the nearest whole number.

✍ *Use this technique to generate and return a random whole number between `0` and `9`.*

<pre>
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}
</pre>

----

104. **Generate Random Whole Numbers within a Range**

Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number `min` and a maximum number `max`.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

`Math.floor(Math.random() * (max - min + 1)) + min`

✍ *Create a function called `randomRange` that takes a range `myMin` and `myMax` and returns a random whole number that's greater than or equal to `myMin`, and is less than or equal to `myMax`, inclusive.*

<pre>
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
</pre>

----

105. **Use the parseInt Function**

The `parseInt()` function parses a string and returns an integer. Here's an example:

`var a = parseInt("007");`

The above function converts the string "007" to an integer 7. If the first character in the string can't be converted into a number, then it returns `NaN`.

✍ *Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.*

<pre>
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");
</pre>

----

106. **Use the parseInt Function with a Radix**

The `parseInt()` function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

`parseInt(string, radix);`

And here's an example:

`var a = parseInt("11", 2);`

The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.

✍ *Use `parseInt()` in the `convertToInteger` function so it converts a binary number to an integer and returns it.*

<pre>
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
</pre>

----

107. **Use the Conditional (Ternary) Operator**

The *conditional operator*, also called the *ternary operator*, can be used as a one line if-else expression.

The syntax is:

`condition ? statement-if-true : statement-if-false;`

The following function uses an if-else statement to check a condition:

<pre>
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
</pre>

This can be re-written using the `conditional operator`:

<pre>
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
</pre>

✍ *Use the `conditional operator` in the `checkEqual` function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".*

<pre>
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);
</pre>

----

108. **Use Multiple Conditional (Ternary) Operators**

In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:

<pre>
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
</pre>

The above function can be re-written using multiple conditional operators:

<pre>
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
</pre>

It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:


<pre>
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
</pre>

✍ *In the `checkSign` function, use multiple conditional operators - following the recommended format used in `findGreaterOrEqual` - to check if a number is positive, negative or zero. The function should return `"positive"`, `"negative"` or `"zero"`.*

<pre>
function checkSign(num) {
  return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
}

checkSign(10);
</pre>

----

109. **Use Recursion to Create a Countdown**

In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with `1` through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The *base case* tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a *recursive call* which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers `1` through `n`. This function will need to accept an argument, `n`, representing the final number. Then it will need to call itself with progressively smaller values of `n` until it reaches `1`. You could write the function as follows:

<pre>
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
</pre>

At first, this seems counterintuitive since the value of `n` decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where `n` is pushed into the array, `countup(n - 1)` has already been evaluated and returned `[1, 2, ..., n - 1]`.

✍ *We have defined a function called `countdown` with one parameter (`n`). The function should use recursion to return an array containing the integers `n` through `1` based on the `n` parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with `n = 5` should return the array `[5, 4, 3, 2, 1]`. Your function must use recursion by calling itself and must not use loops of any kind.*

<pre>
// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line
</pre>

----

110. **Use Recursion to Create a Range of Numbers**

Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

✍ *We have defined a function named `rangeOfNumbers` with two parameters. The function should return an array of integers which begins with a number represented by the `startNum` parameter and ends with a number represented by the `endNum` parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both `startNum` and `endNum` are the same.*

<pre>
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1); 
    numbers.push(endNum);
    return numbers;
  }
}
</pre>

----

### ES6

ECMAScript is a standardized version of JavaScript with the goal of unifying the language's specifications and features. As all major browsers and JavaScript-runtimes follow this specification, the term *ECMAScript* is interchangeable with the term *JavaScript*.

Most of the challenges on freeCodeCamp use the ECMAScript 5 (ES5) specification of the language, finalized in 2009. But JavaScript is an evolving programming language. As features are added and revisions are made, new versions of the language are released for use by developers.

The most recent standardized version is called ECMAScript 6 (ES6), released in 2015. This new version of the language adds some powerful features that will be covered in this section of challenges, including:

- Arrow functions
- Classes
- Modules
- Promises
- Generators
- let and const

**Note**: Not all browsers support ES6 features. If you use ES6 in your own projects, you may need to use a program (transpiler) to convert your ES6 code into ES5 until browsers support ES6.

----

1. **Explore Differences Between the var and let Keywords**

One of the biggest problems with declaring variables with the `var` keyword is that you can overwrite variable declarations without an error.

<pre>
var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'
</pre>

As you can see in the code above, the `camper` variable is originally declared as `James` and then overridden to be `David`. In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.

A new keyword called `let` was introduced in ES6 to solve this potential issue with the `var` keyword. If you were to replace `var` with `let` in the variable declarations of the code above, the result would be an error.

<pre>
let camper = 'James';
let camper = 'David'; // throws an error
</pre>

This error can be seen in the console of your browser. So unlike `var`, when using `let`, a variable with the same name can only be declared once. Note the `"use strict"`. This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

<pre>
"use strict";
x = 3.14; // throws an error because x is not declared
</pre>

✍ *Update the code so it only uses the let keyword.*

<pre>
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
</pre>

----

2. **Compare Scopes of the var and let Keywords**

When you declare a variable with the `var` keyword, it is declared globally, or locally if declared inside a function.

The `let` keyword behaves similarly, but with some extra features. When you declare a variable with the `let` keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

For example:

<pre>
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3
</pre>

With the `var` keyword, `i` is declared globally. So when `i++` is executed, it updates the global variable. This code is similar to the following:

<pre>
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3
</pre>

This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the `i` variable. This is because the stored function will always refer to the value of the updated global `i` variable.

<pre>
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3
</pre>

As you can see, `printNumTwo()` prints 3 and not 2. This is because the value assigned to `i` was updated and the `printNumTwo()` returns the global `i` and not the value `i` had when the function was created in the for loop. The `let` keyword does not follow this behavior:

<pre>
'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"
</pre>

`i` is not defined because it was not declared in the global scope. It is only declared within the for loop statement. `printNumTwo()` returned the correct value because three different `i` variables with unique values (0, 1, and 2) were created by the `let` keyword within the loop statement.

✍ *Fix the code so that `i` declared in the if statement is a separate variable than `i` declared in the first line of the function. Be certain not to use the `var` keyword anywhere in your code.*

*This exercise is designed to illustrate the difference between how `var` and `let` keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.*

<pre>
function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
</pre>

----

3. **Declare a Read-Only Variable with the const Keyword**

The keyword `let` is not the only new way to declare variables. In ES6, you can also declare variables using the `const` keyword.

`const` has all the awesome features that `let` has, with the added bonus that variables declared using `const` are read-only. They are a constant value, which means that once a variable is assigned with `const`, it cannot be reassigned.

<pre>
"use strict";
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error
</pre>

As you can see, trying to reassign a variable declared with `const` will throw an error. You should always name variables you don't want to reassign using the `const` keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

**Note**: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will see an example of a lowercase variable identifier being used for an array.

✍ *Change the code so that all variables are declared using `let` or `const`. Use `let` when you want the variable to change, and `const` when you want the variable to remain constant. Also, rename variables declared with `const` to conform to common practices, meaning constants should be in all caps.*

<pre>
function printManyTimes(str) {
  "use strict";

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
</pre>

----

4. **Mutate an Array Declared with const**

The `const` declaration has many use cases in modern JavaScript.

Some developers prefer to assign all their variables using `const` by default, unless they know they will need to reassign the value. Only in that case, they use `let`.

However, it is important to understand that objects (including arrays and functions) assigned to a variable using `const` are still mutable. Using the `const` declaration only prevents reassignment of the variable identifier.

<pre>
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
</pre>

As you can see, you can mutate the object `[5, 6, 7]` itself and the variable `s` will still point to the altered array `[5, 6, 45]`. Like all arrays, the array elements in `s` are mutable, but because `const` was used, you cannot use the variable identifier `s` to point to a different array using the assignment operator.

✍ *An array is declared as `const s = [5, 7, 2]`. Change the array to `[2, 5, 7]` using various element assignment.*

<pre>
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
 
  // Using s = [2, 5, 7] would be invalid

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // Only change code above this line
}
editInPlace();
</pre>

----

5. **Prevent Object Mutation**

As seen in the previous challenge, `const` declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function `Object.freeze` to prevent data mutation.

Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

<pre>
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}
</pre>

✍ *In this challenge you are going to use `Object.freeze` to prevent mathematical constants from changing. You need to freeze the `MATH_CONSTANTS` object so that no one is able to alter the value of `PI`, add, or delete properties.*

<pre>
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS)

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
</pre>

----

6. **Use Arrow Functions to Write Concise Anonymous Functions**

In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:

<pre>
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
</pre>

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use **arrow function syntax**:

<pre>
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
</pre>

When there is no function body, and only a `return` value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

<pre>
const myFunc = () => "value";
</pre>

This code will still return `value` by default.

✍ *Rewrite the function assigned to the variable `magic` which returns a `new Date()` to use arrow function syntax. Also, make sure nothing is defined using the keyword `var`.*

<pre>
const magic = () => {
  "use strict";
  return new Date();
};
</pre>

----

7. **Write Arrow Functions with Parameters**

Just like a regular function, you can pass arguments into an arrow function.

<pre>
// doubles input value and returns it
const doubler = (item) => item * 2;
</pre>

If an arrow function has a single argument, the parentheses enclosing the argument may be omitted.

<pre>
// the same function, without the argument parentheses
const doubler = item => item * 2;
</pre>

It is possible to pass more than one argument into an arrow function.

<pre>
// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
</pre>

✍ *Rewrite the `myConcat` function which appends contents of `arr2` to `arr1` so that the function uses arrow function syntax.*

<pre>
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
</pre>

----

8. **Set Default Parameters for Your Functions**

In order to help us create more flexible functions, ES6 introduces *default parameters* for functions.

Check out this code:

<pre>
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
</pre>

The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter `name` will receive its default value `"Anonymous"` when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

✍ *Modify the function `increment` by adding default parameters so that it will add 1 to `number` if `value` is not specified.*

<pre>
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line
</pre>

----

9. **Use the Rest Parameter with Function Parameters**

In order to help us create more flexible functions, ES6 introduces the *rest parameter* for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:

<pre>
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
</pre>

The rest parameter eliminates the need to check the `args` array and allows us to apply `map()`, `filter()` and `reduce()` on the parameters array.

✍ *Modify the function `sum` using the rest parameter in such a way that the function `sum` is able to take any number of arguments and return their sum.*

<pre>
const sum = (...args) => {
  
  return args.reduce((a, b) => a + b, 0);
}
</pre>

----

10. **Use the Spread Operator to Evaluate Arrays In-Place**

ES6 introduces the *spread operator*, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses `apply()` to compute the maximum value in an array:

<pre>
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
</pre>

We had to use `Math.max.apply(null, arr)` because `Math.max(arr)` returns `NaN`. `Math.max()` expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

<pre>
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
</pre>

`...arr` returns an unpacked array. In other words, it *spreads* the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

<pre>
const spreaded = ...arr; // will throw a syntax error
</pre>

✍ *Copy all contents of arr1 into another array arr2 using the spread operator.*

<pre>
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);
</pre>

----

11. **Use Destructuring Assignment to Extract Values from Objects**

*Destructuring assignment* is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:

<pre>
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
</pre>

Here's an equivalent assignment statement using the ES6 destructuring syntax:

<pre>
const { name, age } = user;
// name = 'John Doe', age = 34
</pre>

Here, the `name` and `age` variables will be created and assigned the values of their respective values from the `user` object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.

✍ *Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables `today` and `tomorrow` the values of `today` and tomorrow from the `HIGH_TEMPERATURES` object.*

<pre>
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
</pre>

----

12. **Use Destructuring Assignment to Assign Variables from Objects**

Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

Using the same object from the last example:

<pre>
const user = { name: 'John Doe', age: 34 };
</pre>

Here's how you can give new variable names in the assignment:

<pre>
const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
</pre>

You may read it as "get the value of `user.name` and assign it to a new variable named `userName`" and so on.

✍ *Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables `highToday` and `highTomorrow` the values of `today` and `tomorrow` from the `HIGH_TEMPERATURES` object.*

<pre>
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// Only change code above this line
</pre>

----

13. **Use Destructuring Assignment to Assign Variables from Nested Objects**

You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples:

<pre>
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
</pre>

Here's how to extract the values of object properties and assign them to variables with the same name:

<pre>
const { johnDoe: { age, email }} = user;
</pre>

And here's how you can assign an object properties' values to variables with different names:

<pre>
const { johnDoe: { age: userAge, email: userEmail }} = user;
</pre>

✍ *Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables `lowToday` and `highToday` the values of `today.low` and `today.high` from the `LOCAL_FORECAST` object.*

<pre>
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

// Only change code above this line
</pre>

----

14. **Use Destructuring Assignment to Assign Variables from Arrays**

ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

<pre>
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
</pre>

The variable `a` is assigned the first value of the array, and `b` is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

<pre>
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
</pre>

✍ *Use destructuring assignment to swap the values of `a` and `b` so that `a` receives the value stored in `b`, and `b` receives the value stored in `a`.*

<pre>
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];
</pre>

----

15. **Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements**

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to `Array.prototype.slice()`, as shown below:

<pre>
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
</pre>

Variables `a` and `b` take the first and second values from the array. After that, because of the rest parameter's presence, `arr` gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

✍ *Use destructuring assignment with the rest parameter to perform an effective `Array.prototype.slice()` so that `arr` is a sub-array of the original array `source` with the first two elements omitted.*

<pre>
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
</pre>

----

16. **Use Destructuring Assignment to Pass an Object as a Function's Parameters**

In some cases, you can destructure the object in a function argument itself.

Consider the code below:

<pre>
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
</pre>

This effectively destructures the object sent into the function. This can also be done in-place:

<pre>
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
</pre>

This removes some extra lines and makes our code look neat. This has the added benefit of not having to manipulate an entire object in a function — only the fields that are needed are copied inside the function.

✍ *Use destructuring assignment within the argument to the function `half` to send only `max` and `min` inside the function.*

<pre>
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0; 
// Only change code above this line
</pre>

----

17. **Create Strings using Template Literals**

A new feature of ES6 is the *template literal*. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below:

<pre>
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
</pre>

A lot of things happened there. Firstly, the example uses backticks (\`), not quotes (`'` or `"`), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting `\n` within strings. The `${variable}` syntax used above is a placeholder. Basically, you won't have to use concatenation with the `+` operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with `${` and `}`. Similarly, you can include other expressions in your string literal, for example `${a + b}`. This new way of creating strings gives you more flexibility to create robust strings.

✍ *Use template literal syntax with backticks to display each entry of the `result` object's `failure` array. Each entry should be wrapped inside an `li` element with the class attribute `text-warning`, and listed within the `resultDisplayArray`.*

*Use an iterator method (any kind of loop) to get the desired output (shown below).*

<pre>
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
</pre>

<pre>
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // Only change code below this line
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return resultDisplayArray;
</pre>

----

18. **Write Concise Object Literal Declarations Using Object Property Shorthand**

ES6 adds some nice support for easily defining object literals.

Consider the following code:

<pre>
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
</pre>

`getMousePosition` is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write `x: x`. You can simply write `x` once, and it will be converted to `x: x` (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

<pre>
const getMousePosition = (x, y) => ({ x, y });
</pre>

✍ *Use object property shorthand with object literals to create and return an object with `name`, `age` and `gender` properties.*

<pre>
const createPerson = (name, age, gender) => {
  "use strict";
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};
</pre>

----

19. **Write Concise Declarative Functions with ES6**

When defining functions within objects in ES5, we have to use the keyword `function` as follows:

<pre>
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
</pre>

With ES6, You can remove the `function` keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

<pre>
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
</pre>

✍ *Refactor the function `setGear` inside the object `bicycle` to use the shorthand syntax described above.*

<pre>
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
</pre>

----

20. **Use class Syntax to Define a Constructor Function**

ES6 provides a new syntax to create objects, using the *class* keyword.

It should be noted that the `class` syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

In ES5, we usually define a constructor function and use the `new` keyword to instantiate an object.

<pre>
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
</pre>

The `class` syntax simply replaces the constructor function creation:

<pre>
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
</pre>

It should be noted that the `class` keyword declares a new function, to which a constructor is added. This constructor is invoked when `new` is called to create a new object.

**Notes**:

- UpperCamelCase should be used by convention for ES6 class names, as in `SpaceShuttle` used above.
- The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

✍ *Use the `class` keyword and write a constructor to create the `Vegetable` class.*

*The `Vegetable` class allows you to create a vegetable object with a property `name` that gets passed to the constructor.*

<pre>
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
</pre>

----

21. **Use getters and setters to Control Access to an Object**

You can obtain values from an object and set the value of a property within an object.

These are classically called *getters* and *setters*.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

<pre>
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);  // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);  // newAuthor
</pre>

Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details. **Note**: It is convention to precede the name of a private variable with an underscore (`_`). However, the practice itself does not make a variable private.

✍ *Use the `class` keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.*

*Now create a `getter` and a `setter` in the class, to obtain the temperature in Celsius.*

*Remember that `C = 5/9 * (F - 32)` and `F = C * 9.0 / 5 + 32`, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.*

**Note**: *When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.*

*This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.*

*In other words, you are abstracting implementation details from the user.*

<pre>
// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  // getter
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  // setter
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
</pre>

----

22. **Create a Module Script**

JavaScript started with a small role to play on an otherwise mostly HTML web. Today, it’s huge, and some websites are built almost entirely with JavaScript. In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of `module`. Here’s an example:

<pre>
<script type="module" src="filename.js"></script>
</pre>

A script that uses this `module` type can now use the `import` and `export` features you will learn about in the upcoming challenges.

✍ *Add a script to the HTML document of type `module` and give it the source file of `index.js`*

<pre>
<html>
  <body>
    <!-- Only change code below this line -->
  <script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>
</pre>

----

23. **Use export to Share a Code Block**

Imagine a file called `math_functions.js` that contains several functions related to mathematical operations. One of them is stored in a variable, `add`, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to `export` it.

<pre>
export const add = (x, y) => {
  return x + y;
}
</pre>

The above is a common way to export a single function, but you can achieve the same thing like this:

<pre>
const add = (x, y) => {
  return x + y;
}

export { add };
</pre>

When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:

<pre>
export { add, subtract };
</pre>

✍ *There are two string-related functions in the editor. Export both of them using the method of your choice.*

<pre>
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
</pre>

----

24.  **Reuse JavaScript Code Using import**

`import` allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported `add` from the `math_functions.js` file. Here's how you can import it to use in another file:

<pre>
import { add } from './math_functions.js';
</pre>

Here, `import` will find `add` in `math_functions.js`, import just that function for you to use, and ignore the rest. The `./` tells the import to look for the `math_functions.js` file in the same folder as the current file. The relative file path (`./`) and file extension (`.js`) are required when using import in this way.

You can import more than one item from the file by adding them in the `import` statement like this:

<pre>
import { add, subtract } from './math_functions.js';
</pre>

✍ *Add the appropriate `import` statement that will allow the current file to use the `uppercaseString` and `lowercaseString` functions you exported in the previous lesson. These functions are in a file called `string_functions.js`, which is in the same directory as the current file.*

<pre>
import {uppercaseString, lowercaseString} from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
</pre>

----

25. **Use * to Import Everything from a File**

Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the `import * as` syntax. Here's an example where the contents of a file named `math_functions.js` are imported into a file in the same directory:

<pre>
import * as myMathModule from "./math_functions.js";
</pre>

The above `import` statement will create an object called `myMathModule`. This is just a variable name, you can name it anything. The object will contain all of the exports from `math_functions.js` in it, so you can access the functions like you would any other object property. Here's how you can use the `add` and `subtract` functions that were imported:

<pre>
myMathModule.add(2,3);
myMathModule.subtract(5,3);
</pre>

✍ *The code in this file requires the contents of the file: `string_functions.js`, that is in the same directory as the current file. Use the `import * as` syntax to import everything from the file into an object called `stringFunctions`.*

<pre>
import * as stringFunctions from "./string_functions.js";

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
</pre>

----

26. **Create an Export Fallback with export default**

In the `export` lesson, you learned about the syntax referred to as a *named export*. This allowed you to make multiple functions and variables available for use in other files.

There is another `export` syntax you need to know, known as *export default*. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Below are examples using `export default`:

<pre>
// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}
</pre>

Since `export default` is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use `export default` with `var`, `let`, or `const`

✍ *The following function should be the fallback value for the module. Please add the necessary code to do so.*

<pre>
export default function subtract(x, y) {
  return x - y;
}
</pre>

----

27. **Import a Default Export**

In the last challenge, you learned about `export default` and its uses. To import a default export, you need to use a different `import` syntax. In the following example, `add` is the default export of the `math_functions.js` file. Here is how to import it:

<pre>
import add from "./math_functions.js";
</pre>

The syntax differs in one key place. The imported value, `add`, is not surrounded by curly braces (`{}`). `add` here is simply a variable name for whatever the default export of the `math_functions.js` file is. You can use any name here when importing a default.

✍ *In the following code, import the default export from the `math_functions`.js file, found in the same directory as this file. Give the import the name `subtract`.*

<pre>
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);
</pre>

----

28. **Create a JavaScript Promise**

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. `Promise` is a constructor function, so you need to use the `new` keyword to create one. It takes a function, as its argument, with two parameters - `resolve` and `reject`. These are methods used to determine the outcome of the promise. The syntax looks like this:

<pre>
const myPromise = new Promise((resolve, reject) => {

});
</pre>

✍ *Create a new promise called `makeServerRequest`. Pass in a function with `resolve` and `reject` parameters to the constructor.*

<pre>
const makeServerRequest = new Promise((resolve, reject) => {

});
</pre>

----

29. **Complete a Promise with resolve and reject**

A promise has three states: `pending`, `fulfilled`, and `rejected`. The promise you created in the last challenge is forever stuck in the `pending` state because you did not add a way to complete the promise. The `resolve` and `reject` parameters given to the promise argument are used to do this. `resolve` is used when you want your promise to succeed, and `reject` is used when you want it to fail. These are methods that take an argument, as seen below.

<pre>
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
</pre>

The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

✍ *Make the promise handle success and failure. If `responseFromServer` is `true`, call the `resolve` method to successfully complete the promise. Pass `resolve` a string with the value `We got the data`. If `responseFromServer` is `false`, use the `reject` method instead and pass it the string: `Data not received`.*

<pre>
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");// Change this line
  } else {  
    reject("Data not received");// Change this line
  }
});
</pre>

----

30. **Handle a Fulfilled Promise with then**

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the `then` method. The `then` method is executed immediately after your promise is fulfilled with `resolve`. Here’s an example:

<pre>
myPromise.then(result => {
  // do something with the result.
});
</pre>

`result` comes from the argument given to the `resolve` method.

✍ *Add `the` then method to your promise. Use `result` as the parameter of its callback function and log `result` to the console.*

<pre>
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
})
</pre>

----

31. **Handle a Rejected Promise with catch**

`catch` is the method used when your promise has been rejected. It is executed immediately after a promise's `reject` method is called. Here’s the syntax:

<pre>
myPromise.catch(error => {
  // do something with the error.
});
</pre>

`error` is the argument passed in to the `reject` method.

**Note**: the then and catch methods can be chained to the promise declaration if you choose.

✍ *Add the `catch` method to your promise. Use `error` as the parameter of its callback function and log `error` to the console.*

<pre>
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
})
</pre>

----

### Regular Expressions

Regular expressions are special strings that represent a search pattern. Also known as "regex" or "regexp", they help programmers match, search, and replace text. Regular expressions can appear cryptic because a few characters have special meaning. The goal is to combine the symbols and text into a pattern that matches what you want, but only what you want. This section will cover the characters, a few shortcuts, and the common uses for writing regular expressions.

----

1. **Using the Test Method**

Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word `"the"` in the string `"The dog chased the cat"`, you could use the following regular expression: `/the/`. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the `.test()` method. The `.test()` method takes the regex, applies it to a string (which is placed inside the parentheses), and returns `true` or `false` if your pattern finds something or not.

<pre>
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
</pre>

✍ *Apply the regex myRegex on the string myString using the .test() method.*

<pre>
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
</pre>

----

2. **Match Literal Strings**

In the last challenge, you searched for the word `"Hello"` using the regular expression `/Hello/`. That regex searched for a literal match of the string `"Hello"`. Here's another example searching for a literal match of the string `"Kevin"`:

<pre>
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// Returns true
</pre>

Any other forms of `"Kevin"` will not match. For example, the regex `/Kevin/` will not match `"kevin"` or `"KEVIN"`.

<pre>
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// Returns false
</pre>

A future challenge will show how to match those other forms as well.

✍ *Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.*

<pre>
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
</pre>

----

3. **Match a Literal String with Different Possibilities**

Using regexes like `/coding/`, you can look for the pattern `"coding"` in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the `alternation` or `OR` operator: `|`.

This operator matches patterns either before or after it. For example, if you wanted to match `"yes"` or `"no"`, the regex you want is `/yes|no/`.

You can also search for more than just two patterns. You can do this by adding more patterns with more ``OR`` operators separating them, like `/yes|no|maybe/`.

✍ *Complete the regex `petRegex` to match the pets `"dog"`, `"cat"`, `"bird`", or `"fish"`.*

<pre>
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
</pre>

----

4. **Ignore Case While Matching**

Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are `"A"`, `"B"`, and `"C"`. Examples of lowercase are `"a"`, `"b"`, and `"c"`.

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the `i` flag. You can use it by appending it to the regex. An example of using this flag is `/ignorecase/i`. This regex can match the strings `"ignorecase"`, `"igNoreCase"`, and `"IgnoreCase"`.

✍ *Write a regex `fccRegex` to match `"freeCodeCamp"`, no matter its case. Your regex should not match any abbreviations or variations with spaces.*

<pre>
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
</pre>

----

5. **Extract Matches**

So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the `.match()` method.

To use the `.match()` method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example:

<pre>
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
</pre>

Note that the `.match` syntax is the "opposite" of the `.test` method you have been using thus far:

<pre>
'string'.match(/regex/);
/regex/.test('string');
</pre>

✍ *Apply the `.match()` method to extract the word `coding`.*

<pre>
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
</pre>

----

6. **Find More Than the First Match**

So far, you have only been able to extract or search a pattern once.

<pre>
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]
</pre>

To search or extract a pattern more than once, you can use the `g` flag.

<pre>
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
</pre>

✍ *Using the regex `starRegex`, find and extract both `"Twinkle"` words from the string `twinkleStar`.*

**Note**

*You can have multiple flags on your regex like `/search/gi`*

<pre>
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
</pre>

----

7. **Match Anything with Wildcard Period**

Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: `.`

The wildcard character `.` will match any one character. The wildcard is also called `dot` and `period`. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match `"hug"`, `"huh"`, `"hut"`, and `"hum"`, you can use the regex `/hu./` to match all four words.

<pre>
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true
</pre>

✍ *Complete the regex `unRegex` so that it matches the strings `"run`", `"sun"`, `"fun"`, `"pun"`, `"nun"`, and `"bun"`. Your regex should use the wildcard character.*

<pre>
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
</pre>

----

8. **Match Single Character with Multiple Possibilities**

You learned how to match literal patterns (`/literal/`) and wildcard character (`/./`). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with *character classes*. Character classes allow you to define a group of characters you wish to match by placing them inside square (`[` and `]`) brackets.

For example, you want to match `"bag"`, `"big"`, and `"bug"` but not `"bog"`. You can create the regex `/b[aiu]g/` to do this. The ``[aiu]`` is the character class that will only match the characters `"a"`, `"i"`, or `"u"`.

<pre>
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null
</pre>

✍ *Use a character class with vowels (`a`, `e`, `i`, `o`, `u`) in your regex `vowelRegex` to find all the vowels in the string `quoteSample`.*

**Note**

*Be sure to match both upper- and lowercase vowels.*

<pre>
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
</pre>

----

9. **Match Letters of the Alphabet**

You saw how you can use *character* sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: `-`.

For example, to match lowercase letters `a` through `e` you would use `[a-e]`.

<pre>
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
</pre>

✍ *Match all the letters in the string `quoteSample`.*

**Note**

*Be sure to match both upper- and lowercase **letters**.*

<pre>
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
</pre>

----

10. **Match Numbers and Letters of the Alphabet**

Using the hyphen (`-`) to match a range of characters is not limited to letters. It also works to match a range of numbers.

For example, `/[0-5]/` matches any number between `0` and `5`, including the `0` and `5`.

Also, it is possible to combine a range of letters and numbers in a single character set.

<pre>
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
</pre>

✍ *Create a single regex that matches a range of letters between `h` and `s`, and a range of numbers between `2` and `6`. Remember to include the appropriate flags in the regex.*

<pre>
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
</pre>

----

11. **Match Single Characters Not Specified**

So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called *negated character sets*.

To create a negated character set, you place a caret character (`^`) after the opening bracket and before the characters you do not want to match.

For example, `/[^aeiou]/gi` matches all characters that are not a vowel. Note that characters like `.`, `!`, `[`, `@`, `/` and white space are matched - the negated vowel character set only excludes the vowel characters.

✍ *Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.*

<pre>
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
</pre>

----

12. **Match Characters that Occur One or More Times**

Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the `+` character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, `/a+/g` would find one match in `"abc"` and return `["a"]`. Because of the +, it would also find a single match in `"aabc"` and return `["aa"]`.

If it were instead checking the string `"abab"`, it would find two matches and return `["a", "a"]` because the `a` characters are not in a row - there is a `b` between them. Finally, since there is no `"a"` in the string `"bcd`, it wouldn't find a match.

✍ *You want to find matches when the letter `s` occurs one or more times in `"Mississippi"`. Write a regex that uses the `+` sign.*

<pre>
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
</pre>

----

13. **Match Characters that Occur Zero or More Times**

The last challenge used the plus `+` sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: `*`.

<pre>
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
</pre>

✍ *For this challenge, `chewieQuote` has been initialized as "Aaaaaaaaaaaaaaaarrrgh!" behind the scenes. Create a regex `chewieRegex` that uses the `*` character to match an uppercase `"A"` character immediately followed by zero or more lowercase `"a"` characters in `chewieQuote`. Your regex does not need flags or character classes, and it should not match any of the other quotes.*

<pre>
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
</pre>

----

14. **Find Characters with Lazy Matching**

In regular expressions, a *greedy* match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a *lazy* match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex `/t[a-z]*i/` to the string `"titanic"`. This regex is basically a pattern that starts with `t`, ends with `i`, and has some letters in between.

Regular expressions are by default greedy, so the match would return `["titani"]`. It finds the largest sub-string possible to fit the pattern.

However, you can use the `?` character to change it to lazy matching. `"titanic"` matched against the adjusted regex of `/t[a-z]*?i/` returns `["ti"]`.

**Note**

Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

✍ *Fix the regex `/<.*>/` to return the HTML tag `<h1>` and not the text `"<h1>Winter is coming</h1>"`. Remember the wildcard `.` in a regular expression matches any character.*

<pre>
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?1>/; // Change this line
let result = text.match(myRegex);
</pre>

----

15. **Find One or More Criminals in a Hunt**

Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex `/z+/` matches the letter `z` when it appears one or more times in a row. It would find matches in all of the following strings:

<pre>
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
</pre>

But it does not find matches in the following strings since there are no letter `z` characters:

<pre>
""
"ABC"
"abcabc"
</pre>

✍ *Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter `C`.*

<pre>
let reCriminals = /C+/; // Change this line
</pre>

----

16. **Match Beginning String Patterns**

Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form `[^thingsThatWillNotBeMatched]`. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

<pre>
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false
</pre>

✍ *Use the caret character in a regex to find `"Cal"` only in the beginning of the string `rickyAndCal`.*

<pre>
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
</pre>

----

17. **Match Ending String Patterns**

In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character `$` at the end of the regex.

<pre>
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false
</pre>

✍ *Use the anchor character (`$`) to match the string `"caboose"` at the end of the string `caboose`.

<pre>
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
</pre>

----

18. **Match All Letters and Numbers**

Using character classes, you were able to search for all letters of the alphabet with `[a-z]`. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is `\w`. This shortcut is equal to `[A-Za-z0-9_]`. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (`_`).

<pre>
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
</pre>

These shortcut character classes are also known as *shorthand character classes*.

✍ *Use the shorthand character class `\w` to count the number of alphanumeric characters in various quotes and strings.*

<pre>
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
</pre>

----

19. **Match Everything But Letters and Numbers**

You've learned that you can use a shortcut to match alphanumerics `[A-Za-z0-9_]` using `\w`. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the `\w` with `\W`. Note, the opposite pattern uses a capital letter. This shortcut is the same as `[^A-Za-z0-9_]`.

<pre>
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]
</pre>

Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

<pre>
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
</pre>

----

20. **Match All Numbers**

You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is `\d`, with a lowercase `d`. This is equal to the character class `[0-9]`, which looks for a single character of any number between zero and nine.

✍ *Use the shorthand character class `\d` to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.*

<pre>
 let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
</pre>

----

21. **Match All Non-Numbers**

The last challenge showed how to search for digits using the shortcut `\d` with a lowercase `d`. You can also search for non-digits using a similar shortcut that uses an uppercase `D` instead.

The shortcut to look for non-digit characters is `\D`. This is equal to the character class `[^0-9]`, which looks for a single character that is not a number between zero and nine.

✍ *Use the shorthand character class for non-digits `\D` to count how many non-digits are in movie titles.*

<pre>
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
</pre>

----

22. **Restrict Possible Usernames**

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1) Usernames can only use alpha-numeric characters.

2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3) Username letters can be lowercase and uppercase.

4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

✍ *Change the regex `userCheck` to fit the constraints listed above.*

<pre>
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);
</pre>

**Code Explanation**

1. ^ - start of input
2. [a-z] - first character is a letter
3. [a-z]+ - following characters are letters
4. \d*$ - input ends with 0 or more digits
5. | - or
6. ^[a-z] - first character is a letter
7. \d\d+ - following characters are 2 or more digits
8. $ - end of input

----

23. **Match Whitespace**

The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.

You can search for whitespace using `\s`, which is a lowercase `s`. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class `[ \r\t\f\n\v]`.

<pre>
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]
</pre>

✍ *Change the regex `countWhiteSpace` to look for multiple whitespace characters in a string.*

<pre>
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
</pre>

----

24. **Match Non-Whitespace Characters**

You learned about searching for whitespace using `\s`, with a lowercase `s`. You can also search for everything except whitespace.

Search for non-whitespace using `\S`, which is an uppercase `s`. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class `[^ \r\t\f\n\v]`.

<pre>
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32
</pre>

✍ *Change the regex `countNonWhiteSpace` to look for multiple non-whitespace characters in a string.*

<pre>
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
</pre>

----

25. **Specify Upper and Lower Number of Matches**

Recall that you use the plus sign `+` to look for one or more characters and the asterisk `*` to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets (`{` and `}`). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter `a` appearing between `3` and `5` times in the string `"a`h"`, your regex would be `/a{3,5}h/`.

<pre>
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
</pre>

✍ *Change the regex `ohRegex` to match the entire phrase `"Oh no"` only when it has `3` to `6` letter `h`'s.*

<pre>
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
</pre>

----

26. **Specify Only the Lower Number of Matches**

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string `"hah"` with the letter ``a`` appearing at least `3` times, your regex would be `/ha{3,}h/`.

<pre>
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true
</pre>

✍ *Change the regex `haRegex` to match the word `"Hazzah"` only when it has four or more letter `z`'s.*

<pre>
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
</pre>

----

27. **Specify Exact Number of Matches**

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word `"hah"` with the letter `a` `3` times, your regex would be `/ha{3}h/`.

<pre>
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false
</pre>

✍ *Change the regex `timRegex` to match the word `"Timber"` only when it has four letter `m`'s.`*

<pre>
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
</pre>

----

28. **Check for All or None**

Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, `?`. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

<pre>
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
</pre>

✍ *Change the regex `favRegex` to match both the American English (favorite) and the British English (favourite) version of the word.*

<pre>
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
</pre>

----

29. **Positive and Negative Lookahead**

*Lookaheads* are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: *positive lookahead* and *negative lookahead*.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as` (?=...)` where the `...` is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as `(?!...)` where the `...` is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.

<pre>
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
</pre>

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

<pre>
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
</pre>

✍ *Use lookaheads in the `pwRegex` to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.*

<pre>
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5,})(?=\w*\d{2,})/; // Change this line
let result = pwRegex.test(sampleWord);
</pre>

----

30. **Check For Mixed Grouping of Characters**

Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses `()`.

If you want to find either `Penguin` or `Pumpkin` in a string, you can use the following Regular Expression: `/P(engu|umpk)in/g`

Then check whether the desired string groups are in the test string by using the `test()` method.

<pre>
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Returns true
</pre>

Fix the regex so that it checks for the names of `Franklin Roosevelt` or ``Eleanor Roosevelt`` in a case sensitive manner and it should make concessions for middle names.

✍ *Then fix the code so that the regex that you have created is checked against `myString` and either `true` or `false` is returned depending on whether the regex matches.*

<pre>
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
</pre>

----

31. **Reuse Patterns Using Capture Groups**

Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.

You can search for repeat substrings using *capture groups*. Parentheses, `(` and `)`, are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (`\`) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be `\1` to match the first group.

The example below matches any word that occurs twice separated by a space:

<pre>
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
</pre>

Using the `.match()` method on a string will return an array with the string it matches, along with its capture group.

✍ *Use capture groups in `reRegex` to match numbers that are repeated only three times in a string, each separated by a space.*

<pre>
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
</pre>

----

32. **Use Capture Groups to Search and Replace**

Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

You can search and replace text in a string using `.replace()` on a string. The inputs for `.replace()` is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

<pre>
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
</pre>

You can also access capture groups in the replacement string with dollar signs (`$`).

<pre>
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
</pre>

✍ *Write a regex `fixRegex` using three capture groups that will search for each word in the string "one two three". Then update the `replaceText` variable to replace "one two three" with the string "three two one" and assign the result to the `result` variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign (`$`) syntax.*

<pre>
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
</pre>

----

33. **Remove Whitespace from Start and End**

Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

✍ *Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.*

**Note**: *The `String.prototype.trim()` method would work here, but you'll need to complete this challenge using regular expressions.*

<pre>
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
</pre>

----
### Debugging

Debugging is a valuable and (unfortunately) necessary tool for programmers. It follows the testing phase of checking if your code works as intended, and discovering it does not. Debugging is the process of finding exactly what isn't working and fixing it. After spending time creating a brilliant block of code, it is tough realizing it may have errors. These issues generally come in three forms:

1. syntax errors that prevent a program from running
2. runtime errors when code fails to execute or has unexpected behavior
3. semantic (or logical) errors when code doesn't do what it's meant to.

Modern code editors (and experience) can help identify syntax errors. Semantic and runtime errors are harder to find. They may cause your program to crash, make it run forever, or give incorrect output. Think of debugging as trying to understand why your code is behaving the way it is. Example of a syntax error - often detected by the code editor:

<pre>
funtcion willNotWork( 
  console.log("Yuck");
}
// "function" keyword is misspelled and there's a missing parenthesis
</pre>

Here's an example of a runtime error - often detected while the program executes:

<pre>
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
// Calling loopy starts an infinite loop, which may crash your browser
</pre>

Example of a semantic error - often detected after testing code output:

<pre>
function calcAreaOfRect(w, h) {
  return w + h; // This should be w * h
}
let myRectArea = calcAreaOfRect(2, 3);
// Correct syntax and the program executes, but this gives the wrong answer
</pre>

Debugging is frustrating, but it helps to develop (and follow) a step-by-step approach to review your code. This means checking the intermediate values and types of variables to see if they are what they should be. You can start with a simple process of elimination.

For example, if function A works and returns what it's supposed to, then function B may have the issue. Or start checking values in a block of code from the middle to try to cut the search space in half. A problem in one spot indicates a bug in the first half of the code. If not, it's likely in the second.

This section will cover a couple helpful tools to find bugs, and some of the common forms they take. Fortunately, debugging is a learnable skill that just requires a little patience and practice to master.

----

1. **Use the JavaScript Console to Check the Value of a Variable**

Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.

You can find Developer tools in your Chrome's menu or Web Console in Firefox's menu. If you're using a different browser, or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.

The `console.log()` method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.

Here's an example to print 'Hello world!' to the console:

`console.log('Hello world!');`

✍ *Use the `console.log()` method to print the value of the variable `a` where noted in the code.*

<pre>
let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);

let sumAB = a + b;
console.log(sumAB);
</pre>

----

2. **Understanding the Differences between the freeCodeCamp and Browser Console**

You may have noticed that some freeCodeCamp JavaScript challenges include their own console. This console behaves a little differently than the browser console you used in the last challenge.

The following challenge is meant to highlight the main difference between the freeCodeCamp console and your browser console.

When you run ordinary JavaScript, the browser's console will display your `console.log()` statements the exact number of times it is called.

The freeCodeCamp console will print your `console.log()` statements a short time after the editor detects a change in the script, as well as during testing.

The freeCodeCamp console is cleared before the tests are run and, to avoid spam, only prints the logs during the first test (see the note below for exceptions).

If you would like to see every log for every test, run the tests, and open the browser console. If you prefer to use the browser console, and want it to mimic the freeCodeCamp console, place `console.clear()` before any other `console` calls, to clear the browser console.

**Note**: `console.log`s inside functions are printed to the freeCodeCamp console whenever those functions are called, this can help debugging functions that are called during testing.

✍ *First, use `console.log` to log the `output` variable. Then, use `console.clear` to clear the browser console.*

<pre>
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.log(output);
// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
console.clear();
</pre>

----

3. **Use typeof to Check the Type of a Variable**

You can use `typeof` to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.

Here are some examples using `typeof`:

<pre>
console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"
</pre>

JavaScript recognizes six primitive (immutable) data types: `Boolean`, `Null`, `Undefined`, `Number`, `String`, and `Symbol` (new with ES6) and one type for mutable items: `Object`. Note that in JavaScript, arrays are technically a type of object.

✍ *Add two `console.log()` statements to check the `typeof` each of the two variables `seven` and `three` in the code.*

<pre>
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);
</pre>

----

4. **Catch Misspelled Variable and Function Names**

The `console.log()` and `typeof` methods are the two primary ways to check intermediate values and types of program output. Now it's time to get into the common forms that bugs take. One syntax-level issue that fast typers can commiserate with is the humble spelling error.

Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error. JavaScript variable and function names are case-sensitive.

✍ *Fix the two spelling errors in the code so the `netWorkingCapital` calculation works.*

<pre>
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
</pre>

----

5. **Catch Unclosed Parentheses, Brackets, Braces and Quotes**

Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a method.

One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, then move the cursor back between them and continue coding. Fortunately, most modern code editors generate the second half of the pair automatically.

✍ *Fix the two pair errors in the code.*

<pre>
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
</pre>

----

6. **Catch Mixed Usage of Single and Double Quotes**

JavaScript allows the use of both single (`'`) and double (`"`) quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.

Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error.

Here are some examples of mixing quotes:

<pre>
// These are correct:
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// This is incorrect:
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
</pre>

Of course, it is okay to use only one style of quotes. You can escape the quotes inside the string by using the backslash (`\`) escape character:

<pre>
// Correct use of same quotes:
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
</pre>

✍ *Fix the string so it either uses different quotes for the `href` value, or escape the existing ones. Keep the double quote marks around the entire string.*

<pre>
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
</pre>

----

7. **Catch Use of Assignment Operator Instead of Equality Operator**

Branching programs, i.e. ones that do different things if certain conditions are met, rely on `if`, `else if`, and `else` statements in JavaScript. The condition sometimes takes the form of testing whether a result is equal to a value.

This logic is spoken (in English, at least) as "if x equals y, then ..." which can literally translate into code using the `=`, or assignment operator. This leads to unexpected control flow in your program.

As covered in previous challenges, the assignment operator (`=`) in JavaScript assigns a value to a variable name. And the `==` and `===` operators check for equality (the triple `===` tests for strict equality, meaning both value and type are the same).

The code below assigns `x` to be 2, which evaluates as `true`. Almost every value on its own in JavaScript evaluates to `true`, except what are known as the "falsy" values: `false`, `0`, `""` (an empty string), `NaN`, `undefined`, and `null`.
 
<pre>
let x = 1;
let y = 2;
if (x = y) {
  // this code block will run for any value of y (unless y were originally set as a falsy)
} else {
  // this code block is what should run (but won't) in this example
}
</pre>

✍ *Fix the condition so the program runs the right branch, and the appropriate value is assigned to `result`.*

<pre>
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
</pre>

----

8. **Catch Missing Open and Closing Parenthesis After a Function Call**

When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing parentheses when calling it. Often times the result of a function call is saved in a variable for other use in your code. This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.

The variables in the following example are different:

<pre>
function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"
</pre>

✍ *Fix the code so the variable `result` is set to the value returned from calling the function `getNine`.*

<pre>
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);
</pre>

----

9. **Catch Arguments Passed in the Wrong Order When Calling a Function**

Continuing the discussion on calling functions, the next bug to watch out for is when a function's arguments are supplied in the incorrect order. If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. Make sure to supply all required arguments, in the proper order to avoid these issues.

✍ *The function `raiseToPower` raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of `power` is the expected 8.*

<pre>
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
</pre>

----

10. **Catch Off By One Errors When Using Indexing**

*Off by one errors* (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print `undefined`.

When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand if they are inclusive (the item at the given index is part of what's returned) or not. Here are some examples of off by one errors:

<pre>
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  // loops one too many times at the end
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  // loops one too few times and misses the first character at index 0
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  // Goldilocks approves - this is just right
  console.log(alphabet[k]);
}
</pre>

✍ *Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.*

<pre>
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();
</pre>

----

11. **Use Caution When Reinitializing Variables Inside a Loop**

Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

Printing variable values with each cycle of your loop by using `console.log()` can uncover buggy behavior related to resetting, or failing to reset a variable.

✍ *The following function is supposed to create a two-dimensional array with `m` rows and `n` columns of zeroes. Unfortunately, it's not producing the expected output because the `row` variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like `[[0, 0], [0, 0], [0, 0]]`.*

<pre>
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  
  for (let i = 0; i < m; i++) {
    let row = [];
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
</pre>

----

12. **Prevent Infinite Loops with a Valid Terminal Condition**

The final topic is the dreaded infinite loop. Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants.

There was an example of an infinite loop in the introduction to this section - it had no terminal condition to break out of the `while` loop inside `loopy()`. Do NOT call this function!

<pre>
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
</pre>

It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.

✍ *The `myFunc()` function contains an infinite loop because the terminal condition `i != 4` will never evaluate to `false` (and break the looping) - `i` will increment by 2 each pass, and jump right over 4 since `i` is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for `i` less than or equal to 4.*

<pre>
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
</pre>

----
### Basic Data Structures

Data can be stored and accessed in many different ways, both in JavaScript and other languages. This section will teach you how to manipulate arrays, as well as access and copy the information within them. It will also teach you how to manipulate and access the data within JavaScript objects, using both dot and bracket notation. When you're done with this section, you should understand the basic properties and differences between arrays and objects, as well as how to choose which to use for a given purpose.

----

1. **Use an Array to Store a Collection of Data**

The below is an example of the simplest implementation of an array data structure. This is known as a *one-dimensional array*, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains *booleans*, *strings*, and *numbers*, among other valid JavaScript data types:

<pre>
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
// logs 7
</pre>

All arrays have a length property, which as shown above, can be very easily accessed with the syntax `Array.length`. A more complex implementation of an array can be seen below. This is known as a *multi-dimensional array*, or an array that contains other arrays. Notice that this array also contains JavaScript *objects*, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

<pre>
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
</pre>

✍ *We have defined a variable called `yourArray`. Complete the statement by assigning an array of at least 5 elements in length to the `yourArray` variable. Your array should contain at least one *string*, one *number*, and one *boolean*.*

<pre>
let yourArray = [
  
  {
    one: 1,
    two: "two",
    three: true
  },
  {
    four: 4,
    five: "five",
    six: false
  },
  {
    seven: 7,
    eight: "eight",
    nine: true
  }, "test", 99, true
 
]; // Change this line
</pre>

----

2. **Access an Array's Contents Using Bracket Notation**

The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command. So, now that we've learned how to create an array, let's begin to think about how we can access that array's information.

When we define a simple array as seen below, there are 3 items in it:

<pre>
let ourArray = ["a", "b", "c"];
</pre>

In an array, each array item has an *index*. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are *zero-indexed*, meaning that the first element of an array is actually at the **zeroth** position, not the first. In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. This is known as *bracket notation*. For example, if we want to retrieve the `"a"` from `ourArray` and assign it to a variable, we can do so with the following code:

<pre>
let ourVariable = ourArray[0];
// ourVariable equals "a"
</pre>

In addition to accessing the value associated with an index, you can also *set* an index to a value using the same notation:

<pre>
ourArray[1] = "not b anymore";
// ourArray now equals ["a", "not b anymore", "c"];
</pre>

Using bracket notation, we have now reset the item at index 1 from `"b"`, to `"not b anymore"`.

✍ *In order to complete this challenge, set the 2nd position (index `1`) of `myArray` to anything you want, besides `"b"`.*

<pre>
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "Tae"
// Only change code above this line
console.log(myArray);
</pre>

----

3. **Add Items to an Array with push() and unshift()**

An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are *mutable*. In this challenge, we will look at two methods with which we can programmatically modify an array: `Array.push()` and `Array.unshift()`.

Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the `push()` method adds elements to the end of an array, and `unshift()` adds elements to the beginning. Consider the following:

<pre>
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.
</pre>

✍ *We have defined a function, `mixedNumbers`, which we are passing an array as an argument. Modify the function by using `push()` and `unshift()` to add `'I', 2, 'three'` to the beginning of the array and `7, 'VIII', 9` to the end so that the returned array contains representations of the numbers 1-9 in order.*

<pre>
function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
</pre>

----

4. **Remove Items from an Array with pop() and shift()**

Both `push()` and `unshift()` have corresponding methods that are nearly functional opposites: `pop()` and `shift()`. As you may have guessed by now, instead of adding, `pop()` *removes* an element from the end of an array, while `shift()` removes an element from the beginning. The key difference between `pop()` and `shift()` and their cousins `push()` and `unshift()`, is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.

Let's take a look:

<pre>
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']
</pre>

We can also return the value of the removed element with either method like this:

<pre>
let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
</pre>

✍ *We have defined a function, `popShift`, which takes an array as an argument and returns a new array. Modify the function, using `pop()` and `shift()`, to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.*

<pre>
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
</pre>

----

5. **Remove Items Using splice()**

Ok, so we've learned how to remove elements from the beginning and end of arrays using `shift()` and `pop()`, but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where `splice()` comes in. `splice()` allows us to do just that: **remove any number of consecutive elements** from anywhere in an array.

`splice()` can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of `splice()` are integers which represent indexes, or positions, of the array that `splice()` is being called upon. And remember, arrays are *zero-indexed*, so to indicate the first element of an array, we would use `0`. `splice()`'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

<pre>
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
</pre>

`splice()` not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

<pre>
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']
</pre>

✍ *We've initialized an array `arr`. Use `splice()` to remove elements from `arr`, so that it only contains elements that `sum` to the value of `10`.*

<pre>
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
  arr.splice(1, 4);
// Only change code above this line
console.log(arr);
</pre>

----

6. **Add Items Using splice()**

Remember in the last challenge we mentioned that `splice()` can take up to three parameters? Well, you can use the third parameter, comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

<pre>
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]
</pre>

Here we begin with an array of numbers. We then pass the following to `splice()`. The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the elements (13, 14) to be inserted at that same index. Note that there can be any number of elements (separated by commas) following `amountToDelete`, each of which gets inserted.

✍ *We have defined a function, `htmlColorNames`, which takes an array of HTML colors as an argument. Modify the function using `splice()` to remove the first two elements of the array and add `'DarkSalmon'` and `'BlanchedAlmond'` in their respective places.*

<pre>
function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
</pre>

----

7. **Copy Array Items Using slice()**

The next method we will cover is `slice()`. Rather than modifying an array, `slice()` copies or *extracts* a given number of elements to a new array, leaving the array it is called upon untouched. `slice()` takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:

<pre>
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
</pre>

In effect, we have created a new array by extracting elements from an existing array.

✍ *We have defined a function, `forecast`, that takes an array as an argument. Modify the function using `slice()` to extract information from the argument array and return a new array that contains the elements `'warm'` and `'sunny'`.*

<pre>
function forecast(arr) {
  // Only change code below this line

  return arr.slice(2, 4);
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
</pre>

----

8. **Copy an Array with the Spread Operator**

While `slice()` allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new *spread operator* allows us to easily copy *all* of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: `...`

In practice, we can use the spread operator to copy an array like so:

<pre>
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray
</pre>

✍ *We have defined a function, `copyMachine` which takes `arr` (an array) and `num` (a number) as arguments. The function is supposed to return a new array made up of `num` copies of `arr`. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).*

<pre>
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
  newArr.push([...arr])
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
</pre>

----

9. **Combine Arrays with the Spread Operator**

Another huge advantage of the *spread* operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:

<pre>
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
</pre>

Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.

✍ *We have defined a function `spreadOut` that returns the variable `sentence`. Modify the function using the spread operator so that it returns the array `['learning', 'to', 'code', 'is', 'fun']`.*

<pre>
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());
</pre>

----

10. **Check For The Presence of an Element With indexOf()**

Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, `indexOf()`, that allows us to quickly and easily check for the presence of an element on an array. `indexOf()` takes an element as a parameter, and when called, it returns the position, or index, of that element, or `-1` if the element does not exist on the array.

For example:

<pre>
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists
</pre>

✍ *`indexOf()` can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, `quickCheck`, that takes an array and an element as arguments. Modify the function using `indexOf()` so that it returns `true` if the passed element exists on the array, and `false` if it does not.*

<pre>
function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) == -1) {
    return false;
  } 
    return true;
  
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
</pre>

----

11. **Create complex multi-dimensional arrays**

Awesome! You have just learned a ton about arrays! This has been a fairly high level overview, and there is plenty more to learn about working with arrays, much of which you will see in later sections. But before moving on to looking at *Objects*, lets take one more look, and see how arrays can become a bit more complex than what we have seen in previous challenges.

One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data structure, known as a *multi-dimensional*, or nested array. Consider the following example:

<pre>
let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];
</pre>

While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, when dealing with large amounts of data. However, we can still very easily access the deepest levels of an array this complex with bracket notation:

<pre>
console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?
</pre>

And now that we know where that piece of data is, we can reset it if we need to:

<pre>
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still
</pre>

✍ *We have defined a variable, `myNestedArray`, set equal to an array. Modify `myNestedArray`, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string `'deep'`, on the fourth level, include the string `'deeper'`, and on the fifth level, include the string `'deepest'`.*

<pre>
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array', ['deep']],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
  // Only change code above this line
];
</pre>

----

12. **Add Key-Value Pairs to JavaScript Objects**

At their most basic, objects are just collections of *key-value* pairs. In other words, they are pieces of data (*values*) mapped to unique identifiers called *properties* (*keys*). Take a look at an example:

<pre>
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
</pre>

The above code defines a Tekken video game character object called `tekkenCharacter`. It has three properties, each of which map to a specific value. If you want to add an additional property, such as "origin", it can be done by assigning `origin` to the object:

<pre>
tekkenCharacter.origin = 'South Korea';
</pre>

This uses dot notation. If you were to observe the `tekkenCharacter` object, it will now include the `origin` property. Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:

<pre>
tekkenCharacter['hair color'] = 'dyed orange';
</pre>

Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is. Here's an example with a variable:

<pre>
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
</pre>

After adding all the examples, the object will look like this:

<pre>
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
</pre>

✍ *A `foods` object has been created with three entries. Using the syntax of your choice, add three more entries to it: `bananas` with a value of `13`, `grapes` with a value of `35`, and `strawberries` with a value of `27`.*

<pre>
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
  foods.bananas = 13;
  foods.grapes = 35;
  foods.strawberries = 27;
// Only change code above this line

console.log(foods);
</pre>

----

13. **Modify an Object Nested Within an Object**

Now let's take a look at a slightly more complex object. Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following:

<pre>
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
</pre>

`nestedObject` has three properties: `id` (value is a number), `date` (value is a string), and `data` (value is an object with its nested structure). While structures can quickly become complex, we can still use the same notations to access the information we need. To assign the value `10` to the `busy` property of the nested `onlineStatus` object, we use dot notation to reference the property:

<pre>
nestedObject.data.onlineStatus.busy = 10;
</pre>

✍ *Here we've defined an object `userActivity`, which includes another object nested within it. Set the value of the `online` key to `45`.*

<pre>
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
  userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);
</pre>

----

14. **Access Property Names with Bracket Notation**

In the first object challenge we mentioned the use of bracket notation as a way to access property values using the evaluation of a variable. For instance, imagine that our `foods` object is being used in a program for a supermarket cash register. We have some function that sets the `selectedFood` and we want to check our `foods` object for the presence of that food. This might look like:

<pre>
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
</pre>

This code will evaluate the value stored in the `selectedFood` variable and return the value of that key in the `foods` object, or `undefined` if it is not present. Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.

✍ *We've defined a function, `checkInventory`, which receives a scanned item as an argument. Return the current value of the `scannedItem` key in the `foods` object. You can assume that only valid keys will be provided as an argument to `checkInventory`.*

<pre>
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));
</pre>

----

15. **Use the delete Keyword to Remove Object Properties**

Now you know what objects are and their basic features and advantages. In short, they are key-value stores which provide a flexible, intuitive way to structure data, **and**, they provide very fast lookup time. Throughout the rest of these challenges, we will describe several common operations you can perform on objects so you can become comfortable applying these useful data structures in your programs.

In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can *remove* a key-value pair from an object.

Let's revisit our `foods` object example one last time. If we wanted to remove the `apples` key, we can remove it by using the `delete` keyword like this:

<pre>
delete foods.apples;
</pre>

✍ *Use the delete keyword to remove the `oranges`, `plums`, and `strawberries` keys from the `foods` object.*

<pre>
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
// Only change code above this line

console.log(foods);
</pre>

----

16. **Check if an Object has a Property**

Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the `hasOwnProperty()` method and the other uses the `in` keyword. If we have an object `users` with a property of `Alan`, we could check for its presence in either of the following ways:

<pre>
users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
</pre>

✍ *We've created an object, `users`, with some users in it and a function `isEveryoneHere`, which we pass the `users` object to as an argument. Finish writing this function so that it returns true only if the `users` object contains all four names, `Alan`, `Jeff`, `Sarah`, and `Ryan`, as keys, and `false` otherwise.*

<pre>
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
  return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(name =>
    obj.hasOwnProperty(name)
  );
  // Only change code above this line
}

console.log(isEveryoneHere(users));
</pre>

----

17. **Iterate Through the Keys of an Object with a for...in Statement**

Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a *for...in* statement. For our `users` object, this could look like:

<pre>
for (let user in users) {
  console.log(user);
}

// logs:
Alan
Jeff
Sarah
Ryan
</pre>

In this statement, we defined a variable `user`, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console. **NOTE**: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

✍ *We've defined a function `countOnline` which accepts one argument (a users object). Use a *for...in* statement within this function to loop through the users object passed into the function and return the number of users whose `online` property is set to `true`. An example of a users object which could be passed to `countOnline` is shown below. Each user will have an `online` property with either a `true` or `false` value.*

<pre>
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
</pre>

<pre>
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function countOnline(obj) {
  // change code below this line
  let result = 0;
  for (let user in obj) {
    if (obj[user].online === true) {
      result++;
    }
  }
  return result;
  // change code above this line
}
console.log(countOnline(users));
</pre>

----

18. **Generate an Array of All Object Keys with Object.keys()**

We can also generate an array which contains all the keys stored in an object using the `Object.keys()` method and passing in an object as the argument. This will return an array with strings representing each property in the object. Again, there will be no specific order to the entries in the array.

✍ *Finish writing the `getArrayOfUsers` function so that it returns an array containing all the properties in the object it receives as an argument.*

<pre>
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));
</pre>

----

19. **Modify an Array Stored in an Object**

Now you've seen all the basic operations for JavaScript objects. You can add, modify, and remove key-value pairs, check if keys exist, and iterate over all the keys in an object. As you continue learning JavaScript you will see even more versatile applications of objects. Additionally, the Data Structures lessons located in the Coding Interview Prep section of the curriculum also cover the ES6 *Map* and *Set* objects, both of which are similar to ordinary objects but provide some additional features. Now that you've learned the basics of arrays and objects, you're fully prepared to begin tackling more complex problems using JavaScript!

✍ *Take a look at the object we've provided in the code editor. The `user` object contains three keys. The `data` key contains five keys, one of which contains an array of `friends`. From this, you can see how flexible objects are as data structures. We've started writing a function `addFriend`. Finish writing it so that it takes a `user` object and adds the name of the `friend` argument to the array stored in `user.data.friends` and returns that array.*

<pre>
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
</pre>

----
### Basic Algorithm Scripting

A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding.

To make solving problems easier, it can be helpful to break them down into many chunks. Then, each chunk can be solved one by one. For example, if you are building a calculator, don't try to solve the problem as a whole. First, consider how to get inputs. Then, determine each arithmetic operation one by one. Finally, display the results.

In this section we will learn to solve basic algorithm problems using JavaScript. This will help you improve your problem solving skills and prepare you to later solve more complex problems.

Hint: If you get stuck, try using console.log() to log variable values to the console. This will help to debug problems.

----

1. **Convert Celsius to Fahrenheit**

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times `9/5`, plus `32`.

You are given a variable `celsius` representing a temperature in Celsius. Use the variable `fahrenheit` already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

<pre>
function convertToF(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}

convertToF(30);
</pre>

----

2. **Reverse a String**

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

<pre>
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

reverseString("hello");
</pre>

----

3. **Factorialize a Number**

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation `n!`

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Only integers greater than or equal to zero will be supplied to the function.

<pre>
function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
    return product;
}

factorialize(5);
</pre>

----

4. **Find the Longest Word in a String**

Return the length of the longest word in the provided sentence.

Your response should be a number.

<pre>
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
</pre>

----

5. **Return Largest Numbers in Arrays**

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax `arr[i]`.

<pre>
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];   
      }
    }
    results[n] = largestNumber;
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
</pre>

----

6. **Confirm the Ending**

Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).

This challenge can be solved with the `.endsWith()` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

<pre>
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
</pre>

----

7. **Repeat a String Repeat a String**

Repeat a given string `str` (first argument) for `num` times (second argument). Return an empty string if `num` is not a positive number.

<pre>
function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

repeatStringNumTimes("abc", 3);
</pre>

----

8. **Truncate a String**

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.

<pre>
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
</pre>

----

9. **Finders Keepers**

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

<pre>
function findElement(arr, func) {
  let num = 0;
  
  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
</pre>

----

10. **Boo who**

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

<pre>
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
</pre>

----

11. **Title Case a Sentence**

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

<pre>
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
</pre>

----

12. **Slice and Splice**

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index `n` of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

<pre>
function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
</pre>

----

13. **Falsy Bouncer**

Remove all falsy values from an array.

Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

Hint: Try converting each value to a Boolean.

<pre>
function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);
</pre>

----

14. **Where do I Belong**

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, `getIndexToIns([1,2,3,4], 1.5)` should return `1` because it is greater than `1` (index 0), but less than `2` (index 1).

Likewise, `getIndexToIns([20,3,5], 19)` should return `2` because once the array has been sorted it will look like `[3,5,20]` and `19` is less than `20` (index 2) and greater than `5` (index 1).

<pre>
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);
</pre>

----

15. **Mutations**

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, `["hello", "Hello"]`, should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments `["hello", "hey"]` should return false because the string "hello" does not contain a "y".

Lastly, `["Alien", "line"]`, should return true because all of the letters in "line" are present in "Alien".

<pre>
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
</pre>

----

16. **Chunky Monkey**

Write a function that splits an array (first argument) into groups the length of `size` (second argument) and returns them as a two-dimensional array.

<pre>
function chunkArrayInGroups(arr, size) {
  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
  else {
    temp.push(arr[a]);
    result.push(temp);
    temp = [];
    }
  }
  if (temp.length !== 0) result.push(temp);
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
</pre>

----

### Object Oriented Programming

At its core, software development solves a problem or achieves a result with computation. The software development process first defines a problem, then presents a solution. Object oriented programming is one of several major approaches to the software development process.

As its name implies, object oriented programming organizes code into object definitions. These are sometimes called classes, and they group together data with related behavior. The data is an object's attributes, and the behavior (or functions) are methods.

The object structure makes it flexible within a program. Objects can transfer information by calling and passing data to another object's methods. Also, new classes can receive, or inherit, all the features from a base or parent class. This helps to reduce repeated code.

Your choice of programming approach depends on a few factors. These include the type of problem, as well as how you want to structure your data and algorithms. This section covers object oriented programming principles in JavaScript.

----

1. **Create a Basic JavaScript Object**

Think about things people see every day, like cars, shops, and birds. These are all *objects*: tangible things people can observe and interact with.

What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.

These qualities, or *properties*, define what makes up an object. Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.

Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. Here's an example using these concepts to create a `duck` object:

<pre>
let duck = {
  name: "Aflac",
  numLegs: 2
};
</pre>

This `duck` object has two property/value pairs: a `name` of "Aflac" and a `numLegs` of 2.

✍ *Create a `dog` object with `name` and `numLegs` properties, and set them to a string and a number, respectively.*

<pre>
let dog = {
  name: "Tae",
  numLegs: 4
};
</pre>

----

2. **Use Dot Notation to Access the Properties of an Object**

The last challenge created an object with various properties. Now you'll see how to access the values of those properties. Here's an example:

<pre>
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
// This prints "Aflac" to the console
</pre>

Dot notation is used on the object name, `duck`, followed by the name of the property, `name`, to access the value of "Aflac".

✍ *Print both properties of the `dog` object to your console.*

<pre>
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);
</pre>

----

3. **Create a Method on an Object**

Objects can have a special type of property, called a *method*.

Methods are properties that are functions. This adds different behavior to an object. Here is the `duck` example with a method:

<pre>
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// Returns "The name of this duck is Aflac."
</pre>

The example adds the `sayName` method, which is a function that returns a sentence giving the name of the `duck`. Notice that the method accessed the `name` property in the return statement using `duck.name`. The next challenge will cover another way to do this.

✍ *Using the `dog` object, give it a method called `sayLegs`. The method should return the sentence "This dog has 4 legs."*

<pre>
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
</pre>

----

4. **Make Code More Reusable with the this Keyword**

The last challenge introduced a method to the `duck` object. It used `duck.name` dot notation to access the value for the `name` property within the return statement:

`sayName: function() {return "The name of this duck is " + duck.name + ".";}`

While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.

A way to avoid these issues is with the `this` keyword:

<pre>
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
</pre>

`this` is a deep topic, and the above example is only one way to use it. In the current context, `this` refers to the object that the method is associated with: `duck`. If the object's name is changed to `mallard`, it is not necessary to find all the references to `duck` in the code. It makes the code reusable and easier to read.

✍ *Modify the `dog.sayLegs` method to remove any references to `dog`. Use the `duck` example for guidance.*

<pre>
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
</pre>

----

5. **Define a Constructor Function**

*Constructors* are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:

<pre>
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
</pre>

This constructor defines a `Bird` object with properties `name`, `color`, and `numLegs` set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

- Constructors are defined with a capitalized name to distinguish them from other functions that are not `constructors`.
- Constructors use the keyword `this` to set properties of the object they will create. Inside the constructor, `this` refers to the new object it will create.
- Constructors define properties and behaviors instead of returning a value as other functions might.

✍ *Create a constructor, `Dog`, with properties `name`, `color`, and `numLegs` that are set to a string, a string, and a number, respectively.*

<pre>
function Dog() {
  this.name = "Tae";
  this.color = "green";
  this.numLegs = 4;
}
</pre>

----

6. **Use a Constructor to Create Objects**

Here's the `Bird` constructor from the previous challenge:

<pre>
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();
</pre>

Notice that the `new` operator is used when calling a constructor. This tells JavaScript to create a new instance of `Bird` called `blueBird`. Without the `new` operator, `this` inside the constructor would not point to the newly created object, giving unexpected results. Now `blueBird` has all the properties defined inside the `Bird` constructor:

<pre>
blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2
</pre>

Just like any other object, its properties can be accessed and modified:

<pre>
blueBird.name = 'Elvira';
blueBird.name; // => Elvira
</pre>

✍ *Use the `Dog` constructor from the last lesson to create a new instance of `Dog`, assigning it to a variable `hound`.*

<pre>
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line

let hound = new Dog();
</pre>

----

7. **Extend Constructors to Receive Arguments**

The `Bird` and `Dog` constructors from last challenge worked well. However, notice that all `Birds` that are created with the `Bird` constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:

<pre>
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
</pre>

Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different `Bird` objects, you can design your Bird constructor to accept parameters:

<pre>
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
</pre>

Then pass in the values as arguments to define each unique bird into the `Bird` constructor: `let cardinal = new Bird("Bruce", "red");` This gives a new instance of `Bird` with name and color properties set to Bruce and red, respectively. The `numLegs` property is still set to 2. The `cardinal` has these properties:

<pre>
cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2
</pre>

The constructor is more flexible. It's now possible to define the properties for each `Bird` at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.

✍ *Create another `Dog` constructor. This time, set it up to take the parameters `name` and `color`, and have the property `numLegs` fixed at 4. Then create a new `Dog` saved in a variable `terrier`. Pass it two strings as arguments for the `name` and `color` properties.*

<pre>
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Jonas", "black");
</pre>

----

8. **Verify an Object's Constructor with instanceof**

Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the `instanceof` operator. `instanceof` allows you to compare an object to a constructor, returning `true` or `false` based on whether or not that object was created with the constructor. Here's an example:

<pre>
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
</pre>

If an object is created without using a constructor, `instanceof` will verify that it is not an instance of that constructor:

<pre>
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird; // => false
</pre>

✍ *Create a new instance of the `House` constructor, calling it `myHouse` and passing a number of bedrooms. Then, use `instanceof` to verify that it is an instance of `House`.*

<pre>
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(2);

myHouse instanceof House;
</pre>

----

9. **Understand Own Properties**

In the following example, the `Bird` constructor defines two properties: `name` and `numLegs`:

<pre>
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
</pre>

`name` and `numLegs` are called `own` properties, because they are defined directly on the instance object. That means that `duck` and `canary` each has its own separate copy of these properties. In fact every instance of `Bird` will have its `own` copy of these properties. The following code adds all of the own properties of `duck` to the array `ownProps`:

<pre>
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
</pre>

✍ *Add the `own` properties of `canary` to the array `ownProps`.*

<pre>
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
</pre>

----

10. **Use Prototype Properties to Reduce Duplicate Code**

Since `numLegs` will probably have the same value for all instances of `Bird`, you essentially have a duplicated variable `numLegs` inside each `Bird` instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

A better way is to use `Bird’s` `prototype`. Properties in the `prototype` are shared among ALL instances of `Bird`. Here's how to add `numLegs` to the `Bird prototype`:

<pre>
Bird.prototype.numLegs = 2;
</pre>

Now all instances of `Bird` hav`e the `numLegs` property.

<pre>
console.log(duck.numLegs);  // prints 2
console.log(canary.numLegs);  // prints 2
</pre>

Since all instances automatically have the properties on the `prototype`, think of a `prototype` as a "recipe" for creating objects. Note that the `prototype` for `duck` and canary is part of the `Bird` constructor as `Bird.prototype`. Nearly every object in JavaScript has a `prototype` property which is part of the constructor function that created it.

✍ *Add a `numLegs` property to the `prototype` of `Dog`*

<pre>
function Dog(name) {
  this.name = name;
}

  Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");
</pre>

----

11. **Iterate Over All Properties**

You have now seen two kinds of properties: `own` properties and `prototype` properties. `Own` properties are defined directly on the object instance itself. And `prototype` properties are defined on the `prototype`.

<pre>
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
</pre>

Here is how you add `duck`'s `own` properties to the array `ownProps` and `prototype` properties to the array `prototypeProps`:

<pre>
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
</pre>

✍ *Add all of the `own` properties of `beagle` to the array `ownProps`. Add all of the `prototype` properties of `Dog` to the array `prototypeProps`.*

<pre>
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
</pre>

----

12. **Understand the Constructor Property**

There is a special `constructor` property located on the object instances `duck` and `beagle` that were created in the previous challenges:

<pre>
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true
</pre>

Note that the `constructor` property is a reference to the constructor function that created the instance. The advantage of the `constructor` property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

<pre>
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
</pre>

**Note**

Since the `constructor` property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the `instanceof` method to check the type of an object.

✍ *Write a `joinDogFraternity` function that takes a `candidate` parameter and, using the `constructor` property, return `true` if the candidate is a `Dog`, otherwise return `false`.*

<pre>
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
</pre>

----

13. **Change the Prototype to a New Object**

Up until now you have been adding properties to the `prototype` individually:

<pre>
Bird.prototype.numLegs = 2;
</pre>

This becomes tedious after more than a few properties.

<pre>
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
</pre>

A more efficient way is to set the `prototype` to a new object that already contains the properties. This way, the properties are added all at once:

<pre>
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
</pre>

✍ *Add the property `numLegs` and the two methods `eat()` and `describe()` to the `prototype` of `Dog` by setting the `prototype` to a new object.*

<pre>
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
    numLegs: 4,
    eat: function() {
      console.log("yummy!");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};
</pre>

----

14. **Remember to Set the Constructor Property when Changing the Prototype**

There is one crucial side effect of manually setting the prototype to a new object. It erases the `constructor` property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

<pre>
duck.constructor === Bird; // false -- Oops
duck.constructor === Object; // true, all objects inherit from Object.prototype
duck instanceof Bird; // true, still works
</pre>

To fix this, whenever a prototype is manually set to a new object, remember to define the `constructor` property:

<pre>
Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
</pre>

✍ *Define the `constructor` property on the `Dog` `prototype`.*

<pre>
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
</pre>

----

15. **Understand Where an Object’s Prototype Comes From**

Just like people inherit genes from their parents, an object inherits its `prototype` directly from the constructor function that created it. For example, here the Bird constructor creates the `duck` object:

<pre>
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
</pre>

`duck` inherits its `prototype` from the `Bird` constructor function. You can show this relationship with the `isPrototypeOf` method:

<pre>
Bird.prototype.isPrototypeOf(duck);
// returns true
</pre>

✍ *Use `isPrototypeOf` to check the `prototype` of `beagle`.*

<pre>
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line

Dog.prototype.isPrototypeOf(beagle);
</pre>

----

16. **Understand the Prototype Chain**

All objects in JavaScript (with a few exceptions) have a `prototype`. Also, an object’s `prototype` itself is an object.

<pre>
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // yields 'object'
</pre>

Because a `prototype` is an object, a `prototype` can have its own `prototype`! In this case, the `prototype` of `Bird.prototype` is `Object.prototype`:

<pre>
Object.prototype.isPrototypeOf(Bird.prototype); // returns true
</pre>

How is this useful? You may recall the `hasOwnProperty` method from a previous challenge:

<pre>
let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // yields true
</pre>

The `hasOwnProperty` method is defined in `Object.prototype`, which can be accessed by `Bird.prototype`, which can then be accessed by `duck`. This is an example of the `prototype` chain. In this `prototype` chain, `Bird` is the `supertype` for `duck`, while `duck` is the `subtype`. `Object` is a `supertype` for both `Bird` and `duck`. `Object` is a `supertype` for all objects in JavaScript. Therefore, any object can use the `hasOwnProperty` method.

✍ *Modify the code to show the correct prototype chain.*

<pre>
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
</pre>

----

17. **Use Inheritance So You Don't Repeat Yourself**

There's a principle in programming called *Don't Repeat Yourself (DRY*). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the `describe` method is shared by `Bird` and `Dog`:

<pre>
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
</pre>

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

The `describe` method is repeated in two places. The code can be edited to follow the DRY principle by creating a `supertype` (or parent) called `Animal`:

<pre>
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
</pre>

Since `Animal` includes the `describe` method, you can remove it from `Bird` and `Dog`:

<pre>
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
</pre>

✍ *The `eat` method is repeated in both `Cat` and `Bear`. Edit the code in the spirit of DRY by moving the `eat` method to the `Animal` `supertype`.*

<pre>
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom")
  }
};
</pre>

----

18. **Inherit Behaviors from a Supertype**

In the previous challenge, you created a `supertype` called `Animal` that defined behaviors shared by all animals:

<pre>
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
</pre>

This and the next challenge will cover how to reuse `Animal's` methods inside `Bird` and `Dog` without defining them again. It uses a technique called inheritance. This challenge covers the first step: make an instance of the `supertype` (or parent). You already know one way to create an instance of `Animal` using the `new` operator:

<pre>
let animal = new Animal();
</pre>

There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

<pre>
let animal = Object.create(Animal.prototype);
</pre>

`Object.create(obj)` creates a new object, and sets `obj` as the new object's `prototype`. Recall that the `prototype` is like the "recipe" for creating an object. By setting the `prototype` of `animal` to be `Animal's` `prototype`, you are effectively giving the `animal` instance the same "recipe" as any other instance of `Animal`.

<pre>
animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
</pre>

✍ *Use `Object.create` to make two instances of `Animal` named `duck` and `beagle`.*

<pre>
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
</pre>

----

19. **Set the Child's Prototype to an Instance of the Parent**

In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) `Animal`: making a new instance of `Animal`.

This challenge covers the next step: set the `prototype` of the subtype (or child)—in this case, `Bird`—to be an instance of `Animal`.
`
<pre>
Bird.prototype = Object.create(Animal.prototype);
</pre>

Remember that the `prototype` is like the "recipe" for creating an object. In a way, the recipe for `Bird` now includes all the key "ingredients" from `Animal`.

<pre>
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"
</pre>

`duck` inherits all of `Animal`'s properties, including the `eat` method.

✍ *Modify the code so that instances of `Dog` inherit from `Animal`.*

<pre>
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
</pre>

----

20. **Reset an Inherited Constructor Property**

When an object inherits its `prototype` from another object, it also inherits the supertype's constructor property.

Here's an example:

<pre>
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
</pre>

But `duck` and all instances of `Bird` should show that they were constructed by `Bird` and not `Animal`. To do so, you can manually set `Bird's` constructor property to the `Bird` object:

<pre>
Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}
</pre>

✍ *Fix the code so `duck.constructor` and `beagle.constructor` return their respective constructors.*

<pre>
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
</pre>

----

21. **Add Methods After Inheritance**

A constructor function that inherits its `prototype` object from a supertype constructor function can still have its own methods in addition to inherited methods.

For example, `Bird` is a constructor that inherits its `prototype` from `Animal`:

<pre>
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
</pre>

In addition to what is inherited from `Animal`, you want to add behavior that is unique to `Bird` objects. Here, `Bird` will get a `fly()` function. Functions are added to `Bird's` `prototype` the same way as any constructor function:

<pre>
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
</pre>

Now instances of `Bird` will have both `eat()` and `fly()` methods:

<pre>
let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"
</pre>`

✍ *Add all necessary code so the `Dog` object inherits from `Animal` and the `Dog's` `prototype` constructor is set to Dog. Then add a `bark()` method to the `Dog` object so that `beagle` can both `eat()` and `bark()`. The `bark()` method should print "Woof!" to the console.*

<pre>
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() { 
console.log("Woof!"); 
};


// Only change code above this line

let beagle = new Dog();
</pre>

----

22. **Override Inherited Methods**

In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its `prototype` object:

<pre>
ChildObject.prototype = Object.create(ParentObject.prototype);
</pre>

Then the `ChildObject` received its own methods by chaining them onto its `prototype`:

<pre>
ChildObject.prototype.methodName = function() {...};
</pre>

It's possible to override an inherited method. It's done the same way - by adding a method to `ChildObject.prototype` using the same method name as the one to override. Here's an example of `Bird` overriding the `eat()` method inherited from `Animal`:

<pre>
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};
</pre>

If you have an instance `let duck = new Bird();` and you call `duck.eat()`, this is how JavaScript looks for the method on `duck’s` `prototype` chain:

1. duck => Is eat() defined here? No.
2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.
3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
4. Object => JavaScript stopped searching before reaching this level.

✍ *Override the `fly()` method for `Penguin` so that it returns "Alas, this is a flightless bird."*

<pre>
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
  };

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
</pre>

----

23. **Use a Mixin to Add Common Behavior Between Unrelated Objects**

As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like `Bird` and `Airplane`. They can both fly, but a `Bird` is not a type of `Airplane` and vice versa.

For unrelated objects, it's better to use *mixins*. A mixin allows other objects to use a collection of functions.

<pre>
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
</pre>

The `flyMixin` takes any object and gives it the `fly` method.

<pre>
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
</pre>

Here `bird` and `plane` are passed into `flyMixin`, which then assigns the `fly` function to each object. Now `bird` and `plane` can both fly:

<pre>
bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"
</pre>

Note how the mixin allows for the same `fly` method to be reused by unrelated objects `bird` and `plane`.

✍ *Create a mixin named `glideMixin` that defines a method named `glide`. Then use the `glideMixin` to give both `bird` and `boat` the ability to glide.*

<pre>
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Gliding!");
  };
};
glideMixin(bird);
glideMixin(boat);
</pre>

----

24. **Use Closure to Protect Properties Within an Object from Being Modified Externally**

In the previous challenge, `bird` had a public property `name`. It is considered public because it can be accessed and changed outside of `bird`'s definition.

<pre>
bird.name = "Duffy";
</pre>

Therefore, any part of your code can easily change the name of `bird` to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

<pre>
function Bird() {
  let hatchedEgg = 10; // private variable

  /* publicly available method that a bird object can use */
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
</pre>

Here `getHatchedEggCount` is a privileged method, because it has access to the private variable `hatchedEgg`. This is possible because `hatchedEgg` is declared in the same context as `getHatchedEggCount`. In JavaScript, a function always has access to the context in which it was created. This is called `closure`.

✍ *Change how `weight` is declared in the `Bird` function so it is a private variable. Then, create a method `getWeight` that returns the value of `weight` 15.*

<pre>
function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };

}
</pre>

----

25. **Understand the Immediately Invoked Function Expression (IIFE)**

A common pattern in JavaScript is to execute a function as soon as it is declared:

<pre>
(function () {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
</pre>

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked *function expression or IIFE*.

✍ *Rewrite the function `makeNest` and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).*

<pre>
(function() {
  console.log("A cozy nest is ready");
})();
</pre>

----

26. **Use an IIFE to Create a Module**

An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or *module*. For example, an earlier challenge defined two mixins:

<pre>
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
</pre>

We can group these mixins into a module as follows:

<pre>
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})(); // The two parentheses cause the function to be immediately invoked
</pre>

Note that you have an immediately invoked function expression (IIFE) that returns an object `motionModule`. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

<pre>
motionModule.glideMixin(duck);
duck.glide();
</pre>

✍ *Create a module named `funModule` to wrap the two mixins `isCuteMixin` and `singMixin`. `funModule` should return an object.*

<pre>
let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
  obj.isCute = function() {
    return true;
      };
    },
 singMixin: function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
      };
    }
  };
})();
</pre>

----

### Functional Programming

Functional programming is an approach to software development based around the evaluation of functions. Like mathematics, functions in programming map input to output to produce a result. You can combine basic functions in many ways to build more and more complex programs.

Functional programming follows a few core principles:

- Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation
- Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data
- Functions have minimal side effects in the program

The functional programming software development approach breaks a program into small, testable parts. This section covers basic functional programming principles in JavaScript.

----

1. **Learn About Functional Programming**

Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

`INPUT -> PROCESS -> OUTPUT`

Functional programming is about:

1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2. Pure functions - the same input always gives the same output

3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

✍ *The members of freeCodeCamp happen to love tea.*

*In the code editor, the `prepareTea` and `getTea` functions are already defined for you. Call the `getTea` function to get 40 cups of tea for the team, and store them in the `tea4TeamFCC` variable.*

<pre>
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line
</pre>

----

2. **Understand Functional Programming Terminology**

The FCC Team had a mood swing and now wants two types of tea: green tea and black tea. General Fact: Client mood swings are pretty common.

With that information, we'll need to revisit the `getTea` function from last challenge to handle various tea requests. We can modify `getTea` to accept a function as a parameter to be able to change the type of tea it prepares. This makes `getTea` more flexible, and gives the programmer more control when client requests change.

But first, let's cover some functional terminology:

*Callbacks* are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in `filter`, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called *first class* functions. In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value are called *higher order* functions.

When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.

✍ *Prepare 27 cups of green tea and 13 cups of black tea and store them in `tea4GreenTeamFCC` and `tea4BlackTeamFCC` variables, respectively. Note that the `getTea` function has been modified so it now takes a function as the first argument.*

*Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.*

<pre>
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
</pre>

----

3. **Understand the Hazards of Using Imperative Code**

Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.

In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables. A classic example is writing a `for` loop that gives exact directions to iterate over the indices of an array.

In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the `for` loop mentioned above, you could call the `map` method which handles the details of iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.

Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for `tabOpen()`, `tabClose()`, and `join()`. The array `tabs` is part of the Window object that stores the name of the open pages.

✍ *Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in `finalTabs.tabs`, should be `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` but the list produced by the code is slightly different.*

*Change `Window.prototype.tabClose` so that it removes the correct tab.*

<pre>
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
</pre>

----

4. **Avoid Mutations and Side Effects Using Functional Programming**

If you haven't already figured it out, the issue in the previous challenge was with the `splice` call in the `tabClose()` function. Unfortunately, `splice` changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.

This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.

One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the `splice` method changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called *mutation*, and the outcome is called a *side effect*. A function, ideally, should be a *pure function*, meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.

✍ *Fill in the code for the function `incrementer` so it returns the value of the global variable `fixedValue` increased by one.*

<pre>
// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line
  return fixedValue + 1;

  // Only change code above this line
}
</pre>

----

5. **Pass Arguments to Avoid External Dependence in a Function**

The last challenge was a step closer to functional programming principles, but there is still something missing.

We didn't alter the global variable value, but the function `incrementer` would not work without the global variable `fixedValue` being there.

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

✍ *Let's update the `incrementer` function to clearly declare its dependencies.*

*Write the `incrementer` function so it takes an argument, and then returns a result after increasing the value by one.*

<pre>
// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (value) {
  return value + 1;

  // Only change code above this line
}

var differentValue = incrementer(fixedValue);

console.log(fixedValue);
</pre>

----

6. **Refactor Global Variables Out of Functions**

So far, we have seen two distinct principles for functional programming:

1. Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2. Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

✍ *Rewrite the code so the global array `bookList` is not changed inside either function. The `add` function should add the given `bookName` to the end of the array passed to it and return a new array (list). The `remove` function should remove the given `bookName` from the array passed to it.*

**Note**: *Both functions should return an array, and any new parameters should be added before the `bookName` parameter.*

<pre>
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
</pre>

----

7. **Use the map Method to Extract Data from an Array**

So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having a function only depend on its input arguments.

This is only the beginning. As its name suggests, functional programming is centered around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered first class objects in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

Let's start with some simple array functions, which are methods on the array object prototype. In this exercise we are looking at `Array.prototype.map()`, or more simply `map`.

The `map` method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the `map` method was called.

See below for an example using the `map` method on the `users` array to return a new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback.

<pre>
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]
</pre>

✍ *The `watchList` array holds objects with information on several movies. Use `map` on `watchList` to assign a new array of objects with only `title` and `rating` keys to the `ratings` variable. The code in the editor currently uses a `for` loop to do this, so you should replace the loop functionality with your `map` expression.*

<pre>
const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));
</pre>

----

8. **Implement map on a Prototype**

As you have seen from applying `Array.prototype.map()`, or simply `map()` earlier, the `map` method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

In other words, `map` is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

It would teach us a lot about `map` to try to implement a version of it that behaves exactly like the `Array.prototype.map()` with a `for` loop or `Array.prototype.forEach()`.

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

✍ *Write your own `Array.prototype.myMap()`, which should behave exactly like `Array.prototype.map()`. You may use a for loop or the forEach method.*

<pre>
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Only change code below this line
this.forEach(a => newArray.push(callback(a)));
  // Only change code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
</pre>

----

9. **Use the filter Method to Extract Data from an Array**

Another useful array function is `Array.prototype.filter()`, or simply `filter()`.

`filter` calls a function on each element of an array and returns a new array containing only the elements for which that function returns `true`. In other words, it filters the array, based on the function passed to it. Like `map`, it does this without needing to modify the original array.

The callback function accepts three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the `filter` method was called.

See below for an example using the `filter` method on the `users` array to return a new array containing only the users under the age of 30. For simplicity, the example only uses the first argument of the callback.

<pre>
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
</pre>

✍ *The variable `watchList` holds an array of objects with information on several movies. Use a combination of `filter` and `map` on `watchList` to assign a new array of objects with only `title` and `rating` keys. The new array should only include objects where `imdbRating` is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.*

<pre>
// The global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

var filteredList = watchList.map(movie => {
  return {
    title: movie.Title,
    rating: movie.imdbRating
  };
})
.filter(movie => {
  return parseFloat(movie.rating) >= 8.0;
});

// Only change code above this line

console.log(filteredList);
</pre>

----

10. **Implement the filter Method on a Prototype**

It would teach us a lot about the `filter` method if we try to implement a version of it that behaves exactly like `Array.prototype.filter()`. It can use either a `for` loop or `Array.prototype.forEach()`.

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

✍ *Write your own `Array.prototype.myFilter()`, which should behave exactly like `Array.prototype.filter()`. You may use a `for` loop or the `Array.prototype.forEach()` method.*

<pre>
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  let newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  // Only change code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
</pre>

----

11. **Return Part of an Array Using the slice Method**

The `slice` method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The `slice` method does not mutate the original array, but returns a new one.

Here's an example:

<pre>
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]
</pre>

✍ *Use the `slice` method in the `sliceArray` function to return part of the `anim` array given the provided `beginSlice` and `endSlice` indices. The function should return an array.*

<pre>
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

return anim.slice(beginSlice, endSlice);

  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
</pre>

----

12. **Remove Elements from an Array Using slice Instead of splice**

A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the `splice` method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the `splice` method mutates the original array it is called on. Here's an example:

<pre>
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]
</pre>

As we saw in the last challenge, the `slice` method does not mutate the original array, but returns a new one which can be saved into a variable. Recall that the `slice` method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array. Using the `slice` method instead of `splice` helps to avoid any array-mutating side effects.

✍ *Rewrite the function `nonMutatingSplice` by using `slice` instead of `splice`. It should limit the provided `cities` array to a length of 3, and return a new array with only the first three items.*

*Do not mutate the original array provided to the function.*

<pre>
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0, 3);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
</pre>

----

13. **Combine Two Arrays Using the concat Method**

*Concatenation* means to join items end to end. JavaScript offers the `concat` method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to `concat`, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

<pre>
[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]
</pre>

✍ *Use the `concat` method in the `nonMutatingConcat` function to concatenate `attach` to the end of `original`. The function should return the concatenated array.*

<pre>
function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return original.concat(attach);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
</pre>

----

14. **Add Elements to the End of an Array Using concat Instead of push**

Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the `concat` method as a way to combine arrays into a new one without mutating the original arrays. Compare `concat` to the `push` method. `Push` adds an item to the end of the same array it is called on, which mutates that array. Here's an example:

<pre>
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way
</pre>

`Concat` offers a way to add new items to the end of an array without any mutating side effects.

✍ *Change the `nonMutatingPush` function so it uses `concat` to add `newItem` to the end of `original` instead of `push`. The function should return an array.*

<pre>
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
</pre>

----

15. **Use the reduce Method to Analyze Data**

`Array.prototype.reduce()`, or simply `reduce()`, is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the `reduce` method.

The `reduce` method allows for more general forms of array processing, and it's possible to show that both `filter` and `map` can be derived as special applications of `reduce`. The `reduce` method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.

The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which `reduce` is called.

In addition to the callback function, `reduce` has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

See below for an example using `reduce` on the `users` array to return the sum of all the users' ages. For simplicity, the example only uses the first and second arguments.

<pre>
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64
</pre>

In another example, see how an object can be returned containing the names of the users as properties with their ages as values.

<pre>
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }
</pre>

✍ *The variable `watchList` holds an array of objects with information on several movies. Use `reduce` to find the average IMDB rating of the movies **directed by Christopher Nolan**. Recall from prior challenges how to `filter` data and `map` over it to pull what you need. You may need to create other variables, and return the average rating from `getRating` function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.*

<pre>
// The global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList){
  // Only change code below this line
    var averageRating =
  watchList
    // Use filter to find films directed by Christopher Nolan
    .filter(film => film.Director === "Christopher Nolan")
    // Use map to convert their ratings from strings to numbers
    .map(film => Number(film.imdbRating))
    // Use reduce to add together their ratings
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  // Divide by the number of Nolan films to get the average rating
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  // Only change code above this line
  return averageRating;
}
console.log(getRating(watchList));
</pre>

----

16. **Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem**

Now that you have worked through a few challenges using higher-order functions like `map()`, `filter()`, and `reduce()`, you now get to apply them to solve a more complex challenge.

✍ *We have defined a function named `squareList`. You need to complete the code for the `squareList` function using any combination of `map()`, `filter()`, and `reduce()` so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is `[-3, 4.8, 5, 3, -3.2]`.*

*Note: Your function should not use any kind of `for` or `while` loops or the `forEach()` function.*

<pre>
const squareList = (arr) => {
  // Only change code below this line
  return arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
</pre>

----

17. **Sort an Array Alphabetically using the sort Method**

The `sort` method sorts the elements of an array according to the callback function.

For example:

<pre>
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
</pre>

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called `compareFunction`, is supplied, the array elements are sorted according to the return value of the `compareFunction`: If `compareFunction(a,b)` returns a value less than 0 for two elements `a` and `b`, then `a` will come before `b`. If `compareFunction(a,b)` returns a value greater than 0 for two elements `a` and `b`, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements `a` and `b`, then `a` and `b` will remain unchanged.

✍ *Use the `sort` method in the `alphabeticalOrder` function to sort the elements of `arr` in alphabetical order.*

<pre>
function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });

  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
</pre>

----

18. **Return a Sorted Array Without Changing the Original Array**

A side effect of the `sort` method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that `slice` and `concat` return a new array), then run the `sort` method.

✍ *Use the `sort` method in the `nonMutatingSort` function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the `globalArray` variable.*

<pre>
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
    return [].concat(arr).sort(function(a, b) {
      return a - b;
    });
  // Only change code above this line
}
nonMutatingSort(globalArray);
</pre>

----

19. **Split a String into an Array Using the split Method**

The `split` method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:

<pre>
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]
</pre>

Since strings are immutable, the `split` method makes it easier to work with them.

✍ *Use the `split` method inside the `splitify` function to split `str` into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.*

<pre>
function splitify(str) {
  // Only change code below this line

return str.split(/\W/)
  // Only change code above this line
}
splitify("Hello World,I-am code");
</pre>

----

20. **Combine an Array into a String Using the join Method**

The `join` method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:

<pre>
var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"
</pre>

Use the `join` method (among others) inside the `sentensify` function to make a sentence from the words in the string `str`. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the `replace` method.

<pre>
function sentensify(str) {
  // Only change code below this line
return str.split(/\W/).join(" ");

  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
</pre>

----

21. **Apply Functional Programming to Convert Strings to URL Slugs**

The last several challenges covered a number of useful array and string methods that follow functional programming principles. We've also learned about `reduce`, which is a powerful method used to reduce problems to simpler forms. From computing averages to sorting, any array operation can be achieved by applying it. Recall that `map` and `filter` are special cases of `reduce`.

Let's combine what we've learned to solve a practical problem.

Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled "Stop Using Reduce", it's likely the URL would have some form of the title string in it (".../stop-using-reduce"). You may have already noticed this on the freeCodeCamp site.

✍ *Fill in the `urlSlug` function so it converts a string `title` and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use `replace`. Here are the requirements:*

*The input is a string with spaces and title-cased words*

*The output is a string with the spaces between words replaced by a hyphen (`-`)*

*The output should be all lower-cased letters*

*The output should not have any spaces*

<pre>
// Only change code below this line
function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => {
      return obj !== "";
    })
    .join("-")
    .toLowerCase();
}
// Only change code above this line
</pre>

----

22. **Use the every Method to Check that Every Element in an Array Meets a Criteria**

The `every` method works with arrays to check if every element passes a particular test. It returns a Boolean value - `true` if all values meet the criteria, `false` if not.

For example, the following code would check if every element in the `numbers` array is less than 10:

<pre>
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false
</pre>

✍ *Use the `every` method inside the `checkPositive` function to check if every element in `arr` is positive. The function should return a Boolean value.*

<pre>
function checkPositive(arr) {
  // Only change code below this line

return arr.every(val => val > 0);

  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
</pre>

----

23. **Use the some Method to Check that Any Elements in an Array Meet a Criteria**

The `some` method works with arrays to check if any element passes a particular test. It returns a Boolean value - `true` if any of the values meet the criteria, `false` if not.

For example, the following code would check if any element in the `numbers` array is less than 10:

<pre>
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true
</pre>

✍ *Use the `some` method inside the `checkPositive` function to check if any element in `arr` is positive. The function should return a Boolean value.*

<pre>
function checkPositive(arr) {
  // Only change code below this line

return arr.some(elem => elem > 0);

  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
</pre>

----

24. **Introduction to Currying and Partial Application**

The arity of a function is the number of arguments it requires. *Currying* a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:

<pre>
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3
</pre>

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

<pre>
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
</pre>

Similarly, *partial application* can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

<pre>
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
</pre>

✍ *Fill in the body of the `add` function so it uses currying to add parameters `x`, `y`, and `z`.*

<pre>
function add(x) {
  // Only change code below this line
  return function(y) {
    return function(z){
      return x + y + z;
    };
  };

  // Only change code above this line
}
add(10)(20)(30);
</pre>

----

### Intermediate Algorithms Scripting

The following challenges are part of FCC's Intermediate Algorithm Scripting Challenges. These should prepare you to complete the final challenges for the JavaScript Algorithms And Data Structures Certification.

These challenges will allow you to test how much you have learned and which parts you may need to review again before starting the projects.

With that being said-

Have fun and remember to use the Read-Search-Ask method if you get stuck.

Good Luck!

----

1. **Sum All Numbers in a Range**

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, `sumAll([4,1])` should return `10` because sum of all the numbers between 1 and 4 (both inclusive) is `10`.

<pre>
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

sumAll([1, 4]);
</pre>

----

2. **Diff Two Arrays**

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.

<pre>
function diffArray(arr1, arr2) {
  var newArr = [];

function onlyInFirst(first, second) {
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      newArr.push(first[i]);
    }
  }
}
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
</pre>

----

3. **Algorithm Scripting: Seek and Destroy**

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the `arguments` object.

<pre>
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
</pre>

----

4. **Wherefore art thou**

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`, and the second argument is `{ last: "Capulet" }`, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

<pre>
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
</pre>

----

5. **Spinal Tap Case**

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

<pre>
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");
</pre>

----

6. **Pig Latin**

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

✍ *Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.*

<pre>
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
  ? str
      .replace(consonantRegex, "")
      .concat(myConsonants)
      .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
</pre>

----

7. **Search and Replace**

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

<pre>
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
</pre>

----

8. **DNA Pairing**

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

<pre>
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");
</pre>

----

9. **Missing letters**

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

<pre>
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");
</pre>

----

10. **Sorted Union**

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

<pre>
function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
</pre>

----

11. **Convert HTML Entities**

Convert the characters `&`, `<`, `>`, `"` (double quote), and `'` (apostrophe), in a string to their corresponding HTML entities.

<pre>
function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");
</pre>

----

12. **Sum All Odd Fibonacci Numbers**

Given a positive integer `num`, return the sum of all odd Fibonacci numbers that are less than or equal to `num`.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, `sumFibs(10)` should return `10` because all odd Fibonacci numbers less than or equal to `10` are 1, 1, 3, and 5.

<pre>
function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);
</pre>

----

13. **Sum All Primes**

A *prime number* is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite `sumPrimes` so it returns the sum of all prime numbers that are less than or equal to num.

<pre>
function sumPrimes(num) {
  var res = 0;

  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

// test here
sumPrimes(10);
</pre>

----

14. **Smallest Common Multiple**

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

<pre>
function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

// test here
smallestCommons([1, 5]);
</pre>

----

15. **Drop it**

Given the array `arr`, iterate through and remove each element starting from the first element (the 0 index) until the function `func` returns `true` when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, `arr` should be returned as an empty array.

<pre>
function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
</pre>

----

16. **Steamroller**

Flatten a nested array. You must account for varying levels of nesting.

<pre>
function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);
</pre>

----

17. **Binary Agents**

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

<pre>
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
</pre>

----

18. **Everything Be True**

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

<pre>
function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
</pre>

----

19. **Arguments Optional**

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, `addTogether(2, 3)` should return `5`, and `addTogether(2)` should return a function.

Calling this returned function with a single argument will then return the sum:

`var sumTwoAnd = addTogether(2);`

`sumTwoAnd(3)` returns `5`.

If either argument isn't a valid number, return undefined.

<pre>
function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== "number") {
      return undefined;
    } else return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}

// test here
addTogether(2, 3);
</pre>

----

20. **Make a Person**

Fill in the object constructor with the following methods below:

<pre>
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
</pre>

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

<pre>
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();
</pre>

----

21. **Map the Debris**

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format `{name: 'name', avgAlt: avgAlt}`.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km<sup>3</sup>s<sup>-2</sup>.

<pre>
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr = [];

  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    // create new object
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
</pre>

----

### JavaScript Algorithms and Data Structures Projects

Time to put your new JavaScript skills to work! These challenges will be similar to the algorithm scripting challenges but more difficult. This will allow you to prove how much you have learned.

In this section you will create the following small JavaScript programs:

- Palindrome Checker
- Roman Numeral Converter
- Caesars Cipher
- Telephone Number Validator
- Cash Register

Have fun and remember to use the Read-Search-Ask method if - you get stuck.

Good Luck!

----

1. **Palindrome Checker**

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Note**

You'll need to remove **all non-alphanumeric characters**(punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `"racecar"`, `"RaceCar"`, and `"race CAR"` among others.

We'll also pass strings with special symbols, such as `"2A3*3a2"`, `"2A3 3a2"`, and `"2_A3*3#A2"`.

<pre>
function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}
</pre>

----

2. **Roman Numeral Converter**

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

<pre>
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

// test here
convertToRoman(36);
</pre>

----

3. **Caesars Cipher**

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

<pre>
function rot13(str) {
  // Split str into a character array
  return (
    str
      .split("")
      // Iterate over each character in the array
      .map.call(str, function(char) {
        // Convert char to a character code
        var x = char.charCodeAt(0);
        // Checks if character lies between A-Z
        if (x < 65 || x > 90) {
          return String.fromCharCode(x); // Return un-converted character
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
      })
      .join("")
  ); // Rejoin the array into a string
}
</pre>

----

4. **Telephone Number Validator**

Return `true` if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

<pre>
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
</pre>

For this challenge you will be presented with a string such as `800-692-7753` or `8oo-six427676;laskdjf`. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is `1`. Return `true` if the string is a valid US phone number; otherwise return `false`.

<pre>
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");
</pre>

----

5. **Cash Register**

Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a `status` key and a `change` key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key `change` if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.

Currency Unit	| Amount
----|----
Penny	| $0.01 (PENNY)
Nickel	| $0.05 (NICKEL)
Dime	| $0.1 (DIME)
Quarter	| $0.25 (QUARTER)
Dollar	| $1 (ONE)
Five Dollars	| $5 (FIVE)
Ten Dollars	| $10 (TEN)
Twenty Dollars	| $20 (TWENTY)
One-hundred Dollars	| $100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

<pre>
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
</pre>

<pre>
// Create an array of objects which hold the denominations and their values
var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle exact change
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // Handle obvious insufficient funds
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change remaining
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the current change_arr
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Here is your change, ma'am.
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}

// test here
checkCashRegister(19.5, 20.0, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0]
]);
</pre>

test
