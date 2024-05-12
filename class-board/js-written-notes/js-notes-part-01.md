# JAVASCRIPT BASICS

## Learning

0. tutorialpoints
1. w3schools
2. <https://javascript.info/>
3. (MDN) mozillaJavascript

## Browser Engine

- Blink : google
- Gecko : firefox
- WebKit: Apple safari

## JavaScript Engine

- V8    - chrome
- Spider Monkey - Firefox
- Chakra    - Edge

## JS

- Initially for dynamic web pages
- Add interactivity to webpage.
- Programs are called scripts
- JS is both interpreter and compiled language.
- Light weight Interpreted
- Just in time Compiled
- `[Interpreter]` line by line execution.
- interpreted languages :
  - python
  - go lang
  - R lang
- `[Compiled]` not line by
line execution.
  - c, c++
  - C#
- `First Class Function`:
  - Treating function as normal variable is called first class function.
  well known as scripting language

## single threaded

| THREAD👉|single thread|multi thread  |
|---------|---------|---------|
|points   | there is only one execution thread for a process or program.        |      multiple threads of execution run concurrently within the same process or program.   |
|example  |   person can write one examwith only one hand       |  `eg` writing exam in both right and left hand at a same time.    |

## sync vs async

|  |sync  |async  |
|---------|---------|---------|
| example     | completing the physics assignment first then writing chemistry assignment         | writing half of the physics assignment and then started writing chemistry assignment. once chemistry assignment completed. coming back to physics assignment and completed the remaining         |

## Dynamic type language

- We can't mention what datatype during declaration.
- JS will decide datatype on go.

```javascript
let value = 100; 
console.log(typeof value); // number
value = "hello world!";
console.log(typeof value); // string
```

### multi-paradigm

- ***object oriented programming*** - real time object based programming
- ***functional programming*** - lambda calculus based programming
- ***imperative programming*** - simple imperative statement like code.

### JS version

**ECMA :** European Computer Manufacturers Association

- ES - ECMA script
- why ES6 is so important ?
  - Major modern js concepts are introduced.
  - E - ECMA
  - S - Script
  - 6 - version 6

# basics

- java vs js

- story of js
- node js vs js
- js - runs in browser
- node js - is a software used to run JS in computer.
- scripting language
- js is scripting language
- vanilla js
- writing code using pure js.
- js is a synchronous single threaded language

## Javascript Can and Can't

- can't do any cpu related task
- can deal with browser.

## javascript fundamentals

- where to write
- script.js in separate file
- inside the `<script>` tag.
- Mostly Include javascript at the end of document
  - because, first html body elements should load first.
- output
- `console.log()`
- hello world
- syntax: `console.log("Hello World!");`
- statements
- a line of code can be called as statements
- eg:

```javascript
   console.log("hello world");
   console.log(100 + 200);
```

- syntax
- comments
- single -> `//`
- multiple -> `/**/`

### [ NOTE : always use semicolon at end of statement ]

- variable declaration
- keywords
  - reserved special characters  for programming language are keywords.
- `var` keyword
- operators
- Assignment Operators (=)
- Arithmetic Operators
  - [s] + Addition
  - [s] - Subtraction
  - [ ] -   unary minus
  - [ ] +   unary plus
  - [s] * Multiplication
  - [s] / Division ( front slash )
  - [s] % Modulus (Division Remainder)
  - [s] ** Exponentiation (ES2016)
  - [ ] ++ Increment
  - [ ] -- Decrement
  - [ ] Short Hand Operator
- Comparison Operators
  - [ ] == equal to
  - [ ] === equal value and equal type
  - [ ] != not equal
  - [ ] !== not equal value or not equal type
  - [ ] > greater than
  - [ ] < less than
  - [ ] >= greater than or equal to
  - [ ] <= less than or equal to
- Logical Operators
  - [s] &&
  - [s] ||
  - [s] !
- Type Operators
  - [ ] typeof
  - [ ] instanceof
    - used when dealing with classes and objects
- Bitwise Operators
  - This is to deal with binary values.
  - [s] & AND
  - [s] | OR
  - [ ] ~ NOT
  - [s] ^ XOR
  - [s] << left shift
  - [s] >> right shift
  - [s] >>> unsigned right shift
- Ternary Operators
  - [ ] ?:
  - syntax:
    `var res = expression ? truth result : failure result;`
  - eg:

```javascript
var a = 10;
var b = 20;
var res = (a > b) ? "good boy" : "bad boy";
```

 In above code, res is stored with "bad boy"

- String Operators ( + )
- when using + with strings. It will join two strings.
- Adding strings and Numbers

  example:
           10 + 10 + "100" => 20100
           "100" + 10 + 10 => 1001010

TOPICS

- Document DOM
- getElementById
- getElementsByClassName
- getElementsByTagName
- getElementsByName
- used rare
- basic data types

[ primitive data type ]

- String
  - single quotes
  - double quotes
  - back tick
  - string methods
- Number
- Bigint
- Boolean
- Undefined
- Symbol

[ Non primitive type ]

- Object
- An array

## operators and operands

- operators
  - each operators has different no of operands
  - eg;  ++ use 1 operands eg: a++
  - use 2 operands eg: a*b
- type conversion
- used to convert from one datatype to another
- eg: number to string
- .toString()
  - string to number
- parseInt()

### == vs ===

- == and ===
  == for compare values
  === for compare its data types and values

# control flows

- if
- if else
- nested if
- if else ladder

loops

- for, for in, for of
- while
- do while
- switch
- break continue
- only works under loop and switch

variables

- variable declaration rules followed by javascript

FUNCTIONS

- function ( normal function )
- functional expression
- arrow function

OTHER JS functions

- alert, prompt, confirm
