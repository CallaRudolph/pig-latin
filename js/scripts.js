$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();

    var words = $("#input").val();
    console.log(words)


  })
});
