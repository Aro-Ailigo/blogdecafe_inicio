
document.getElementById("toggleBtn").addEventListener("click", function () {
    var navbar = document.getElementById("contenido_p");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }

    var x = document.querySelector(".navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
});