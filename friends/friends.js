function dropdownMenu() {
    var men = document.getElementById("dropdownClick");
    if (men.className === "navbar") {
        men.className += "Responsive";
    } else {
        men.className = "navbar";
    }
}