let image = document.getElementById("image")
let warning = document.getElementById("warning")
image.style.width = 250 + "px"

let width = 250;




function increase() {
    if (width <= 400) {
        width += 10;
        image.style.width = width + "px";
        warning.textContent = "";

    } else {
        warning.textcontent = "the image size is too high";
        warning.style.color = "red";
    }


}


function decrease() {
    if (width >= 60) {
        width -= 10;
        image.style.width = width + "px";
        warning.textContent = "";
    } else {
        waning.textcontent = "the image is too small";
        warning.style.color = "red"
    }
}

