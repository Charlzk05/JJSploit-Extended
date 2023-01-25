const slideShow = document.getElementsByClassName("slideShow")[0];

var slideIndex = 0;
forwardSlide_click = () => {
    if (slideIndex >= slideShow.getElementsByTagName("img").length - 1) {
        console.log("last slide reached");
    } else {
        slideIndex++;
        var currentIndex = slideIndex - 1;
        slideShow.getElementsByTagName("img")[currentIndex].setAttribute("class", "imgInactive");
        slideShow.getElementsByTagName("img")[slideIndex].setAttribute("class", "imgActive");
    }
}

backSlide_click = () => {
    if (slideIndex <= 0) {
        console.log("first slide reached");
    } else {
        slideIndex--;
        var currentIndex = slideIndex + 1;
        slideShow.getElementsByTagName("img")[currentIndex].setAttribute("class", "imgInactive");
        slideShow.getElementsByTagName("img")[slideIndex].setAttribute("class", "imgActive");
    }
}