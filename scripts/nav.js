$(function(){
// Document is ready
  var audio = document.getElementsByTagName("audio")[0];
  alert(audio.value);
  $("#nav-placeholder").load("nav.html");
  $("#sugoi").mouseenter(function() {
    audio.play();
  });
});
