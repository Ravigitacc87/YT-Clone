var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var mainContainer = document.querySelector(".maincontainer");
var cards = document.querySelectorAll(".card"); // Select all cards
var info =document.querySelectorAll(".video-information");

menuIcon.onclick = function() {
    // Toggle the sidebar and main container classes
    sidebar.classList.toggle("smaller-sidebar");
    mainContainer.classList.toggle("larger-maincontainer");

    // Toggle the card classes for resizing
    cards.forEach(card => {
        card.classList.toggle("smaller-card");
    });
    info.forEach(infosmall => {
        infosmall.classList.toggle("video-information-smaller");
    });
};
