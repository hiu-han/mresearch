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

  // onPC MAIN BANNER
  function mainBannerHandler() {
    const $bannerFir = $(".banner-item").eq(0),
          $bannerSec = $(".banner-item").eq(1),
          $bannerThr = $(".banner-item").eq(2);
    const $bannerBtnFir = $(".banner-btn").eq(0),
          $bannerBtnSec = $(".banner-btn").eq(1),
          $bannerBtnThr = $(".banner-btn").eq(2);

    $bannerBtnFir.on("click", function () {
      $(this).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
      $bannerFir.fadeIn().siblings().fadeOut("slow");
    })
    $bannerBtnSec.on("click", function () {
      $(this).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
      $bannerSec.fadeIn().siblings().fadeOut("slow");
    })
    $bannerBtnThr.on("click", function () {
      $(this).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
      $bannerThr.fadeIn().siblings().fadeOut("slow");
    })
  }
  mainBannerHandler();

  // onMobile RECRUIT page > 인재채용 정보 이벤트
  function recruitInfoHandler() {
    const $recruitTitleFirst = $(".recruit-title").eq(0),
          $recruitTitleSecond = $(".recruit-title").eq(1),
          $recruitTitleThird = $(".recruit-title").eq(2);
    const $recruitContentFirst = $(".recruit-content-list").eq(0),
          $recruitContentSecond = $(".recruit-content-list").eq(1),
          $recruitContentThird = $(".recruit-content-list").eq(2);

    $recruitTitleFirst.on("click", function () {
      $(this).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
      $recruitContentFirst.addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
    })
    $recruitTitleSecond.on("click", function () {
      $(this).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
      $recruitContentSecond.addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
    })
    $recruitTitleThird.on("click", function () {
      $(this).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
      $recruitContentThird.addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
    })
  }
  recruitInfoHandler();

  const MODALON_CLASSNAME = "modalOn";

  const modalPkg = document.querySelector("#modal");
  const modalBg = document.querySelector(".modal-bg");

  const personalPolicyBtn = document.querySelector("#personalPolicyBtn");
  const personalPolicyOffBtn = document.querySelector("#personalPolicyCls");

  const sModalHandler = {
    personalPolicyOn: function () {
      // modalPkg.style.setProperty("display", "block");
      // modalPkg.style.display = "block";
      modalPkg.classList.add(MODALON_CLASSNAME);
    },
    personalPolicyOff: function () {
      modalPkg.classList.remove(MODALON_CLASSNAME);
    },
    preventScroll: function () {
      modalBg.addEventListener("scroll, touchmove, mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    },
    releaseScroll: function () {
      modalBg.removeEventListener("scroll, touchmove, mousewheel")
    }
  };
  
  personalPolicyBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    sModalHandler.personalPolicyOn();
    sModalHandler.preventScroll();
    // personalPolicyOn();
  });
  personalPolicyOffBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    sModalHandler.personalPolicyOff();
    sModalHandler.releaseScroll();
  });

})