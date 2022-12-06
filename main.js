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
    $(".menu__btn").on('click', function (e) {
        e.preventDefault();
        if (!$("#menu").hasClass("nav__items--active")) {
            $("#menu").addClass("nav__items--active");
            $(".nav__item").addClass("nav__item--active");
        }
        else {
            $("#menu").removeClass("nav__items--active");
            $(".nav__item").removeClass("nav__item--active");
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


$(document).ready(function () {
    /**
     * При прокрутке страницы, показываем или срываем кнопку
     */
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
        if ($(this).scrollTop() > 50) {
            $('#phone').fadeIn();
        } else {
            $('#phone').fadeOut();
        }
        if ($(this).scrollTop() > 50) {
            $('#feedback').fadeIn();
        } else {
            $('#feedback').fadeOut();
        }
    });
    $('#top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $('#feedback').click(function () {
        $('body,html').animate({
            scrollTop: 7520
        }, 500);
        return false;
    });
    $('#phone').click(function () {
        $('body,html').animate({
            scrollTop: 15000
        }, 500);
        return false;
    });
});

