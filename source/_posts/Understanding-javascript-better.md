---
title: Understanding JavaScript closures and scope
date: 2020-03-03 23:31:55
tags:
  - JavaScript
categories:
  - Development
description: JavaScript closure and scope examples with visualisation tools — understand how var, let, and closures behave through interactive experiments.
---

Closures and scope are some of the trickier parts of JavaScript. These tools and examples help make them concrete.

## Visualisation tools

Run JavaScript code step-by-step and see the call stack and memory state:

- [JavaScript Visualizer (Tyler McGinnis)](https://tylermcginnis.com/javascript-visualizer/)
- [Python Tutor — JavaScript mode](http://pythontutor.com/javascript.html#mode=display)

## Example 1: The classic `var` in a loop problem

```javascript
var data = [];
for (var k = 0; k < 3; k++) {
  data[k] = function() {
    console.log(k);
  };
}
data[0](); // prints 3, not 0 — why?
```

`var` is function-scoped, not block-scoped. By the time any of these functions run, the loop has finished and `k` is `3`. All three functions share the same `k`.

**Fix:** Use `let` instead of `var` in the loop.

## Example 2: Block scope with `var` inside a block

```javascript
function a() {
  let fn;
  {
    var x = 5;   // var ignores block scope — hoisted to function scope
    fn = function() {
      console.log(x);
    };
  }
  return fn;
}
var x = 10;
const b = a();
b(); // prints 5
```

Even though `x = 10` exists in the outer scope, the function closes over the `x = 5` inside `a()` because `var` is hoisted to the function level.

## Example 3: Closure capturing a variable, not its value

```javascript
var a = 100;
function abc(x) {
  var a = 10;
  return function(y) {
    return a + y;  // closes over abc's local 'a', not the outer 'a'
  };
}
a = 50;
var inner = abc(20);
function foo() {
  var a = 30;
  console.log(inner(5)); // prints 15 (10 + 5)
}
foo();
```

`inner` closes over `abc`'s local `a = 10`, regardless of any other `a` variables in other scopes.
