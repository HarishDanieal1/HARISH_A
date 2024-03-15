// script.js

// Add 'sticky' class to header when scrolling down the page
window.onscroll = function() {stickyHeader()};

function stickyHeader() {
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
