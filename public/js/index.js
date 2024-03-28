console.log(Hammer); // use Hammer, not hammer

document.addEventListener('DOMContentLoaded', function() {

    var sidenav = document.getElementById('sidenav');
    console.log('sidenav:', sidenav); // check if sidenav is found

    var body = document.body;
    var hammerBody = new Hammer(body);
    
    hammerBody.on('swiperight', function(ev) {
        console.log('swiperight event fired');
        console.log('ev.center.x:', ev.center.x);
        console.log('condition is true');
        sidenav.classList.add('active');
        console.log(sidenav);
    });

    var hammerDocument = new Hammer(sidenav);

    hammerDocument.on('swipeleft', function(ev) {
        console.log('swipeleft event fired');
        sidenav.classList.remove('active');
        console.log(sidenav);
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