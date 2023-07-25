## DOM Assignments FSJS 2.0

## Assignment 7

> Task-1: Remove the language that have 2.0 in their name(Every alternative language)

Here is the code for this specific task.

```
const lang = document.getElementsByClassName("courses");
for (let i = 1; i <= lang.length; i++) {
    if (lang[i]%2!=0) {
        lang[i].remove();
    }
}
```

> Task-2: Use JavaScript to write something in the inputbox and submit the form. This should refreash the page and languages in the left card should come back.

```
working on it
```

Code file: [Click here...](./script.js)