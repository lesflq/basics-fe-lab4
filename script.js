function toggleStyles(element, color1, color2, textColor1, textColor2) {
    const isColor1 = element.style.backgroundColor === color1;
    if (isColor1) {
        element.style.backgroundColor = color2;
        element.style.color = textColor2;
    } else {
        element.style.backgroundColor = color1;
        element.style.color = textColor1;
    }
}

document.getElementById("football").onclick = function () {
    toggleStyles(this, "purple", "blue", "white", "yellow");
};

document.querySelector("#favFilm").addEventListener("click", function () {
    toggleStyles(this, "deeppink", "green", "green", "deeppink");
});

function addImage() {
    document.getElementById("kyiv").style.display = "block";
}

function zoomIn() {
    const img = document.getElementById("kyiv");
    let thisWidth = img.clientWidth;
    img.style.width = (thisWidth + 30) + "px";
}

function zoomOut() {
    const img = document.getElementById("kyiv");
    let thisWidth = img.clientWidth;
    if (thisWidth > 70) {
        img.style.width = (thisWidth - 30) + "px";
    }
}

function deleteImage() {
    document.getElementById("kyiv").style.display = "none";
}