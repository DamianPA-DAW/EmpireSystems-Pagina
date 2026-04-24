// "use strict";

// $(".toggle-nav").click(function () {
//   $("#sidebar-links .nav-menu").css("left", "0px");
// });
// $(".mobile-back").click(function () {
//   $("#sidebar-links .nav-menu").css("left", "-410px");
// });
// $(".page-wrapper").attr("class", "page-wrapper " + localStorage.getItem("page-wrapper"));

// if (localStorage.getItem("page-wrapper")) {
//   $(".page-wrapper").addClass("compact-wrapper");
// } // left sidebar and vertical menu

// if ($("#pageWrapper").hasClass("compact-wrapper")) {
//   jQuery(".sidebar-title").append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//   jQuery(".sidebar-title").click(function () {
//     jQuery(".sidebar-title").removeClass("active").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//     jQuery(".sidebar-submenu, .menu-content").slideUp("normal");
//     jQuery(".menu-content").slideUp("normal");

//     if (jQuery(this).next().is(":hidden") == true) {
//       jQuery(this).addClass("active");
//       jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
//       jQuery(this).next().slideDown("normal");
//     } else {
//       jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//     }
//   });
//   jQuery(".sidebar-submenu, .menu-content").hide();
//   jQuery(".submenu-title").append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//   jQuery(".submenu-title").click(function () {
//     jQuery(".submenu-title").removeClass("active").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//     jQuery(".submenu-content").slideUp("normal");

//     if (jQuery(this).next().is(":hidden") == true) {
//       jQuery(this).addClass("active");
//       jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
//       jQuery(this).next().slideDown("normal");
//     } else {
//       jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//     }
//   });
//   jQuery(".submenu-content").hide();
// } else if ($("#pageWrapper").hasClass("horizontal-wrapper")) {
//   var contentwidth = jQuery(window).width();

//   if (contentwidth < 992) {
//     $("#pageWrapper").removeClass("horizontal-wrapper").addClass("compact-wrapper");
//     $(".page-body-wrapper").removeClass("horizontal-menu").addClass("sidebar-icon");
//     jQuery(".submenu-title").append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//     jQuery(".submenu-title").click(function () {
//       jQuery(".submenu-title").removeClass("active");
//       jQuery(".submenu-title").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//       jQuery(".submenu-content").slideUp("normal");

//       if (jQuery(this).next().is(":hidden") == true) {
//         jQuery(this).addClass("active");
//         jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
//         jQuery(this).next().slideDown("normal");
//       } else {
//         jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//       }
//     });
//     jQuery(".submenu-content").hide();
//     jQuery(".sidebar-title").append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//     jQuery(".sidebar-title").click(function () {
//       jQuery(".sidebar-title").removeClass("active");
//       jQuery(".sidebar-title").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//       jQuery(".sidebar-submenu, .menu-content").slideUp("normal");

//       if (jQuery(this).next().is(":hidden") == true) {
//         jQuery(this).addClass("active");
//         jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
//         jQuery(this).next().slideDown("normal");
//       } else {
//         jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//       }
//     });
//     jQuery(".sidebar-submenu, .menu-content").hide();
//   }
// } else if ($("#pageWrapper").hasClass("compact-sidebar")) {
//   var contentwidth = jQuery(window).width();

//   if (contentwidth > 992) {
//     $('<div class="bg-overlay1"></div>').appendTo($("body"));
//   }

//   jQuery(".sidebar-title").click(function () {
//     jQuery(".sidebar-title").removeClass("active");
//     $(".bg-overlay1").removeClass("active");
//     jQuery(".sidebar-submenu").removeClass("close-submenu").slideUp("normal");
//     jQuery(".sidebar-submenu, .menu-content").slideUp("normal");
//     jQuery(".menu-content").slideUp("normal");

//     if (jQuery(this).next().is(":hidden") == true) {
//       jQuery(this).addClass("active");
//       jQuery(this).next().slideDown("normal");
//       $(".bg-overlay1").addClass("active");
//       $(".bg-overlay1").on("click", function () {
//         jQuery(".sidebar-submenu, .menu-content").slideUp("normal");
//         $(this).removeClass("active");
//       });
//     }

