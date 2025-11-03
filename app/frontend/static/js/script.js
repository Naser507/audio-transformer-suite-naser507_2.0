
/*

// script.js
$(document).ready(function(){
    // Determine image folder based on the current page
    // Change folder name per page: home, analyzer, converter, etc.
    var page = document.body.dataset.page; // Set data-page="home" in <body> if you want
    var imageFolder = "/static/images/" + page + "/";

    // Example: get all images manually listed (or you can automate)
    var images = [
        imageFolder + "image1.jpg",
        imageFolder + "image2.jpg",
        imageFolder + "image3.jpg"
    ];

    // Initialize Backstretch for background slideshow
    $.backstretch(images, {
        duration: 5000, // 5 seconds per image
        fade: 1000      // 1 second fade transition
    });
});

*/






// script.js 



$(document).ready(function(){
    // Single shared image folder for all pages
    var imageFolder = "/static/images/imageFolder/"; // Put all slideshow images here

    // List all images in the folder manually
    var images = [
        imageFolder + "image1.jpg",
        imageFolder + "image2.jpg",
        imageFolder + "image3.jpg",
        imageFolder + "image4.jpg",
        imageFolder + "image5.jpg",
        imageFolder + "image6.jpg",
        imageFolder + "image7.jpg",
        imageFolder + "image8.jpg",
        imageFolder + "image9.jpg",
        imageFolder + "image10.jpg"
    ];

    // Initialize Backstretch slideshow
    $.backstretch(images, {
        duration: 5000, // 5 seconds per image
        fade: 1000      // 1 second fade transition
    });

    // ---------------------------
    // Sticky menu behavior
    // ---------------------------
    var menu = $('.site-menu');
    var header = $('.site-header');
    var headerHeight = header.outerHeight();

    $(window).scroll(function() {
        if ($(window).scrollTop() > headerHeight) {
            menu.addClass('sticky'); // Menu becomes fixed and opaque
        } else {
            menu.removeClass('sticky'); // Reset to original semi-transparent
        }
    });
});

