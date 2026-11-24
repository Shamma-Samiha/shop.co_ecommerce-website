
document.addEventListener("DOMContentLoaded", function () {

    // Customer Review Section

    const track = document.getElementById("reviewlist");
    const next = document.getElementById("nextreview");
    const prev = document.getElementById("prevreview");

    if (track && next && prev) {

        const card = track.querySelector(".review-card");

        if (card) {
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

            if (window.innerWidth >= 992) {
                track.scrollLeft = card.offsetWidth - 80;
            }
        }
    }


    // Category Page Filters

    const cataloguePage = document.querySelector(".catalogue-page");
    const openFilters = document.getElementById("openfilters");
    const closeFilters = document.getElementById("closefilters");
    const applyFilters = document.getElementById("applyfilters");

    if (cataloguePage && openFilters && closeFilters && applyFilters) {

        openFilters.addEventListener("click", function () {
            cataloguePage.classList.add("filters-open");
        });

        closeFilters.addEventListener("click", function () {
            cataloguePage.classList.remove("filters-open");
        });

        applyFilters.addEventListener("click", function () {
            cataloguePage.classList.remove("filters-open");
        });
    }

});
