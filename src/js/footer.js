$(document).ready(function () {

  const $body = $("html, body");
  let winWidth = $("html").innerWidth();

  // 초기 실행 이벤트
  function footInit() {
    goTopEvent();
    windowResize();
  }
  footInit();

  /* window resize 이벤트 */
  function windowResize() {
    $(window).on("resize", function() {
      winWidth = $("html").innerWidth();
    })
  }

  /*  GO TOP event  */
  function goTopEvent() {
    $(".goTop").on("click", function () {

      const yPos = $body.offset().top;

      $body.stop().animate({
        scrollTop: yPos
      },500);

      $(".icon-up").css("color", "#333");
    });
  }

  /*  MODAL handler  */
  const MODALON_CLASSNAME = "modalOn";

  const modalPkg = $("#modal");
  const modalBg = $(".modal-bg");

  const personalPolicyBtn = $("#personalPolicyBtn");
  const personalPolicyOffBtn = $("#personalPolicyCls");

  const sModalHandler = {
    modalWrapOn: function (htmlWidth) {
      modalPkg.addClass(MODALON_CLASSNAME);
      $('html').css({
        "overflow": "hidden",
        "width": htmlWidth
      });
      $(modalBg).on("scroll touchmove mousewheel", function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    },
    modalWrapOff: function () {
      modalPkg.removeClass(MODALON_CLASSNAME);
      $('html').css({
        "overflow": "unset",
        "width": "100%"
      });
      $(modalBg).off("scroll touchmove mousewheel");
    },
    personalPolicyOn: function () {
      document.querySelector("#personalPolicy-modal").classList.add(MODALON_CLASSNAME);
    },
    personalPolicyOff: function () {
      document.querySelector("#personalPolicy-modal").classList.remove(MODALON_CLASSNAME);
    },
    posterOn: function () {
      document.querySelector("#posterModal").classList.add(MODALON_CLASSNAME);
    },
    posterOff: function () {
      document.querySelector("#posterModal").classList.remove(MODALON_CLASSNAME);
    },
  };
  
  $(personalPolicyBtn).on("click", function () {
    sModalHandler.modalWrapOn(winWidth);
    sModalHandler.personalPolicyOn();
  });
  $(personalPolicyOffBtn).on("click", function () {
    sModalHandler.modalWrapOff();
    sModalHandler.personalPolicyOff();
  });
  $(modalBg).on("click", function () {
    sModalHandler.modalWrapOff();
    sModalHandler.personalPolicyOff();
  });

  $("#imgOnBanner").on("click",function () {
    sModalHandler.modalWrapOn(winWidth);
    sModalHandler.posterOn();
  });
  $("#posterCls").on("click", function () {
    sModalHandler.modalWrapOff();
    sModalHandler.posterOff();
  })

})