$(document).ready(function () {

  const NOWON_CLASSNAME = "now-on";

  // gnb > sub opener
  function subOpener() {
    $(".menu-item").on("mouseover", function() {
      $(this).children(".sub-menu").css("height", "auto");
    })
    $(".menu-item").on("mouseleave", function() {
      $(this).children(".sub-menu").css("height", "0");
    })
  }

  // max 768 > nav on {
  function mobileNavOn() {
    $(".ham-btn").on("click", function() {
      let subHeight = $(".sub-menu").outerHeight();
      $(this).siblings("nav").fadeToggle();
      $(this).siblings("nav").children(".gnb").slideToggle(300, "swing");
      $(this).toggleClass(NOWON_CLASSNAME);

      if ($(".ham-btn").hasClass(NOWON_CLASSNAME)) {
        $(".ham-btn").on("click", function() {
          $(".sub-menu").css("height", "0");
        })

        $("nav").on("scroll touchmove mousewheel", function (event) {
          event.preventDefault();
          event.stopPropagation();
          return false;
        })
      } else {
        $("nav").off("svroll touchmove mousewheel");
      }
    })
  }
  
  function init() {
    subOpener();
    mobileNavOn();
  }

  init();

})