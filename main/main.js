function dropdownMenu() {
    var men = document.getElementById("dropdownClick");
    if (men.className === "navbar") {
        men.className += "Responsive";
    } else {
        men.className = "navbar";
    }
}

function btnclick() {
    let click = "Di pa nagana yan parr";
    alert(click);
};