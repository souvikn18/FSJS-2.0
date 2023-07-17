## DOM Assignments FSJS 2.0

## Assignment 6

In this assignment we have to replicate an image's specific section using DOM. The following image is the version before adding the script.

![](./assignment6.PNG)

And after adding the script the image will look like this.

![](./assignment6.PNG-after.PNG)

Here is the code for these tasks.

```
const logo = document.querySelector(".logo");
logo.remove();
const header = document.querySelector("#headerLogo");
const newLogo = document.createElement("img");
newLogo.src="./assets/ineuron-logo.png";
header.appendChild(newLogo);

document.querySelector("#price").innerText = "$10";

const lnkdin = document.createElement("i");
lnkdin.className="fa fa-linkedin";
lnkdin.style.cursor="pointer";
lnkdin.addEventListener("mouseenter",()=>{
    lnkdin.style.color="#FA7453";
});
lnkdin.addEventListener("mouseleave",()=>{
    lnkdin.style.color="#000000";
});
const icons = document.querySelector(".footer_social");
icons.append(lnkdin);
```

I am attaching the file also.

[Click here...](./script.js)