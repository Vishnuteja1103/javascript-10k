let mainbackground = document.getElementById("mainbackground")
let blue = document.getElementById("blue")
let green = document.getElementById("green")
let red = document.getElementById("red")


function fristbutton(){
 
    blue.addEventListener("click", function() {
        document.body.style.backgroundColor = "blue";
    });
}


function secondbutton(){
    green.addEventListener("click", function(){
        document.body.style.backgroundColor = "green";
    });
}

function thirdbutton(){
    red.addEventListener("click",function(){
        document.body.style.backgroundColor = "red";
    });
}