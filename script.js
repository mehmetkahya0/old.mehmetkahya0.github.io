document.getElementById('bioButton').addEventListener('click', function(event) {
    var bioElements = document.querySelectorAll('.bio h2');
    for(var i = 0; i < bioElements.length; i++){
        bioElements[i].classList.add('red-border');
    }
});

document.getElementById('skillsButton').addEventListener('click', function(event) {
    var bioElements = document.querySelectorAll('.skills h2');
    for(var i = 0; i < bioElements.length; i++){
        bioElements[i].classList.add('red-border');
    }
});

document.getElementById('contactButton').addEventListener('click', function(event) {
    var bioElements = document.querySelectorAll('.contact h2');
    for(var i = 0; i < bioElements.length; i++){
        bioElements[i].classList.add('red-border');
    }
});