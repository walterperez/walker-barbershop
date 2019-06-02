//NAV BUTTON
var nav = document.getElementById("nav");
document.getElementById("nav-open").addEventListener("click", function () {
    nav.style.display = "block";
});

document.getElementById("nav-close").addEventListener("click", function () {
    nav.style.display = "none";
});

//ARROW BARBER BUTTON
const leftArrowButton = document.getElementById("leftArrow");
const rightArrowButton = document.getElementById("rightArrow");

const walter = document.getElementById("walter");
const javier = document.getElementById("javier");
const argentino = document.getElementById("argentino");

var index = 1;

function calculateIndex(index) {
    if (index == 1) {
        javier.style.display = "none";
        argentino.style.display = "none";
        walter.style.display = "inline-block";
    }
    else if (index == 2) {
        walter.style.display = "none";
        argentino.style.display = "none";
        javier.style.display = "inline-block";
    }
    else if (index == 3) {
        walter.style.display = "none";
        javier.style.display = "none";
        argentino.style.display = "inline-block";
    }
    return index;
}
function changeLeft() {
    index--;
    if (index < 1) {
        index = 3;
        return index;
    }

    calculateIndex(index);
    return index;
};

function changeRight() {
    index++;
    if (index > 3) {
        index = 1;
        return index;
    }

    calculateIndex(index);
    return index;
};

leftArrowButton.addEventListener("click", changeLeft);
rightArrowButton.addEventListener("click", changeRight);

//Make bigger IMG Gallery

//photos
var photo_0 = document.getElementById("photo-gallery-0");
var photo_1 = document.getElementById("photo-gallery-1");
var photo_2 = document.getElementById("photo-gallery-2");
var photo_3 = document.getElementById("photo-gallery-3");
var photo_4 = document.getElementById("photo-gallery-4");
var photo_5 = document.getElementById("photo-gallery-5");

var screen = document.getElementById("blackScreen");
var photoGrande = document.getElementById("photoGrande");
var url = "";

function agrandarPhoto(url) {
    screen.classList.add("blackScreenOn");
    photoGrande.src = url;
    photoGrande.classList.add("photoGrandeOn");
};

function quitarPhoto(){
    screen.classList.remove("blackScreenOn");
    photoGrande.classList.remove("photoGrandeOn");
}

photo_0.addEventListener("click", function(){agrandarPhoto("img/beard-trim.jpg")},false);
photo_1.addEventListener("click", function(){agrandarPhoto("img/img1.png")},false);
photo_2.addEventListener("click", function(){agrandarPhoto("img/img2.jpg")},false);
photo_3.addEventListener("click", function(){agrandarPhoto("img/img3.jpg")},false);
photo_4.addEventListener("click", function(){agrandarPhoto("img/product.jpg")},false);
photo_5.addEventListener("click", function(){agrandarPhoto("img/skin-fade.jpg")},false);

screen.addEventListener("click", quitarPhoto,false);