const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains_behind = document.getElementById("mountains_behind");
const mountains_front = document.getElementById("mountains_front");

window.addEventListener("scroll", function () {
    let scroll = window.scrollY;

    stars!.style.left = `${scroll * 0.25}px`;
    moon!.style.top = `${scroll * 1.05}px`;
    mountains_behind!.style.top = `${scroll * 0.4}px`;
    mountains_front!.style.top = `${scroll * 0.5}px`;
});
