var vowels = ['a', 'e', 'i', 'o', 'u'];
$(document).ready(function() {
  $("form#word").submit(function(event) {
    var input = $("input#sentence").val();
    var sentences = input.split('');
    for (var x = 0; x < sentences.length; x += 1) {
      vowels.forEach(function(vowel) {
        if (sentences[x] === vowel) {
          sentences[x] = '-'
        }
      })
    }
    var sentences2 = sentences.join('')
    $("#mysentence").append("<p>" + sentences2 + "</p>")
    $("#mysentence").show();
    // for (var words = 0; words < vowels.split(); words += 1) {
    //   sentence += vowels[words];
    // };
    event.preventDefault();
  });
});
