$(document).ready(function () {

  const $body = $("html, body");

  // 초기 실행 이벤트
  function footInit() {
    goTopEvent();
  }
  footInit();

  /*  GO TOP event  */
  function goTopEvent() {
    $(".goTop").on("click", function () {

      const yPos = $body.offset().top;

      $body.stop().animate({
        scrollTop: yPos
      },500);
    });
  }

  /*  모달 핸들러  */
  const MODALON_CLASSNAME = "modalOn";

  const modalPkg = $("#modal");
  const modalBg = $(".modal-bg");

  const personalPolicyBtn = $("#personalPolicyBtn");
  const personalPolicyOffBtn = $("#personalPolicyCls");

  const sModalHandler = {
    modalWrapOn: function () {
      modalPkg.addClass(MODALON_CLASSNAME);
      $('html').css("overflow", "hidden");
      $(modalBg).on("scroll touchmove mousewheel", function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    },
    modalWrapOff: function () {
      modalPkg.removeClass(MODALON_CLASSNAME);
      $('html').css("overflow", "scroll");
      $(modalBg).off("scroll touchmove mousewheel");
    },
    personalPolicyOn: function () {
      document.querySelector("#personalPolicy-modal").classList.add(MODALON_CLASSNAME);
    },
    personalPolicyOff: function () {
      document.querySelector("#personalPolicy-modal").classList.remove(MODALON_CLASSNAME);
    },
  };
  
  $(personalPolicyBtn).on("click", function () {
    sModalHandler.modalWrapOn();
    sModalHandler.personalPolicyOn();
  });
  $(personalPolicyOffBtn).on("click", function () {
    sModalHandler.modalWrapOff();
    sModalHandler.personalPolicyOff();
  });
  $(modalBg).on("click", function () {
    sModalHandler.modalWrapOff();
    sModalHandler.personalPolicyOff();
  })
  /*  모달 핸들러 엔드  */

})