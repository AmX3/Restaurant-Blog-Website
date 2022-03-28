const navigation = document.querySelector("nav"); //selects our class in the header
window.onscroll = function () {
    var top = window.scrollY; //creating an variable
    console.log(top); //executing our scroll
    if (top > 75) {
        navigation.classList.add("change-color"); //adding a new class with our change
    } else {
        navigation.classList.remove("change-color");
    }
};

function toggleMenu() {
    var menuToggle = document.querySelector(".navbar__toggle");
    var menu = document.querySelector(".navbar__menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}

function updateCurrentYear() {
    var present = new Date();
    var year = present.getFullYear();

    document.getElementById("currentYear").innerHTML = year;
}

updateCurrentYear();
