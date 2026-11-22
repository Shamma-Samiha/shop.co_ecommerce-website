
document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("reviewlist");
    const next = document.getElementById("nextreview");
    const prev = document.getElementById("prevreview");

    const card = track.querySelector(".review-card");

    const gap = 16;

    function scrollReview(direction) {
        const distance = card.offsetWidth + gap;

        track.scrollBy({
            left: direction * distance,
            behavior: "smooth"
        });
    }

    next.addEventListener("click", function () {
        scrollReview(1);
    });

    prev.addEventListener("click", function () {
        scrollReview(-1);
    });

// To show half card 
    if (window.innerWidth >= 992) {
        track.scrollLeft = card.offsetWidth - 80;
    }

});