//     if (contentwidth < 992) {
//       $(".bg-overlay").addClass("active");
//     }
//   });
//   jQuery(".sidebar-submenu, .menu-content").hide();
//   jQuery(".submenu-title").append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//   jQuery(".submenu-title").click(function () {
//     jQuery(".submenu-title").removeClass("active").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//     jQuery(".submenu-content").slideUp("normal");

//     if (jQuery(this).next().is(":hidden") == true) {
//       jQuery(this).addClass("active");
//       jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
//       jQuery(this).next().slideDown("normal");
//     } else {
//       jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
//     }
//   });
//   jQuery(".submenu-content").hide();
//   $(".sidebar-wrapper nav").find("a").removeClass("active");
//   $(".sidebar-wrapper nav").find("li").removeClass("active");
//   var current = window.location.pathname;
//   $(".sidebar-wrapper nav ul>li a").filter(function () {
//     var link = $(this).attr("href");

//     if (link) {
//       if (current.indexOf(link) != -1) {
//         $(this).parents().children("a").addClass("active");
//         $(this).parents().parents().children(".").css("display", "block");
//         $(this).addClass("active");
//         $(this).parent().parent().parent().children("a").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
//         return false;
//       }
//     }
//   });
// } // toggle sidebar

// $nav = $(".sidebar-wrapper");
// $header = $(".page-header");
// $toggle_nav_top = $(".toggle-sidebar");
// $toggle_nav_top.click(function () {
//   $this = $(this);
//   $nav = $(".sidebar-wrapper");
//   $nav.toggleClass("close_icon");
//   $header.toggleClass("close_icon");
// });
// $(window).resize(function () {
//   $nav = $(".sidebar-wrapper");
//   $header = $(".page-header");
//   $toggle_nav_top = $(".toggle-sidebar");
//   $toggle_nav_top.click(function () {
//     $this = $(this);
//     $nav = $(".sidebar-wrapper");
//     $nav.toggleClass("close_icon");
//     $header.toggleClass("close_icon");
//   });
// });
// $body_part_side = $(".body-part");
// $body_part_side.click(function () {
//   $toggle_nav_top.attr("checked", false);
//   $nav.addClass("close_icon");
//   $header.addClass("close_icon");
// }); //    responsive sidebar

// var $window = $(window);
// var widthwindow = $window.width();

// (function ($) {
//   "use strict";

//   if (widthwindow <= 991) {
//     $toggle_nav_top.attr("checked", false);
//     $nav.addClass("close_icon");
//     $header.addClass("close_icon");
//   }
// })(jQuery);

// $(window).resize(function () {
//   var widthwindaw = $window.width();

//   if (widthwindaw <= 991) {
//     $toggle_nav_top.attr("checked", false);
//     $nav.addClass("close_icon");
//     $header.addClass("close_icon");
//   } else {
//     $toggle_nav_top.attr("checked", true);
//     $nav.removeClass("close_icon");
//     $header.removeClass("close_icon");
//   }
// }); // horizontal arrows

// var view = $("#sidebar-menu");
// var move = "500px";
// var leftsideLimit = -500; // var Windowwidth = jQuery(window).width();
// // get wrapper width

// var getMenuWrapperSize = function getMenuWrapperSize() {
//   return $(".sidebar-wrapper").innerWidth();
// };

// var menuWrapperSize = getMenuWrapperSize();

// if (menuWrapperSize >= "1660") {
//   var sliderLimit = -3000;

//   if ($("#pageWrapper").hasClass("material-type")) {
//     var sliderLimit = -3500;
//   }
// } else if (menuWrapperSize >= 992) {
//   var sliderLimit = -1000;
// } else {
//   var sliderLimit = -0;
// }

// $("#left-arrow").addClass("disabled");
// $("#right-arrow").click(function () {
//   var currentPosition = parseInt(view.css("marginLeft"));

//   if (currentPosition >= sliderLimit) {
//     $("#left-arrow").removeClass("disabled");
//     view.stop(false, true).animate(
//       {
//         marginLeft: "-=" + move,
//       },
//       {
//         duration: 400,
//       }
//     );

