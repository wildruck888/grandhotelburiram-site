/* Reimplementation of the lost menu.js / navigation.js behaviors */
$(document).ready(function () {
  // MENU tab toggles the full-screen nav overlay (mirrors booking.js pattern)
  $(".button a").click(function () {
    $(".overlay").fadeToggle(200);
    $("#navigation-wrapper").css("z-index", 9999);
    $("#booking-wrapper").css("z-index", 800);
    $(this).toggleClass("btn-open").toggleClass("btn-close");
    $(this).siblings("p").text($(this).hasClass("btn-close") ? "CLOSE" : "MENU");
  });
  // clicking a nav link closes the overlay
  $(".overlay a").click(function () { $(".overlay").fadeOut(150); });
  // parallax sections
  if (window.Rellax && document.querySelector(".rellax")) { new Rellax(".rellax", { speed: -2 }); }
});

// Contact form: the WordPress backend is gone — fall back to the visitor's
// email client with the message prefilled. (Swap address when a new one is set.)
$(document).ready(function () {
  $("form.wpcf7-form, .wpcf7 form").on("submit", function (e) {
    e.preventDefault();
    var name = $(this).find('[name*="name"], [name="your-name"]').first().val() || "";
    var msg = $(this).find("textarea").first().val() || "";
    var subj = $(this).find('[name*="subject"]').first().val() || "Website enquiry";
    location.href = "mailto:rsvn@grandhotelburiram.com?subject=" +
      encodeURIComponent(subj) + "&body=" + encodeURIComponent(msg + "\n\n— " + name);
  });
});
