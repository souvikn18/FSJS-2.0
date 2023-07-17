## DOM Assignments FSJS 2.0

## Assignment 1 - Task 1

We have to add a new element(Hire Me) in the navigation bar using DOM. And remove the GitHub, LinkedIn, and Instagram icons from the bottom.
Here is the script for the particular task.

```
const a = document.querySelector(".fa-github");
a.remove();
const b = document.querySelector(".fa-linkedin-in");
b.remove();
const c = document.querySelector(".fa-instagram");
c.remove();
let d = document.getElementsByClassName("nav-li");
// console.log(d[0].innerText);
d[3].innerText = "Hire Me";
```

[Click here...](./firstAssignmentScripts/script.js)

>Before

![](./task1.PNG)

>After

![](./task1-after.PNG)

## Assignment 1 - Task 2

Here we have to target the search bar placeholder text and change it accordingly as given to us. And remove the GitHub, LinkedIn, and Instagram icons from the bottom.
Here is the script for the particular task.

```
const a = document.querySelector(".fa-github");
a.remove();
const b = document.querySelector(".fa-linkedin-in");
b.remove();
const c = document.querySelector(".fa-instagram");
c.remove();
const edit1 = document.querySelector("input");
// edit1.innerText="Search my project";
// console.log(edit1);
edit1.placeholder = "Search My Project";
```

[Click here...](./firstAssignmentScripts/script2.js)

>Before

![](./task1.PNG)

>After

![](./task2-after.PNG)

## Assignment 1 - Task 3

Here we have to change the designation from Freelancer to Employee and a company name will replace the national and international client.
Here is the script for the particular task.

```
const jobRole = document.getElementById("job-role");
jobRole.innerText= "an Employee";
const jobPlace = document.getElementById("job-place");
jobPlace.innerText= "iNeuron Intelligence Pvt Ltd";
```

[Click Here...](./firstAssignmentScripts/script3.js)

>Before

![](./task1.PNG)

>After

![](./task3-after.PNG)

## Assignment 1 - Task 4

Here we have to target the avatar image using DOM and change it to our own image.
Here is the script for the particular task.

```
document.getElementById("me").src = "./me.jpg";
```

[Click here...](./firstAssignmentScripts/script4.js)

>Before

![](./task1.PNG)

>After

![](./task4-after.PNG)

## Assignment 1 - Task 5

Here we have to add a new button named "Support Me" beside "Chat with me" using DOM.
Here is the script for the particular task.

```
const btn = document.createElement("button");
btn.innerText= "Support Me";
const chatwme = document.querySelector(".hero-right-section-btns");
chatwme.append(btn);
```

[Click here...](./firstAssignmentScripts/script5.js)

>Before

![](./task1.PNG)

>After

![](./task5-after.PNG)


## Assignment 2 - [Click here](./about/readme.md)

## Assignment 3 - [Click here](./contact/readme.md)