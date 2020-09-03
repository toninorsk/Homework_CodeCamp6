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

We have an array of objects representing different people in our contacts lists.

A `lookUpProfile` function that takes `name` and a property (`prop`) as arguments has been pre-written for you.

The function should check if `name` is an actual contact's `firstName` and the given property (`prop`) is a property of that contact.

If both are true, then return the "value" of that property.

If `name` does not correspond to any contacts then return `"No such contact"`.

✍ *If `prop` does not correspond to any valid properties of a contact found to match `name` then return `"No such property"`.*

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
