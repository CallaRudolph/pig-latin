//business logic

var vowels = ["a", "e", "i", "o", "u"];
var manipulated = [];

// if $(words).children("")
// firstChild(words)

//user interface logic

$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();

var input = $("#input").val();
var words = input.split(" ");

for (var i = 0; i < words.length; i += 1) {
  for (var index = 0; index < vowels.length; index += 1) {
    if (words[i].charAt(0) === vowels[index]) {
      $("#result").append(words[i] + "ay")
    }
    // } else {
    //   var con = words.shift()
    //   $("#result").append(words.concat(con));
    // }
  }
}
})
});
