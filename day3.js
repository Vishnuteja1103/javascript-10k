let heading = document.getElementById("heading")
console.log(heading.textContent)


// function chbt(){
//     console.log("button clicked")
// }

function chbt(){
    heading.textContent="hi korada vishnu teja"
    heading.style.color="red";
}


function greet(name){
    console.log("hi")
    name();
    console.log("bye")
}

function full_name(){
    console.log("vishnu ")
    console.log("teja")
}

greet(full_name)