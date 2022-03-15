var emotion;
var images = [
  "url('./outputassets/meh.gif')", 
  "url('./outputassets/sad.gif')", 
  "url('./outputassets/happy.gif')", 
  "url('./outputassets/angry.gif')", 
  "url('https://media2.giphy.com/media/gklkvaeJeQz7KR0F8Z/giphy.gif?cid=790b76111858a33362bfefe905a4ee20df52ddc220ec0e95&rid=giphy.gif&ct=g')", 
  "url('./outputassets/tired.gif')", 
  "url('./outputassets/relaxed.gif')", 
];

var image_src;
var messages = [
  "valid. life can be pretty overwhelming sometimes, it's easy to numb ourselves.", 
  "take a moment to be gentle with yourself. there's not much I can do but to sit with you in your sadness. I affirm it and promise this feeling will pass.",
  "must be nice", 
  "YOU ARE RIGHT TO BE MAD IM LITERALLY PISSED FOR YOU", 
  "take a moment to breathe with me.",
  "go nap... everything else can wait",
  "as you should."
];

$("#emotions").change(function() {
  emotion = $("#emotions").val();
  console.log(emotion);
  $(".message").html(messages[emotion]);
})


$("#emotions").change(function(){
  emotion = $("#emotions").val();
  image_src = images[emotion];
  console.log(emotion);
  console.log(image_src);
  $("html").css("background-image", image_src);
  $(".message").html(messages[emotion]);
})


