$(document).ready(function(){

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
});

var dataUrl = "http://webcitation.fr/quotes.json";

$.getJSON(dataUrl, function(data){
  var items =[];
  $.each(data,function(key,val){

    for(var i = 0;i<data.length;i++){
      items.push("<blockquote id='"+key+"' class='blockquote'>"+"<p class='m-b-0'>"+data[i].title+"</p>"+"<footer class='blockquote-footer'>"+data[i].author+"</footer>"+"</blockquote>");
    }
  });

    $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});


});

