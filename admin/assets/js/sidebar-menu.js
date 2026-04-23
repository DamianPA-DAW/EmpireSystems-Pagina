(function ($) {
  "use strict";
  $(".toggle-nav").on("click", function () {
    $("#sidebar-links .nav-menu").css("left", "0px");
  });
  $(".mobile-back").on("click", function () {
    $("#sidebar-links .nav-menu").css("left", "-410px");
  });
  $(".page-wrapper").attr(
    "class",
    "page-wrapper " + localStorage.getItem("page-wrapper")
  );
  if (localStorage.getItem("page-wrapper") === null) {
    $(".page-wrapper").addClass("compact-sidebar compact-small material-icon");
  }

  // left sidebar and vertical menu
  if ($("#pageWrapper").hasClass("compact-wrapper")) {
    $(".sidebar-title").append(
      '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
    );
    $(".sidebar-title").on("click", function () {
      $(".sidebar-title")
        .removeClass("active")
        .find("div")
        .replaceWith(
          '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
        );
      $(".sidebar-submenu, .submenu-wrapper").slideUp("normal");
      $(".submenu-wrapper").slideUp("normal");
      if ($(this).next().is(":hidden") == true) {
        $(this).addClass("active");
        $(this)
          .find("div")
          .replaceWith(
            '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
          );
        $(this).next().slideDown("normal");
      } else {
        $(this)
          .find("div")
          .replaceWith(
            '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
          );
      }
    });
    $(".sidebar-submenu, .submenu-wrapper").hide();
    $(".submenu-title").append(
      '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
    );
    $(".submenu-title").on("click", function () {
      $(".submenu-title")
        .removeClass("active")
        .find("div")
        .replaceWith(
          '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
        );
      $(".submenu-content").slideUp("normal");
      if ($(this).next().is(":hidden") == true) {
        $(this).addClass("active");
        $(this)
          .find("div")
          .replaceWith(
            '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
          );
        $(this).next().slideDown("normal");
      } else {
        $(this)
          .find("div")
          .replaceWith(
            '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
          );
      }
    });
    $(".submenu-content").hide();
  } else if ($("#pageWrapper").hasClass("horizontal-wrapper")) {
    $(window).resize(function () {
      if (1184 >= $(window).width()) {
        $("#pageWrapper")
          .removeClass("horizontal-wrapper")
          .addClass("compact-sidebar compact-small material-icon");
        $(".page-body-wrapper")
          .removeClass("horizontal-menu")
          .addClass("sidebar-icon");
        $(".submenu-title").append(
          '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
        );
        $(".submenu-title").on("click", function () {
          $(".submenu-title").removeClass("active");
          $(".submenu-title")
            .find("div")
            .replaceWith(
              '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
            );
          $(".submenu-content").slideUp("normal");
          if ($(this).next().is(":hidden") == true) {
            $(this).addClass("active");
            $(this)
              .find("div")
              .replaceWith(
                '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
              );
            $(this).next().slideDown("normal");
          } else {
            $(this)
              .find("div")
              .replaceWith(
                '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
              );
          }
        });
        $(".submenu-content").hide();
        $(".sidebar-title").append(
          '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
        );
        $(".sidebar-title").on("click", function () {
          $(".sidebar-title").removeClass("active");
          $(".sidebar-title")
            .find("div")
            .replaceWith(
              '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
            );
          $(".sidebar-submenu, .submenu-wrapper").slideUp("normal");
          if ($(this).next().is(":hidden") == true) {
            $(this).addClass("active");
            $(this)
              .find("div")
              .replaceWith(
                '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
              );
            $(this).next().slideDown("normal");
          } else {
            $(this)
              .find("div")
              .replaceWith(
                '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
              );
          }
        });
        $(".sidebar-submenu, .submenu-wrapper").hide();
        if (contentwidth > 992 && !bigSize) {
          (smallSize = false), (bigSize = true);
          $("#pageWrapper")
            .removeClass("compact-wrapper")
            .addClass("horizontal-wrapper");
          jQuery(".sidebar-title .according-menu").remove();
        }
      }
    });
  } else if ($("#pageWrapper").hasClass("compact-sidebar")) {
    var contentwidth = $(window).width();
    $(".sidebar-title").on("click", function () {
      $(".sidebar-title").removeClass("active");
      $(".sidebar-submenu").removeClass("close-submenu").slideUp("normal");
      $(".sidebar-submenu, .submenu-wrapper").slideUp("normal");
      $(".submenu-wrapper").slideUp("normal");
      if ($(this).next().is(":hidden") == true) {
        $(this).addClass("active");
        $(this).next().slideDown("normal");
        $(".sidebar-wrapper").removeClass("sidebar-default");
        $(".page-header").removeClass("sidebar-default");
      }
    });
    $(".sidebar-menu").on("click", function () {
      $(".sidebar-menu").removeClass("active");
      $(".submenu-wrapper").removeClass("close-submenu").slideUp("normal");
      $(".submenu-wrapper").slideUp("normal");
      $(".submenu-wrapper").slideUp("normal");
      if ($(this).next().is(":hidden") == true) {
        $(this).addClass("active");
        $(this).next().slideDown("normal");
      }
    });
    $(".sidebar-submenu, .submenu-wrapper").hide();
    $(".submenu-title").append(
      '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
    );
    $(".submenu-title").on("click", function () {
      $(".submenu-title")
        .removeClass("active")
        .find("div")
        .replaceWith(
          '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
        );
      $(".submenu-content").slideUp("normal");
      if ($(this).next().is(":hidden") == true) {
        $(this).addClass("active");
        $(this)
          .find("div")
          .replaceWith(
            '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
          );
        $(this).next().slideDown("normal");
      } else {
        $(this)
          .find("div")
          .replaceWith(
            '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
          );
      }
    });
    $(".submenu-content").hide();
  }

  $(document).ready(function () {
    $(document).on("click", ".sidebar-title", function () {
      const index = $(".sidebar-title").index(this);
      localStorage.setItem("redirectedSidebarTitleIndex", index);
    });

    $(document).on("click", ".sidebar-menu", function () {
      const index = $(".sidebar-menu").index(this);
      localStorage.setItem("redirectedSidebarMenuIndex", index);
    });
    const titleIndex = localStorage.getItem("redirectedSidebarTitleIndex");
    const menuIndex = localStorage.getItem("redirectedSidebarMenuIndex");

    if (titleIndex !== null) {
      const $target = $(".sidebar-title").eq(titleIndex);
      $target.addClass("active");
      $target.find(".according-menu").html('<i class="fa fa-angle-down"></i>');
      $target
        .next(".sidebar-submenu, .submenu-wrapper")
        .css("display", "block");
    }

    if (menuIndex !== null) {
      const $target = $(".sidebar-menu").eq(menuIndex);
      $target.addClass("active");
      $target.find(".according-menu").html('<i class="fa fa-angle-down"></i>');
      $target
        .next(".sidebar-submenu, .submenu-wrapper")
        .css("display", "block");

      const $targetSubmenu = $target.next(".sidebar-submenu, .submenu-wrapper");

      const currentPath = window.location.pathname;
      const currentFile = currentPath.substring(
        currentPath.lastIndexOf("/") + 1
      );

      $targetSubmenu.find("li > a").each(function () {
        const $subLink = $(this);
        const subLinkHref = $subLink.attr("href");

        if (subLinkHref) {
          const linkFile = subLinkHref.substring(
            subLinkHref.lastIndexOf("/") + 1
          );

          if (linkFile === currentFile) {
            $subLink.addClass("current-page");
            $subLink.closest("li").addClass("active");
            return false;
          }
        }
      });
    }

    $(".sidebar-title.active").each(function () {
      $(this).find(".according-menu").html('<i class="fa fa-angle-down"></i>');
      $(this)
        .next(".sidebar-submenu, .submenu-wrapper")
        .css("display", "block");
    });

    $(".sidebar-menu.active").each(function () {
      $(this).find(".according-menu").html('<i class="fa fa-angle-down"></i>');
      $(this)
        .next(".sidebar-submenu, .submenu-wrapper")
        .css("display", "block");
    });

    if (titleIndex !== null || menuIndex !== null) {
      $(".page-header, .sidebar-wrapper").addClass("sidebar-default");
    } else {
      $(".page-header, .sidebar-wrapper").removeClass("sidebar-default");
    }
  });

  var $nav = $(".sidebar-wrapper");
  var $header = $(".page-header");
  var $toggle_nav_top = $(".toggle-sidebar");
  $toggle_nav_top.on("click", function () {
    $nav.toggleClass("close_icon");
    $header.toggleClass("close_icon");
  });
  $nav = $(".sidebar-wrapper");
  $header = $(".page-header");
  $toggle_nav_top = $(".sidebar-title");
  $toggle_nav_top.on("click", function () {
    $nav.toggleClass("sidebar-default");
    $header.toggleClass("sidebar-default");
  });
  $(".sidebar-wrapper .back-btn").on("click", function (e) {
    $(".page-header").toggleClass("close_icon");
    $(".sidebar-wrapper").toggleClass("close_icon");
  });
  var $body_part_side = $(".body-part");
  $body_part_side.on("click", function () {
    $toggle_nav_top.attr("checked", false);
    $nav.addClass("close_icon");
    $header.addClass("close_icon");
  });
  //    responsive sidebar
  var $window = $(window);
  var widthwindow = $window.width();
  (function ($) {
    "use strict";
    if (widthwindow <= 1184) {
      $toggle_nav_top.attr("checked", false);
      $nav.addClass("close_icon");
      $header.addClass("close_icon");
    }
  })(jQuery);
  $(window).on("resize", function () {
    var widthwindaw = $window.width();
    if (widthwindaw <= 1184) {
      $toggle_nav_top.attr("checked", false);
      $nav.addClass("close_icon");
      $header.addClass("close_icon");
    } else {
      $toggle_nav_top.attr("checked", true);
      $nav.removeClass("close_icon");
      $header.removeClass("close_icon");
    }
  });
  // horizontal arrows
  var view = $("#sidebar-menu");
  var move = "500px";
  var leftsideLimit = -500;
  var getMenuWrapperSize = function () {
    return $(".sidebar-wrapper").innerWidth();
  };
  var menuWrapperSize = getMenuWrapperSize();
  if (menuWrapperSize >= "1660") {
    var sliderLimit = -3000;
  } else if (menuWrapperSize >= "1440") {
    var sliderLimit = -3600;
  } else {
    var sliderLimit = -4200;
  }
  $("#left-arrow").addClass("disabled");
  $("#right-arrow").on("click", function () {
    var currentPosition = parseInt(view.css("marginLeft"));
    if (currentPosition >= sliderLimit) {
      $("#left-arrow").removeClass("disabled");
      view.stop(false, true).animate(
        {
          marginLeft: "-=" + move,
        },
        {
          duration: 400,
        }
      );
      if (currentPosition == sliderLimit) {
        $(this).addClass("disabled");
        console.log("sliderLimit", sliderLimit);
      }
    }
  });
  $("#left-arrow").on("click", function () {
    var currentPosition = parseInt(view.css("marginLeft"));
    if (currentPosition < 0) {
      view.stop(false, true).animate(
        {
          marginLeft: "+=" + move,
        },
        {
          duration: 400,
        }
      );
      $("#right-arrow").removeClass("disabled");
      $("#left-arrow").removeClass("disabled");
      if (currentPosition >= leftsideLimit) {
        $(this).addClass("disabled");
      }
    }
  });
  // page active
  if ($("#pageWrapper").hasClass("compact-wrapper")) {
    $(".sidebar-wrapper nav").find("a").removeClass("active");
    $(".sidebar-wrapper nav").find("li").removeClass("active");
    var current = window.location.pathname;
    $(".sidebar-wrapper nav ul li a").filter(function () {
      var link = $(this).attr("href");
      if (link) {
        if (current.indexOf(link) != -1) {
          $(this).parents().children("a").addClass("active");
          $(this).parents().parents().children("ul").css("display", "block");
          $(this).addClass("active");
          $(this)
            .parent()
            .parent()
            .parent()
            .children("a")
            .find("div")
            .replaceWith(
              '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
            );
          $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .children("a")
            .find("div")
            .replaceWith(
              '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
            );
          return false;
        }
      }
    });
  }
  $(document).on("ready", function () {
    $(".outside").on("click", function () {
      $(this).find(".menu-to-be-close").slideToggle("fast");
    });
  });
  $(document).on("click", function (event) {
    var $trigger = $(".outside");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $(".menu-to-be-close").slideUp("fast");
    }
  });
  $(".main-submenu .sidebar-list").on("click", function (e) {
    $(".main-submenu .sidebar-list").removeClass("active");
    $(this).parent().children("ul").addClass("d-block").slideToggle();
  });
  if ($(window).width() <= 1199) {
    $(".left-header .link-section").children("ul").css("display", "none");
    $(this).parent().children("ul").toggleClass("d-block").slideToggle();
  }
  // active link
  if (
    $(".simplebar-wrapper .simplebar-content-wrapper") &&
    $("#pageWrapper").hasClass("compact-wrapper")
  ) {
    $(".simplebar-wrapper .simplebar-content-wrapper").animate(
      {
        scrollTop:
          $(".simplebar-wrapper .simplebar-content-wrapper a.active").offset()
            .top - 400,
      },
      1000
    );
  }

  function updateWrapperClasses() {
    const $pageWrapper = $(".page-wrapper");
    const $bodyWrapper = $(".page-body-wrapper");
    if ($pageWrapper.length === 0 || $bodyWrapper.length === 0) return;

    if (
      $(window).width() <= 991 ||
      !$pageWrapper.hasClass("horizontal-wrapper")
    ) {
      $pageWrapper
        .removeClass("horizontal-wrapper")
        .addClass("compact-wrapper"); 
      $bodyWrapper.removeClass("horizontal-menu").addClass("sidebar-icon");
    } else {
      $pageWrapper
        .removeClass("compact-wrapper")
        .addClass("horizontal-wrapper");
      $bodyWrapper.removeClass("sidebar-icon").addClass("horizontal-menu");
    }
  }

  // Run on page load
  $(document).ready(updateWrapperClasses);

  // Run on window resize
  $(window).resize(updateWrapperClasses);
})(jQuery);
