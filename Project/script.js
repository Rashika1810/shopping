let signupBtn = document.getElementById("signupBtn");
//let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let signinBtn=document.getElementById("signinBtn");
let loggedIn=document.getElementById("loggedIn");

signinBtn.onclick= function()
{
    nameField.style.maxHeight="0";
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick= function()
{
    nameField.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}
loggedIn.onclick=function()
{
    alert("Logged In successfully!");
}

function shopNow()
{
    document.getElementsByClassName("container")[0].style.display="visible";

}



