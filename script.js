document.addEventListener("DOMContentLoaded", function() {
    const projektek = document.querySelector("#projektek");
    projektek.style.opacity = "0";
    projektek.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        projektek.style.transition = "opacity 1s, transform 1s";
        projektek.style.opacity = "1";
        projektek.style.transform = "translateY(0)";
    }, 500);
});
