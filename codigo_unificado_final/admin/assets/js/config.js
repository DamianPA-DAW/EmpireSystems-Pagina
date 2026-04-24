(function () {
  var primary = localStorage.getItem("primary") || "#54A8FB";
  var lightprimary = localStorage.getItem("lightprimary") || "#DDEEFE";
  var secondary = localStorage.getItem("secondary") || "#AF76F2";
  var lightsecondary = localStorage.getItem("lightsecondary") || "#AF76F226";
  var success = localStorage.getItem("success") || "#0dbe54";

  window.GoloAdminConfig = {
    // Theme Primary Color
    primary: primary,
    // theme secondary color
    secondary: secondary,
    // theme success color
    success: success,
    // theme lightprimary color
    lightprimary: lightprimary,
    // theme lightsecondary color
    lightsecondary: lightsecondary,
  };
})();
