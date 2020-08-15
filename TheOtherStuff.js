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


function TestSearchHeight() {
var x = document.getElementById("myText1").offsetHeight;
document.getElementById('SearchBtn').style.height = x + "px";
}