//     if (currentPosition == sliderLimit) {
//       $(this).addClass("disabled");
//       console.log("sliderLimit", sliderLimit);
//     }
//   }
// });
// $("#left-arrow").click(function () {
//   var currentPosition = parseInt(view.css("marginLeft"));

//   if (currentPosition < 0) {
//     view.stop(false, true).animate(
//       {
//         marginLeft: "+=" + move,
//       },
//       {
//         duration: 400,
//       }
//     );
//     $("#right-arrow").removeClass("disabled");
//     $("#left-arrow").removeClass("disabled");

//     if (currentPosition >= leftsideLimit) {
//       $(this).addClass("disabled");
//     }
//   }
// }); // page active

// if ($("#pageWrapper").hasClass("compact-wrapper")) {
//   $(".sidebar-wrapper nav").find("a").removeClass("active");
//   $(".sidebar-wrapper nav").find("li").removeClass("active");
//   var current = window.location.pathname;
//   $(".sidebar-wrapper nav ul>li a").filter(function () {
//     var link = $(this).attr("href");

//     if (link) {
//       if (current.indexOf(link) != -1) {
//         $(this).parents().children("a").addClass("active");
//         $(this).parents().parents().children("ul").css("display", "block");
//         $(this).addClass("active");
//         $(this).parent().parent().parent().children("a").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
//         $(this).parent().parent().parent().parent().parent().children("a").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
//         return false;
//       }
//     }
//   });
// }

// $(".left-header .mega-menu .nav-link").on("click", function (e) {
//   $(this).toggleClass("active");
//   $(this).parent().children(".mega-menu-container").toggleClass("d-block").slideToggle();
// });
// $(".left-header .level-menu .header-level-menu").css("display", "none");
// $(".left-header .level-menu .nav-link").on("click", function (e) {
//   $(this).toggleClass("active");
//   $(this).parent().children(".header-level-menu").toggleClass("d-block").slideToggle();
// });
// $(".left-header .link-section > div").on("click", function (e) {
//   if ($(window).width() <= 1199) {
//     $(".left-header .link-section > div").removeClass("active");
//     $(this).toggleClass("active");
//     $(this).parent().children("ul").toggleClass("d-block").slideToggle();
//   }
// });

// if ($(window).width() <= 1199) {
//   $(".left-header .link-section").children("ul").css("display", "none");
//   $(void 0)
//     .parent()
//     .children("ul")
//     .toggleClass("d-block")
//     .slideToggle();
// }

// if ($(window).width() <= 991) {
//   $(".sidebar-wrapper .back-btn").on("click", function (e) {
//     $(".page-header").toggleClass("close_icon");
//     $(".sidebar-wrapper").toggleClass("close_icon");
//   });
// }




"use strict";

// Sidebar Toggle Logic
$(".toggle-nav").on("click", function () {
  // Toggle the sidebar and logo visibility together
  $(".sidebar-wrapper").toggleClass("close_icon"); // Toggle sidebar visibility
  $(".page-header").toggleClass("close_icon"); // Toggle logo visibility at the same time
});

// For Mobile Back Button to close the sidebar
$(".mobile-back").on("click", function () {
  $(".sidebar-wrapper").removeClass("close_icon"); // Ensure sidebar is closed
  $(".page-header").removeClass("close_icon"); // Ensure logo is visible
});

// Update the page-wrapper class from localStorage on page load
$(".page-wrapper").attr("class", "page-wrapper " + localStorage.getItem("page-wrapper"));

// Check if page-wrapper is not set in localStorage, then apply default class
if (localStorage.getItem("page-wrapper") === null) {
  $(".page-wrapper").addClass("compact-sidebar");
}

