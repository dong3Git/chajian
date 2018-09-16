setFontSize();
window.onresize = function() {
    setFontSize()
}
function setFontSize() {
    var a = document.getElementsByTagName("html")[0];
    var b = window.innerWidth;
    var c = 100 / 640 * b;
    a.style.fontSize = c + "px"
}