---
title: Understanding javascript better
category:
  - null
tags:
  - Javascript
top: 1
originContent: ''
categories: node.js
toc: false
date: 2020-03-03 23:31:55
---

Visualise JavaScript
https://tylermcginnis.com/javascript-visualizer/
http://pythontutor.com/javascript.html#mode=display


```
var data = [];
for (var k = 0; k < 3; k++) {
  data[k] = function() {
    console.log(k);
  };
}
data[0]();

```

```
function a() {
  let fn;
  {
    var x = 5;
    fn = function() {
      console.log(x);
    };
  }
  return fn;
}
var x = 10;
const b = a();
b();

```


```
var a = 100;
function abc(x) {
  var a = 10;
  return function(y) {
    return a + y;
  };
}
a = 50;
var inner = abc(20);
function foo() {
  var a = 30;
  console.log(inner(5));
}
foo();

```