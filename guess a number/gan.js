let random = Math.floor(Math.random() * 100)
let input = document.getElementById("input");
let result = document.getElementById("result");


function guessbt() {
    let guess = Number(input.value);

    if ( guess == random) {
        result.textContent = "congratulations "
        result.style.color = "green";

    } else if (guess < random) {
        result.textContent = "oops | you are to low";
        result.style.color = "red";
    } else {
        result.textContent = "oops | you are to high"
        result.style.color = "orange"

    }

}