// script.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Resume webpage loaded successfully");

    const links = document.querySelectorAll("header a");
    links.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "yellow";
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "white";
        });
    });
});