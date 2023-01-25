const slideShow = document.getElementsByClassName("slideShow")[0];

about_click = () => {
    document.getElementsByClassName("main")[0].getElementsByTagName("h1")[0].scrollIntoView();
    window.scroll(0, scrollY - 70);
}

installation_click = () => {
    document.getElementsByClassName("main")[0].getElementsByTagName("h1")[1].scrollIntoView();
    window.scroll(0, scrollY - 70);
}

antiVirus_click = () => {
    document.getElementsByClassName("main")[0].getElementsByTagName("h1")[2].scrollIntoView();
    window.scroll(0, scrollY - 70);
}

instructions_click = () => {
    document.getElementsByClassName("main")[0].getElementsByTagName("h1")[3].scrollIntoView();
    window.scroll(0, scrollY - 70);
}

requirements_click = () => {
    document.getElementsByClassName("main")[0].getElementsByTagName("h1")[4].scrollIntoView();
    window.scroll(0, scrollY - 70);
}

development_click = () => {
    document.getElementsByClassName("main")[0].getElementsByTagName("h1")[5].scrollIntoView();
}

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