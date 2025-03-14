document.addEventListener("DOMContentLoaded", () => {

    const largeScrolls = document.querySelectorAll(".largeScroll");

    largeScrolls.forEach((largeScroll) => {
        const largeScrollTittle = largeScroll.querySelector(".largeScrollTittle");

        largeScrollTittle.addEventListener("click", () => {
            largeScrolls.forEach((otherLargeScroll) => {
                if (otherLargeScroll !== largeScroll) {
                    otherLargeScroll.classList.add("hidden");
                    otherLargeScroll.classList.remove("active");
                }
            });

            largeScroll.classList.toggle("active");
            
            if (!largeScroll.classList.contains("active")) {
                largeScrolls.forEach((otherLargeScroll) => {
                    otherLargeScroll.classList.remove("hidden");
                })
            }
        });
    });



    const smallScrolls = document.querySelectorAll("#smallScrolls .smallScroll");

    smallScrolls.forEach((smallScroll) => {
        const smallScrollTittle = smallScroll.querySelector(".smallScrollTittle");

        smallScrollTittle.addEventListener("click", () => {
            smallScroll.classList.toggle("active");
        });
    });


    
});