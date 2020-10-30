function myFunction1() {
    document.getElementById("myText1").focus();
    var x = document.getElementById("myText1").value;
    find(x);
    window.getSelection().anchorNode.parentElement.parentElement.parentElement.parentElement.scrollIntoView({
        block: "center"
    });
    window.getSelection().removeAllRanges();
}

function TestEnter(event) {
    if (window.event.keyCode == 13) {
        myFunction1();
    }
}