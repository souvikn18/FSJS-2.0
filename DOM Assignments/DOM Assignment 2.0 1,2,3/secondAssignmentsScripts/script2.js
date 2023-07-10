const newDiv = document.createElement("div");
newDiv.className = "accordian h3";
newDiv.innerHTML="<h3>Skills</h3>";
newDiv.style.backgroundColor="#dadaf8"
newDiv.id="skill";
let para = document.createElement("p");
para.innerText="I posses a very good command over Full stack development technologies like MERN which can be seen in my work over the GitHub."
para.style.backgroundColor="#edf1fd"
newDiv.addEventListener("click",()=>{
    newDiv.appendChild(para)
    if (para.style.display === "block") {
        para.style.display = "none";
      } else {
        para.style.display = "block";
      }
})

const target = document.querySelector(".accordian-wrapper");
target.appendChild(newDiv);

//wrong code(trail)

// const para = document.createElement("p");
// para.className="accordian";
// para.innerText="I posses a very good command over Full stack development technologies like MERN which can be seen in my work over the GitHub."

// // target.appendChild(para);

// const target2 = document.querySelector("#skill");
// target2.addEventListener("click",()=>{
//     target2.appendChild(para);
// })