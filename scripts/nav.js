$(function(){
// Document is ready
  var audio = document.getElementsByTagName("audio")[0];
  $("#nav-placeholder").load("nav.html").delegate("#sugoi","hover",function(){
    audio.volume = 0.2;
    audio.play();
  });
  // $("#sugoi").mouseenter(function() {
  //   audio.play();
  // });
});
