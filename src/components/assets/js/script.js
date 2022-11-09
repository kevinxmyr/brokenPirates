import $ from "jquery";
import Revslider from "../../Revslider";

$(window).scroll(function () {
  // for navigation gsyicky
  var scroll = $(window).scrollTop();
  if (scroll >= 300) {
    $(".App-header").addClass("gsticky");
  } else {
    $(".App-header.gsticky").removeClass("gsticky");
  }

  // for not draging image Revslider
  document.getElementById("rev").setAttribute("draggable", false);

  //   for back-to-top
  var backTop = $(window).scrollTop();
  if (backTop >= 300) {
    $("#back-top").addClass("show");
  } else {
    $("#back-top.show").removeClass("show");
  }

  /** For banner text **/
  var left = $("#banner-text-container p").offset().left;
  $("#banner-text-container p")
    .css({ left: left })
    .animate({ left: "0" }, 2000)
    .fadeTo("slow", 1);

  var tops = $("#banner-text-container");
  if (tops.length) {
    var top_text = tops.offset().top;
    tops.css({ top: top_text }).animate({ top: "0" }, 1700).fadeTo("slow", 1);
  }
});
