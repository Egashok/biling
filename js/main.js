$(function () {
    $(".quest__btn").on('click', function (e) {
        e.preventDefault();

        if ($($(this).attr('href')).hasClass("quest__hide-active")) {
            $($(this).attr('href')).removeClass("quest__hide-active");
        }
        else {
            $($(this).attr('href')).addClass("quest__hide-active");
        }
        if ($(this).hasClass("quest__btn-active")) {
            $(this).removeClass("quest__btn-active");
        }
        else {
            $(this).addClass("quest__btn-active");
        }

    });
});
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("form",);

})
