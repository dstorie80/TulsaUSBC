document.addEventListener('DOMContentLoaded', function() {

    var sidenav = document.getElementById('sidenav');
    

    var body = document.body;
    var hammerBody = new Hammer(body);
    
    hammerBody.on('swiperight', function(ev) {
        sidenav.classList.add('active');

    });

    var hammerDocument = new Hammer(sidenav);

    hammerDocument.on('swipeleft', function(ev) {
        sidenav.classList.remove('active');
    });
});

// Get the sidenav and body elements
var sidenav = document.getElementById('sidenav');
var body = document.body;

// Listen for the sidenav opening
sidenav.addEventListener('transitionstart', function(event) {
    if (sidenav.classList.contains('active')) {
        // If the sidenav is opening, add the 'noscroll' class to the body
        body.classList.add('noscroll');
    }
});

// Listen for the sidenav closing
sidenav.addEventListener('transitionend', function(event) {
    if (!sidenav.classList.contains('active')) {
        // If the sidenav is closing, remove the 'noscroll' class from the body
        body.classList.remove('noscroll');
    }
});