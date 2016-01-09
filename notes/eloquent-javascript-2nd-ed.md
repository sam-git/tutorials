Eloquent Javascript Chapter Notes
---

## Table of Contents

  8. [Bugs and Error Handling](#chapter-8)
  9. [Regular Expressions](#chapter-9)
  10. [Modules](#chpater-10)
  11. [Project: A Programming Language](#chapter-11)
  12. [JavaScript and the Browser](#chapter-12)
  13. [The Document Object Model](#chapter-13)




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

### Global Matching
The `g` modifier is used to perform a global match (find all matches rather than stopping after the first match).

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



 Chapter 12
 ---
 JavaScript and the Browser

 TCP:
 > treats the network as a streamlike device into which you can put bits and have them arrive at the correct destination in the correct order.

 Sandboxing
 > The attraction of the Web is that you can surf it without necessarily trusting all the pages you visit. This is why browsers severely limit the things a JavaScript program may do: it can’t look at the files on your computer or modify anything not related to the web page it was embedded in.
 Isolating a programming environment in this way is called sandboxing.



Chapter 13
---
The Document Object Model

The DOM It acts as a live data structure: when it is modified, the page on the screen is updated to reflect the changes.

Each DOM node object has a nodeType property, which contains a numeric code that identifies the type of node. Regular elements have the value 1, which is also defined as the constant property document.ELEMENT_NODE. Text nodes, representing a section of text in the document, have the value 3 (document.TEXT_NODE). Comments have the value 8 (document.COMMENT_NODE).

document.createTextNode(*text*)
> creates a text node, that can then be inserted into the DOM.

To replace an element with a new one:
> `e1.parentNode.replaceChild(e2, e1);`

Same pattern to remove an element:
> `para.parentNode.removeChild(para);`

I really like the elegance of this [sample code](http://eloquentjavascript.net/13_dom.html#c_tE3g5erxbl) for highlighting keywords in programming languages.

### Properties of DOM elements

`offsetWidth` and `offsetHeight`
> the space the element takes up in pixels.
