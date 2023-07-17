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