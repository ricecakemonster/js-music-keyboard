$(document).ready( function() {
  var noteArry = ["c", "d", "e", "f", "g", "a", "b"];

  $('.instrument button').click(function(){
    var $this = $(this);
    var note = $this.html()
        console.log(note);
    var audio = $("#" + note + "Audio")[0];
    audio.currentTime = 0;
    audio.play();
  });
});
