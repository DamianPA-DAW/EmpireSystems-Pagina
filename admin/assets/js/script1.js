// Fullscreen JS

(function () {
  var fullscreenButton = document.getElementById("maximize-screen");
  if (fullscreenButton) {
    var svgIcon = fullscreenButton.querySelector("svg use"); // Assuming the SVG use element is a child of fullscreenButton
    fullscreenButton.addEventListener("click", toggleFullScreen, false);
  }
  function toggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      // Entering fullscreen
      svgIcon.setAttribute("href", "../assets/svg/icon-sprite.svg#full-screen");
    } else {
      // Exiting fullscreen
      svgIcon.setAttribute("href", "../assets/svg/icon-sprite.svg#full-screen");
    }

    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      var requestMethod = document.documentElement.requestFullscreen || document.documentElement.msRequestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen;
      if (requestMethod) {
        requestMethod.call(document.documentElement, Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      var exitMethod = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
      if (exitMethod) {
        exitMethod.call(document);
      }
    }
  }

  // Footer year update JS
  let yearUpdate = document.querySelector(".year-update");
  if (yearUpdate) {
    yearUpdate.textContent = new Date().getFullYear();
  }
  // header notification js

  function CheckProductQuantity() {
    let AllProducts = document.getElementsByClassName("notification-toast");
    let HiddenProducts = document.getElementsByClassName("message-remove");
    if (AllProducts.length == HiddenProducts.length) {
      document.querySelector(".empty-card").classList.add("show");
    }
  }
  
  const product_details = document.getElementsByClassName("notification-toast");
  const product_details_array = Array.from(product_details); // Convert to array
  
  product_details_array.forEach((item) => {
    let DeleteButton = item.querySelector(".msg-remove");
    DeleteButton.addEventListener("click", (event) => {
      item.classList.add("message-remove");
      CheckProductQuantity();
    });
  });

  // header message js
function checkMessages() {
  const messageList = document.querySelectorAll('.message-dropdown ul li');
  const noMessages = document.querySelector('.no-messages');

  // Count visible message items excluding .no-messages and .text-center
  const messagesExist = Array.from(messageList).some(li =>
    !li.classList.contains('no-messages') &&
    !li.classList.contains('text-center') &&
    li.style.display !== 'none'
  );

  // Show or hide the empty message SVG
  if (noMessages) {
    noMessages.style.display = messagesExist ? 'none' : 'block';
  }
}

// Example: Call this when removing messages
document.querySelectorAll('.close-icon').forEach(closeBtn => {
  closeBtn.addEventListener('click', function () {
    const messageLi = this.closest('li');
    if (messageLi) {
      messageLi.style.display = 'none';
      checkMessages();
    }
  });
});

// Initial check
checkMessages();

  document.addEventListener("DOMContentLoaded", function () {
  const closeButtons = document.querySelectorAll(".close-circle a");
  const emptyMessage = document.querySelector(".empty-msgs.cart-bag");

  function checkCartEmpty() {
    const cartItems = document.querySelectorAll("li.cart-list");
    if (cartItems.length === 0) {
      emptyMessage.style.display = "block";
    }
  }

  closeButtons.forEach(closeBtn => {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const li = closeBtn.closest("li");
      li.remove();
      checkCartEmpty();
    });
  });

  // Optional: check on page load in case no items present
  checkCartEmpty();
});




})();




// document.addEventListener("DOMContentLoaded", function () {
//   // Ensure the icons stay fixed in size
//   setTimeout(function () {
//     const icons = document.querySelectorAll(".sidebar-link .stroke-icon, .sidebar-link .fill-icon");
//     icons.forEach(function (icon) {
//       icon.style.width = "24px"; // Enforce 24px width
//       icon.style.height = "24px"; // Enforce 24px height
//       icon.style.maxWidth = "24px"; // Set max width
//       icon.style.maxHeight = "24px"; // Set max height
//     });
//   }, 500); // Delay to ensure the page has fully loaded
// });

// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(function () {
//     // Reset icon size after FullCalendar or other JS has loaded
//     const icons = document.querySelectorAll(".sidebar-link .stroke-icon, .sidebar-link .fill-icon");
//     icons.forEach(function (icon) {
//       icon.style.width = "24px"; // Fixed size
//       icon.style.height = "24px"; // Fixed size
//       icon.style.maxWidth = "24px"; // Max width constraint
//       icon.style.maxHeight = "24px"; // Max height constraint
//     });
//   }, 1000); // Wait a moment to ensure everything else has loaded
// });
