function myFunction1() {
  var x = document.getElementById("myText1").value;
  find(x);
}

function TestEnter(event) {
   if (window.event.keyCode == 13) {
myFunction1();
   }
}