// Handle Sidebar Title Clicks (for collapsible submenu)
$(document).ready(function () {
  $(".sidebar-title").append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
  $(".sidebar-title").on("click", function () {
    $(".sidebar-title").removeClass("active").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
    $(".sidebar-submenu, .menu-content").slideUp("normal");

    // Toggle submenu for sidebar
    if ($(this).next().is(":hidden")) {
      $(this).addClass("active");
      $(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
      $(this).next().slideDown("normal");
    } else {
      $(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
    }
  });
  $(".sidebar-submenu, .menu-content").hide();

  $(".submenu-title").append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
  $(".submenu-title").on("click", function () {
    $(".submenu-title").removeClass("active").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
    $(".submenu-content").slideUp("normal");

    // Toggle submenu for submenu titles
    if ($(this).next().is(":hidden")) {
      $(this).addClass("active");
      $(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
      $(this).next().slideDown("normal");
    } else {
      $(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
    }
  });
  $(".submenu-content").hide();
});

// Save sidebar title and menu index to localStorage
$(document).on("click", ".sidebar-title", function () {
  const index = $(".sidebar-title").index(this);
  localStorage.setItem("redirectedSidebarTitleIndex", index);
});

$(document).on("click", ".sidebar-menu", function () {
  const index = $(".sidebar-menu").index(this);
  localStorage.setItem("redirectedSidebarMenuIndex", index);
});

// Apply saved sidebar state from localStorage
const titleIndex = localStorage.getItem("redirectedSidebarTitleIndex");
const menuIndex = localStorage.getItem("redirectedSidebarMenuIndex");

if (titleIndex !== null) {
  const $target = $(".sidebar-title").eq(titleIndex);
  $target.addClass("active");
  $target.find(".according-menu").html('<i class="fa fa-angle-down"></i>');
  $target.next(".sidebar-submenu, .submenu-wrapper").css("display", "block");
}

if (menuIndex !== null) {
  const $target = $(".sidebar-menu").eq(menuIndex);
  $target.addClass("active");
  $target.find(".according-menu").html('<i class="fa fa-angle-down"></i>');
  $target.next(".sidebar-submenu, .submenu-wrapper").css("display", "block");
}

// Sidebar Toggle and Logo Toggle (together)
var $nav = $(".sidebar-wrapper");
var $header = $(".page-header");
var $toggle_nav_top = $(".toggle-sidebar");

$toggle_nav_top.on("click", function () {
  // Toggle both the sidebar and logo visibility at the same time
  $nav.toggleClass("close_icon");
  $header.toggleClass("close_icon");
});

// Sidebar collapse behavior on window resize (mobile responsiveness)
var $window = $(window);
$window.resize(function () {
  var widthwindow = $window.width();

  if (widthwindow <= 991) {
    $toggle_nav_top.attr("checked", false);
    $nav.addClass("close_icon");
    $header.addClass("close_icon");
  } else {
    $toggle_nav_top.attr("checked", true);
    $nav.removeClass("close_icon");
    $header.removeClass("close_icon");
  }
});

// Clicking outside the sidebar to close it
$(".body-part").on("click", function () {
  $toggle_nav_top.attr("checked", false);
  $nav.addClass("close_icon");
  $header.addClass("close_icon");
});

// Handle sidebar sliding in/out
var view = $("#sidebar-menu");
var move = "500px";
var sliderLimit = -500;

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

// Add/remove active state for links in the sidebar
if ($("#pageWrapper").hasClass("compact-wrapper")) {
  $(".sidebar-wrapper nav").find("a").removeClass("active");
  $(".sidebar-wrapper nav").find("li").removeClass("active");
  var current = window.location.pathname;
  $(".sidebar-wrapper nav ul>li a").filter(function () {
    var link = $(this).attr("href");
    if (link) {
      if (current.indexOf(link) != -1) {
        $(this).parents().children("a").addClass("active");
        $(this).parents().parents().children(".").css("display", "block");
        $(this).addClass("active");
        $(this).parent().parent().parent().children("a").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
        return false;
      }
    }
  });
}

// Adjust the sidebar visibility based on window width
(function ($) {
  "use strict";

  if ($window.width() <= 991) {
    $toggle_nav_top.attr("checked", false);
    $nav.addClass("close_icon");
    $header.addClass("close_icon");
  }
})(jQuery);

$window.on("resize", function () {
  var widthwindow = $window.width();
  if (widthwindow <= 991) {
    $toggle_nav_top.attr("checked", false);
    $nav.addClass("close_icon");
    $header.addClass("close_icon");
  } else {
    $toggle_nav_top.attr("checked", true);
    $nav.removeClass("close_icon");
    $header.removeClass("close_icon");
  }
});
