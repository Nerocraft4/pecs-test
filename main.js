let newX = 0, newY = 0, startX=0, startY = 0;

const card = document.getElementById("card")

card.addEventListener("mousedown", ClickDown)
card.addEventListener("touchstart", ClickDown)
//https://stackoverflow.com/questions/11817750/drag-and-drop-on-touchscreen

disableScroll();

function ClickDown(e){
    startX = e.clientX || e.targetTouches[0].pageX;
    startX = e.clientX || e.targetTouches[0].pageY;

    document.addEventListener("mousemove", Move)
    document.addEventListener("touchmove", Move)
    document.addEventListener("mouseup", ClikUp)
    document.addEventListener("touchend",ClikUp)
}

function Move(e){
    var clientX = e.clientX || e.targetTouches[0].pageX
    var clientY = e.clientY || e.targetTouches[0].pageY

    newX = startX - clientX
    newY = startY - clientY

    startX = clientX
    startY = clientY

    card.style.top = (card.offsetTop - newY) + "px"
    card.style.left = (card.offsetLeft - newX) + "px"
}

function ClikUp(e){
    document.removeEventListener("mousemove", Move)
    document.removeEventListener("touchmove", Move)
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset ||
        document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
 }
