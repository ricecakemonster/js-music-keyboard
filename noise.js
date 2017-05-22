$(document).ready( function() {
  var noteArry = ["c", "d", "e", "f", "g", "a", "b"];

  $('.instrument button').click(function(){
    var $this = $(this);
    var note = $this.html()
    var audio = $("#" + note + "Audio")[0];
    audio.currentTime = 0;
    audio.play();
  });


  var noteHash = {67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 65: "a", 66: "b"};
  $(document).on('keydown', function(input) {
    var charNum = input.which;
    var note = noteHash[charNum]
    var audio = $("#" + note + "Audio")[0];
    audio.currentTime = 0;
    audio.play();
  })

});
