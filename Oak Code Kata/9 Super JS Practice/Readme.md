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
Add the strict inequality operator to the `if` statement so the function will return "Not Equal" when `val` is not strictly equal to `17`

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



----

63. ****

----

64. ****

----

65. ****

----

66. ****

----

67. ****

----

68. ****

----

69. ****

----

70. ****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

----
****

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
