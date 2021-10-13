$(document).ready(function () {

  // gnb > sub opener
  function subOpener() {
    $(".menu-item").on("mouseover", function() {
      $(this).children(".sub-menu").css("height", "auto");
    })
    $(".menu-item").on("mouseleave", function() {
      $(this).children(".sub-menu").css("height", "0");
    })
  }

  function init() {
    subOpener();
  }

  init();

})