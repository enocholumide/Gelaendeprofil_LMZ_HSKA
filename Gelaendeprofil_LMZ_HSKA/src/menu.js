$(document).ready(function(){
  $(".fa-chevron-circle-left").click(function(){
    $(".sidebar_menu").addClass("hide_menu");
    $(".toggle_menu").addClass("opacity_one");
  });

  $(".toggle_menu").click(function(){
    $(".sidebar_menu").removeClass("hide_menu");
    $(".toggle_menu").removeClass("opacity_one");
  });
});

$(document).ready(function(){
  $(".fixed-size-square").click(function(){
    $(".icons").addClass("hide_icons");
    $(".fixed-size-square").addClass("opacity_one_icons");
  });

  $(".fixed-size-square").click(function(){
    $(".icons").removeClass("hide_icons");
    $(".fixed-size-square").removeClass("opacity_one_icons");
  });
});


