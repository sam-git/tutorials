Eloquent Javascript Chapter Notes
---

## Table of Contents

  8. [Bugs and Error Handling](#chapter-8)
  9. [Regular Expressions](#chapter-9)
  10. [Modules](#chpater-10)
  11. [Project: A Programming Language](#chapter-11)



Chapter 8
---
[Bugs and Error Handling](http://eloquentjavascript.net/08_error.html)

`debugger` statement in javascript will pause the code and open the browsers debugger at that point of execution. [link](http://eloquentjavascript.net/08_error.html#p_E0PMYRZC2c)

in non strict mode, `this` is functions that are not called as methods refers to the global scope object. using strict mode makes it hold the value `undefined`. [link](http://eloquentjavascript.net/08_error.html#h_u1jlTq3i42)



Chapter 9
---
[Regular Expressions](http://eloquentjavascript.net/09_regexp.html)

`<regex>.test(<string>)` is the simplest ay to regex and returns a boolean.

Doing this in a regular expression in the browser breaks it :(
`/([01]+)+b/.test("010101001010010101010101010100101001")`
[link](http://eloquentjavascript.net/09_regexp.html#p_VxCrsg7UEp)

`<regex>.exec(<string>)`
is the same as
`<string>.match(<regex>)`

#### Square Brackets
- . loses its special meaning inside square Brackets
- \- between two indicates a range based on the characters unicode numbers.
- a caret ^ immediately after the opening square bracket inverts the character set so it will match anything *except* the characters in the set. [link](http://eloquentjavascript.net/09_regexp.html#p_HqQEZsitdl)

#### Curly Braces
Indicate a pattern should occur a precise number of times.
eg
- `\d{2}` is 2 numeric characters
- `\d{1,2}` means 1 or 2 numeric characters.
- `\d{,2}` is at most 2
- `\d{2,}` is at least 2

#### Misc
The dot character does not match across new lines.
Use [^] to match any character *including* new lines. [link](http://eloquentjavascript.net/09_regexp.html#p_6+ZTC2M5ci)



Chapter 10
---
 [Modules](http://eloquentjavascript.net/10_modules.html)

[Relation between CommonJS, AMD and RequireJS?](http://stackoverflow.com/q/16521471)
[Understanding module.exports and exports in Node.js](http://www.sitepoint.com/understanding-module-exports-exports-node-js/) - Cho S. Kim
[Node.js Module Patterns - using simple examples](https://darrenderidder.github.io/talks/ModulePatterns/#/)



Chapter 11
---
[Project: A Programming Language](http://eloquentjavascript.net/11_language.html)

[Solving problem 3 - Comments](http://eloquentjavascript.net/11_language.html#h_/OBuIOX390)
- string.search returns the first index of match.
- string.match returns an array that includes the groups.

 - regex.test returns a boolean
 - regex.exec does the same as string.match
