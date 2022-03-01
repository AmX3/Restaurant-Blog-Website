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
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}

//DELETE MESSAGES
function deleteMessages() {
    if (window.sessionStorage.getItem("message")) {
        window.sessionStorage.removeItem("message");
    }
    renderMessages();
}

//STORING MESSAGES//
function submitMessage(event) {
    //Disrupts the default effect of a form
    event.preventDefault();
    const email = document.getElementById("email").value;
    const fullName = document.getElementById("fullName").value;
    const message = document.getElementById("message").value;

    const messageObject = {
        email,
        fullName,
        message,
    };

    let currentMessages = [];

    //if the key of messages does exist, pass the value and store the value as currentMessages within sessionStorage. If it does not exist, store the message as an empty array
    if (window.sessionStorage.getItem("message")) {
        currentMessages = JSON.parse(window.sessionStorage.getItem("message"));
    }

    //push the message value into messageObject
    currentMessages.push(messageObject);
    window.sessionStorage.setItem("message", JSON.stringify(currentMessages));

    //Everytime a form is submitted, the changes are updated dynamically
    renderMessages();
}

function updateCurrentYear() {
    var present = new Date();
    var year = present.getFullYear();

    document.getElementById("currentYear").innerHTML = year;
}

updateCurrentYear();
