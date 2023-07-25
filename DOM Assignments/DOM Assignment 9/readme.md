## DOM Assignments FSJS 2.0

## Assignment 9

>Task 1: Change the color of heading tag

```
const set1 = document.getElementsByClassName("title");
set1[1].style.color="#dc143c";
```

>Task 2: Make a hover effect on "Add to cart" button using DOM

```
const btn = document.getElementsByClassName("add-to-cart");
btn[0].addEventListener("mouseenter",()=>btn[0].style.backgroundColor="#dc143c");
btn[0].addEventListener("mouseleave",()=>btn[0].style.backgroundColor="#3c8067");
```

Code file: [Task 1](./script.js)

Code file: [Task 2](./script2.js)