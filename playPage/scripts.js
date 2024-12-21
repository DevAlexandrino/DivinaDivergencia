document.addEventListener("DOMContentLoaded", () => {
    const largeScrolls = document.querySelectorAll("#largeScrolls .largeScroll");

    largeScrolls.forEach((scroll) => {
        scroll.addEventListener("click", () => {
            const isActive = scroll.classList.contains("active");

            largeScrolls.forEach((otherScroll) => {
                if (otherScroll !== scroll) {
                    otherScroll.style.display = isActive ? "block" : "none";
                    otherScroll.classList.remove("active");
                }
            });
            scroll.classList.toggle("active");
        });
    });
});