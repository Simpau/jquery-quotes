$(document).ready(function(){

  $("#js-request").on("click",function(event){
    $(this).hide();
    $( "#js-bio" ).load( "bio.txt" );
  });s



});

