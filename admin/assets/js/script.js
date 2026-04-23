/*! -----------------------------------------------------------------------------------

    Template Name: Olix Admin
    Template URI: http://admin.pixelstrap.com/olix/template
    Description: This is Admin theme
    Author: Pixelstrap
    Author URI: https://themeforest.net/user/pixelstrap

-----------------------------------------------------------------------------------

        01. password show hide
        02. Background Image js
        03. sidebar filter
        04. Language js
        05. Translate js

 --------------------------------------------------------------------------------- */

(function ($) {
  "use strict";

  $(document).on("click", function (e) {
    var outside_space = $(".outside");
    if (!outside_space.is(e.target) && outside_space.has(e.target).length === 0) {
      $(".menu-to-be-close").removeClass("d-block");
      $(".menu-to-be-close").css("display", "none");
    }
  });

  function initSidebarHover() {
    console.log("Binding hover events");

    $(".sidebar-list").hover(
      function () {
        $(this).addClass("hoverd");
      },
      function () {
        $(this).removeClass("hoverd");
      }
    );

    $(window).on("scroll", function () {
      if ($(this).scrollTop() < 600) {
        $(".sidebar-list").removeClass("hoverd");
      }
    });
  }

  function waitForHorizontalWrapper(retries = 10) {
    if ($("#pageWrapper").hasClass("horizontal-wrapper")) {
      initSidebarHover();
    } else if (retries > 0) {
      setTimeout(() => waitForHorizontalWrapper(retries - 1), 500);
    }
  }

  waitForHorizontalWrapper();

  /*----------------------------------------
     password show hide
     ----------------------------------------*/
  $(".show-hide").show();
  $(".show-hide span").addClass("show");

  $(".show-hide span").click(function () {
    if ($(this).hasClass("show")) {
      $('input[name="login[password]"]').attr("type", "text");
      $(this).removeClass("show");
    } else {
      $('input[name="login[password]"]').attr("type", "password");
      $(this).addClass("show");
    }
  });
  $('form button[type="submit"]').on("click", function () {
    $(".show-hide span").addClass("show");
    $(".show-hide").parent().find('input[name="login[password]"]').attr("type", "password");
  });

  /*=====================
      02. Background Image js
      ==========================*/
  $(".bg-center").parent().addClass("b-center");
  $(".bg-img-cover").parent().addClass("bg-size");
  $(".bg-img-cover").each(function () {
    var el = $(this),
      src = el.attr("src"),
      parent = el.parent();
    parent.css({
      "background-image": "url(" + src + ")",
      "background-size": "cover",
      "background-position": "center",
      display: "block",
    });
    el.hide();
  });

  $(".mega-menu-container").css("display", "none");
  $(".header-search").click(function () {
    $(".search-full").addClass("open");
  });
  $(".close-search").click(function () {
    $(".search-full").removeClass("open");
    $("body").removeClass("offcanvas");
  });
  $(".mobile-toggle").click(function () {
    $(".nav-menus").toggleClass("open");
  });
  $(".mobile-toggle-left").click(function () {
    $(".left-header").toggleClass("open");
  });
  $(".bookmark-search").click(function () {
    $(".form-control-search").toggleClass("open");
  });
  $(".filter-toggle").click(function () {
    $(".product-sidebar").toggleClass("open");
  });
  $(".toggle-data").click(function () {
    $(".product-wrapper").toggleClass("sidebaron");
  });
  $(".form-control-search input").keyup(function (e) {
    if (e.target.value) {
      $(".page-wrapper").addClass("offcanvas-bookmark");
    } else {
      $(".page-wrapper").removeClass("offcanvas-bookmark");
    }
  });
  $(".search-full input").keyup(function (e) {
    console.log(e.target.value);
    if (e.target.value) {
      $("body").addClass("offcanvas");
    } else {
      $("body").removeClass("offcanvas");
    }
  });

  $("body").keydown(function (e) {
    if (e.keyCode == 27) {
      $(".search-full input").val("");
      $(".form-control-search input").val("");
      $(".page-wrapper").removeClass("offcanvas-bookmark");
      $(".search-full").removeClass("open");
      $(".search-form .form-control-search").removeClass("open");
      $("body").removeClass("offcanvas");
    }
  });
  $(".mode").on("click", function () {
    const bodyModeDark = $("body").hasClass("dark-only");

    if (!bodyModeDark) {
      $(".mode").addClass("active");
      localStorage.setItem("mode-olix", "dark-only");
      $("body").addClass("dark-only");
      $("body").removeClass("light");
    }
    if (bodyModeDark) {
      $(".mode").removeClass("active");
      localStorage.setItem("mode-olix", "light");
      $("body").removeClass("dark-only");
      $("body").addClass("light");
    }
  });
  $("body").addClass(localStorage.getItem("mode-olix") ? localStorage.getItem("mode-olix") : "light");
  $(".mode").addClass(localStorage.getItem("mode-olix") === "dark-only" ? "active" : " ");

  // sidebar filter
  $(".md-sidebar .md-sidebar-toggle ").on("click", function (e) {
    $(".md-sidebar .md-sidebar-aside ").toggleClass("open");
  });

  $(".loader-wrapper").fadeOut("slow", function () {
    $(this).remove();
    window.addEventListener('load', () => {
      setTimeout(() => {
      $(".loader-wrapper").fadeOut("slow", function () {
      $(this).remove();
      document.body.classList.add('loaded');
      });
      }, 3000); // 2-second delay
      });
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".tap-top").fadeIn();
    } else {
      $(".tap-top").fadeOut();
    }
  });

  $("#sidebar-menu ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

  $(".tap-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
  (function ($, window, document, undefined) {
    "use strict";
    var $ripple = $(".js-ripple");
    $ripple.on("click.ui.ripple", function (e) {
      var $this = $(this);
      var $offset = $this.parent().offset();
      var $circle = $this.find(".c-ripple__circle");
      var x = e.pageX - $offset.left;
      var y = e.pageY - $offset.top;
      $circle.css({
        top: y + "px",
        left: x + "px",
      });
      $this.addClass("is-active");
    });
    $ripple.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function (e) {
      $(this).removeClass("is-active");
    });
  })(jQuery, window, document);

  // Language
  var tnum = "en";

  $(document).ready(function () {
    if (localStorage.getItem("primary") != null) {
      var primary_val = localStorage.getItem("primary");
      $("#ColorPicker1").val(primary_val);
      var secondary_val = localStorage.getItem("secondary");
      $("#ColorPicker2").val(secondary_val);
    }

    $(document).click(function (e) {
      $(".translate_wrapper, .more_lang").removeClass("active");
    });
    $(".translate_wrapper .current_lang").click(function (e) {
      e.stopPropagation();
      $(this).parent().toggleClass("active");

      setTimeout(function () {
        $(".more_lang").toggleClass("active");
      }, 5);
    });

    /*TRANSLATE*/
    translate(tnum);

    $(".more_lang .lang").click(function () {
      $(this).addClass("selected").siblings().removeClass("selected");
      $(".more_lang").removeClass("active");

      var i = $(this).find("i").attr("class");
      var lang = $(this).attr("data-value");
      var tnum = lang;
      translate(tnum);

      $(".current_lang .lang-txt").text(lang);
      $(".current_lang i").attr("class", i);
    });
  });

  function translate(tnum) {
    $(".lan-1").text(trans[0][tnum]);
    $(".lan-2").text(trans[1][tnum]);
    $(".lan-3").text(trans[2][tnum]);
    $(".lan-4").text(trans[3][tnum]);
    $(".lan-5").text(trans[4][tnum]);
    $(".lan-6").text(trans[5][tnum]);
    $(".lan-7").text(trans[6][tnum]);
    $(".lan-8").text(trans[7][tnum]);
    $(".lan-9").text(trans[8][tnum]);
    $(".lan-10").text(trans[9][tnum]);
    $(".lan-11").text(trans[10][tnum]);
    $(".lan-12").text(trans[11][tnum]);
    $(".lan-13").text(trans[12][tnum]);
    $(".lan-14").text(trans[13][tnum]);
    $(".lan-15").text(trans[14][tnum]);
    $(".lan-16").text(trans[15][tnum]);
    $(".lan-17").text(trans[16][tnum]);
    $(".lan-18").text(trans[17][tnum]);
    $(".lan-19").text(trans[18][tnum]);
    $(".lan-20").text(trans[19][tnum]);
    $(".lan-21").text(trans[20][tnum]);
    $(".lan-22").text(trans[21][tnum]);
    $(".lan-23").text(trans[22][tnum]);
    $(".lan-24").text(trans[23][tnum]);
    $(".lan-25").text(trans[24][tnum]);
    $(".lan-26").text(trans[25][tnum]);
    $(".lan-27").text(trans[26][tnum]);
    $(".lan-28").text(trans[27][tnum]);
    $(".lan-29").text(trans[28][tnum]);
    $(".lan-30").text(trans[29][tnum]);
    $(".lan-31").text(trans[30][tnum]);
    $(".lan-32").text(trans[31][tnum]);
    $(".lan-33").text(trans[32][tnum]);
    $(".lan-34").text(trans[33][tnum]);
    $(".lan-35").text(trans[34][tnum]);
    $(".lan-36").text(trans[35][tnum]);
    $(".lan-37").text(trans[36][tnum]);
    $(".lan-38").text(trans[37][tnum]);
    $(".lan-39").text(trans[38][tnum]);
    $(".lan-40").text(trans[39][tnum]);
    $(".lan-41").text(trans[40][tnum]);
    $(".lan-42").text(trans[41][tnum]);
    $(".lan-43").text(trans[42][tnum]);
    $(".lan-44").text(trans[43][tnum]);
    $(".lan-45").text(trans[44][tnum]);
    $(".lan-46").text(trans[45][tnum]);
    $(".lan-47").text(trans[46][tnum]);
    $(".lan-48").text(trans[47][tnum]);
    $(".lan-49").text(trans[48][tnum]);
    $(".lan-50").text(trans[49][tnum]);
    $(".lan-51").text(trans[50][tnum]);
    $(".lan-52").text(trans[51][tnum]);
    $(".lan-53").text(trans[52][tnum]);
    $(".lan-54").text(trans[53][tnum]);
    $(".lan-55").text(trans[54][tnum]);
    $(".lan-56").text(trans[55][tnum]);
    $(".lan-57").text(trans[56][tnum]);
    $(".lan-58").text(trans[57][tnum]);
    $(".lan-59").text(trans[58][tnum]);
    $(".lan-60").text(trans[59][tnum]);
    $(".lan-61").text(trans[60][tnum]);
    $(".lan-62").text(trans[61][tnum]);
    $(".lan-63").text(trans[62][tnum]);
    $(".lan-64").text(trans[63][tnum]);
    $(".lan-65").text(trans[64][tnum]);
    $(".lan-66").text(trans[65][tnum]);
    $(".lan-67").text(trans[66][tnum]);
    $(".lan-68").text(trans[67][tnum]);
    $(".lan-69").text(trans[68][tnum]);
    $(".lan-70").text(trans[69][tnum]);
    $(".lan-71").text(trans[70][tnum]);
    $(".lan-72").text(trans[71][tnum]);
    $(".lan-73").text(trans[72][tnum]);
    $(".lan-74").text(trans[73][tnum]);
    $(".lan-75").text(trans[74][tnum]);
    $(".lan-76").text(trans[75][tnum]);
    $(".lan-77").text(trans[76][tnum]);
    $(".lan-78").text(trans[77][tnum]);
    $(".lan-79").text(trans[78][tnum]);
    $(".lan-80").text(trans[79][tnum]);
    $(".lan-81").text(trans[80][tnum]);
    $(".lan-82").text(trans[81][tnum]);
    $(".lan-83").text(trans[82][tnum]);
    $(".lan-84").text(trans[83][tnum]);
    $(".lan-85").text(trans[84][tnum]);
    $(".lan-86").text(trans[85][tnum]);
    $(".lan-87").text(trans[86][tnum]);
    $(".lan-88").text(trans[87][tnum]);
    $(".lan-89").text(trans[88][tnum]);
    $(".lan-90").text(trans[89][tnum]);
    $(".lan-91").text(trans[90][tnum]);
    $(".lan-92").text(trans[91][tnum]);
    $(".lan-93").text(trans[92][tnum]);
    $(".lan-94").text(trans[93][tnum]);
    $(".lan-95").text(trans[94][tnum]);
    $(".lan-96").text(trans[95][tnum]);
    $(".lan-97").text(trans[96][tnum]);
    $(".lan-98").text(trans[97][tnum]);
    $(".lan-99").text(trans[98][tnum]);
    $(".lan-100").text(trans[99][tnum]);
    $(".lan-101").text(trans[100][tnum]);
    $(".lan-102").text(trans[101][tnum]);
    $(".lan-103").text(trans[102][tnum]);
    $(".lan-104").text(trans[103][tnum]);
    $(".lan-105").text(trans[104][tnum]);
    $(".lan-106").text(trans[105][tnum]);
    $(".lan-107").text(trans[106][tnum]);
    $(".lan-108").text(trans[107][tnum]);
    $(".lan-109").text(trans[108][tnum]);
    $(".lan-110").text(trans[109][tnum]);
    $(".lan-111").text(trans[110][tnum]);
    $(".lan-112").text(trans[111][tnum]);
    $(".lan-113").text(trans[112][tnum]);
    $(".lan-114").text(trans[113][tnum]);
    $(".lan-115").text(trans[114][tnum]);
    $(".lan-116").text(trans[115][tnum]);
    $(".lan-117").text(trans[116][tnum]);
    $(".lan-118").text(trans[117][tnum]);
    $(".lan-119").text(trans[118][tnum]);
    $(".lan-120").text(trans[119][tnum]);
    $(".lan-121").text(trans[120][tnum]);
    $(".lan-122").text(trans[121][tnum]);
    $(".lan-123").text(trans[122][tnum]);
    $(".lan-124").text(trans[123][tnum]);
    $(".lan-125").text(trans[124][tnum]);
    $(".lan-126").text(trans[125][tnum]);
    $(".lan-127").text(trans[126][tnum]);
    $(".lan-128").text(trans[127][tnum]);
    $(".lan-129").text(trans[128][tnum]);
    $(".lan-130").text(trans[129][tnum]);
    $(".lan-131").text(trans[130][tnum]);
    $(".lan-132").text(trans[131][tnum]);
    $(".lan-133").text(trans[132][tnum]);
    $(".lan-134").text(trans[133][tnum]);
    $(".lan-135").text(trans[134][tnum]);
    $(".lan-136").text(trans[135][tnum]);
    $(".lan-137").text(trans[136][tnum]);
    $(".lan-138").text(trans[137][tnum]);
    $(".lan-139").text(trans[138][tnum]);
    $(".lan-140").text(trans[139][tnum]);
    $(".lan-141").text(trans[140][tnum]);
    $(".lan-142").text(trans[141][tnum]);
    $(".lan-143").text(trans[142][tnum]);
    $(".lan-144").text(trans[143][tnum]);
    $(".lan-145").text(trans[144][tnum]);
    $(".lan-146").text(trans[145][tnum]);
    $(".lan-147").text(trans[146][tnum]);
    $(".lan-148").text(trans[147][tnum]);
    $(".lan-149").text(trans[148][tnum]);
    $(".lan-150").text(trans[149][tnum]);
    $(".lan-151").text(trans[150][tnum]);
    $(".lan-152").text(trans[151][tnum]);
    $(".lan-153").text(trans[152][tnum]);
    $(".lan-154").text(trans[153][tnum]);
    $(".lan-155").text(trans[154][tnum]);
    $(".lan-156").text(trans[155][tnum]);
    $(".lan-157").text(trans[156][tnum]);
    $(".lan-158").text(trans[157][tnum]);
    $(".lan-159").text(trans[158][tnum]);
    $(".lan-160").text(trans[159][tnum]);
    $(".lan-161").text(trans[160][tnum]);
    $(".lan-162").text(trans[161][tnum]);
    $(".lan-163").text(trans[162][tnum]);
    $(".lan-164").text(trans[163][tnum]);
    $(".lan-165").text(trans[164][tnum]);
    $(".lan-166").text(trans[165][tnum]);
    $(".lan-167").text(trans[166][tnum]);
    $(".lan-168").text(trans[167][tnum]);
    $(".lan-169").text(trans[168][tnum]);
    $(".lan-170").text(trans[169][tnum]);
    $(".lan-171").text(trans[170][tnum]);
    $(".lan-172").text(trans[171][tnum]);
    $(".lan-173").text(trans[172][tnum]);
    $(".lan-174").text(trans[173][tnum]);
    $(".lan-175").text(trans[174][tnum]);
    $(".lan-176").text(trans[175][tnum]);
    $(".lan-177").text(trans[176][tnum]);
    $(".lan-178").text(trans[177][tnum]);
    $(".lan-179").text(trans[178][tnum]);
    $(".lan-180").text(trans[179][tnum]);
    $(".lan-181").text(trans[180][tnum]);
    $(".lan-182").text(trans[181][tnum]);
    $(".lan-183").text(trans[182][tnum]);
    $(".lan-184").text(trans[183][tnum]);
    $(".lan-185").text(trans[184][tnum]);
    $(".lan-186").text(trans[185][tnum]);
    $(".lan-187").text(trans[186][tnum]);
    $(".lan-188").text(trans[187][tnum]);
    $(".lan-189").text(trans[188][tnum]);
    $(".lan-190").text(trans[189][tnum]);
    $(".lan-191").text(trans[190][tnum]);
    $(".lan-192").text(trans[191][tnum]);
    $(".lan-193").text(trans[192][tnum]);
    $(".lan-194").text(trans[193][tnum]);
    $(".lan-195").text(trans[194][tnum]);
    $(".lan-196").text(trans[195][tnum]);
    $(".lan-197").text(trans[196][tnum]);
    $(".lan-198").text(trans[197][tnum]);
    $(".lan-199").text(trans[198][tnum]);
    $(".lan-200").text(trans[199][tnum]);
    $(".lan-201").text(trans[200][tnum]);
    $(".lan-202").text(trans[201][tnum]);
    $(".lan-203").text(trans[202][tnum]);
    $(".lan-204").text(trans[203][tnum]);
    $(".lan-205").text(trans[204][tnum]);
    $(".lan-206").text(trans[205][tnum]);
    $(".lan-207").text(trans[206][tnum]);
    $(".lan-208").text(trans[207][tnum]);
    $(".lan-209").text(trans[208][tnum]);
    $(".lan-210").text(trans[209][tnum]);
    $(".lan-211").text(trans[210][tnum]);
    $(".lan-212").text(trans[211][tnum]);
    $(".lan-213").text(trans[212][tnum]);
    $(".lan-214").text(trans[213][tnum]);
    $(".lan-215").text(trans[214][tnum]);
    $(".lan-216").text(trans[215][tnum]);
    $(".lan-217").text(trans[216][tnum]);
    $(".lan-218").text(trans[217][tnum]);
    $(".lan-219").text(trans[218][tnum]);
    $(".lan-220").text(trans[219][tnum]);
    $(".lan-221").text(trans[220][tnum]);
    $(".lan-222").text(trans[221][tnum]);
    $(".lan-223").text(trans[222][tnum]);
    $(".lan-224").text(trans[223][tnum]);
    $(".lan-225").text(trans[224][tnum]);
    $(".lan-226").text(trans[225][tnum]);
    $(".lan-227").text(trans[226][tnum]);
    $(".lan-228").text(trans[227][tnum]);
    $(".lan-229").text(trans[228][tnum]);
    $(".lan-230").text(trans[229][tnum]);
    $(".lan-231").text(trans[230][tnum]);
    $(".lan-232").text(trans[231][tnum]);
    $(".lan-233").text(trans[232][tnum]);
    $(".lan-234").text(trans[233][tnum]);
    $(".lan-235").text(trans[234][tnum]);
    $(".lan-236").text(trans[235][tnum]);
    $(".lan-237").text(trans[236][tnum]);
    $(".lan-238").text(trans[237][tnum]);
    $(".lan-239").text(trans[238][tnum]);
    $(".lan-240").text(trans[239][tnum]);
    $(".lan-241").text(trans[240][tnum]);
  }


  var trans = [
    // 1
    {
      en: "General",
      pt: "Em geral",
      es: "General",
      fr: "Générale",
      de: "Algemeen",
      cn: "一般的",
      ae: "عام",
    },
    // 2
    {
      en: "Dashboards",
      pt: "PainÃ©is",
      es: "Paneloj",
      fr: "Tableaux de bord",
      de: "Dashboards",
      cn: "仪表板",
      ae: "لوحات المعلومات",
    },
    // 3
    {
      en: "Shoping place",
      pt: "PadrÃ£o",
      es: "Vaikimisi",
      fr: "DÃ©faut",
      de: "Standaard",
      cn: "é›»å­å•†å‹™",
      ae: "أماكن التسوق",
    },
    // 4
    {
      en: "CRM Dashboard",
      pt: "ComÃ©rcio eletrÃ´nico",
      es: "Komerco",
      fr: "Commerce Ã©lectronique",
      de: "E-commerce",
      cn: "é›»å­å•†å‹™",
      ae: "لوحة تحكم إدارة علاقات العملاء",
    },
    // 5
    {
      en: "Widgets",
      pt: "Ferramenta",
      es: "Vidin",
      fr: "Widgets",
      de: "Widgets",
      cn: "å°éƒ¨ä»¶",
      ae: "الحاجيات", //widget
    },
    // 6
    {
      en: "Chart",
      pt: "gráfico",
      es: "cuadro",
      fr: "graphique",
      de: "grafiek",
      cn: "图表",
      ae: "جدول",
    },
    // 7
    {
      en: "Page layout",
      pt: "Layout da pÃ¡gina",
      es: "Diseño de página",
      fr: "Tableaux",
      de: "Mise en page",
      cn: "é é¢ä½ˆå±€",
      ae: "تخطيط الصفحة",
    },
    // 8
    {
      en: "Boxed",
      pt: "Encaixotada",
      es: "En caja",
      fr: "En boîte",
      de: "In doos",
      cn: "盒装",
      ae: "محاصر",
    },
    // 9
    {
      en: "RTL",
      pt: "RTL",
      es: "RTL",
      fr: "RTL",
      de: "RTL",
      cn: "盒装",
      ae: "محاصر",
    },
    // 10
    {
      en: "Dark layout",
      pt: "Layout escuro", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "diseño oscuro", //spanish
      fr: "Disposition sombre", //french
      de: "Donkere indeling", //dutch
      cn: "深色布局", //Chinese
      ae: "تخطيط الظلام", //arabic
    },
    // 11
    {
      en: "Hide nav scroll",
      pt: "Ocultar rolagem de navegação", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Ocultar desplazamiento de navegación", //spanish
      fr: "Masquer le défilement de navigation", //french
      de: "Navigatie-scroll verbergen", //dutch
      cn: "隐藏导航滚动", //Chinese
      ae: "إخفاء التمرير التنقل", //arabic
    },
    // 12
    {
      en: "Footer light",
      pt: "Luz de rodapé", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Luz de pie de página", //spanish
      fr: "Lumière de pied de page", //french
      de: "Voettekst licht", //dutch
      cn: "页脚灯", //Chinese
      ae: "ضوء التذييل", //arabic
    },
    // 13
    {
      en: "Footer Dark",
      pt: "Rodapé escuro", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Pie de página oscura", //spanish
      fr: "Pied de page sombre", //french
      de: "Voettekst donker", //dutch
      cn: "页脚深色", //Chinese
      ae: "تذييل داكن",
    },
    // 14
    {
      en: "Footer Fixed",
      pt: "Rodapé corrigido", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Pie de página fijo", //spanish
      fr: "Pied de page corrigé", //french
      de: "Voettekst opgelost", //dutch
      cn: "页脚固定", //Chinese
      ae: "تم إصلاح التذييل", 
    },
    // 15
    {
      en: "UI Kits",
      pt: "Kits de IU", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Kits de interfaz de usuario", //spanish
      fr: "Kits d'interface utilisateur", //french
      de: "UI-kits", //dutch
      cn: "用户界面套件", //Chinese
      ae: "مجموعات واجهة المستخدم", 
    },
    // 16
    {
      en: "Typography",
      pt: "Tipografia", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Tipografía", //spanish
      fr: "Typographie", //french
      de: "Typografie", //dutch
      cn: "版式", //Chinese
      ae: "الطباعة",
    },
    // 17
    {
      en: "Avatars",
      pt: "Avatares", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "avatares", //spanish
      fr: "Avatars", //french
      de: "Avatars", //dutch
      cn: "头像", //Chinese
      ae: "الصور الرمزية",
    },
    // 18
    {
      en: "Divider",
      pt: "Divisor", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Divisor", //spanish
      fr: "Diviseur", //french
      de: "Verdeler", //dutch
      cn: "分频器", //Chinese
      ae: "مقسم",
    },
    // 19
    {
      en: "Helper Classes",
      pt: "Aulas auxiliares", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Clases de ayuda", //spanish
      fr: "Cours d'assistance", //french
      de: "Helper klassen", //dutch
      cn: "辅助类", //Chinese
      ae: "الطبقات المساعدة",
    },
    // 20
    {
      en: "Grid",
      pt: "Grade", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Red", //spanish
      fr: "Grille", //french
      de: "Rooster", //dutch
      cn: "网格", //Chinese
      ae: "شبكة",
    },
    // 21
    {
      en: "Tag & Pills",
      pt: "Etiqueta e comprimidos", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Etiqueta y pastillas", //spanish
      fr: "Étiquette et pilules", //french
      de: "Label & Pillen", //dutch
      cn: "标签和药丸", //Chinese
      ae: "العلامة والحبوب",
    },
    // 22
    {
      en: "Progress",
      pt: "Progresso", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Progreso", //spanish
      fr: "Progrès", //french
      de: "Voortgang", //dutch
      cn: "进步", //Chinese
      ae: "تقدم",
    },
    // 23
    {
      en: "Modal",
      pt: "Modal", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Modal", //spanish
      fr: "Modale", //french
      de: "Modaal", //dutch
      cn: "莫代尔", //Chinese
      ae: "مشروط",
    },
    // 24
    {
      en: "Alert",
      pt: "Alerta", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Alerta", //spanish
      fr: "Alerte", //french
      de: "Waarschuw", //dutch
      cn: "警报", //Chinese
      ae: "يُحذًِر",
    },
    // 25
    {
      en: "Popover",
      pt: "Popover", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "popover", //spanish
      fr: "Popover", //french
      de: "Pop-over", //dutch
      cn: "弹出窗口", //Chinese
      ae: "بوبوفر",
    },
    // 26
    {
      en: "Placeholders",
      pt: "Espaços reservados", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "popovMarcadores de posicióner", //spanish
      fr: "PopEspaces réservésover", //french
      de: "Tijdelijke aanduidingen", //dutch
      cn: "占位符", //Chinese
      ae: "العناصر النائبة",
    },
    // 27
    {
      en: "Tooltip",
      pt: "Dica", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Información sobre herramientas", //spanish
      fr: "Info-bulle", //french
      de: "Tooltip", //dutch
      cn: "工具提示", //Chinese
      ae: "تلميح الأداة",
    },
    // 28
    {
      en: "Dropdown",
      pt: "Suspensa", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Menú desplegable", //spanish
      fr: "Dérouler", //french
      de: "Dropdownmenu", //dutch
      cn: "下拉菜单", //Chinese
      ae: "اسقاط",
    },
    // 29
    {
      en: "Accordion",
      pt: "Acordeão", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Acordeón", //spanish
      fr: "Accordéon", //french
      de: "Accordeon", //dutch
      cn: "手风琴", //Chinese
      ae: "الأكورديون",
    },
    // 30
    {
      en: "Tabs",
      pt: "Guias", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Cortina a la italiana", //spanish
      fr: "Onglets", //french
      de: "Tabbladen", //dutch
      cn: "选项卡", //Chinese
      ae: "علامات التبويب",
    },
    // 31
    {
      en: "Offcanvas",
      pt: "Fora da tela", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Fuera del lienzo", //spanish
      fr: "Hors toile", //french
      de: "Buiten canvas", //dutch
      cn: "帆布", //Chinese
      ae: "خارج القماش",
    },
    // 32
    {
      en: "Navigate Links",
      pt: "Navegar nos links", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Navegar por enlaces", //spanish
      fr: "Naviguer dans les liens", //french
      de: "Navigeer door koppelingen", //dutch
      cn: "导航链接", //Chinese
      ae: "التنقل في الروابط",
    },
    // 33
    {
      en: "Lists",
      pt: "Listas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Liza", //spanish
      fr: "Listes", //french
      de: "Lijsten", //dutch
      cn: "列表", //Chinese
      ae: "القوائم",
    },
    // 34
    {
      en: "Animations",
      pt: "Animações", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "animaciones", //spanish
      fr: "Animations", //french
      de: "Animaties", //dutch
      cn: "动画", //Chinese
      ae: "الرسوم المتحركة",
    },
    // 35
    {
      en: "Animate",
      pt: "Animar", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Animar", //spanish
      fr: "Animer", //french
      de: "Animeren", //dutch
      cn: "动画", //Chinese
      ae: "تحريك",
    },
    // 36
    {
      en: "Scroll Reveal",
      pt: "Revelação de rolagem", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Desplazamiento revelado", //spanish
      fr: "Révélation par défilement", //french
      de: "Scroll Onthullen", //dutch
      cn: "滚动显示", //Chinese
      ae: "كشف التمرير",
    },
    // 37
    {
      en: "AOS animation",
      pt: "Animação AOS", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "animación AOS", //spanish
      fr: "Animations AOS", //french
      de: "AOS-animatie", //dutch
      cn: "AOS动画", //Chinese
      ae: "الرسوم المتحركة AOS",
    },
    // 38
    {
      en: "Tilt Animation",
      pt: "Animação de inclinação", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Animación de inclinación", //spanish
      fr: "Animation d'inclinaison", //french
      de: "Kantel animatie", //dutch
      cn: "倾斜动画", //Chinese
      ae: "إمالة الرسوم المتحركة",
    },
    // 39
    {
      en: "Wow Animation",
      pt: "Uau Animação", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Vaya animación", //spanish
      fr: "Waouh Animation", //french
      de: "Wauw animatie", //dutch
      cn: "哇动画", //Chinese
      ae: "الرسوم المتحركة واو",
    },
    // 40
    {
      en: "Flash Icons",
      pt: "Ícones Flash", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Iconos de destello", //spanish
      fr: "Icônes Flash", //french
      de: "Flitspictogrammen", //dutch
      cn: "闪光图标", //Chinese
      ae: "أيقونات فلاش",
    },
    // 41
    {
      en: "Perk Ui",
      pt: "Vantagens da interface do usuário", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Interfaz de usuario de beneficio", //spanish
      fr: "Avantages de l'interface utilisateur", //french
      de: "Perk Ui", //dutch
      cn: "珀克·乌伊", //Chinese
      ae: "بيرك واجهة المستخدم",
    },
    // 42
    {
      en: "Components",
      pt: "Componentes", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Componentes", //spanish
      fr: "Composantes", //french
      de: "Componenten", //dutch
      cn: "成分", //Chinese
      ae: "عناصر",
    },
    // 43
    {
      en: "Bonus Ui",
      pt: "Interface de usuário bônus", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Interfaz de usuario adicional", //spanish
      fr: "Interface utilisateur bonus", //french
      de: "Bonus-UI", //dutch
      cn: "奖金用户界面", //Chinese
      ae: "واجهة المستخدم الإضافية",
    },
    // 44
    {
      en: "Scrollable",
      pt: "Rolável", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Desplazable", //spanish
      fr: "Défilable", //french
      de: "Scrollbaar", //dutch
      cn: "可滚动", //Chinese
      ae: "قابلة للتمرير",
    },
    // 45
    {
      en: "Tree view",
      pt: "Vista em árvore", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Vista de árbol", //spanish
      fr: "Vue arborescente", //french
      de: "Boomweergave", //dutch
      cn: "树视图", //Chinese
      ae: "عرض الشجرة",
    },
    // 46
    {
      en: "Toasts",
      pt: "Brindes", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Brindis", //spanish
      fr: "Toasts", //french
      de: "Toast", //dutch
      cn: "吐司", //Chinese
      ae: "الخبز المحمص",
    },
    // 47
    {
      en: "BlockUI",
      pt: "BlockUI", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Bloque de interfaz de usuario", //spanish
      fr: "Bloquer l'interface utilisateur", //french
      de: "BlokUI", //dutch
      cn: "块UI", //Chinese
      ae: "BlockUI",
    },
    // 48
    {
      en: "Rating",
      pt: "Avaliação", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Clasificación", //spanish
      fr: "Notation", //french
      de: "Beoordeling", //dutch
      cn: "等级", //Chinese
      ae: "تصنيف",
    },
    // 49
    {
      en: "Dropzone",
      pt: "Zona de lançamento", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Zona de lanzamiento", //spanish
      fr: "Zone de dépôt", //french
      de: "Dropzone", //dutch
      cn: "空降区", //Chinese
      ae: "منطقة الإسقاط",
    },
    // 50
    {
      en: "Tour",
      pt: "Percorrer", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Recorrido", //spanish
      fr: "Tournée", //french
      de: "Tour", //dutch
      cn: "旅游", //Chinese
      ae: "رحلة",
    },
    // 51
    {
      en: "SweetAlert2",
      pt: "Brindes", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Brindis", //spanish
      fr: "Toasts", //french
      de: "Toast", //dutch
      cn: "吐司", //Chinese
      ae: "تنبيه حلو2",
    },
    // 52
    {
      en: "Animated Modal",
      pt: "Modal animado", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Modal animado", //spanish
      fr: "Modal animé", //french
      de: "Geanimeerd modaal", //dutch
      cn: "动画模态", //Chinese
      ae: "الرسوم المتحركة مشروط",
    },
    // 53
    {
      en: "Owl Carousel",
      pt: "Carrossel de Corujas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Carrusel de búhos", //spanish
      fr: "Carrousel de chouettes", //french
      de: "Uilencarrousel", //dutch
      cn: "猫头鹰旋转木马", //Chinese
      ae: "البومة دائري",
    },
    // 54
    {
      en: "Ribbons",
      pt: "Fitas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Cintas", //spanish
      fr: "Rubans", //french
      de: "Linten", //dutch
      cn: "丝带", //Chinese
      ae: "شرائط",
    },
    // 55
    {
      en: "Pagination",
      pt: "Paginação", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Paginación", //spanish
      fr: "Pagination", //french
      de: "Paginering", //dutch
      cn: "分页", //Chinese
      ae: "ترقيم الصفحات",
    },
    // 56
    {
      en: "ScrollSpy",
      pt: "ScrollSpy", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Desplazarse Espía", //spanish
      fr: "DéfilementEspion", //french
      de: "ScrollSpy", //dutch
      cn: "滚动间谍", //Chinese
      ae: "ScrollSpy",
    },
    // 57
    {
      en: "Breadcrumb",
      pt: "Pão ralado", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Migaja de pan", //spanish
      fr: "Fil d'Ariane", //french
      de: "Broodkruimel", //dutch
      cn: "面包屑", //Chinese
      ae: "مسار التنقل",
    },
    // 58
    {
      en: "Range Slider",
      pt: "Controle deslizante de intervalo", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Control deslizante de rango", //spanish
      fr: "Curseur de plage", //french
      de: "Bereikschuifregelaar", //dutch
      cn: "范围滑块", //Chinese
      ae: "نطاق المنزلق",
    },
    // 59
    {
      en: "Ratios",
      pt: "Razões", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "proporciones", //spanish
      fr: "Rapports", //french
      de: "Verhoudingen", //dutch
      cn: "比率", //Chinese
      ae: "النسب",
    },
    // 60
    {
      en: "Image cropper",
      pt: "Cortador de imagem", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Recortador de imágenes", //spanish
      fr: "Recadrage d'images", //french
      de: "Afbeelding bijsnijden", //dutch
      cn: "图像裁剪器", //Chinese
      ae: "صورة المحاصيل",
    },
    // 61
    {
      en: "Basic Card",
      pt: "Cartão Básico", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Tarjeta Básica", //spanish
      fr: "Carte de base", //french
      de: "Basiskaart", //dutch
      cn: "基本卡", //Chinese
      ae: "البطاقة الأساسية",
    },
    // 62
    {
      en: "Creative Card",
      pt: "Cartão Criativo", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Tarjeta creativa", //spanish
      fr: "Carte créative", //french
      de: "Creatieve kaart", //dutch
      cn: "创意卡", //Chinese
      ae: "بطاقة إبداعية",
    },
    // 63
    {
      en: "Draggable Card",
      pt: "Cartão arrastável", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Tarjeta arrastrable", //spanish
      fr: "Carte déplaçable", //french
      de: "Sleepbare kaart", //dutch
      cn: "可拖动卡", //Chinese
      ae: "البطاقة الأساسية",
    },
    // 64
    {
      en: "Timeline",
      pt: "Linha do tempo", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Línea de tiempo", //spanish
      fr: "Chronologie", //french
      de: "Tijdlijn", //dutch
      cn: "时间轴", //Chinese
      ae: "الجدول الزمني",
    },
    // // icons
    // 65
    {
      en: "Icons",
      pt: "Ícones", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Iconos", //spanish
      fr: "Icônes", //french
      de: "Pictogrammen", //dutch
      cn: "图标", //Chinese
      ae: "أيقونات",
    },
    // 66
    {
      en: "Flag icon",
      pt: "Ícone de bandeira", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Icono de bandera", //spanish
      fr: "Icône de drapeau", //french
      de: "Vlagpictogram", //dutch
      cn: "标志图标", //Chinese
      ae: "أيقونة العلم",
    },
    // 67
    {
      en: "Fontawesome Icon",
      pt: "Ícone incrível", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Icono de fuente impresionante", //spanish
      fr: "Icône Fontawesome", //french
      de: "Fontgeweldig icoon", //dutch
      cn: "令人惊叹的图标", //Chinese
      ae: "أيقونة الخط",
    },
    // 68
    {
      en: "Ico Icon",
      pt: "Ícone de ícone", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Icono de icono", //spanish
      fr: "Icône Icône", //french
      de: "Ico-icoon", //dutch
      cn: "图标 (Ico)", //Chinese
      ae: "أيقونة إيكو",
    },
    // 69
    {
      en: "Themify Icon",
      pt: "Ícone de tema", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Icono de tematización", //spanish
      fr: "Icône Thémifier", //french
      de: "Themify-pictogram", //dutch
      cn: "主题化图标", //Chinese
      ae: "أيقونة ثيمافي",
    },
    // 70
    {
      en: "Feather icon",
      pt: "Ícone de pena", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Icono de pluma", //spanish
      fr: "Icône de plume", //french
      de: "Veer icoon", //dutch
      cn: "羽毛图标", //Chinese
      ae: "أيقونة الريشة",
    },
    // 71
    {
      en: "Weather Icon",
      pt: "Ícone do tempo", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Icono del tiempo", //spanish
      fr: "Icône Météo", //french
      de: "Weerpictogram", //dutch
      cn: "天气图标", //Chinese
      ae: "أيقونة الطقس",
    },
    
    // // buttons
    // 72
    {
      en: "Buttons",
      pt: "Botões", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Botones", //spanish
      fr: "Boutons", //french
      de: "Knoppen", //dutch
      cn: "按钮", //Chinese
      ae: "أزرار",
    },

    // // Forms
    // 73
    {
      en: "Forms",
      pt: "Formulários", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Formularios", //spanish
      fr: "Formulaires", //french
      de: "Formulieren", //dutch
      cn: "表格", //Chinese
      ae: "النماذج",
    },
    // 74
    {
      en: "Forms & Tables",
      pt: "Formulários e Tabelas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Formularios y tablas", //spanish
      fr: "Formulaires et tableaux", //french
      de: "Formulieren en tabellen", //dutch
      cn: "表格和表格", //Chinese
      ae: "النماذج والجداول",
    },
    // 75
    {
      en: "Form Controls",
      pt: "Controles de formulário", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Controles de formulario", //spanish
      fr: "Contrôles de formulaire", //french
      de: "Formulierbesturingselementen", //dutch
      cn: "表单控件", //Chinese
      ae: "ضوابط النموذج",
    },
    // 76
    {
      en: "Form Validation",
      pt: "Validação de formulário", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Validación de formulario", //spanish
      fr: "Validation du formulaire", //french
      de: "Formuliervalidatie", //dutch
      cn: "表单验证", //Chinese
      ae: "التحقق من صحة النموذج",
    },
    // 77
    {
      en: "Base Inputs",
      pt: "Entradas básicas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Entradas básicas", //spanish
      fr: "Entrées de base", //french
      de: "Basisingangen", //dutch
      cn: "基本输入", //Chinese
      ae: "المدخلات الأساسية",
    },
    // 78
    {
      en: "Checkbox & Radio",
      pt: "Caixa de seleção e rádio", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Casilla de verificación y radio", //spanish
      fr: "Case à cocher et radio", //french
      de: "Selectievakje en radio", //dutch
      cn: "复选框和单选按钮", //Chinese
      ae: "خانة الاختيار والراديو",
    },
    // 79
    {
      en: "Input Groups",
      pt: "Grupos de entrada", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Grupos de entrada", //spanish
      fr: "Groupes d'entrée", //french
      de: "Invoergroepen", //dutch
      cn: "输入组", //Chinese
      ae: "مجموعات الإدخال",
    },
    // 80
    {
      en: "Input Mask",
      pt: "Máscara de entrada", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Máscara de entrada", //spanish
      fr: "Masque de saisie", //french
      de: "Invoermasker", //dutch
      cn: "输入掩码", //Chinese
      ae: "قناع الإدخال",
    },
    // 81
    {
      en: "Mega Options",
      pt: "Mega Opções", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Mega opciones", //spanish
      fr: "Méga-options", //french
      de: "Mega-opties", //dutch
      cn: "超级选项", //Chinese
      ae: "خيارات ميجا",
    },
    // 82
    {
      en: "Form Widgets",
      pt: "Widgets de formulário", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Widgets de formulario", //spanish
      fr: "Widgets de formulaire", //french
      de: "Formulierwidgets", //dutch
      cn: "表单小部件", //Chinese
      ae: "الحاجيات النموذج",
    },
    // 83
    {
      en: "Datepicker",
      pt: "Selecionador de data", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "selector de fechas", //spanish
      fr: "Sélecteur de date", //french
      de: "Datumkiezer", //dutch
      cn: "日期选择器", //Chinese
      ae: "منتقي التاريخ",
    },
    // 84
    {
      en: "Touchspin",
      pt: "Giro de toque", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "giro táctil", //spanish
      fr: "Toucher", //french
      de: "Touchspin", //dutch
      cn: "触摸旋转", //Chinese
      ae: "تدور اللمس",
    },
    // 85
    {
      en: "Select2",
      pt: "Selecione2", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Seleccionar2", //spanish
      fr: "Sélectionnez2", //french
      de: "Selecteer2", //dutch
      cn: "选择2", //Chinese
      ae: "اختر2",
    },
    // 86
    {
      en: "Switch",
      pt: "Trocar", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Cambiar", //spanish
      fr: "Changer", //french
      de: "Schakelaar", //dutch
      cn: "转变", //Chinese
      ae: "يُحوّل",
    },
    // 87
    {
      en: "Typeahead",
      pt: "Digitar antecipadamente", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Escritura anticipada", //spanish
      fr: "Saisie anticipée", //french
      de: "Type vooruit", //dutch
      cn: "提前输入", //Chinese
      ae: "الكتابة المسبقة",
    },
    // 88
    {
      en: "Clipboard",
      pt: "Área de transferência", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Portapapeles", //spanish
      fr: "Presse-papiers", //french
      de: "Klembord", //dutch
      cn: "剪贴板", //Chinese
      ae: "الحافظة",
    },
    // 89
    {
      en: "Form layout",
      pt: "Layout do formulário", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Diseño de formulario", //spanish
      fr: "Disposition du formulaire", //french
      de: "Formulier lay-out", //dutch
      cn: "表格布局", //Chinese
      ae: "تخطيط النموذج",
    },
    // 90
    {
      en: "Form Wizard 1",
      pt: "Assistente de formulário 1", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Asistente de formulario 1", //spanish
      fr: "Assistant de formulaire 1", //french
      de: "Formulierwizard 1", //dutch
      cn: "表单向导1", //Chinese
      ae: "معالج النموذج 1",
    },
    // 91
    {
      en: "Form Wizard 2",
      pt: "Assistente de formulário 2", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Asistente de formulario 2", //spanish
      fr: "Assistant de formulaire 2", //french
      de: "Formulierwizard 2", //dutch
      cn: "表格向导2", //Chinese
      ae: "معالج النموذج 2",
    },
    // 92
    {
      en: "Two Factor",
      pt: "Dois fatores", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Dos factores", //spanish
      fr: "Deux facteurs", //french
      de: "Twee factoren", //dutch
      cn: "两个因素", //Chinese
      ae: "عاملين",
    },

    // // tables
    // 93
    {
      en: "Tables",
      pt: "Tabelas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Mesas", //spanish
      fr: "Tableaux", //french
      de: "Tafels", //dutch
      cn: "表格", //Chinese
      ae: "الجداول",
    },
    // 94
    {
      en: "Bootstrap Tables",
      pt: "Tabelas de inicialização", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Tablas de arranque", //spanish
      fr: "Tableaux d'amorçage", //french
      de: "Bootstrap-tabellen", //dutch
      cn: "引导表", //Chinese
      ae: "جداول التمهيد  ",
    },
    // 95
    {
      en: "Basic Tables",
      pt: "Tabelas Básicas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Tablas Básicas", //spanish
      fr: "Tableaux de base", //french
      de: "Basistabellen", //dutch
      cn: "基本表", //Chinese
      ae: "الجداول الأساسية",
    },
    // 96
    {
      en: "Table components",
      pt: "Componentes da tabela", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Componentes de la mesa", //spanish
      fr: "Composants du tableau", //french
      de: "Tabelcomponenten", //dutch
      cn: "桌子组件", //Chinese
      ae: "مكونات الجدول",
    },
    // 97
    {
      en: "Data Tables",
      pt: "Tabelas de dados", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Tablas de datos", //spanish
      fr: "Tableaux de données", //french
      de: "Gegevenstabellen", //dutch
      cn: "数据表", //Chinese
      ae: "جداول البيانات",
    },
    // 98
    {
      en: "Basic Init",
      pt: "Inicialização Básica", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Inicio básico", //spanish
      fr: "Initialisation de base", //french
      de: "Basis init", //dutch
      cn: "基本初始化", //Chinese
      ae: "الحرف الأساسي الأساسي",
    },
    // 99
    {
      en: "Advance Init",
      pt: "Inicialização avançada", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Inicio avanzado", //spanish
      fr: "Initialisation avancée", //french
      de: "Vooraf init", //dutch
      cn: "高级初始化", //Chinese
      ae: "التمهيد المسبق",
    },
    // 100
    {
      en: "API",
      pt: "API", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "API", //spanish
      fr: "API", //french
      de: "API", //dutch
      cn: "应用程序编程接口", //Chinese
      ae: "واجهة برمجة التطبيقات",
    },
    // 101
    {
      en: "Data Sources",
      pt: "Fontes de dados", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Fuentes de datos", //spanish
      fr: "Sources de données", //french
      de: "Gegevensbronnen", //dutch
      cn: "数据来源", //Chinese
      ae: "مصادر البيانات",
    },
    // 102
    {
      en: "Extensions",
      pt: "Extensões", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Extensiones", //spanish
      fr: "Rallonges", //french
      de: "Extensies", //dutch
      cn: "扩展", //Chinese
      ae: "ملحقات",
    },
    // 103
    {
      en: "Js Grid Table",
      pt: "Tabela de grade Js", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Tabla de cuadrícula Js", //spanish
      fr: "Tableau de grille Js", //french
      de: "Js-rastertabel", //dutch
      cn: "Js网格表", //Chinese
      ae: "شبيبة شبكة الجدول",
    },

    // // charts
    // 104
    {
      en: "Charts",
      pt: "Gráficas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Gráficos", //spanish
      fr: "Graphiques", //french
      de: "Grafieken", //dutch
      cn: "图表", //Chinese
      ae: "الرسوم البيانية",
    },
    // 105
    {
      en: "Apex Chart",
      pt: "Apexcharts", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "gráficos ápice", //spanish
      fr: "Graphiques Apex", //french
      de: "Apex-grafieken", //dutch
      cn: "顶点图表", //Chinese
      ae: "مخططات أبيكس",
    },
    // 106
    {
      en: "Google Chart",
      pt: "Gráfico do Google", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Gráfico de Google", //spanish
      fr: "Graphique Google", //french
      de: "Google-grafiek", //dutch
      cn: "谷歌图表", //Chinese
      ae: "مخطط جوجل",
    },
    // 107
    {
      en: "Sparkline chart",
      pt: "Gráfico minigráfico", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "minigráfico", //spanish
      fr: "Graphique sparkline", //french
      de: "Sparkline-diagram", //dutch
      cn: "迷你图", //Chinese
      ae: "مخطط خط المؤشرات",
    },
    // 108
    {
      en: "Flot chart",
      pt: "Gráfico flutuante", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "diagrama de flotacion", //spanish
      fr: "Diagramme de flottaison", //french
      de: "Vlotdiagram", //dutch
      cn: "流程图", //Chinese
      ae: "مخطط التعويم",
    },
    // 109
    {
      en: "Knob Chart",
      pt: "Gráfico de botões", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Gráfico de perillas", //spanish
      fr: "Tableau des boutons", //french
      de: "Knopgrafiek", //dutch
      cn: "旋钮图", //Chinese
      ae: "مخطط المقبض",
    },
    // 110
    {
      en: "Morris Chart",
      pt: "Gráfico Morris", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Gráfico de Morris", //spanish
      fr: "Tableau Morris", //french
      de: "Morris-grafiek", //dutch
      cn: "莫里斯图", //Chinese
      ae: "مخطط موريس",
    },
    // 111
    {
      en: "Chatjs Chart",
      pt: "Gráfico Chatjs", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Gráfico de Chatjs", //spanish
      fr: "Graphique Chatjs", //french
      de: "Chatjs-grafiek", //dutch
      cn: "Chatjs图表", //Chinese
      ae: "مخطط Chatjs",
    },
    // 112
    {
      en: "Chartist Chart",
      pt: "Gráfico cartista", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Gráfico cartista", //spanish
      fr: "Charte chartiste", //french
      de: "Chartistische grafiek", //dutch
      cn: "图表师图表", //Chinese
      ae: "الرسم البياني التشارتي",
    },
    // 113
    {
      en: "Peity Chart",
      pt: "Gráfico Peity", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Gráfico de peidad", //spanish
      fr: "Tableau de péité", //french
      de: "Peity-grafiek", //dutch
      cn: "佩蒂图表", //Chinese
      ae: "مخطط بيتي",
    },
    // 114
    {
      en: "Apps",
      pt: "Aplicativas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Aplicaciones", //spanish
      fr: "Applications", //french
      de: "Apps", //dutch
      cn: "应用程序", //Chinese
      ae: "تطبيقات",
    },

    // // projects
    // 115
    {
      en: "Project",
      pt: "Projeto", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Proyecto", //spanish
      fr: "Projet", //french
      de: "Project", //dutch
      cn: "项目", //Chinese
      ae: "مشروع",
    },
    // 116
    {
      en: "Project Details",
      pt: "Detalhes do projeto", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Detalles del proyecto", //spanish
      fr: "Détails du projet", //french
      de: "Projectdetails", //dutch
      cn: "项目详情", //Chinese
      ae: "تفاصيل المشروع",
    },
    // 117
    {
      en: "Project List",
      pt: "Lista de Projetos", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Lista de proyectos", //spanish
      fr: "Liste des projets", //french
      de: "Projectlijst", //dutch
      cn: "项目清单", //Chinese
      ae: "قائمة المشاريع",
    },
    // 118
    {
      en: "Create new",
      pt: "Criar novo", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Crear nuevo", //spanish
      fr: "Créer nouveau", //french
      de: "Maak nieuw", //dutch
      cn: "创造新的", //Chinese
      ae: "إنشاء جديد",
    },
    // 119
    {
      en: "File manager",
      pt: "Gerenciador de arquivos", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Administradora de archivos", //spanish
      fr: "Gestionnaire de fichiers", //french
      de: "Bestandsbeheer", //dutch
      cn: "文件管理器", //Chinese
      ae: "مدير الملفات",
    },
    // 120
    {
      en: "Kanban Board",
      pt: "Quadro Kanban", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Tablero Kanban", //spanish
      fr: "Tableau Kanban", //french
      de: "Kanban-bord", //dutch
      cn: "看板", //Chinese
      ae: "مجلس كانبان",
    },
    // 121
    {
      en: "Ecommerce",
      pt: "Comércio eletrônico", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Comercio electrónico", //spanish
      fr: "Commerce électronique", //french
      de: "E-commerce", //dutch
      cn: "电子商务", //Chinese
      ae: "التجارة الإلكترونية",
    },
    // 122
    {
      en: "Products",
      pt: "Produtos", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Productos", //spanish
      fr: "Produits", //french
      de: "Producten", //dutch
      cn: "产品", //Chinese
      ae: "منتجات",
    },
    // 123
    {
      en: "Add Product",
      pt: "Adicionar produto", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Agregar producto", //spanish
      fr: "Ajouter un produit", //french
      de: "Product toevoegen", //dutch
      cn: "添加产品", //Chinese
      ae: "أضف منتج",
    },
    // 124
    {
      en: "Product Grid",
      pt: "Grade de produtos", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Cuadrícula de productos", //spanish
      fr: "Grille de produits", //french
      de: "Productraster", //dutch
      cn: "产品网格", //Chinese
      ae: "شبكة المنتج",
    },
    // 125
    {
      en: "Products List",
      pt: "Lista de produtos", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Lista de productos", //spanish
      fr: "Liste des produits", //french
      de: "Productenlijst", //dutch
      cn: "产品列表", //Chinese
      ae: "قائمة المنتجات",
    },
    // 126
    {
      en: "Product Details",
      pt: "Detalhes do produto", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Detalles del producto", //spanish
      fr: "Détails du produit", //french
      de: "Productdetails", //dutch
      cn: "产品详情", //Chinese
      ae: "تفاصيل المنتج",
    },
    // 127
    {
      en: "Category",
      pt: "Categoria", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Categoría", //spanish
      fr: "Catégorie", //french
      de: "Categorie", //dutch
      cn: "类别", //Chinese
      ae: "فئة",
    },

    // seller
    // 128
    {
      en: "Seller",
      pt: "Vendedora", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Vendedora", //spanish
      fr: "Vendeuse", //french
      de: "Verkoper", //dutch
      cn: "卖方", //Chinese
      ae: "بائع",
    },
    // 129
    {
      en: "Seller List",
      pt: "Lista de vendedores", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Lista de vendedores", //spanish
      fr: "Liste des vendeurs", //french
      de: "Verkoperslijst", //dutch
      cn: "卖家名单", //Chinese
      ae: "قائمة البائع",
    },
    // 130
    {
      en: "Seller Details",
      pt: "Detalhes do vendedor", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Detalles de la vendedora", //spanish
      fr: "Détails du vendeur", //french
      de: "Verkopergegevens", //dutch
      cn: "卖家详细信息", //Chinese
      ae: "تفاصيل البائع",
    },

    // order
    // 131
    {
      en: "Orders",
      pt: "Pedidas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Órdenes", //spanish
      fr: "Ordres", //french
      de: "Bestellingen", //dutch
      cn: "订单", //Chinese
      ae: "طلبات",
    },
    // 132
    {
      en: "Order History",
      pt: "Histórico de pedidos", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Historial de pedidos", //spanish
      fr: "Historique des commandes", //french
      de: "Bestelgeschiedenis", //dutch
      cn: "订单记录", //Chinese
      ae: "تاريخ الطلب",
    },
    // 133
    {
      en: "Order Details",
      pt: "Detalhes do pedido", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Detalles del pedido", //spanish
      fr: "Détails de la commande", //french
      de: "Bestelgegevens", //dutch
      cn: "订单详情", //Chinese
      ae: "تفاصيل الطلب",
    },


    // invoice
    // 134
    {
      en: "Invoice",
      pt: "Fatura", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Factura", //spanish
      fr: "Facture", //french
      de: "Factuur", //dutch
      cn: "发票", //Chinese
      ae: "الفاتورة",
    },
    // 135
    {
      en: "Invoice-1",
      pt: "Fatura-1", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Factura-1", //spanish
      fr: "Facture-1", //french
      de: "Factuur-1", //dutch
      cn: "发票1", //Chinese
      ae: "الفاتورة-1",
    },
    // 136
    {
      en: "Invoice-2",
      pt: "Fatura-2", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Factura-2", //spanish
      fr: "Facture-2", //french
      de: "Factuur-2", //dutch
      cn: "发票2", //Chinese
      ae: "الفاتورة-2",
    },
    // 137
    {
      en: "Invoice-3",
      pt: "Fatura-3", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Factura-3", //spanish
      fr: "Facture-3", //french
      de: "Factuur-3", //dutch
      cn: "发票4", //Chinese
      ae: "الفاتورة-3",
    },
    // 138
    {
      en: "Invoice-4",
      pt: "Fatura-4", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Factura-4", //spanish
      fr: "Facture-4", //french
      de: "Factuur-4", //dutch
      cn: "发票4", //Chinese
      ae: "الفاتورة-5",
    },
    // 139
    {
      en: "Invoice-5",
      pt: "Fatura-5", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Factura-5", //spanish
      fr: "Facture-5", //french
      de: "Factuur-5", //dutch
      cn: "发票5", //Chinese
      ae: "الفاتورة-5",
    },
    // 140
    {
      en: "Invoice-6",
      pt: "Fatura-6", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Factura-6", //spanish
      fr: "Facture-6", //french
      de: "Factuur-6", //dutch
      cn: "发票6", //Chinese
      ae: "الفاتورة-6",
    },
    // 141
    {
      en: "Cart",
      pt: "Carrinho", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Carro", //spanish
      fr: "Panier", //french
      de: "Winkelwagen", //dutch
      cn: "大车", //Chinese
      ae: "عربة",
    },
    // 142
    {
      en: "Wishlist",
      pt: "Lista de desejos", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Lista de deseos", //spanish
      fr: "Liste de souhaits", //french
      de: "Verlanglijst", //dutch
      cn: "愿望清单", //Chinese
      ae: "قائمة الرغبات",
    },
    // 143
    {
      en: "Checkout",
      pt: "Confira", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Verificar", //spanish
      fr: "Vérifier", //french
      de: "Afrekenen", //dutch
      cn: "查看", //Chinese
      ae: "الدفع",
    },
    // 144
    {
      en: "Manage Review",
      pt: "Gerenciar revisão", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Administrar revisión", //spanish
      fr: "Gérer la révision", //french
      de: "Beheer beoordeling", //dutch
      cn: "管理审核", //Chinese
      ae: "إدارة المراجعة",
    },
    // 145
    {
      en: "Settings",
      pt: "Configurações", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Ajustes", //spanish
      fr: "Paramètres", //french
      de: "Instellingen", //dutch
      cn: "设置", //Chinese
      ae: "إعدادات",
    },
    // 146
    {
      en: "Mail-Box",
      pt: "Caixa de correio", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Buzón", //spanish
      fr: "Boîte aux lettres", //french
      de: "Postbus", //dutch
      cn: "邮箱", //Chinese
      ae: "صندوق البريد",
    },
    // 147
    {
      en: "Chat",
      pt: "Bater papo", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Charlar", //spanish
      fr: "Chatte", //french
      de: "Chatten", //dutch
      cn: "聊天", //Chinese
      ae: "محادثة",
    },
    // 148
    {
      en: "Private Chat",
      pt: "Bate-papo privado", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Chat Privado", //spanish
      fr: "Chat privé", //french
      de: "Privéchat", //dutch
      cn: "私人聊天", //Chinese
      ae: "دردشة خاصة",
    },
    // 149
    {
      en: "Group chat",
      pt: "Bate-papo em grupo", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Chat grupal", //spanish
      fr: "Discussion de groupe", //french
      de: "Groepschat", //dutch
      cn: "群聊", //Chinese
      ae: "دردشة جماعية",
    },

    // // users
    // 150
    {
      en: "Users",
      pt: "Usuárias", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Usuarias", //spanish
      fr: "Utilisatrices", //french
      de: "Gebruikers", //dutch
      cn: "用户", //Chinese
      ae: "المستخدمين",
    },
    // 151
    {
      en: "Users Profile",
      pt: "Perfil de usuários", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Perfil de las usuarias", //spanish
      fr: "Profil des utilisateurs", //french
      de: "Gebruikersprofiel", //dutch
      cn: "用户简介", //Chinese
      ae: "ملف تعريف المستخدمين",
    },
    // 152
    {
      en: "Add User",
      pt: "Adicionar usuário", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Agregar usuario", //spanish
      fr: "Ajouter un utilisateur", //french
      de: "Gebruiker toevoegen", //dutch
      cn: "添加用户", //Chinese
      ae: "إضافة مستخدم",
    },
    // 153
    {
      en: "User List",
      pt: "Lista de usuários", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Lista de usuarios", //spanish
      fr: "Liste des utilisateurs", //french
      de: "Gebruikerslijst", //dutch
      cn: "用户列表", //Chinese
      ae: "قائمة المستخدمين",
    },
    // 154
    {
      en: "User Cards",
      pt: "Cartões de usuário", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Tarjetas de usuario", //spanish
      fr: "Cartes utilisateur", //french
      de: "Gebruikerskaarten", //dutch
      cn: "用户卡", //Chinese
      ae: "بطاقات المستخدم",
    },
    // 155
    {
      en: "Roles & Permission",
      pt: "Funções e permissões", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Roles y permisos", //spanish
      fr: "Rôles et autorisations", //french
      de: "Rollen en toestemming", //dutch
      cn: "角色和权限", //Chinese
      ae: "الأدوار والإذن",
    },

    // // Reports
    // 156
    {
      en: "Reports",
      pt: "Relatórios", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Informes", //spanish
      fr: "Rapports", //french
      de: "Rapporten", //dutch
      cn: "报告", //Chinese
      ae: "التقارير",
    },
    // 157
    {
      en: "Sales",
      pt: "Vendas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Ventas", //spanish
      fr: "Ventes", //french
      de: "Verkoop", //dutch
      cn: "销售量", //Chinese
      ae: "مبيعات",
    },
    // 158
    {
      en: "Sales Return",
      pt: "Retorno de vendas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Devolución de ventas", //spanish
      fr: "Retour sur ventes", //french
      de: "Verkoopretour", //dutch
      cn: "销售退货", //Chinese
      ae: "عائد المبيعات",
    },
    // 159
    {
      en: "Customer Order",
      pt: "Pedido do cliente", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Pedido del cliente", //spanish
      fr: "Commande client", //french
      de: "Klant bestelling", //dutch
      cn: "客户订单", //Chinese
      ae: "طلب العميل",
    },
    // 160
    {
      en: "Bookmarks",
      pt: "Favoritas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Marcadores", //spanish
      fr: "Signets", //french
      de: "Bladwijzers", //dutch
      cn: "书签", //Chinese
      ae: "الإشارات المرجعية",
    },
    // 161
    {
      en: "Contacts",
      pt: "Contatos", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Contactos", //spanish
      fr: "Contacts", //french
      de: "Contacten", //dutch
      cn: "联系方式", //Chinese
      ae: "اتصالات",
    },
    // 162
    {
      en: "Tasks",
      pt: "Tarefas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Tareas", //spanish
      fr: "Tâches", //french
      de: "Taken", //dutch
      cn: "任务", //Chinese
      ae: "المهام",
    },
    // 163
    {
      en: "Calendar",
      pt: "Calendário", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Calendario", //spanish
      fr: "Calendrier", //french
      de: "Kalender", //dutch
      cn: "日历", //Chinese
      ae: "تقويم",
    },
    // 164
    {
      en: "Social App",
      pt: "Aplicativo social", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Aplicación social", //spanish
      fr: "Application sociale", //french
      de: "Sociale app", //dutch
      cn: "社交应用", //Chinese
      ae: "التطبيق الاجتماعي",
    },
    // 165
    {
      en: "To-Do",
      pt: "Pendência", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Hacer", //spanish
      fr: "Faire", //french
      de: "Te doen", //dutch
      cn: "待办事项", //Chinese
      ae: "المهام",
    },
    // 166
    {
      en: "Search Result",
      pt: "Resultado da pesquisa", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Resultado de la búsqueda", //spanish
      fr: "Résultat de la recherche", //french
      de: "Zoekresultaat", //dutch
      cn: "搜索结果", //Chinese
      ae: "نتيجة البحث",
    },
    // 167
    {
      en: "Pages",
      pt: "Páginas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "paginas", //spanish
      fr: "Pages", //french
      de: "Pagina's", //dutch
      cn: "页数", //Chinese
      ae: "الصفحات",
    },
    // 168
    {
      en: "Miscellaneous",
      pt: "Variada", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Misceláneas", //spanish
      fr: "Divers", //french
      de: "Gemengd", //dutch
      cn: "各种各样的", //Chinese
      ae: "متنوع",
    },
    // 169
    {
      en: "Landing page",
      pt: "Página de destino", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Página de destino", //spanish
      fr: "Page de destination", //french
      de: "Bestemmingspagina", //dutch
      cn: "登陆页面", //Chinese
      ae: "الصفحة المقصودة",
    },
     // 170
    {
      en: "Sample page",
      pt: "Página de exemplo", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Página de muestra", //spanish
      fr: "Exemple de page", //french
      de: "Voorbeeldpagina", //dutch
      cn: "示例页面", //Chinese
      ae: "صفحة عينة",
    },
     // 171
    {
      en: "Internationalization",
      pt: "Internacionalização", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Internacionalización", //spanish
      fr: "Internationalisation", //french
      de: "Internationalisering", //dutch
      cn: "国际化", //Chinese
      ae: "تدويل",
    },
     // 172
    {
      en: "Starter kit",
      pt: "Kit inicial", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "kit de inicio", //spanish
      fr: "Kit de démarrage", //french
      de: "Starterspakket", //dutch
      cn: "入门套件", //Chinese
      ae: "طقم البداية",
    },
    // // others
     // 173
    {
      en: "Other",
      pt: "Outra", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Otra", //spanish
      fr: "Autre", //french
      de: "Ander", //dutch
      cn: "其他", //Chinese
      ae: "آخر",
    },
    // 174
    {
      en: "Error Page",
      pt: "Página de erro", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Página de errores", //spanish
      fr: "Page d'erreur", //french
      de: "Foutpagina", //dutch
      cn: "错误页面", //Chinese
      ae: "صفحة الخطأ",
    },
    // 175
    {
      en: "Error 403",
      pt: "Erro 403", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "error 403", //spanish
      fr: "Erreur 403", //french
      de: "Fout 403", //dutch
      cn: "错误403", //Chinese
      ae: "خطأ 403",
    },
    // 176
    {
      en: "Error 404",
      pt: "Erro 404", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "error 404", //spanish
      fr: "Erreur 404", //french
      de: "Fout 404", //dutch
      cn: "错误404", //Chinese
      ae: "خطأ 404",
    },
    // 177
    {
      en: "Error 500",
      pt: "Erro 500", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "error 500", //spanish
      fr: "Erreur 500", //french
      de: "Fout 500", //dutch
      cn: "错误500", //Chinese
      ae: "خطأ 500",
    },

    // // authentication
    // 178
    {
      en: "Authentication",
      pt: "Autenticação", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Autenticación", //spanish
      fr: "Authentification", //french
      de: "Authenticatie", //dutch
      cn: "验证", //Chinese
      ae: "المصادقة",
    },
    // 179
    {
      en: "LOgin simple",
      pt: "Login simples", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Iniciar sesión sencillo", //spanish
      fr: "Connexion simple", //french
      de: "Eenvoudig inloggen", //dutch
      cn: "登录简单", //Chinese
      ae: "تسجيل الدخول بسيط",
    },
    // 180
    {
      en: "Login With Bg Image",
      pt: "Faça login com imagem Bg", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Iniciar sesión con imagen bg", //spanish
      fr: "Connectez-vous avec l'image Bg", //french
      de: "Inloggen met Bg-afbeelding", //dutch
      cn: "使用背景图片登录", //Chinese
      ae: "تسجيل الدخول بالصورة الثانية",
    },
    // 181
    {
      en: "Login With Image Two",
      pt: "Faça login com a imagem dois", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Iniciar sesión con la imagen dos", //spanish
      fr: "Connectez-vous avec l'image deux", //french
      de: "Log in met afbeelding twee", //dutch
      cn: "使用图片二登录", //Chinese
      ae: "تسجيل الدخول بالصورة الثانية",
    },
    // 182
    {
      en: "Login With Image Three",
      pt: "Faça login com a imagem três", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Iniciar sesión con la imagen tres", //spanish
      fr: "Connectez-vous avec l'image trois", //french
      de: "Log in met afbeelding drie", //dutch
      cn: "使用图片三登录", //Chinese
      ae: "تسجيل الدخول مع الصورة الثالثة",
    },
    // 183
    {
      en: "Login With Tooltip",
      pt: "Login com dica de ferramenta", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Iniciar sesión con información sobre herramientas", //spanish
      fr: "Connectez-vous avec une info-bulle", //french
      de: "Inloggen met Tooltip", //dutch
      cn: "使用工具提示登录", //Chinese
      ae: "تسجيل الدخول باستخدام تلميح الأدوات",
    },
    // 184
    {
      en: "Login With Sweetalert",
      pt: "Faça login com Sweetalert", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Iniciar sesión con Sweetalert", //spanish
      fr: "Connectez-vous avec Sweetalert", //french
      de: "Inloggen met Sweetalert", //dutch
      cn: "使用 Sweetalert 登录", //Chinese
      ae: "تسجيل الدخول مع Sweetalert ",
    },
    // 185
    {
      en: "Resgiter Simple",
      pt: "Cadastre-se Simples", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Registrarse Sencillo", //spanish
      fr: "S'inscrire simplement", //french
      de: "Registreren Eenvoudig", //dutch
      cn: "注册简单", //Chinese
      ae: "التسجيل بسيط",
    },
    // 186
    {
      en: "Resgister With Bg Image",
      pt: "Registrar-se com imagem Bg", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Registrarse con imagen Bg", //spanish
      fr: "Inscrivez-vous avec l'image Bg", //french
      de: "Registreer met Bg-afbeelding", //dutch
      cn: "使用背景图像注册", //Chinese
      ae: "سجل باستخدام صورة Bg",
    },
    // 187
    {
      en: "Resgister With Image Two",
      pt: "Registre-se com a imagem dois", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Regístrate con la imagen dos", //spanish
      fr: "Inscrivez-vous avec l'image deux", //french
      de: "Registreer u met afbeelding twee", //dutch
      cn: "使用图二注册", //Chinese
      ae: "سجل بالصورة الثانية",
    },
    // 188
    {
      en: "Register wizard",
      pt: "Assistente de registro", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Asistente de registro", //spanish
      fr: "Assistant d'enregistrement", //french
      de: "Registerwizard", //dutch
      cn: "注册向导", //Chinese
      ae: "معالج التسجيل",
    },
    // 189
    {
      en: "Account Restricted",
      pt: "Conta restrita", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Cuenta restringida", //spanish
      fr: "Compte restreint", //french
      de: "Account beperkt", //dutch
      cn: "账户受限", //Chinese
      ae: "الحساب مقيد",
    },
    // 190
    {
      en: "Unlock User",
      pt: "Desbloquear usuário", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Desbloquear usuario", //spanish
      fr: "Déverrouiller l'utilisateur", //french
      de: "Gebruiker ontgrendelen", //dutch
      cn: "解锁用户", //Chinese
      ae: "فتح المستخدم",
    },
    // 191
    {
      en: "Forgot Password",
      pt: "Esqueceu sua senha", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Has olvidado tu contraseña", //spanish
      fr: "Mot de passe oublié", //french
      de: "Wachtwoord vergeten", //dutch
      cn: "忘记密码", //Chinese
      ae: "هل نسيت كلمة السر",
    },
    // 192
    {
      en: "Reset Password",
      pt: "Redefinir senha", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Restablecer contraseña", //spanish
      fr: "Réinitialiser le mot de passe", //french
      de: "Wachtwoord opnieuw instellen", //dutch
      cn: "重置密码", //Chinese
      ae: "إعادة تعيين كلمة المرور",
    },
    // 193
    {
      en: "Maintenance",
      pt: "Manutenção", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Mantenimiento", //spanish
      fr: "Entretien", //french
      de: "Onderhoud", //dutch
      cn: "维护", //Chinese
      ae: "صيانة",
    },

    // // coming soon

    // 194
    {
      en: "Coming Soon",
      pt: "Em breve", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Muy pronto", //spanish
      fr: "À venir", //french
      de: "Binnenkort beschikbaar", //dutch
      cn: "即将推出", //Chinese
      ae: "قريباً",
    },
    // 195
    {
      en: "Coming Simple",
      pt: "Vindo Simples", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Viniendo simple", //spanish
      fr: "Venir en toute simplicité", //french
      de: "Eenvoudig komen", //dutch
      cn: "变得简单", //Chinese
      ae: "القادمة بسيطة",
    },
    // 196
    {
      en: "Coming with Bg video",
      pt: "Vindo com vídeo Bg", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Viene con video Bg", //spanish
      fr: "Venir avec la vidéo Bg", //french
      de: "Komt met Bg-video", //dutch
      cn: "附有 Bg 视频", //Chinese
      ae: "يأتي مع فيديو BG",
    },
    // 197
    {
      en: "Coming with Bg Image",
      pt: "Vindo com imagem Bg", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Viene con imagen Bg", //spanish
      fr: "Venir avec Bg Image", //french
      de: "Komt met Bg-afbeelding", //dutch
      cn: "附带背景图片", //Chinese
      ae: "القادمة مع صورة BG",
    },

    // // email templates
    // 198
    {
      en: "Email templates",
      pt: "Modelos de e-mail", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Plantillas de correo electrónico", //spanish
      fr: "Modèles d'e-mails", //french
      de: "E-mailsjablonen", //dutch
      cn: "电子邮件模板", //Chinese
      ae: " قوالب البريد الإلكتروني",
    },
    // 199
    {
      en: "Basic Email",
      pt: "E-mail básico", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Correo electrónico básico", //spanish
      fr: "E-mail de base", //french
      de: "Basis e-mail", //dutch
      cn: "基本电子邮件", //Chinese
      ae: "البريد الإلكتروني الأساسي",
    },
    // 200
    {
      en: "Basic With Header",
      pt: "Básico com cabeçalho", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Básica con encabezado", //spanish
      fr: "De base avec en-tête", //french
      de: "Basis met koptekst", //dutch
      cn: "基本带标题", //Chinese
      ae: "الأساسية مع رأس",
    },
    // 201
    {
      en: "Ecomerce Template",
      pt: "Modelo de comércio eletrônico", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Plantilla de comercio electrónico", //spanish
      fr: "Modèle de commerce électronique", //french
      de: "Ecomerce-sjabloon", //dutch
      cn: "电子商务模板", //Chinese
      ae: "قالب التجارة الإلكترونية",
    },
    // 202
    {
      en: "Email Template 2",
      pt: "Modelo de e-mail 2", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Plantilla de correo electrónico 2", //spanish
      fr: "Modèle d'e-mail 2", //french
      de: "E-mailsjabloon 2", //dutch
      cn: "电子邮件模板2", //Chinese
      ae: "نموذج البريد الإلكتروني 2",
    },
    // 203
    {
      en: "Ecommerce Email",
      pt: "E-mail de comércio eletrônico", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Correo electrónico de comercio electrónico", //spanish
      fr: "E-mail de commerce électronique", //french
      de: "E-commerce e-mail", //dutch
      cn: "电子商务电子邮件", //Chinese
      ae: "البريد الإلكتروني للتجارة الإلكترونية",
    },
    // 204
    {
      en: "order success",
      pt: "Sucesso do pedido", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Orden exitosa", //spanish
      fr: "Succès de la commande", //french
      de: "Bestel succes", //dutch
      cn: "订单成功", //Chinese
      ae: "نجاح النظام",
    },

    // // Gallery
     // 205
    {
      en: "Gallery",
      pt: "Galeria", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Galería", //spanish
      fr: "Galerie", //french
      de: "Galerij", //dutch
      cn: "画廊", //Chinese
      ae: "معرض",
    },
    // 206
    {
      en: "Gallery Grid",
      pt: "Grade da Galeria", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Cuadrícula de galería", //spanish
      fr: "Grille de la galerie", //french
      de: "Galerijraster", //dutch
      cn: "画廊网格", //Chinese
      ae: "شبكة المعرض",
    },
    // 207
    {
      en: "Gallery Grid Desc",
      pt: "Descrição da grade da galeria", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Galería Cuadrícula Descripción", //spanish
      fr: "Desc. de la grille de la galerie", //french
      de: "Galerij Rasterbesch", //dutch
      cn: "图库网格描述", //Chinese
      ae: "معرض الشبكة ديس",
    },
    // 208
    {
      en: "Masonry Gallery",
      pt: "Galeria de alvenaria", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Galería de mampostería", //spanish
      fr: "Galerie de maçonnerie", //french
      de: "Metselwerk Galerij", //dutch
      cn: "砖石画廊", //Chinese
      ae: "معرض الماسونية",
    },
    // 209
    {
      en: "Masonry with Desc",
      pt: "Alvenaria com Desc", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Albañilería con Desc", //spanish
      fr: "Maçonnerie avec Desc", //french
      de: "Metselwerk met besch", //dutch
      cn: "砌体与描述", //Chinese
      ae: "البناء مع وصف",
    },
    // 210
    {
      en: "Hover Effects",
      pt: "Efeitos de foco", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Efectos de desplazamiento", //spanish
      fr: "Effets de survol", //french
      de: "Zweefeffecten", //dutch
      cn: "悬停效果", //Chinese
      ae: "تأثيرات التحويم",
    },
    // 211
    {
      en: "Gallery Placeholder",
      pt: "Espaço reservado para galeria", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Marcador de posición de la galería", //spanish
      fr: "Espace réservé pour la galerie", //french
      de: "Galerij Tijdelijke aanduiding", //dutch
      cn: "画廊占位符", //Chinese
      ae: "العنصر النائب للمعرض",
    },

    // // blog
    // 212
    {
      en: "Blog",
      pt: "blog", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "blog", //spanish
      fr: "bloguer", //french
      de: "bloggen", //dutch
      cn: "博客", //Chinese
      ae: "مدونة",
    },
    // 213
    {
      en: "Blog Details",
      pt: "Detalhes do blog", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Detalles del blog", //spanish
      fr: "Détails du blog", //french
      de: "Blogdetails", //dutch
      cn: "博客详细信息", //Chinese
      ae: "تفاصيل المدونة",
    },
    // 214
    {
      en: "Add Blog",
      pt: "Adicionar blog", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Agregar blog", //spanish
      fr: "Ajouter un blog", //french
      de: "Blog toevoegen", //dutch
      cn: "添加博客", //Chinese
      ae: "أضف مدونة",
    },
    // 215
    {
      en: "Faq",
      pt: "Perguntas frequentes", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Preguntas frecuentes", //spanish
      fr: "FAQ", //french
      de: "Veelgestelde vragen", //dutch
      cn: "常问问题", //Chinese
      ae: "التعليمات",
    },

    // // job search
    // 216
    {
      en: "Job Search",
      pt: "Pesquisa de emprego", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Búsqueda de empleo", //spanish
      fr: "Recherche d'emploi", //french
      de: "Zoeken naar een baan", //dutch
      cn: "职位搜索", //Chinese
      ae: "البحث عن وظيفة",
    },
    // 217
    {
      en: "Cards view",
      pt: "Visualização de cartões", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Vista de tarjetas", //spanish
      fr: "Vue Cartes", //french
      de: "Kaarten bekijken", //dutch
      cn: "卡片视图", //Chinese
      ae: "عرض البطاقات",
    },
    // 218
    {
      en: "List View",
      pt: "Visualização de lista", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Vista de lista", //spanish
      fr: "Vue en liste", //french
      de: "Lijstweergave", //dutch
      cn: "列表视图", //Chinese
      ae: "عرض البطاقات",
    },
    // 219
    {
      en: "Job Details",
      pt: "Detalhes do trabalho", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Detalles del trabajo", //spanish
      fr: "Détails du poste", //french
      de: "Taakdetails", //dutch
      cn: "职位详情", //Chinese
      ae: "تفاصيل الوظيفة",
    },
    // 220
    {
      en: "Candidates",
      pt: "Candidatas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Candidatas", //spanish
      fr: "Candidates", //french
      de: "Kandidaten", //dutch
      cn: "候选人", //Chinese
      ae: "مرشحين",
    },
    // 221
    {
      en: "Companies",
      pt: "Empresas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Empresas", //spanish
      fr: "Entreprises", //french
      de: "Bedrijven", //dutch
      cn: "公司", //Chinese
      ae: "شركات",
    },
    // 222
    {
      en: "Apply",
      pt: "Aplicar", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Aplicar", //spanish
      fr: "Appliquer", //french
      de: "Toepassen", //dutch
      cn: "申请", //Chinese
      ae: "يتقدم",
    },

    // // course

     // 223
    {
      en: "Courses",
      pt: "Cursos", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Cursos", //spanish
      fr: "Cours", //french
      de: "Cursussen", //dutch
      cn: "课程", //Chinese
      ae: "الدورات",
    },
    // 224 
    {
      en: "Course List",
      pt: "Lista de cursos", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Lista de cursos", //spanish
      fr: "Liste des cours", //french
      de: "Cursuslijst", //dutch
      cn: "课程列表", //Chinese
      ae: "قائمة الدورة",
    },
    // 225
    {
      en: "Course Details",
      pt: "Detalhes do curso", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Detalles del curso", //spanish
      fr: "Détails du cours", //french
      de: "Cursusdetails", //dutch
      cn: "课程详情", //Chinese
      ae: "تفاصيل الدورة",
    },

    // // map
    // 226
    {
      en: "Maps",
      pt: "Mapas", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Mapas", //spanish
      fr: "Cartes", //french
      de: "Kaarten", //dutch
      cn: "地图", //Chinese
      ae: "خرائط",
    },
    // 227
    {
      en: "Maps JS",
      pt: "Mapas JS", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Mapas JS", //spanish
      fr: "Cartes JS", //french
      de: "Kaarten JS", //dutch
      cn: "地图JS", //Chinese
      ae: "خرائط شبيبة",
    },
    // 228
    {
      en: "Vector Maps",
      pt: "Mapas vetoriais", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Mapas vectoriales", //spanish
      fr: "Cartes vectorielles", //french
      de: "Vectorkaarten", //dutch
      cn: "矢量地图", //Chinese
      ae: "خرائط المتجهات",
    },

    // // editors
    // 229
    {
      en: "Editors",
      pt: "Editores", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Editoras", //spanish
      fr: "Éditrices", //french
      de: "Redacteuren", //dutch
      cn: "编辑", //Chinese
      ae: "المحررين",
    },
    // 230
    {
      en: "Quill Editor",
      pt: "Editor de pena", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Editor de pluma", //spanish
      fr: "Éditeur de plumes", //french
      de: "Quill-editor", //dutch
      cn: "鹅毛笔编辑器", //Chinese
      ae: "محرر الريشة",
    },
    // 231
    {
      en: "CK editor",
      pt: "Editor CK", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "editor CK", //spanish
      fr: "Éditeur CK", //french
      de: "CK-editor", //dutch
      cn: "CK编辑器", //Chinese
      ae: "محرر سي كيه",
    },
    // 232
    {
      en: "ACE code editor",
      pt: "Mapas vetoriais", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "editor de código ACE", //spanish
      fr: "Éditeur de code ACE", //french
      de: "ACE-code-editor", //dutch
      cn: "ACE 代码编辑器", //Chinese
      ae: "محرر كود ACE",
    },
    // 233
    {
      en: "Knowledgebase",
      pt: "Base de conhecimento", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Base de conocimientos", //spanish
      fr: "Base de connaissances", //french
      de: "Kennisbank", //dutch
      cn: "知识库", //Chinese
      ae: "قاعدة المعرفة",
    },
    // 234
    {
      en: "Support Ticket",
      pt: "Tíquete de suporte", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Boleto de soporte", //spanish
      fr: "Billet d'assistance", //french
      de: "Ondersteuningsticket", //dutch
      cn: "支持票", //Chinese
      ae: "تذكرة الدعم",
    },
    // 235
    {
      en: "Color version",
      pt: "Versão colorida", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Versión en color", //spanish
      fr: "Version couleur", //french
      de: "Kleur versie", //dutch
      cn: "彩色版", //Chinese
      ae: "نسخة ملونة",
    },
    // 236
    {
      en: "Layout Light",
      pt: "Luz de layout", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Luz de diseño", //spanish
      fr: "Lumière de mise en page", //french
      de: "Indeling licht", //dutch
      cn: "布局灯", //Chinese
      ae: "ضوء التخطيط",
    },
    // 237
    {
      en: "Layout Dark",
      pt: "Layout escuro", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Diseño oscuro", //spanish
      fr: "Disposition sombre", //french
      de: "Indeling donker", //dutch
      cn: "布局深色", //Chinese
      ae: "تخطيط الظلام",
    },
    // 238
    {
      en: "Hide menu on scroll",
      pt: "Ocultar menu na rolagem", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Ocultar menú al desplazarse", //spanish
      fr: "Masquer le menu lors du défilement", //french
      de: "Menu verbergen tijdens scrollen", //dutch
      cn: "隐藏滚动菜单", //Chinese
      ae: "إخفاء القائمة في التمرير",
    },
    // 239
    {
      en: "Footers",
      pt: "Rodapés", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Pies de página", //spanish
      fr: "Pieds de page", //french
      de: "Voetteksten", //dutch
      cn: "页脚", //Chinese
      ae: "تذييلات",
    },
    // 240
    {
      en: "Raise Support",
      pt: "Aumente o suporte", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Aumentar el apoyo", //spanish
      fr: "Augmenter le soutien", //french
      de: "Verhoog de steun", //dutch
      cn: "提高支持", //Chinese
      ae: "رفع الدعم",
    },
    // 241
    {
      en: "Document",
      pt: "Documento", //Portuguese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
      es: "Documento", //spanish
      fr: "Document", //french
      de: "Document", //dutch
      cn: "文档", //Chinese
      ae: "وثيقة",
    },
  ];

  $(".mobile-title svg").click(function () {
    $(".header-mega").toggleClass("d-block");
  });

  $(".onhover-dropdown").on("click", function () {
    $(this).children(".onhover-show-div").toggleClass("active");
  });

  $("#flip-btn").click(function () {
    $(".flip-card-inner").addClass("flipped");
  });

  $("#flip-back").click(function () {
    $(".flip-card-inner").removeClass("flipped");
  });


  $("body").keydown(function (e) {
    if (e.keyCode == 27) {
      $(".search-form .form-control-search").removeClass("open");
    }
  });
  $(".serchbox").on("click", function (e) {
    $(".search-form").toggleClass("open");
    e.preventDefault();
  });


})(jQuery);
