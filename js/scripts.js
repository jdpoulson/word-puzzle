var vowels = ['a', 'e', 'i', 'o', 'u'];
var sentence = [];
$(document).ready(function() {
  $("form#word").submit(function(event) {
    var input = $("input#sentence").val();
    sentence = input.split('');
    console.log(sentence)
    // for (var words = 0; words < vowels.split(); words += 1) {
    //   sentence += vowels[words];
    // };
    event.preventDefault();

  });
});
