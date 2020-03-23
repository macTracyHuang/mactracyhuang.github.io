$(function(){
  $(".toast").toast({
    autohide:false});
    $('#toast_1').toast('show');
    setTimeout(function() {
      $('#toast_2').toast('show');
    }, (1 * 1000));
  });
