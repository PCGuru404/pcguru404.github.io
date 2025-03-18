document.addEventListener("DOMContentLoaded", function() {
    console.log("Weboldal betöltve!");

    // Animáció az űrlap megjelenítésére
    const form = document.querySelector("form");
    form.style.opacity = "0";
    form.style.transform = "translateY(20px)";
    setTimeout(() => {
        form.style.transition = "opacity 1s, transform 1s";
        form.style.opacity = "1";
        form.style.transform = "translateY(0)";
    }, 500);
});
