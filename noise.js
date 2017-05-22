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

  // element.on ('keypress', function (e) {
  //     console.log(String.fromCharCode(e.which));
  // })
  var noteHash = {67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 65: "a", 66: "b"};
  $(document).on('keydown', function(input) {
    var charNum = input.which;
    var note = noteHash[charNum]
    console.log(note);
    var audio = $("#" + note + "Audio")[0];
    audio.currentTime = 0;
    audio.play();
  })


  // $('.instrument button').keydown(function(){
  //     var $this = $(this);
  //     var note = $this.html()
  //         console.log(note);
  //     var audio = $("#" + note + "Audio")[0];
  //     audio.currentTime = 0;
  //     audio.play();
  //   });


  // $("body").keydown(function(event) {
  //   var noteArry = ["c", "d", "e", "f", "g", "a", "b"];
  //
  //   if (event.key == 'a') {
  //     var audio = $("#aAudio")[0];
  //     audio.currentTime = 0;
  //     audio.play();
  //   }
  // });



});
