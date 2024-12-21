document.addEventListener("DOMContentLoaded", () => {
    const largeScrolls = document.querySelectorAll("#largeScrolls .largeScroll");

    largeScrolls.forEach((scroll) => {
        scroll.addEventListener("click", () => {
            largeScrolls.forEach((otherScroll) => {
                if (otherScroll !== scroll) {
                    otherScroll.classList.add("hidden");
                    otherScroll.classList.remove("active");
                }
            });

            scroll.classList.toggle("active");
            
            if (!scroll.classList.contains("active")) {
                largeScrolls.forEach((otherScroll) => {
                    otherScroll.classList.remove("hidden");
                })
            }
        });
    });
});