$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");
  });
  //   omo i got like 27 mins left and i am still playing. i pity myself heheh
  //tryna make scroll top heh. doesnt work. DON'T touch. but make it work please :)
  //   const totop = () =>
  //     window.scroll({
  //       top: 0,
  //       left: 0,
  //       behavior: "smooth",
  //     });

  //   const togtop = () => {
  //     if (window.scrollY >= 100) {
  //       document.getElementById("backtop").classList.add("show");
  //     } else {
  //       document.getElementById("backtop").classList.remove("show");
  //     }
  //   };
  //   window.addEventListener("scroll", togtop);
  //   window.addEventListener("resize", togtop);
});
