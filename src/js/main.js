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
        });

        $("nav").on("scroll touchmove mousewheel", function (event) {
          event.preventDefault();
          event.stopPropagation();
          return false;
        });
      }
      else {
        $("nav").off("scroll touchmove mousewheel");
      };
    });
  };
  
  function init() {
    subOpener();
    mobileNavOn();
  };

  init();


  /* -- 메인배너 핸들러 -- */
  function mBannerHandler() {
    let showBanner = 0;

    // 배너 페이드
    const fadeBanner = () => {
      $(".banner-item").eq(showBanner).fadeIn(1600).siblings().fadeOut(1600);

      if (showBanner == 2) {
        $(".banner-btn").eq(2).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
      } else {
        $(".banner-btn").eq(showBanner).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
      }
    };

    const autoFadeBanner = () => {
      if (showBanner < 2) {
        showBanner ++;
      } else {
        showBanner = 0;
      }
      $(".banner-item").eq(showBanner).fadeIn(1600).siblings().fadeOut(1600);
      $(".banner-btn").eq(showBanner).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
    }
    var bannerTimer = setInterval(autoFadeBanner, 6000);

    $(".banner-btn-list").on("mouseover", function () {
      clearInterval(bannerTimer);
    });
    $(".btn-arrow-wrap").on("mouseover", function () {
      clearInterval(bannerTimer);
    });
    $(".banner-btn-list").on("mouseout", function () {
      bannerTimer = setInterval(autoFadeBanner, 6000);
    });
    $(".btn-arrow-wrap").on("mouseout", function () {
      bannerTimer = setInterval(autoFadeBanner, 6000);
    });

    // 하단 버튼 컨트롤
    $(".banner-btn").on("click", function () {
      showBanner = $(this).index();
      fadeBanner();
      // autoFadeBanner();
    });

    // arrow 버튼 컨트롤 - left
    $(".arrow-prev").on("click", function () {
      if(showBanner == 0) {
        showBanner = 3;
      }
      showBanner --;
      fadeBanner();
    });

    // arrow 버튼 컨트롤 - right
    $(".arrow-next").on("click", function () {
      if(showBanner == 2) {
        showBanner = -1;
      }
      showBanner ++;
      fadeBanner();
    });
  }
  mBannerHandler();

  // setInterval(fadeBanner, 1000);
  /* -- 메인배너 핸들러 엔드 -- */


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


  
})

