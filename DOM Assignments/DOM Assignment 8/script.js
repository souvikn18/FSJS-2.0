const aside = document.getElementsByTagName("aside");

const bg = document.querySelector(".container-fluid");
bg.style.backgroundColor = "#ffffff";

// const navbar = document.querySelector(".navbar-nav");
// const collapse = document.getElementById("navbarTogglerDemo01");
// collapse.addEventListener("click",()=>{
//     collapse.append(navbar);
// })

let coll = document.getElementsByClassName("navbar-nav ms-auto list-btn");
// let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}