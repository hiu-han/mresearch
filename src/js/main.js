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
      $(this).siblings("nav").fadeToggle();
      $(this).siblings("nav").children(".gnb").slideToggle(300, "swing");
      $(this).toggleClass(NOWON_CLASSNAME);
    })
  }
  
  function init() {
    subOpener();
    mobileNavOn();
  }

  init();

})