$(function () {
  // $("#head").load("./header.html?v="+new Date().getTime());
  // $("#head_m").load("./header_m.html?v="+new Date().getTime());
  // $("#foot").load("./footer.html?v="+new Date().getTime());
  // $("#foot_m").load("./footer_m.html?v="+new Date().getTime());
  // $("#contact").load("./contact.html?v="+new Date().getTime());
  // $("#contact_m").load("./contact_m.html?v="+new Date().getTime());
  setTimeout(() => {
    $(window).scroll(function () {
      if ($(window).scrollTop() > $("#banner").height()) {
        $(".back_top").fadeIn(1000);
      } else {
        $(".back_top").fadeOut(1000);
      }
    });
  }, 16.7);
  // 替换img
  var test = /_min\./;
  $(".compress_img").each(function () {
    var reSrc = $(this).attr("src").replace(test, ".");
    $(this).attr("src", reSrc);
  });
  // 替换背景图
  $(".compress_bgi").each(function () {
    var img = new Image();
    var bgi = $(this).css("background-image");
    var url = bgi.slice(5, -2).replace(test, ".");
    img.src = url;
    var that = this;
    img.onload = function () {
      $(that).css("background-image", "url(" + url + ")");
    };
  });
});
