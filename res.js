var x = window.location.href;
var y = x.substring(71, x.length-8);
document.write('<iframe 	width="400"  height="400"  frameborder="0" style="border:0"src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAUG1jgsBghqRkt8py6Cx_HW5VusvNkm2Q&q=' + y + '" allowfullscreen></iframe>');

var x = document.getElementById('submit').addEventListener('click',function(){
  console.log("its here");
      window.location = "index.html";
});
