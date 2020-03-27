$(function(){
// Document is ready
  var audio = document.getElementsByTagName("audio")[0];
  var vol = audio.volume;
  vol = 0.2;
  audio.volume=vol;
  $("#nav-placeholder").load("nav.html").delegate("#sugoi","mouseenter",function(){
    console.log(vol);
    audio.play();
  });
  // $("#sugoi").mouseenter(function() {
  //   audio.play();
  // });
});
