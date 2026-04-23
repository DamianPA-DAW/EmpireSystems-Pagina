// Landing JS

(function ($) {
  "use strict";
  // localstorage all setting

  $(".page-wrapper").attr("class", localStorage.getItem("page-wrapper"));

  // dubai layout
  $(".default-view").click(function () {
    localStorage.setItem("page-wrapper", "compact-wrapper");
  });

  $(".paris-view").click(function () {
    localStorage.setItem("page-wrapper", "compact-wrapper dark-sidebar");
  });

  $(".newyork-view").click(function () {
    localStorage.setItem("page-wrapper", "compact-wrapper box-layout");
  });

  $(".madrid-view").click(function () {
    localStorage.setItem("page-wrapper", "compact-wrapper color-sidebar");
  });

  $(".prooduct-details-box .close").on("click", function (e) {
    var tets = $(this).parent().parent().parent().parent().addClass("d-none");
    console.log(tets);
  });


   $(".toggle-menu").on('click', function (){
        $('.landing-menu').toggleClass('open');
  });   
  $(".menu-back").on('click', function (){
      $('.landing-menu').toggleClass('open');
  });  
})(jQuery);