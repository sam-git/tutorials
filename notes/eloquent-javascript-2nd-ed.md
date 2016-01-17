Eloquent Javascript Chapter Notes
---

## Table of Contents

  8. [Bugs and Error Handling](#chapter-8)
  9. [Regular Expressions](#chapter-9)
  10. [Modules](#chpater-10)
  11. [Project: A Programming Language](#chapter-11)
  12. [JavaScript and the Browser](#chapter-12)
  13. [The Document Object Model](#chapter-13)
  14. [Handling Events](#chapter-14)




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

The node list returned by a method like getElementsByTagName (or a property like childNodes) is live. That is, it is updated as the document changes.
<br>
eg `document.body.getElementsByTagName("img");`

document.createTextNode(*text*)
> creates a text node, that can then be inserted into the DOM.

To replace an element with a new one:
> `e1.parentNode.replaceChild(e2, e1);`

Same pattern to remove an element:
> `para.parentNode.removeChild(para);`

I really like the elegance of this [sample code](http://eloquentjavascript.net/13_dom.html#c_tE3g5erxbl) for highlighting keywords in programming languages.

### Properties of DOM elements

`offsetWidth` and `offsetHeight`
> the space the element takes up in pixels. Includes border and padding.

`clientWidth` and `clientHeight`
> The space inside an element. Only includes padding, ignores border.

Both the above don't include margin.

**Laying out Document Efficienlty**

Laying out a document can be quite a lot of work. In the interest of speed, browser engines do not immediately re-layout a document every time it is changed but rather wait as long as they can.

Set style of an element with `element.style.color = "magenta";`
or `element.style[font-family] = "arial";`

** Query selectors **

The `querySelectorAll` method, which is defined both on the document object and on element nodes, takes a selector string and returns an array-like object containing all the elements that it matches.

Unlike methods such as `getElementsByTagName`, the object returned by `querySelectorAll` is not live. It won’t change when you change the document.

The `querySelector` method (without the All part) works in a similar way. This one is useful if you want a specific, single element. It will return only the first matching element or null if no elements match.

### Positioning and animating

**`position` style property**

* By default it is `static`, meaning the element sits in its normal place in the document.
*  When it is set to `relative`, the element still takes up space in the document, but now the `top` and `left` style properties can be used to move it relative to its normal place.
* When position is set to `absolute`, the element is removed from the normal document flow—that is, it no longer takes up space and may overlap with other elements.
  * Also, its `top` and `left` properties can be used to absolutely position it relative to the top-left corner of the nearest enclosing element whose position property isn’t `static`, or relative to the document if no such enclosing element exists.


Chapter 14
---
[Handling Events](http://eloquentjavascript.net/14_event.html)

<<<<<<< HEAD
### Mouse Motion

* Unfortunately, not all browsers give "mousemove" events a meaningful `which` property. There is a standard property called `buttons`, which provides similar information, but that is also not supported on all browsers. Fortunately, all major browsers support either `buttons` or `which`, so the `buttonPressed` function in the example first tries `buttons`, and falls back to `which` when that isn’t available.
=======
* In the browser the global scope is equivalent to the window object.
* Every DOM element has its own `addEventListener` method, which allows you to listen specifically on that element.
* Giving a node an `onclick` attribute has a similar effect. But a node has only one `onclick` attribute, so you can register only one handler per node that way.

### Key Events
The DOM node where a key event originates depends on the element that has focus when the key is pressed. Normal nodes cannot have focus (unless you give them a tabindex attribute), but things such as links, buttons, and form fields can. We’ll come back to form fields in Chapter 18. When nothing in particular has focus, document.body acts as the target node of key events.

### Mouse Motion
I should add that a hover effect like this can be much more easily achieved using the CSS pseudoselector :hover, as the next example shows. But when your hover effect involves doing something more complicated than changing a style on the target node, you must use the trick with "mouseover" and "mouseout" events.
>>>>>>> 6ba659235d095cbfe7613cfaa428e3d5f65dd036
