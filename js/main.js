
function main () {
  $("#fonts-button").click(function () {
    $("#shanghai").hide();
    $("#simple-sketch").css("display","block");
    $("#export-button").css("display","block");
    //$("#simple-sketch").css("top","50px");
    $('#simple-sketch').sketch();
  });
  $("#home-button").click(function () {
    $('#simple-sketch').hide();
    $("#export-button").hide();
    $("#shanghai").show();
  });
};

$(document).ready(main());
