Modernizr.addTest("animationtiming", function() {
    return !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
});

// http://www.w3.org/TR/animation-timing/
