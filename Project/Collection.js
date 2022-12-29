/*Caraousal */

let flag=0;

function controller(x)
{
    flag+=x;
    slideShow(flag);
}
slideShow(flag);
function slideShow(num)
{
   
    let slides=document.getElementsByClassName("slide");
if(num==slides.length)
{
flag=0;
num=0;
}
else if(num==-1)
{
    flag=slides.length-1;
    num=slides.length-1;
}

    for(let i of slides)
    {
        i.style.display="none";
    }
    slides[num].style.display="block";
}
