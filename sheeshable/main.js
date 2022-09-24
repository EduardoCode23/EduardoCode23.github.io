function dropdownMenu() {
    var men = document.getElementById("dropdownClick");
    if (men.className === "navbar") {
        men.className += "Responsive";
    } else {
        men.className = "navbar";
    }
}

function friend() {

    var sectionleft = document.getElementById("section-left");
    if (sectionleft.className === "section-left") {
        sectionleft.className += "Responsive";
    } else {
        sectionleft.className = "section-left"
    }

    var men = document.getElementById("section-right");
    if (men.className === "section-right") {
        men.className += "Responsive";
    } else {
        men.className = "section-right";
    }

    var main = document.getElementById("container");
    if (main.className === "container") {
        men.className += "Responsive";
    } else {
        men.className = "container";
    }


}

function btnclick() {
    let click = "Di pa nagana yan parr";
    alert(click);
};