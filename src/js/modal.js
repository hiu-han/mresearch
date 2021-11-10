$(document).ready(function () {
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
    // e.preventDefault();
    // e.stopPropagation();
    sModalHandler.modalWrapOn();
    sModalHandler.personalPolicyOn();
  });
  $(personalPolicyOffBtn).on("click", function () {
    // e.preventDefault();
    // e.stopPropagation();
    sModalHandler.modalWrapOff();
    sModalHandler.personalPolicyOff();
  });
  $(modalBg).on("click", function () {
    sModalHandler.modalWrapOff();
    sModalHandler.personalPolicyOff();
  })
  /*  모달 핸들러 엔드  */
})