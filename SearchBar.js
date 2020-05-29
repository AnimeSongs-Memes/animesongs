function myFunction1() {
  var x = document.getElementById("myText1").value;
  find(x);
   if (window.getSelection) {window.getSelection().removeAllRanges();}
 else if (document.selection) {document.selection.empty();}

}

function TestEnter(event) {
   if (window.event.keyCode == 13) {
myFunction1();
   }
}
