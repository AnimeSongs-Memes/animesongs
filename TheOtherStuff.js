function setClipboard(value) {
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

/*Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})*/


$(document).ready(function(){
   $('video').bind('contextmenu',function() { return false; });
   $('img').bind('contextmenu',function() { return false; });
});

//For Firefox we have to handle it in JavaScript 
var vids = $("video"); 
$.each(vids, function(){
       this.controls = false; 
}); 
//Loop though all Video tags and set Controls as false

$("video").click(function(e) {

   if (e.ctrlKey && e.shiftKey) {
   Element.prototype.documentOffsetTop = function () {
    return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
};

var top = this.documentOffsetTop() - ( window.innerHeight / 5.3 );
window.scrollTo( 0, top );
//this.scrollIntoView();
return;
   }

// Holding CTRL
     if (e.ctrlKey) {
	 if (this.requestFullscreen) {
    this.requestFullscreen();
  } else if (this.mozRequestFullScreen) { /* Firefox */
    this.mozRequestFullScreen();
  } else if (this.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    this.webkitRequestFullscreen();
  } else if (this.msRequestFullscreen) { /* IE/Edge */
    this.msRequestFullscreen();
  }
	  return;
   }



//Holding ALT
if (e.altKey) {
  if (this.paused) {
    this.play();

	var arrayOfElements=document.getElementsByClassName('FullscreenBtn');
var lengthOfArray=arrayOfElements.length;

for (var i=0; i<lengthOfArray;i++){
    arrayOfElements[i].style.display='inline';
	}
	return;
  } else {

	this.pause();
    

		var arrayOfElements=document.getElementsByClassName('FullscreenBtn');
var lengthOfArray=arrayOfElements.length;

for (var i=0; i<lengthOfArray;i++){
    arrayOfElements[i].style.display='none';
	}
	return;
  }
}

if (e.shiftKey) {
this.load();
return;
}

  //console.log(this); 
  if (this.paused) {
  vids.load();
    this.play();
	// Display fullscreen button
	var arrayOfElements=document.getElementsByClassName('FullscreenBtn');
var lengthOfArray=arrayOfElements.length;

for (var i=0; i<lengthOfArray;i++){
    arrayOfElements[i].style.display='inline';
}
  } else {
	//this.pause();
	this.load();
    
	// Hide fullscreen button
		var arrayOfElements=document.getElementsByClassName('FullscreenBtn');
var lengthOfArray=arrayOfElements.length;

for (var i=0; i<lengthOfArray;i++){
    arrayOfElements[i].style.display='none';
}
  }
}); 

function TestSearchHeight() {
var x = document.getElementById("myText1").offsetHeight;
document.getElementById('SearchBtn').style.height = x + "px";
}
