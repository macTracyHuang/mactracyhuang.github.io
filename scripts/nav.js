$(function(){
// Document is ready
  var audio = document.getElementsByTagName("audio")[0];
  audio.volume=0.1;
  $("#nav-placeholder").load("nav.html").delegate("#sugoi","mouseenter",function(){
    audio.play();
  });
  // $("#sugoi").mouseenter(function() {
  //   audio.play();
  // });
});
