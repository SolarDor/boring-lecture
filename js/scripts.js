$(document).ready(function() {
  $("button#day").click(function() {
    $("body").removeClass();
    $("body").addClass("day-background");
});

  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("night-background");
  });
});