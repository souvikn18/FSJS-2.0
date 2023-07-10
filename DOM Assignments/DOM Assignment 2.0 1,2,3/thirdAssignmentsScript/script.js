const input = document.getElementById("right");

input.addEventListener("submit",(e)=>{
    e.preventDefault();
    name();
    email();
    message();
});



function name() {
    let x = document.getElementById("uname").value;
    document.getElementById("ename").value = x;
}

function email() {
    let x = document.getElementById("uemail").value;
    document.getElementById("eemail").value = x;
}

function message() {
    let x = document.getElementById("umessage").value;
    document.getElementById("emassage").value = x;
}


// input.addEventListener("submit",myFunction());