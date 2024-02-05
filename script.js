// add dark mode&light mode toggle switch
const toggleSwitch = document.querySelector('.theme-switch-wrapper input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        toggleSwitch.checked = false;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);
// Path: script.js
// add smooth scrolling
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
});
// Path: script.js
// add scroll to top button
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        }
        else {
            $('#topBtn').fadeOut();
        }
    });
    $("#topBtn").click(function () {
        $('html ,body').animate({ scrollTop: 0 }, 800);
    });
});
